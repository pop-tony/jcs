export const allProducts = [
  {
    id: 1,
    name: "Blush Satin Midi Dress",
    price: 420,
    salePrice: 349,
    category: "Dresses",
    tag: "Bestseller",
    new: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Blush", hex: "#E8B4B8" },
      { name: "Black", hex: "#000000" },
      { name: "Emerald", hex: "#2D5F3F" }
    ],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800"
    ],
    description: "Luxe satin midi with a flattering wrap silhouette. Perfect for dinner dates or weddings.",
    details: [
      "100% Premium Satin",
      "Wrap front with tie waist",
      "Hidden side zip",
      "Dry clean only"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["new", "trending", "bestseller"]
  },
  {
    id: 2,
    name: "Power Blazer Set",
    price: 580,
    salePrice: null,
    category: "Sets",
    tag: "New In",
    new: true,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Plum", hex: "#9F2B68" },
      { name: "Cream", hex: "#F5F5DC" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800"
    ],
    description: "Command the room. Tailored blazer + high-waist trousers in our signature plum.",
    details: [
      "Structured shoulder pads",
      "Lined blazer & trousers",
      "Side pockets",
      "Dry clean recommended"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: true,
    tags: ["new", "trending"]
  },
  {
    id: 3,
    name: "Silk Cami Top",
    price: 180,
    salePrice: 145,
    category: "Tops",
    tag: "Sale",
    new: false,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Black", hex: "#000000" },
      { name: "Dusty Rose", hex: "#DC9D9D" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    description: "Elevated essential. 100% mulberry silk with adjustable straps.",
    details: [
      "22 Momme Mulberry Silk",
      "Adjustable straps",
      "Bias cut for perfect drape",
      "Hand wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["trending", "sale"]
  },
  {
    id: 4,
    name: "Wide Leg Palazzo Pants",
    price: 320,
    salePrice: null,
    category: "Bottoms",
    tag: null,
    new: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#F5DC" },
      { name: "Black", hex: "#000000" },
      { name: "Camel", hex: "#C19A6B" }
    ],
    images: [
      "https://images.unsplash.com/photo-1506629905607-c52b1e4f9c7e?w=800"
    ],
    description: "Flow with every step. High-waisted palazzo pants that elongate and flatter.",
    details: [
      "Lightweight crepe fabric",
      "Elastic back waistband",
      "Side seam pockets",
      "Machine wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["trending"]
  },
  {
    id: 5,
    name: "Statement Gold Hoops",
    price: 95,
    salePrice: 75,
    category: "Accessories",
    tag: "Sale",
    new: false,
    sizes: [],
    colors: [
      { name: "Gold", hex: "#D4AF37" }
    ],
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
    ],
    description: "Chunky 18k gold-plated hoops. Tarnish-resistant and hypoallergenic.",
    details: [
      "18k Gold Plated",
      "45mm diameter",
      "Hypoallergenic",
      "Comes with MIZ J pouch"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: true,
    tags: ["sale"]
  },
  {
    id: 6,
    name: "Strappy Block Heels",
    price: 285,
    salePrice: null,
    category: "Shoes",
    tag: "New In",
    new: true,
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: [
      { name: "Nude", hex: "#E3BC9A" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800"
    ],
    description: "Walk all day, dance all night. 3-inch block heel with padded sole.",
    details: [
      "Genuine leather",
      "3-inch block heel",
      "Padded insole",
      "Ankle strap with buckle"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: true,
    tags: ["new"]
  },

  {
    id: 7,
    name: "Off-Shoulder Bodycon Dress",
    price: 385,
    salePrice: 299,
    category: "Dresses",
    tag: "Hot Pick",
    new: true,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Red", hex: "#C41E3A" },
      { name: "Black", hex: "#000000" },
      { name: "Royal Blue", hex: "#4169E1" }
    ],
    images: [
      "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=800",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800"
    ],
    description: "Curve-hugging off-shoulder midi. Your date night secret weapon.",
    details: [
      "Double-layer stretch fabric",
      "Off-shoulder neckline",
      "Midi length with side slit",
      "Hand wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["new", "trending", "sale"]
  },
  {
    id: 8,
    name: "Puff Sleeve Organza Top",
    price: 220,
    salePrice: null,
    category: "Tops",
    tag: "New In",
    new: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Lavender", hex: "#E6E6FA" }
    ],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
      "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800"
    ],
    description: "Romantic puff sleeves meet structured organza. Tuck it or crop it.",
    details: [
      "Organza fabric with lining",
      "Statement puff sleeves",
      "Back button closure",
      "Dry clean only"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: true,
    tags: ["new", "trending"]
  },
  {
    id: 9,
    name: "High-Waist Cargo Pants",
    price: 295,
    salePrice: 245,
    category: "Bottoms",
    tag: "Sale",
    new: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Olive", hex: "#556B2F" },
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1509551386488-5c0d0a4f97c4?w=800"
    ],
    description: "Utility meets elegance. Structured cargo with a feminine silhouette.",
    details: [
      "Cotton-twill blend",
      "6 functional pockets",
      "Belt loops + removable belt",
      "Machine wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["sale", "trending"]
  },
  {
    id: 10,
    name: "Ribbed Knit Co-Ord Set",
    price: 450,
    salePrice: null,
    category: "Sets",
    tag: "Luxe",
    new: false,
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Mocha", hex: "#967969" },
      { name: "Grey", hex: "#808080" },
      { name: "Forest", hex: "#228B22" }
    ],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    description: "Lounge set that looks like you tried. Crop top + wide leg pants.",
    details: [
      "Heavyweight ribbed knit",
      "Cropped top with long sleeves",
      "High-waist wide leg pants",
      "Machine wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: true,
    tags: ["trending"]
  },
  {
    id: 11,
    name: "Mini Shoulder Bag",
    price: 165,
    salePrice: 125,
    category: "Accessories",
    tag: "Sale",
    new: false,
    sizes: [],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Bone", hex: "#E3DAC9" },
      { name: "Plum", hex: "#9F2B68" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800"
    ],
    description: "90s-inspired mini bag with gold hardware. Fits your phone + lip gloss.",
    details: [
      "Vegan leather",
      "Magnetic closure",
      "Adjustable strap",
      "Interior card slot"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["sale", "trending"]
  },
  {
    id: 12,
    name: "Pointed Toe Mules",
    price: 265,
    salePrice: null,
    category: "Shoes",
    tag: null,
    new: false,
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Nude", hex: "#E3BC9A" },
      { name: "White", hex: "#FFFFFF" }
    ],
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800"
    ],
    description: "Sleek pointed mules with a 2.5-inch heel. Office to after-hours.",
    details: [
      "Genuine leather upper",
      "2.5-inch heel",
      "Cushioned footbed",
      "Slip-on style"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: true,
    tags: []
  },
  {
    id: 13,
    name: "Wrap Maxi Dress",
    price: 495,
    salePrice: 425,
    category: "Dresses",
    tag: "Sale",
    new: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Floral Pink", hex: "#FFB6C1" },
      { name: "Navy", hex: "#000080" },
      { name: "Emerald", hex: "#50C878" }
    ],
    images: [
      "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=800",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800"
    ],
    description: "Effortless wrap maxi that works for brunch or beach weddings.",
    details: [
      "Lightweight chiffon",
      "True wrap style with tie",
      "Side slit for movement",
      "Hand wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["sale"]
  },
  {
    id: 14,
    name: "Cropped Denim Jacket",
    price: 340,
    salePrice: null,
    category: "Tops",
    tag: null,
    new: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Light Wash", hex: "#B8D4E3" },
      { name: "Dark Wash", hex: "#2C3E50" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800"
    ],
    description: "The perfect cropped denim. Structured but soft, with raw hem detail.",
    details: [
      "100% Cotton denim",
      "Cropped length",
      "Raw hem",
      "Machine wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: true,
    tags: ["trending"]
  },
  {
    id: 15,
    name: "Pleated Midi Skirt",
    price: 275,
    salePrice: 225,
    category: "Bottoms",
    tag: "Sale",
    new: false,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Black", hex: "#000000" },
      { name: "Sage", hex: "#9CAF88" }
    ],
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800"
    ],
    description: "Timeless pleats with modern movement. Elastic waist for comfort.",
    details: [
      "Accordion pleats",
      "Elastic waistband",
      "Midi length",
      "Dry clean recommended"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["sale"]
  },
  {
    id: 16,
    name: "Layered Gold Necklace Set",
    price: 120,
    salePrice: null,
    category: "Accessories",
    tag: "New In",
    new: true,
    sizes: [],
    colors: [
      { name: "Gold", hex: "#D4AF37" }
    ],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800"
    ],
    description: "Set of 3 delicate chains. Layer them or wear solo.",
    details: [
      "18k Gold plated",
      "Adjustable 16-18 inches",
      "Hypoallergenic",
      "Comes in MIZ J box"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["new"]
  },
  {
    id: 17,
    name: "Cut-Out Knit Dress",
    price: 365,
    salePrice: null,
    category: "Dresses",
    tag: "New In",
    new: true,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Cream", hex: "#F5DC" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800"
    ],
    description: "Sweater dress with subtle waist cut-outs. Sexy but sophisticated.",
    details: [
      "Soft knit fabric",
      "Side cut-out details",
      "Long sleeves",
      "Hand wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["new", "trending"]
  },
  {
    id: 18,
    name: "Oversized Linen Shirt",
    price: 195,
    salePrice: 165,
    category: "Tops",
    tag: "Sale",
    new: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "Sage", hex: "#9CAF88" }
    ],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    description: "Breathable linen in a relaxed fit. Your new weekend uniform.",
    details: [
      "100% Linen",
      "Oversized fit",
      "Mother of pearl buttons",
      "Machine wash cold"
    ],
    seller: "MIZ J BOUTIQUE",
    featured: false,
    tags: ["sale"]
  }
];
