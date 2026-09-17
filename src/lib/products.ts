export const products = [
  { name: "Apple", icon: "/Icon_Apple.png", category: "Orchard fruit", description: "Crisp, juicy apples bring a balance of sweetness and brightness to everyday meals. Enjoy them fresh or make them part of your next bake.", uses: "Fresh snacks, salads & baking", character: "Crisp & juicy" },
  { name: "Blueberry", icon: "/blueberry.png", category: "Berries", description: "Small berries with a gently sweet, tangy flavor. Blueberries are an easy addition to breakfast bowls, pancakes, and simple desserts.", uses: "Breakfast bowls, pancakes & desserts", character: "Sweet & tangy" },
  { name: "Strawberry", icon: "/icon-Strawberry.png", category: "Berries", description: "Bright red strawberries with a fragrant, sweet-tart flavor. Serve them fresh, pair them with yogurt, or use them in a seasonal dessert.", uses: "Fresh snacks, yogurt & desserts", character: "Fragrant & sweet-tart" },
  { name: "Eggplant", icon: "/eggplant.png", category: "Vegetables", description: "A versatile vegetable with a mild flavor and a tender texture when cooked. Eggplant works beautifully in roasted dishes, stews, and grilled vegetable plates.", uses: "Roasting, grilling & stews", character: "Mild & versatile" },
  { name: "Cabbage", icon: "/cabbage.png", category: "Leafy vegetables", description: "Layered leaves with a satisfying crunch and a mild, earthy flavor. Slice cabbage into a slaw or cook it into a comforting soup or stir-fry.", uses: "Slaws, soups & stir-fries", character: "Crisp & earthy" },
  { name: "Carrot", icon: "/carrot.png", category: "Root vegetables", description: "Naturally sweet carrots add color and crunch to the kitchen. Enjoy them raw, roast them until tender, or add them to soups and everyday dishes.", uses: "Raw snacks, roasting & soups", character: "Sweet & crunchy" },
] as const;

export type ProductName = (typeof products)[number]["name"];
