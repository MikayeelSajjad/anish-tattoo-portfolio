export interface TattooItem {
  id: string;
  title: string;
  category: "Fine Line" | "Geometric" | "Surrealism" | "Dark Art";
  placement: string;
  duration: string;
  needle: string;
  description: string;
  image: string;
  dimensions: string;
  aspect: "tall" | "wide" | "square";
  year: string;
}

export const TATTOO_PORTFOLIO: TattooItem[] = [
  {
    id: "01",
    title: "Ouroboros & Sacred Botany",
    category: "Fine Line",
    placement: "Inner Forearm",
    duration: "4.5 Hours",
    needle: "Single Needle 03RL Bugpin",
    description: "Ultra-fine single-needle continuous snake entwined with botanical flora, micro-stippling shading.",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop",
    dimensions: "18cm x 7cm",
    aspect: "tall",
    year: "2024",
  },
  {
    id: "02",
    title: "The Astral Eye of Providence",
    category: "Surrealism",
    placement: "Sternum / Upper Torso",
    duration: "6 Hours",
    needle: "05RL & 07CM Curved Magnum",
    description: "Surrealist floating eye with warped celestial geometry, gradient shadow transitions and negative space.",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1200&auto=format&fit=crop",
    dimensions: "22cm x 15cm",
    aspect: "wide",
    year: "2024",
  },
  {
    id: "03",
    title: "Metatron Sacred Tessellation",
    category: "Geometric",
    placement: "Deltoid & Tricep Sleeve",
    duration: "7 Hours",
    needle: "07RL Tight & 03RL Dotwork",
    description: "Mathematical precision sacred geometry featuring interlocking dodecahedrons and calculated dot-matrix shading.",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop",
    dimensions: "Full Outer Arm",
    aspect: "square",
    year: "2024",
  },
  {
    id: "04",
    title: "Nocturnal Baphomet Relic",
    category: "Dark Art",
    placement: "Full Spine / Backpiece",
    duration: "9 Hours (2 Sessions)",
    needle: "09RL & 15M1 Heavy Black",
    description: "Occult dark-art centerpiece with deep obsidian blackwork, stipple gradient mist, and high-contrast bone textures.",
    image: "https://images.unsplash.com/photo-1590246814883-57833641b317?q=80&w=1200&auto=format&fit=crop",
    dimensions: "45cm x 28cm",
    aspect: "tall",
    year: "2023",
  },
  {
    id: "05",
    title: "Death's-Head Hawkmoth",
    category: "Fine Line",
    placement: "Nape of Neck & Trapezius",
    duration: "3.5 Hours",
    needle: "01RL Single Needle",
    description: "Micro-detailed skull moth with gossamer wing veins, velvet texture rendering, and surgical line weight control.",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200&auto=format&fit=crop",
    dimensions: "14cm x 10cm",
    aspect: "square",
    year: "2024",
  },
  {
    id: "06",
    title: "Cyber-Gothic Spinal Column",
    category: "Dark Art",
    placement: "Vertebral Column",
    duration: "8 Hours",
    needle: "05RL & 11M Blackwork",
    description: "Tactical biomechanical gothic vertebrae descending the spine with sharp glyphs and heavy contrast.",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1200&auto=format&fit=crop",
    dimensions: "52cm Spine Track",
    aspect: "tall",
    year: "2024",
  },
  {
    id: "07",
    title: "Temporal Distortion & Hourglass",
    category: "Surrealism",
    placement: "Outer Calf",
    duration: "5.5 Hours",
    needle: "03RL & 09CM Soft Blend",
    description: "Dali-inspired melted hourglass dripping into a pool of cosmic voids, layered hyper-detailed fluid dynamics.",
    image: "https://images.unsplash.com/photo-1565492349774-06180fcbfba4?q=80&w=1200&auto=format&fit=crop",
    dimensions: "20cm x 11cm",
    aspect: "tall",
    year: "2023",
  },
  {
    id: "08",
    title: "Fractal Orbit Cuff",
    category: "Geometric",
    placement: "Wrist to Forearm Cuff",
    duration: "4 Hours",
    needle: "05RL Constant Depth",
    description: "Precise concentric rings and Fibonacci spirals wrapping 360-degrees around the wrist without line distortion.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
    dimensions: "8cm Band (Wrap)",
    aspect: "square",
    year: "2024",
  },
  {
    id: "09",
    title: "Crow Skull & Obsidian Shards",
    category: "Dark Art",
    placement: "Ribcage",
    duration: "6 Hours",
    needle: "03RL & 07M1 Dynamic Grey",
    description: "Intense avian skeletal study with shattered volcanic glass facets and deep carbon shadow falloff.",
    image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1200&auto=format&fit=crop",
    dimensions: "24cm x 16cm",
    aspect: "wide",
    year: "2024",
  },
];

export const CATEGORIES = ["All", "Fine Line", "Geometric", "Surrealism", "Dark Art"] as const;
