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
    description: "Ultra-fine continuous single-needle serpent intertwined with botanical flora and micro-stippling.",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop",
    dimensions: "14cm x 6cm",
    aspect: "tall",
    year: "2024",
  },
  {
    id: "02",
    title: "The Astral Eye of Providence",
    category: "Surrealism",
    placement: "Forearm / Inner Arm",
    duration: "3.5 Hours",
    needle: "03RL & 07CM Curved Magnum",
    description: "Surrealist floating eye with warped celestial geometry, gradient shadow transitions and negative space.",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1000&auto=format&fit=crop",
    dimensions: "12cm x 9cm",
    aspect: "wide",
    year: "2024",
  },
  {
    id: "03",
    title: "Fibonacci Geometric Orbit",
    category: "Geometric",
    placement: "Forearm / Wrist",
    duration: "3 Hours",
    needle: "03RL Single Pass & Dotwork",
    description: "Mathematical golden spiral concentric geometry with clean micro-dot gradients and sharp line-weight control.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop",
    dimensions: "10cm x 10cm",
    aspect: "square",
    year: "2024",
  },
  {
    id: "04",
    title: "Dark Mystic Raven Shard",
    category: "Dark Art",
    placement: "Upper Forearm / Bicep",
    duration: "3.5 Hours",
    needle: "03RL & 07M1 Dynamic Grey",
    description: "Occult dark-art study with avian skull features, volcanic obsidian shading, and sharp negative cuts.",
    image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1000&auto=format&fit=crop",
    dimensions: "13cm x 7cm",
    aspect: "tall",
    year: "2024",
  },
  {
    id: "05",
    title: "Cyber-Sigilism Glyph Band",
    category: "Fine Line",
    placement: "Wrist / Forearm Band",
    duration: "2.5 Hours",
    needle: "01RL Precision Single Needle",
    description: "Minimalist cyber-gothic fine linework flowing organically around the wrist with surgical line consistency.",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1000&auto=format&fit=crop",
    dimensions: "6cm Band",
    aspect: "square",
    year: "2024",
  },
  {
    id: "06",
    title: "Sacred Geometric Prism",
    category: "Geometric",
    placement: "Outer Bicep / Tricep",
    duration: "3.5 Hours",
    needle: "03RL Precision Constant Depth",
    description: "Layered isometric wireframe geometry, crisp sacred polygons, and balanced negative skin exposure.",
    image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=1000&auto=format&fit=crop",
    dimensions: "11cm x 9cm",
    aspect: "wide",
    year: "2024",
  },
  {
    id: "07",
    title: "Cosmic Surrealist Hourglass",
    category: "Surrealism",
    placement: "Inner Arm / Calf",
    duration: "3.5 Hours",
    needle: "03RL & 05RL Soft Blend",
    description: "Distorted melting timepiece dripping into cosmic void waves with smooth charcoal transitions.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    dimensions: "12cm x 7cm",
    aspect: "tall",
    year: "2024",
  },
  {
    id: "08",
    title: "Obsidian Dagger & Dark Flora",
    category: "Dark Art",
    placement: "Forearm / Shin",
    duration: "3.5 Hours",
    needle: "03RL & 07CM Carbon Black",
    description: "Sleek dark-art ceremonial blade framed with thorns and deep obsidian contrast gradients.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop",
    dimensions: "15cm x 6cm",
    aspect: "wide",
    year: "2024",
  },
];

export const CATEGORIES = ["All", "Fine Line", "Geometric", "Surrealism", "Dark Art"] as const;
