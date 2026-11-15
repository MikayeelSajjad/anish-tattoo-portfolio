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
    duration: "3.5 Hours",
    needle: "Single Needle 03RL Bugpin",
    description: "Ultra-fine single-needle continuous serpent entwined with botanical flora, micro-stippling shading.",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop",
    dimensions: "14cm x 6cm",
    aspect: "tall",
    year: "2024",
  },
  {
    id: "02",
    title: "The Astral Eye of Providence",
    category: "Surrealism",
    placement: "Forearm / Bicep",
    duration: "4 Hours",
    needle: "03RL & 07CM Curved Magnum",
    description: "Surrealist floating eye with warped celestial geometry, gradient shadow transitions and negative space.",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1200&auto=format&fit=crop",
    dimensions: "12cm x 9cm",
    aspect: "wide",
    year: "2024",
  },
  {
    id: "03",
    title: "Sacred Polyhedral Mandala",
    category: "Geometric",
    placement: "Inner Forearm",
    duration: "3.5 Hours",
    needle: "03RL Single Pass & Dotwork",
    description: "Precise sacred geometric mandala with interlocking facets, calculated dot-matrix shading, and clean symmetry.",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop",
    dimensions: "11cm x 11cm",
    aspect: "square",
    year: "2024",
  },
  {
    id: "04",
    title: "Nocturnal Crescent & Raven",
    category: "Dark Art",
    placement: "Upper Arm / Deltoid",
    duration: "4 Hours",
    needle: "03RL & 07CM Soft Shade",
    description: "Occult dark-art study featuring deep obsidian blackwork, stipple gradient mist, and fine avian skeletal details.",
    image: "https://images.unsplash.com/photo-1590246814883-57833641b317?q=80&w=1200&auto=format&fit=crop",
    dimensions: "15cm x 8cm",
    aspect: "tall",
    year: "2024",
  },
  {
    id: "05",
    title: "Death's-Head Hawkmoth",
    category: "Fine Line",
    placement: "Nape of Neck / Collar",
    duration: "3 Hours",
    needle: "01RL Single Needle",
    description: "Micro-detailed skull moth with gossamer wing veins, velvet texture rendering, and surgical line weight control.",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200&auto=format&fit=crop",
    dimensions: "10cm x 7cm",
    aspect: "square",
    year: "2024",
  },
  {
    id: "06",
    title: "Cyber-Sigilism Vertebra Mark",
    category: "Dark Art",
    placement: "Shoulder Blade / Clavicle",
    duration: "3.5 Hours",
    needle: "03RL Precision & 05RL Outline",
    description: "Sharp organic cyber-gothic glyphs tailored to fit along the natural curve of the shoulder and clavicle.",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1200&auto=format&fit=crop",
    dimensions: "14cm x 6cm",
    aspect: "wide",
    year: "2024",
  },
  {
    id: "07",
    title: "Temporal Distortion & Hourglass",
    category: "Surrealism",
    placement: "Outer Calf / Arm",
    duration: "4 Hours",
    needle: "03RL & 07CM Soft Blend",
    description: "Surrealist melted hourglass dripping into cosmic void currents, with layered hyper-detailed fluid transitions.",
    image: "https://images.unsplash.com/photo-1565492349774-06180fcbfba4?q=80&w=1200&auto=format&fit=crop",
    dimensions: "13cm x 7cm",
    aspect: "tall",
    year: "2024",
  },
  {
    id: "08",
    title: "Fractal Orbit Wrist Cuff",
    category: "Geometric",
    placement: "Wrist to Forearm Cuff",
    duration: "3 Hours",
    needle: "03RL & 05RL Constant Depth",
    description: "Precise concentric rings and Fibonacci spirals wrapping neatly around the forearm with surgical consistency.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
    dimensions: "7cm Cuff Band",
    aspect: "square",
    year: "2024",
  },
  {
    id: "09",
    title: "Obsidian Shards & Flora",
    category: "Dark Art",
    placement: "Forearm / Tricep",
    duration: "3.5 Hours",
    needle: "03RL & 07M1 Dynamic Grey",
    description: "Volcanic crystal facets blended with dark organic thorn flora and delicate stipple shadow falloff.",
    image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1200&auto=format&fit=crop",
    dimensions: "14cm x 8cm",
    aspect: "wide",
    year: "2024",
  },
];

export const CATEGORIES = ["All", "Fine Line", "Geometric", "Surrealism", "Dark Art"] as const;
