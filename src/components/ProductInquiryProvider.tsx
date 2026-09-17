"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import type { ProductName } from "@/lib/products";

const ProductInquiryContext = createContext<{
  product: ProductName | null;
  setProduct: (product: ProductName | null) => void;
  project: string | null;
  setProject: (project: string | null) => void;
} | null>(null);

export function useProductInquiry() {
  const context = useContext(ProductInquiryContext);
  if (!context) throw new Error("Product inquiries require ProductInquiryProvider");
  return context;
}

export default function ProductInquiryProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<ProductName | null>(null);
  const [project, setProject] = useState<string | null>(null);
  return <ProductInquiryContext.Provider value={{ product, setProduct, project, setProject }}>{children}</ProductInquiryContext.Provider>;
}
