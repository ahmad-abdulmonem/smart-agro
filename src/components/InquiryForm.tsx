"use client";
import { FormEvent, useState } from "react";
import { useProductInquiry } from "@/components/ProductInquiryProvider";
export default function InquiryForm({ kind }: { kind: "contact" | "newsletter" }) {
  const { product, setProduct, project, setProject } = useProductInquiry();
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fields = kind === "contact"
    ? [{ name: "name", label: "Your name", type: "text", required: true, max: 100 }, { name: "phone", label: "Phone number (optional)", type: "tel", required: false, max: 40 }, { name: "email", label: "Email address", type: "email", required: true, max: 254 }, { name: "message", label: "Your message", type: "textarea", required: true, max: 5000 }]
    : [{ name: "email", label: "Email address", type: "email", required: true, max: 254 }];
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const nextErrors: Record<string, string> = {};
    for (const field of fields) {
      const value = String(values[field.name] ?? "").trim();
      if (field.required && !value) nextErrors[field.name] = `Please enter your ${field.name === "email" ? "email address" : field.name}.`;
      else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) nextErrors[field.name] = "Enter a valid email address, such as name@example.com.";
    }
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length) { (form.elements.namedItem(Object.keys(nextErrors)[0]) as HTMLElement)?.focus(); return; }
    setStatus(kind === "contact" ? "Preview complete. Your message looks ready, but nothing has been sent." : "Preview complete. Your email is valid, but no subscription has been created.");
  }
  return <form onSubmit={submit} noValidate aria-describedby={`${kind}-preview`} className="flex min-w-0 flex-col gap-5" onChange={() => setStatus("")}>
    <p id={`${kind}-preview`} className="text-sm leading-relaxed text-white/75">Manager preview — {kind === "contact" ? "sample products and project concepts; messages are not sent" : "subscriptions are not saved"}.</p>
    {kind === "contact" && product && <div className="flex items-center justify-between gap-4 rounded-sm border border-[#F7C35F]/40 bg-[#263C28] px-5 py-3">
      <div><p className="text-xs text-white/65">Product inquiry</p><p className="mt-1 font-bold text-[#F7C35F]">{product}</p></div>
      <input type="hidden" name="product" value={product} />
      <button type="button" aria-label={`Remove ${product} from inquiry`} className="min-h-11 px-2 text-sm underline underline-offset-4" onClick={() => { setProduct(null); setStatus(""); document.getElementById("contact-message")?.focus({ preventScroll: true }); }}>Remove</button>
    </div>}
    {kind === "contact" && project && <div className="flex items-center justify-between gap-4 rounded-sm border border-[#F7C35F]/40 bg-[#263C28] px-5 py-3">
      <div><p className="text-xs text-white/65">Project inquiry</p><p className="mt-1 font-bold text-[#F7C35F]">{project}</p></div>
      <input type="hidden" name="project" value={project} />
      <button type="button" aria-label={`Remove ${project} from inquiry`} className="min-h-11 px-2 text-sm underline underline-offset-4" onClick={() => { setProject(null); setStatus(""); document.getElementById("contact-message")?.focus({ preventScroll: true }); }}>Remove</button>
    </div>}
    {fields.map((field) => {
      const id = `${kind}-${field.name}`;
      const props = { id, name: field.name, required: field.required, maxLength: field.max, "aria-invalid": Boolean(errors[field.name]), "aria-describedby": errors[field.name] ? `${id}-error` : undefined, className: "w-full rounded-sm border border-white/25 bg-[#263C28] px-5 py-4 text-white" };
      return <div key={field.name}><label htmlFor={id} className="mb-2 block text-sm font-bold">{field.label}</label>
        {field.type === "textarea" ? <textarea {...props} rows={6} className={`${props.className} min-h-40 resize-none`} onInput={(event) => { event.currentTarget.style.height = "auto"; event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`; }} /> : <input {...props} type={field.type} autoComplete={field.name === "phone" ? "tel" : field.name} />}
        {errors[field.name] && <p id={`${id}-error`} className="mt-2 text-sm text-[#F7C35F]">{errors[field.name]}</p>}
      </div>;
    })}
    <button type="submit" className="min-h-14 min-w-44 self-start rounded-sm bg-[#F7C35F] px-8 py-4 font-bold text-[#263C28] hover:bg-[#f8cf7c]">{kind === "contact" ? "Send message" : "Subscribe"}</button>
    <p role="status" aria-live="polite" className="min-h-6 text-sm leading-relaxed text-[#F7C35F]">{status}</p>
  </form>;
}
