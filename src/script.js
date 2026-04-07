const brandName = "CodeAstraHub BookStore";
const storageKeys = {
  wishlist: "codeastrahub-bookstore-wishlist",
  cart: "codeastrahub-bookstore-cart"
};

const checkoutSessionDuration = 10 * 60;
const shelfSpeed = 46;

const books = [
  /* ─── TECH & PROGRAMMING ─── */
  {
    id: "html-css",
    category: "Tech & Programming",
    tag: "Frontend Core",
    title: "HTML and CSS",
    author: "Olivia Carter",
    summary: "Semantic markup, responsive layout systems, accessibility, and production-ready styling patterns.",
    description: "A polished guide to semantic HTML, resilient CSS architecture, and frontend delivery standards that keep interfaces clean, scalable, and accessible.",
    length: "320 pages",
    format: "Hardcover",
    edition: "2024 Edition",
    price: 34,
    rating: 4.9,
    published: 202404,
    highlights: ["Semantic HTML patterns for maintainable product interfaces","Responsive grid, flex, and spacing systems that scale cleanly","Accessibility and component styling rules teams can ship with confidence"],
    chapters: ["Semantic Foundations","Modern Layout Systems","Responsive Components","Accessible Interaction Patterns","Shipping a Design System"],
    related: ["javascript-patterns","react-systems","tailwind-design-systems"],
    accent: "#0f766e",
    surface: "linear-gradient(180deg, #ecfeff 0%, #d2f4f0 48%, #85d5cc 100%)",
    motif: "grid"
  },
  {
    id: "javascript-patterns",
    category: "Tech & Programming",
    tag: "Application Logic",
    title: "JavaScript Patterns",
    author: "Mason Reed",
    summary: "Modern JavaScript architecture, browser APIs, async flows, and maintainable application logic.",
    description: "A focused handbook for developers building browser and product logic with patterns that remain readable under real product complexity.",
    length: "298 pages",
    format: "Collector Edition",
    edition: "2025 Release",
    price: 39,
    rating: 4.8,
    published: 202503,
    highlights: ["Language patterns for reusable and scalable application logic","Modules, async workflows, and browser behavior explained clearly","Debugging and state-organization habits for production teams"],
    chapters: ["Language Building Blocks","Modules and Composition","Async Flows and APIs","State Without Chaos","Debugging in Production"],
    related: ["html-css","react-systems","typescript-in-action"],
    accent: "#f97316",
    surface: "linear-gradient(180deg, #fff7ed 0%, #fed7aa 46%, #fb923c 100%)",
    motif: "wave"
  },
  {
    id: "react-systems",
    category: "Tech & Programming",
    tag: "UI Architecture",
    title: "React Systems",
    author: "Priya Nair",
    summary: "Reusable components, state flows, app structure, and product-grade React system design.",
    description: "A premium reference for engineers building long-lived React products with stable architecture, predictable state, and thoughtful component systems.",
    length: "304 pages",
    format: "Clothbound",
    edition: "2026 Edition",
    price: 42,
    rating: 4.9,
    published: 202601,
    highlights: ["Component architecture for real product teams","Routing, state, and data composition that stay predictable","Performance habits for premium customer-facing interfaces"],
    chapters: ["Component Boundaries","State and Data Flow","Routing Real Applications","Performance Under Growth","Shipping a UI Platform"],
    related: ["typescript-in-action","nextjs-production","tailwind-design-systems"],
    accent: "#2563eb",
    surface: "linear-gradient(180deg, #eff6ff 0%, #c7dcff 46%, #60a5fa 100%)",
    motif: "circuit"
  },
  {
    id: "typescript-in-action",
    category: "Tech & Programming",
    tag: "Typed Frontend",
    title: "TypeScript in Action",
    author: "Lena Hoffman",
    summary: "Strong typing, reusable type systems, and scalable architecture for growing frontend teams.",
    description: "A practical TypeScript guide covering strong contracts, safe refactoring, and the architecture habits that keep large interfaces maintainable.",
    length: "310 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 41,
    rating: 4.8,
    published: 202509,
    highlights: ["Type-safe architecture for large frontend codebases","Practical utility types, interfaces, and domain modeling","React and full-stack integration strategies"],
    chapters: ["Thinking in Types","Modeling UI Data","Safer APIs and Contracts","Refactoring Large Codebases","TypeScript with React"],
    related: ["react-systems","javascript-patterns","node-backend"],
    accent: "#1d4ed8",
    surface: "linear-gradient(180deg, #eff6ff 0%, #bfdbfe 48%, #60a5fa 100%)",
    motif: "grid"
  },
  {
    id: "node-backend",
    category: "Tech & Programming",
    tag: "Backend APIs",
    title: "Node.js Backend",
    author: "Victor Kane",
    summary: "APIs, queues, authentication, background jobs, and operational patterns for Node.js services.",
    description: "A backend architecture guide for teams building reliable Node.js services, API products, and internal platforms that need to scale without confusion.",
    length: "328 pages",
    format: "Collector Edition",
    edition: "2025 Release",
    price: 44,
    rating: 4.8,
    published: 202507,
    highlights: ["Service boundaries and API design for maintainable systems","Auth, queues, and job processing for production backends","Operational guardrails for stable deployments"],
    chapters: ["Structuring the Service","Authentication and Access","Queues and Background Jobs","Observability and Reliability","Scaling Runtime Operations"],
    related: ["system-design-handbook","git-devops-workflows","modern-web-development"],
    accent: "#16a34a",
    surface: "linear-gradient(180deg, #f0fdf4 0%, #bbf7d0 48%, #4ade80 100%)",
    motif: "circuit"
  },
  {
    id: "nextjs-production",
    category: "Tech & Programming",
    tag: "Framework Delivery",
    title: "Next.js Production",
    author: "Sara Kim",
    summary: "Rendering strategy, caching, routing, and deployment for high-performance Next.js applications.",
    description: "A product-first Next.js guide covering App Router patterns, rendering tradeoffs, caching, and deployment strategies for premium web experiences.",
    length: "292 pages",
    format: "Clothbound",
    edition: "2026 Edition",
    price: 43,
    rating: 4.9,
    published: 202602,
    highlights: ["App Router architecture in real product environments","Caching, data loading, and rendering tradeoffs explained clearly","Deployment patterns for resilient and fast experiences"],
    chapters: ["App Router Foundations","Rendering Tradeoffs","Caching and Data","Deploying at Scale","Observability for the Frontend Platform"],
    related: ["react-systems","modern-web-development","tailwind-design-systems"],
    accent: "#4338ca",
    surface: "linear-gradient(180deg, #eef2ff 0%, #c7d2fe 48%, #818cf8 100%)",
    motif: "arc"
  },
  {
    id: "system-design-handbook",
    category: "Tech & Programming",
    tag: "Architecture",
    title: "System Design Handbook",
    author: "Noah Sinclair",
    summary: "Scalability, tradeoffs, reliability, and platform thinking for engineers designing larger systems.",
    description: "A practical guide to distributed systems, scaling decisions, and architecture reviews that helps engineers communicate tradeoffs clearly.",
    length: "344 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 48,
    rating: 4.9,
    published: 202508,
    highlights: ["Scalability patterns and tradeoff analysis","Failure modes, bottlenecks, and reliability planning","Architecture communication for interviews and real systems"],
    chapters: ["Framing System Requirements","Data and Consistency","Scaling Compute and Storage","Reliability and Failure Modes","Architecture Reviews"],
    related: ["node-backend","git-devops-workflows","modern-web-development"],
    accent: "#b45309",
    surface: "linear-gradient(180deg, #fffbeb 0%, #fde68a 48%, #fbbf24 100%)",
    motif: "wave"
  },
  {
    id: "git-devops-workflows",
    category: "Tech & Programming",
    tag: "Release Operations",
    title: "Git and DevOps Workflows",
    author: "Aria Mitchell",
    summary: "Version control, CI/CD, deployment safety, and repeatable release workflows for engineering teams.",
    description: "A practical DevOps title for teams that want cleaner Git discipline, faster delivery pipelines, and safer releases across products and services.",
    length: "276 pages",
    format: "Signed Copy",
    edition: "2024 Edition",
    price: 37,
    rating: 4.7,
    published: 202406,
    highlights: ["Collaborative Git strategy for engineering teams","CI/CD pipelines that reduce release friction","Release guardrails and deployment confidence"],
    chapters: ["Git Discipline","Branching for Teams","CI/CD Pipelines","Deployment Safety Nets","Operational Maturity"],
    related: ["node-backend","system-design-handbook","modern-web-development"],
    accent: "#7c3aed",
    surface: "linear-gradient(180deg, #faf5ff 0%, #ddd6fe 48%, #a78bfa 100%)",
    motif: "circuit"
  },
  {
    id: "tailwind-design-systems",
    category: "Tech & Programming",
    tag: "Design Systems",
    title: "Tailwind and Design Systems",
    author: "Avery Collins",
    summary: "Design tokens, utility-first workflows, and scalable UI systems for modern product teams.",
    description: "A premium guide to turning utility-first workflows into a disciplined design system that keeps UI quality high while delivery stays fast.",
    length: "286 pages",
    format: "Hardcover",
    edition: "2025 Release",
    price: 38,
    rating: 4.8,
    published: 202510,
    highlights: ["Design token strategy and reusable component foundations","Utility-first patterns without visual inconsistency","Frontend workflows that balance speed and craft"],
    chapters: ["Design Tokens That Last","Utility-First Without Chaos","Component APIs","Documentation and Team Adoption","Scaling the Visual Language"],
    related: ["html-css","react-systems","nextjs-production"],
    accent: "#0891b2",
    surface: "linear-gradient(180deg, #ecfeff 0%, #bae6fd 48%, #38bdf8 100%)",
    motif: "grid"
  },
  {
    id: "modern-web-development",
    category: "Tech & Programming",
    tag: "Full-Stack Delivery",
    title: "Modern Web Development",
    author: "Ethan Blake",
    summary: "Frontend foundations, tooling, deployment, and performance practices for modern web teams.",
    description: "A broad technical playbook that connects interface work, tooling, deployment, performance, and delivery into one practical web-development guide.",
    length: "336 pages",
    format: "Signed Copy",
    edition: "2024 Edition",
    price: 46,
    rating: 4.7,
    published: 202405,
    highlights: ["End-to-end workflow from UI build to production release","Performance and optimization priorities that matter","A practical map for teams shipping websites and apps"],
    chapters: ["Planning the Stack","Frontend Delivery","Backend and Integrations","Performance and Observability","Deploying with Confidence"],
    related: ["html-css","node-backend","nextjs-production"],
    accent: "#8b5cf6",
    surface: "linear-gradient(180deg, #faf5ff 0%, #e9d5ff 48%, #c084fc 100%)",
    motif: "arc"
  },

  /* ─── KIDS & CHILDREN ─── */
  {
    id: "jungle-adventures",
    category: "Kids & Children",
    tag: "Ages 4–8",
    title: "Jungle Adventures",
    author: "Emily Sun",
    summary: "A colorful journey through the rainforest with friendly animal guides and interactive puzzles.",
    description: "Join Miko the monkey and Kira the parrot on a vibrant adventure through the jungle canopy. Each chapter features beautiful illustrations, hidden-object games, and fun facts about rainforest animals that spark curiosity in young readers.",
    length: "48 pages",
    format: "Illustrated Hardcover",
    edition: "2025 Edition",
    price: 14,
    rating: 4.9,
    published: 202501,
    highlights: ["Full-color illustrations on every page","Interactive find-and-seek activities","Fun rainforest animal facts for early learners"],
    chapters: ["The Canopy Climb","River of Colors","Night Sounds","Hidden Waterfall","Jungle Friends Forever"],
    related: ["ocean-explorers","space-kids","fairy-tales-retold"],
    accent: "#22c55e",
    surface: "linear-gradient(180deg, #f0fdf4 0%, #bbf7d0 48%, #4ade80 100%)",
    motif: "wave"
  },
  {
    id: "ocean-explorers",
    category: "Kids & Children",
    tag: "Ages 4–8",
    title: "Ocean Explorers",
    author: "Leo Cruz",
    summary: "Dive beneath the waves with cute sea creatures in this underwater board book adventure.",
    description: "Follow Finn the dolphin and Shelly the turtle through coral reefs, deep trenches, and shipwrecks. Learn about marine life while enjoying pop-up style illustrations and interactive story prompts.",
    length: "40 pages",
    format: "Board Book",
    edition: "2025 Edition",
    price: 12,
    rating: 4.8,
    published: 202503,
    highlights: ["Tactile pages perfect for small hands","Marine biology basics through storytelling","Encourages curiosity about ocean ecosystems"],
    chapters: ["Coral Kingdom","Deep Blue Dive","Shipwreck Secrets","Whale Song","Sunrise Shore"],
    related: ["jungle-adventures","space-kids","bedtime-stories-collection"],
    accent: "#0ea5e9",
    surface: "linear-gradient(180deg, #f0f9ff 0%, #bae6fd 48%, #38bdf8 100%)",
    motif: "wave"
  },
  {
    id: "space-kids",
    category: "Kids & Children",
    tag: "Ages 6–10",
    title: "Space for Kids",
    author: "Ava Patel",
    summary: "Rockets, planets, and stars explained for curious young minds with stunning illustrations.",
    description: "A beautifully illustrated guide to our solar system and beyond. Kids learn about gravity, constellations, and space exploration through short chapters, fun quizzes, and hands-on activity ideas.",
    length: "64 pages",
    format: "Illustrated Hardcover",
    edition: "2025 Edition",
    price: 16,
    rating: 4.9,
    published: 202504,
    highlights: ["Solar system tour with infographics kids can understand","DIY constellation and rocket activities","Quiz pages to test space knowledge"],
    chapters: ["Our Sun and Moon","Planet Parade","Stars and Galaxies","Astronaut Life","Build Your Rocket"],
    related: ["jungle-adventures","ocean-explorers","math-is-fun"],
    accent: "#6366f1",
    surface: "linear-gradient(180deg, #eef2ff 0%, #c7d2fe 48%, #818cf8 100%)",
    motif: "circuit"
  },
  {
    id: "fairy-tales-retold",
    category: "Kids & Children",
    tag: "Ages 5–9",
    title: "Fairy Tales Retold",
    author: "Mia Brooks",
    summary: "Classic fairy tales reimagined with diverse characters, modern lessons, and vivid art.",
    description: "Cinderella is a coder, Jack trades beans for seeds of kindness, and Rapunzel builds her own tower. Fresh retellings that keep the magic alive while teaching empathy, creativity, and resilience.",
    length: "80 pages",
    format: "Illustrated Hardcover",
    edition: "2026 Edition",
    price: 18,
    rating: 4.8,
    published: 202601,
    highlights: ["10 reimagined classics with inclusive characters","Life lessons woven into every story","Award-winning illustration style"],
    chapters: ["Cinderella Codes","Jack's Garden","Rapunzel Builds","The Three Kind Wolves","Snow White's Lab"],
    related: ["jungle-adventures","bedtime-stories-collection","ocean-explorers"],
    accent: "#ec4899",
    surface: "linear-gradient(180deg, #fdf2f8 0%, #fbcfe8 48%, #f472b6 100%)",
    motif: "arc"
  },
  {
    id: "bedtime-stories-collection",
    category: "Kids & Children",
    tag: "Ages 3–7",
    title: "Bedtime Stories Collection",
    author: "James Oliver",
    summary: "20 gentle stories designed to calm, comfort, and carry little ones off to dreamland.",
    description: "A cozy collection of bedtime stories featuring sleepy animals, dreamy landscapes, and soft adventures. Each story is perfectly paced for a 5-minute read-aloud before lights out.",
    length: "96 pages",
    format: "Padded Hardcover",
    edition: "2025 Edition",
    price: 15,
    rating: 4.9,
    published: 202502,
    highlights: ["20 calming stories for nightly routine","Soothing pastel illustrations","Perfect pacing for 5-minute read-alouds"],
    chapters: ["Sleepy Bunny","Cloud Pillow","Moon Garden","Starlight Bear","Dream River"],
    related: ["fairy-tales-retold","jungle-adventures","ocean-explorers"],
    accent: "#a855f7",
    surface: "linear-gradient(180deg, #faf5ff 0%, #e9d5ff 48%, #c084fc 100%)",
    motif: "arc"
  },

  /* ─── FICTION & STORIES ─── */
  {
    id: "midnight-library",
    category: "Fiction & Stories",
    tag: "Literary Fiction",
    title: "The Midnight Library",
    author: "Clara Whitfield",
    summary: "A woman discovers a library between life and death, where each book reveals a different life she could have lived.",
    description: "Nora finds herself in an infinite library at the stroke of midnight. Each book on its shelves contains a version of her life had she made different choices. A profound exploration of regret, possibility, and what makes life worth living.",
    length: "304 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 24,
    rating: 4.9,
    published: 202501,
    highlights: ["Explores parallel lives and the nature of choice","Emotionally resonant and philosophically rich","A modern classic of literary fiction"],
    chapters: ["The Root of Regret","Between the Shelves","A Life in Music","The Arctic Life","Midnight Strikes"],
    related: ["whispers-of-time","the-glass-garden","silent-echoes"],
    accent: "#1e3a5f",
    surface: "linear-gradient(180deg, #f0f4f8 0%, #c5d5e8 48%, #6b8db5 100%)",
    motif: "wave"
  },
  {
    id: "whispers-of-time",
    category: "Fiction & Stories",
    tag: "Historical Fiction",
    title: "Whispers of Time",
    author: "Daniel Huang",
    summary: "A multi-generational saga spanning three continents and a century of family secrets.",
    description: "From 1920s Shanghai to modern-day San Francisco, three generations of the Chen family carry secrets that bind them across oceans and decades. Epic in scope, intimate in detail.",
    length: "420 pages",
    format: "Clothbound",
    edition: "2025 Edition",
    price: 28,
    rating: 4.8,
    published: 202506,
    highlights: ["Richly detailed historical settings across three eras","Complex characters that span generations","A story about identity, heritage, and belonging"],
    chapters: ["Shanghai Dawn","The Crossing","Golden Gate","Letters Unsent","The Homecoming"],
    related: ["midnight-library","the-glass-garden","kingdom-of-ash"],
    accent: "#92400e",
    surface: "linear-gradient(180deg, #fefce8 0%, #fde68a 48%, #f59e0b 100%)",
    motif: "wave"
  },
  {
    id: "the-glass-garden",
    category: "Fiction & Stories",
    tag: "Contemporary",
    title: "The Glass Garden",
    author: "Sofia Ramirez",
    summary: "Two strangers reconnect with life through a shared community garden in Brooklyn.",
    description: "When a retired teacher and a young chef both stumble into the same neglected garden plot, they discover that growing things together can heal what words cannot. Warm, lyrical, and deeply human.",
    length: "268 pages",
    format: "Paperback",
    edition: "2025 Edition",
    price: 19,
    rating: 4.7,
    published: 202504,
    highlights: ["Beautifully written character study","Themes of community, healing, and second chances","A feel-good literary novel with depth"],
    chapters: ["Empty Plot","First Sprout","Summer Bloom","Storm Season","Harvest"],
    related: ["midnight-library","whispers-of-time","silent-echoes"],
    accent: "#15803d",
    surface: "linear-gradient(180deg, #f0fdf4 0%, #86efac 48%, #22c55e 100%)",
    motif: "grid"
  },
  {
    id: "silent-echoes",
    category: "Fiction & Stories",
    tag: "Thriller",
    title: "Silent Echoes",
    author: "Ryan Torres",
    summary: "A forensic linguist is drawn into a cold case when anonymous letters start arriving at her door.",
    description: "Dr. Anika Varma studies language for a living, but the cryptic messages appearing in her mailbox are unlike anything she has analyzed. A gripping thriller about obsession, identity, and the words we leave behind.",
    length: "352 pages",
    format: "Hardcover",
    edition: "2026 Edition",
    price: 26,
    rating: 4.8,
    published: 202602,
    highlights: ["Unique forensic linguistics angle","Twist-filled plot that keeps you guessing","Strong female protagonist"],
    chapters: ["The First Letter","Pattern Recognition","Dead Languages","The Cipher","Echoes Silenced"],
    related: ["midnight-library","whispers-of-time","the-glass-garden"],
    accent: "#991b1b",
    surface: "linear-gradient(180deg, #fef2f2 0%, #fecaca 48%, #f87171 100%)",
    motif: "circuit"
  },

  /* ─── MOVIE & ENTERTAINMENT ─── */
  {
    id: "cinema-masterclass",
    category: "Movie & Entertainment",
    tag: "Film Studies",
    title: "Cinema Masterclass",
    author: "David Chen",
    summary: "Behind-the-scenes techniques from legendary directors, from Hitchcock to Villeneuve.",
    description: "A stunning visual guide to the art of filmmaking. Covering cinematography, sound design, editing, and storytelling, this book breaks down iconic scenes and teaches you to see films like a director.",
    length: "380 pages",
    format: "Coffee Table Hardcover",
    edition: "2025 Edition",
    price: 52,
    rating: 4.9,
    published: 202503,
    highlights: ["Frame-by-frame breakdowns of iconic movie scenes","Interviews with working cinematographers","Covers classic and modern filmmaking techniques"],
    chapters: ["The Director's Eye","Light and Shadow","Sound as Story","The Edit","Visual Storytelling"],
    related: ["script-to-screen","anime-art-book","pop-culture-encyclopedia"],
    accent: "#dc2626",
    surface: "linear-gradient(180deg, #fef2f2 0%, #fecaca 48%, #f87171 100%)",
    motif: "arc"
  },
  {
    id: "script-to-screen",
    category: "Movie & Entertainment",
    tag: "Screenwriting",
    title: "Script to Screen",
    author: "Rachel Gold",
    summary: "A practical guide to writing screenplays that actually get produced.",
    description: "From concept to final draft, learn the craft of screenwriting with exercises, industry tips, and breakdowns of produced scripts. Covers film, TV, and streaming formats.",
    length: "296 pages",
    format: "Paperback",
    edition: "2025 Edition",
    price: 29,
    rating: 4.7,
    published: 202505,
    highlights: ["Step-by-step screenplay structure","Industry formatting standards","TV and streaming adaptation techniques"],
    chapters: ["Finding the Story","Three-Act Architecture","Dialogue That Pops","The Rewrite","Selling Your Script"],
    related: ["cinema-masterclass","anime-art-book","pop-culture-encyclopedia"],
    accent: "#ea580c",
    surface: "linear-gradient(180deg, #fff7ed 0%, #fed7aa 48%, #fb923c 100%)",
    motif: "wave"
  },
  {
    id: "anime-art-book",
    category: "Movie & Entertainment",
    tag: "Animation",
    title: "The Art of Anime",
    author: "Yuki Tanaka",
    summary: "A visual celebration of anime history from Astro Boy to modern masterpieces.",
    description: "Explore decades of Japanese animation through stunning artwork, creator interviews, and cultural context. From Studio Ghibli to cutting-edge digital anime, this book is a must-have for fans and artists alike.",
    length: "256 pages",
    format: "Illustrated Hardcover",
    edition: "2026 Edition",
    price: 45,
    rating: 4.9,
    published: 202601,
    highlights: ["200+ full-color illustrations from legendary studios","Creator and artist interviews","Covers 60 years of anime evolution"],
    chapters: ["Origins and Pioneers","The Ghibli Era","Shonen and Beyond","Digital Revolution","The Future of Anime"],
    related: ["cinema-masterclass","script-to-screen","pop-culture-encyclopedia"],
    accent: "#e11d48",
    surface: "linear-gradient(180deg, #fff1f2 0%, #fecdd3 48%, #fb7185 100%)",
    motif: "circuit"
  },
  {
    id: "pop-culture-encyclopedia",
    category: "Movie & Entertainment",
    tag: "Reference",
    title: "Pop Culture Encyclopedia",
    author: "Alex Morgan",
    summary: "The definitive A-to-Z guide to movies, TV shows, music, and internet culture.",
    description: "From Star Wars to TikTok, from vinyl records to streaming wars — this encyclopedia covers every corner of pop culture with engaging entries, timelines, and full-color imagery.",
    length: "512 pages",
    format: "Deluxe Hardcover",
    edition: "2025 Edition",
    price: 55,
    rating: 4.8,
    published: 202508,
    highlights: ["2,000+ entries covering all pop culture domains","Timeline infographics for every decade","Perfect coffee table or gift book"],
    chapters: ["The Silver Screen","Television Ages","Music Movements","Gaming Worlds","Internet Culture"],
    related: ["cinema-masterclass","script-to-screen","anime-art-book"],
    accent: "#7c3aed",
    surface: "linear-gradient(180deg, #faf5ff 0%, #ddd6fe 48%, #a78bfa 100%)",
    motif: "grid"
  },

  /* ─── MEDICAL & HEALTH ─── */
  {
    id: "human-body-atlas",
    category: "Medical & Health",
    tag: "Anatomy",
    title: "Human Body Atlas",
    author: "Dr. Sarah Bennett",
    summary: "A comprehensive visual atlas of human anatomy with 3D-style illustrations.",
    description: "The most visually stunning anatomy atlas available. Each system is rendered in extraordinary detail with layered views, clinical notes, and pathology highlights for students and professionals.",
    length: "480 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 68,
    rating: 4.9,
    published: 202501,
    highlights: ["1,200+ detailed anatomical illustrations","Clinical correlation notes on every page","Covers all major body systems"],
    chapters: ["Skeletal System","Muscular System","Cardiovascular Network","Nervous System","Organ Systems"],
    related: ["clinical-medicine-essentials","mental-health-handbook","nutrition-science"],
    accent: "#dc2626",
    surface: "linear-gradient(180deg, #fef2f2 0%, #fecaca 48%, #f87171 100%)",
    motif: "grid"
  },
  {
    id: "clinical-medicine-essentials",
    category: "Medical & Health",
    tag: "Clinical Practice",
    title: "Clinical Medicine Essentials",
    author: "Dr. James Morton",
    summary: "A practical handbook for medical students covering diagnosis, treatment, and patient care.",
    description: "Designed for medical students and junior doctors, this handbook covers the essential clinical skills from history-taking to differential diagnosis, with case studies and quick-reference tables.",
    length: "560 pages",
    format: "Flexicover",
    edition: "2025 Edition",
    price: 58,
    rating: 4.8,
    published: 202504,
    highlights: ["200+ case studies with guided diagnosis","Quick-reference drug tables","Covers all major clinical specialties"],
    chapters: ["Clinical Assessment","Cardiology","Respiratory Medicine","Gastroenterology","Emergency Protocols"],
    related: ["human-body-atlas","mental-health-handbook","nutrition-science"],
    accent: "#0f766e",
    surface: "linear-gradient(180deg, #f0fdfa 0%, #99f6e4 48%, #2dd4bf 100%)",
    motif: "circuit"
  },
  {
    id: "mental-health-handbook",
    category: "Medical & Health",
    tag: "Psychology",
    title: "Mental Health Handbook",
    author: "Dr. Nina Gupta",
    summary: "Understanding anxiety, depression, and wellbeing with evidence-based approaches.",
    description: "A compassionate, science-backed guide to understanding mental health conditions, therapeutic approaches, and daily wellness practices. Written for both clinicians and anyone seeking to understand their own mind better.",
    length: "340 pages",
    format: "Paperback",
    edition: "2025 Edition",
    price: 32,
    rating: 4.9,
    published: 202506,
    highlights: ["Evidence-based therapeutic techniques","Self-assessment tools and exercises","Covers anxiety, depression, PTSD, and more"],
    chapters: ["Understanding the Mind","Anxiety and Its Faces","Depression Demystified","Therapeutic Approaches","Daily Wellbeing"],
    related: ["human-body-atlas","clinical-medicine-essentials","nutrition-science"],
    accent: "#7c3aed",
    surface: "linear-gradient(180deg, #faf5ff 0%, #ddd6fe 48%, #a78bfa 100%)",
    motif: "wave"
  },
  {
    id: "nutrition-science",
    category: "Medical & Health",
    tag: "Nutrition",
    title: "Nutrition Science",
    author: "Dr. Lisa Park",
    summary: "The science of food, metabolism, and diet — from cellular biology to meal planning.",
    description: "A rigorous yet accessible guide to nutritional science. Covers macronutrients, micronutrients, metabolism, dietary patterns, and the latest research on gut health, fasting, and supplements.",
    length: "390 pages",
    format: "Hardcover",
    edition: "2026 Edition",
    price: 42,
    rating: 4.8,
    published: 202602,
    highlights: ["Latest research on gut microbiome and metabolism","Meal planning frameworks backed by science","Myth-busting section on popular diet trends"],
    chapters: ["Macro Foundations","Vitamins and Minerals","Gut Health Revolution","Metabolism Deep Dive","Evidence-Based Meal Plans"],
    related: ["human-body-atlas","clinical-medicine-essentials","mental-health-handbook"],
    accent: "#16a34a",
    surface: "linear-gradient(180deg, #f0fdf4 0%, #bbf7d0 48%, #4ade80 100%)",
    motif: "grid"
  },

  /* ─── STUDY & ACADEMIC ─── */
  {
    id: "math-is-fun",
    category: "Study & Academic",
    tag: "Mathematics",
    title: "Math is Fun",
    author: "Prof. Alan Bright",
    summary: "From algebra to calculus — a student-friendly approach with visual explanations.",
    description: "A beautifully designed math textbook that makes abstract concepts tangible through diagrams, real-world examples, and step-by-step worked solutions. Perfect for high school and university students.",
    length: "420 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 36,
    rating: 4.8,
    published: 202503,
    highlights: ["Visual learning approach with 500+ diagrams","Step-by-step solutions for every problem type","Covers algebra through introductory calculus"],
    chapters: ["Algebra Foundations","Geometry and Space","Trigonometry","Pre-Calculus","Introduction to Calculus"],
    related: ["physics-fundamentals","chemistry-decoded","study-skills-mastery"],
    accent: "#2563eb",
    surface: "linear-gradient(180deg, #eff6ff 0%, #bfdbfe 48%, #60a5fa 100%)",
    motif: "grid"
  },
  {
    id: "physics-fundamentals",
    category: "Study & Academic",
    tag: "Physics",
    title: "Physics Fundamentals",
    author: "Prof. Elena Vasquez",
    summary: "Mechanics, thermodynamics, waves, and electromagnetism explained with clarity.",
    description: "A modern physics textbook that balances rigor with readability. Each chapter includes visual experiments, practice problems, and real-world applications from engineering to space science.",
    length: "460 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 44,
    rating: 4.7,
    published: 202505,
    highlights: ["Interactive experiment suggestions in every chapter","Real-world engineering applications","Practice problems with detailed solutions"],
    chapters: ["Classical Mechanics","Energy and Thermodynamics","Waves and Sound","Electromagnetism","Modern Physics"],
    related: ["math-is-fun","chemistry-decoded","study-skills-mastery"],
    accent: "#f97316",
    surface: "linear-gradient(180deg, #fff7ed 0%, #fed7aa 48%, #fb923c 100%)",
    motif: "wave"
  },
  {
    id: "chemistry-decoded",
    category: "Study & Academic",
    tag: "Chemistry",
    title: "Chemistry Decoded",
    author: "Prof. Mark Sullivan",
    summary: "Atomic structure, bonding, reactions, and organic chemistry made accessible.",
    description: "A visually rich chemistry textbook that breaks down complex reactions into understandable steps. Features molecular visualizations, lab safety guides, and practice exercises for exam preparation.",
    length: "440 pages",
    format: "Hardcover",
    edition: "2026 Edition",
    price: 40,
    rating: 4.8,
    published: 202601,
    highlights: ["3D molecular structure visualizations","Lab experiment guides with safety protocols","Comprehensive exam preparation sections"],
    chapters: ["Atomic World","Chemical Bonding","Reaction Types","Organic Chemistry","Lab Practicals"],
    related: ["math-is-fun","physics-fundamentals","study-skills-mastery"],
    accent: "#059669",
    surface: "linear-gradient(180deg, #ecfdf5 0%, #a7f3d0 48%, #34d399 100%)",
    motif: "circuit"
  },
  {
    id: "study-skills-mastery",
    category: "Study & Academic",
    tag: "Study Guide",
    title: "Study Skills Mastery",
    author: "Dr. Karen Wells",
    summary: "Science-backed study techniques, time management, and exam strategies for all students.",
    description: "Learn how to study smarter with evidence-based techniques like spaced repetition, active recall, and interleaving. Includes planners, templates, and strategies for every type of learner.",
    length: "240 pages",
    format: "Paperback",
    edition: "2025 Edition",
    price: 22,
    rating: 4.9,
    published: 202504,
    highlights: ["Spaced repetition and active recall techniques","Printable study planners and templates","Exam day strategies and anxiety management"],
    chapters: ["How Memory Works","Active Recall Mastery","Spaced Repetition","Time Management","Exam Day Playbook"],
    related: ["math-is-fun","physics-fundamentals","chemistry-decoded"],
    accent: "#0891b2",
    surface: "linear-gradient(180deg, #ecfeff 0%, #a5f3fc 48%, #22d3ee 100%)",
    motif: "grid"
  },

  /* ─── BUSINESS & WORK ─── */
  {
    id: "leadership-playbook",
    category: "Business & Work",
    tag: "Leadership",
    title: "The Leadership Playbook",
    author: "Marcus Johnson",
    summary: "Practical frameworks for leading teams, driving change, and building high-performance culture.",
    description: "Distilled from 20 years of executive coaching, this book provides actionable leadership frameworks for managers at every level. Covers team dynamics, difficult conversations, strategic thinking, and culture building.",
    length: "310 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 34,
    rating: 4.8,
    published: 202502,
    highlights: ["Proven frameworks from Fortune 500 coaching","Templates for 1-on-1s, reviews, and team planning","Real case studies from diverse industries"],
    chapters: ["The Leader's Mindset","Building Your Team","Difficult Conversations","Strategic Execution","Culture as Product"],
    related: ["startup-blueprint","remote-work-mastery","financial-literacy"],
    accent: "#b45309",
    surface: "linear-gradient(180deg, #fffbeb 0%, #fde68a 48%, #fbbf24 100%)",
    motif: "wave"
  },
  {
    id: "startup-blueprint",
    category: "Business & Work",
    tag: "Entrepreneurship",
    title: "The Startup Blueprint",
    author: "Tina Cheng",
    summary: "From idea to funding — a step-by-step guide to building and launching a startup.",
    description: "A no-nonsense guide to startup building. Covers validation, MVP development, fundraising, hiring, and scaling — with templates, pitch deck examples, and founder interviews.",
    length: "340 pages",
    format: "Paperback",
    edition: "2025 Edition",
    price: 30,
    rating: 4.7,
    published: 202506,
    highlights: ["Pitch deck templates and investor frameworks","Lean validation and MVP techniques","Interviews with successful founders"],
    chapters: ["Validating Your Idea","Building the MVP","Fundraising Masterclass","Hiring Early","Scaling Operations"],
    related: ["leadership-playbook","remote-work-mastery","financial-literacy"],
    accent: "#dc2626",
    surface: "linear-gradient(180deg, #fef2f2 0%, #fecaca 48%, #f87171 100%)",
    motif: "circuit"
  },
  {
    id: "remote-work-mastery",
    category: "Business & Work",
    tag: "Productivity",
    title: "Remote Work Mastery",
    author: "Jordan Ellis",
    summary: "Stay productive, connected, and healthy while working from anywhere in the world.",
    description: "The definitive guide to thriving in remote work. Covers workspace setup, async communication, focus techniques, team rituals, and maintaining work-life balance in a distributed world.",
    length: "260 pages",
    format: "Paperback",
    edition: "2025 Edition",
    price: 24,
    rating: 4.8,
    published: 202505,
    highlights: ["Workspace ergonomics and setup guides","Async communication best practices","Focus and deep work techniques"],
    chapters: ["The Remote Mindset","Your Workspace","Async Communication","Deep Work Rituals","Work-Life Integration"],
    related: ["leadership-playbook","startup-blueprint","financial-literacy"],
    accent: "#0891b2",
    surface: "linear-gradient(180deg, #ecfeff 0%, #a5f3fc 48%, #22d3ee 100%)",
    motif: "grid"
  },
  {
    id: "financial-literacy",
    category: "Business & Work",
    tag: "Finance",
    title: "Financial Literacy 101",
    author: "David Park",
    summary: "Budgeting, investing, retirement planning, and money management made simple.",
    description: "A clear, jargon-free guide to personal finance. From your first budget to retirement planning, learn to manage money confidently with worksheets, calculators, and real-world scenarios.",
    length: "280 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 28,
    rating: 4.9,
    published: 202507,
    highlights: ["Budgeting templates and expense trackers","Investment basics explained simply","Retirement and tax planning guides"],
    chapters: ["Money Mindset","Budgeting That Works","Investing Basics","Tax Strategies","Retirement Planning"],
    related: ["leadership-playbook","startup-blueprint","remote-work-mastery"],
    accent: "#15803d",
    surface: "linear-gradient(180deg, #f0fdf4 0%, #86efac 48%, #22c55e 100%)",
    motif: "wave"
  },

  /* ─── SELF-HELP & WELLNESS ─── */
  {
    id: "atomic-habits-guide",
    category: "Self-Help & Wellness",
    tag: "Habits",
    title: "The Habits Blueprint",
    author: "Claire Madison",
    summary: "Build powerful daily habits using brain science and behavioral design.",
    description: "Discover how tiny changes create remarkable results. Using neuroscience research and behavioral psychology, this book teaches you to design habit systems that stick — from morning routines to deep work blocks.",
    length: "290 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 26,
    rating: 4.9,
    published: 202503,
    highlights: ["Habit stacking and cue design techniques","30-day challenge templates","Brain science behind habit formation"],
    chapters: ["The Habit Loop","Designing Cues","Reward Systems","Breaking Bad Habits","The 30-Day Reset"],
    related: ["mindfulness-daily","sleep-science","emotional-intelligence"],
    accent: "#f59e0b",
    surface: "linear-gradient(180deg, #fffbeb 0%, #fde68a 48%, #fbbf24 100%)",
    motif: "wave"
  },
  {
    id: "mindfulness-daily",
    category: "Self-Help & Wellness",
    tag: "Mindfulness",
    title: "Mindfulness Daily",
    author: "Zen Patel",
    summary: "365 days of guided meditations, breathing exercises, and reflective journaling.",
    description: "A beautifully designed daily mindfulness companion with one practice per day. From 2-minute breathing exercises to deep reflection prompts, build inner calm one day at a time.",
    length: "400 pages",
    format: "Clothbound",
    edition: "2025 Edition",
    price: 30,
    rating: 4.8,
    published: 202501,
    highlights: ["365 unique daily practices","Breathing, body scan, and journaling exercises","Beautiful minimal design"],
    chapters: ["The Present Moment","Breath Awareness","Body and Mind","Gratitude Practice","Inner Calm"],
    related: ["atomic-habits-guide","sleep-science","emotional-intelligence"],
    accent: "#0d9488",
    surface: "linear-gradient(180deg, #f0fdfa 0%, #99f6e4 48%, #2dd4bf 100%)",
    motif: "arc"
  },
  {
    id: "sleep-science",
    category: "Self-Help & Wellness",
    tag: "Health",
    title: "The Sleep Revolution",
    author: "Dr. Maya Foster",
    summary: "Master the science of sleep for better health, focus, and daily energy.",
    description: "Learn why sleep is the most powerful health intervention available. Covers circadian science, sleep hygiene, dream research, and practical protocols for dramatically better rest.",
    length: "320 pages",
    format: "Paperback",
    edition: "2025 Edition",
    price: 24,
    rating: 4.8,
    published: 202504,
    highlights: ["Circadian rhythm optimization protocols","Sleep environment design guides","Dream science and lucid dreaming basics"],
    chapters: ["Why We Sleep","Circadian Biology","Sleep Hygiene","The Dream World","Your Sleep Protocol"],
    related: ["atomic-habits-guide","mindfulness-daily","emotional-intelligence"],
    accent: "#4338ca",
    surface: "linear-gradient(180deg, #eef2ff 0%, #c7d2fe 48%, #818cf8 100%)",
    motif: "circuit"
  },
  {
    id: "emotional-intelligence",
    category: "Self-Help & Wellness",
    tag: "Psychology",
    title: "Emotional Intelligence",
    author: "Dr. Robert Lane",
    summary: "Understand, manage, and leverage emotions for better relationships and success.",
    description: "A practical guide to developing emotional intelligence. Covers self-awareness, empathy, social skills, and emotional regulation with assessments, exercises, and real-world scenarios.",
    length: "300 pages",
    format: "Hardcover",
    edition: "2026 Edition",
    price: 28,
    rating: 4.9,
    published: 202601,
    highlights: ["EQ assessment tools and scorecards","Practical exercises for empathy building","Conflict resolution frameworks"],
    chapters: ["Self-Awareness","Self-Regulation","Motivation","Empathy","Social Skills"],
    related: ["atomic-habits-guide","mindfulness-daily","sleep-science"],
    accent: "#be185d",
    surface: "linear-gradient(180deg, #fdf2f8 0%, #fbcfe8 48%, #f472b6 100%)",
    motif: "wave"
  },

  /* ─── SCIENCE & NATURE ─── */
  {
    id: "cosmos-explained",
    category: "Science & Nature",
    tag: "Astronomy",
    title: "Cosmos Explained",
    author: "Prof. Neil Ashford",
    summary: "The universe from Big Bang to black holes — a visual journey through space and time.",
    description: "A breathtaking visual tour of the cosmos. From the birth of stars to the mysteries of dark matter, this book makes cutting-edge astrophysics accessible with stunning imagery and clear explanations.",
    length: "360 pages",
    format: "Coffee Table Hardcover",
    edition: "2025 Edition",
    price: 50,
    rating: 4.9,
    published: 202502,
    highlights: ["200+ NASA and telescope images","Accessible explanations of complex physics","Covers latest discoveries in dark energy and exoplanets"],
    chapters: ["The Big Bang","Stars and Galaxies","Black Holes","Dark Matter","The Search for Life"],
    related: ["earth-chronicles","evolution-story","climate-action"],
    accent: "#1e3a5f",
    surface: "linear-gradient(180deg, #f0f4f8 0%, #b8cfe0 48%, #5b92c5 100%)",
    motif: "circuit"
  },
  {
    id: "earth-chronicles",
    category: "Science & Nature",
    tag: "Earth Science",
    title: "Earth Chronicles",
    author: "Dr. Petra Singh",
    summary: "4.5 billion years of Earth history — volcanoes, ice ages, and the story of life.",
    description: "Travel through geological time from Earth's fiery formation to the present day. Each era is vividly illustrated with fossil records, geological maps, and the dramatic events that shaped our planet.",
    length: "340 pages",
    format: "Illustrated Hardcover",
    edition: "2025 Edition",
    price: 44,
    rating: 4.8,
    published: 202506,
    highlights: ["Geological timeline with era-by-era illustrations","Fossil record photography","Volcanic and tectonic event maps"],
    chapters: ["Formation","Age of Reptiles","Ice Ages","Rise of Mammals","The Anthropocene"],
    related: ["cosmos-explained","evolution-story","climate-action"],
    accent: "#92400e",
    surface: "linear-gradient(180deg, #fefce8 0%, #fde68a 48%, #f59e0b 100%)",
    motif: "wave"
  },
  {
    id: "evolution-story",
    category: "Science & Nature",
    tag: "Biology",
    title: "The Evolution Story",
    author: "Prof. Diana Wells",
    summary: "From single cells to complex life — the complete narrative of evolution on Earth.",
    description: "A beautifully illustrated narrative of evolution covering natural selection, genetics, adaptation, and the tree of life. Makes complex biology engaging and accessible for curious readers of all backgrounds.",
    length: "320 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 38,
    rating: 4.7,
    published: 202504,
    highlights: ["Tree of life visualizations","Genetics and DNA explained visually","From microbes to modern humans"],
    chapters: ["Origins of Life","Natural Selection","Genetics Revolution","Human Evolution","What Comes Next"],
    related: ["cosmos-explained","earth-chronicles","climate-action"],
    accent: "#15803d",
    surface: "linear-gradient(180deg, #f0fdf4 0%, #86efac 48%, #22c55e 100%)",
    motif: "grid"
  },
  {
    id: "climate-action",
    category: "Science & Nature",
    tag: "Environment",
    title: "Climate Action Now",
    author: "Dr. Emma Torres",
    summary: "The science of climate change and practical solutions for individuals and communities.",
    description: "Combines rigorous climate science with actionable steps. Covers carbon cycles, renewable energy, policy frameworks, and personal habits that make a real difference.",
    length: "310 pages",
    format: "Paperback",
    edition: "2026 Edition",
    price: 28,
    rating: 4.8,
    published: 202602,
    highlights: ["Data visualizations of climate trends","Community action toolkits","Personal carbon footprint calculator"],
    chapters: ["Climate Science 101","Energy Revolution","Food and Land","Policy and Justice","Your Action Plan"],
    related: ["cosmos-explained","earth-chronicles","evolution-story"],
    accent: "#0d9488",
    surface: "linear-gradient(180deg, #f0fdfa 0%, #99f6e4 48%, #2dd4bf 100%)",
    motif: "arc"
  },

  /* ─── COOKING & LIFESTYLE ─── */
  {
    id: "world-kitchen",
    category: "Cooking & Lifestyle",
    tag: "International",
    title: "The World Kitchen",
    author: "Chef Maria Santos",
    summary: "100 recipes from 30 countries — a culinary journey around the globe.",
    description: "Travel the world through food. From Thai curries to Italian pastas, Mexican street food to Japanese ramen — each recipe includes cultural context, step-by-step photos, and ingredient substitution guides.",
    length: "380 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 42,
    rating: 4.9,
    published: 202503,
    highlights: ["100 authentic recipes from 30 countries","Step-by-step photography for every dish","Ingredient sourcing and substitution guides"],
    chapters: ["Asian Flavors","Mediterranean Sun","Latin Heat","African Spice","European Classics"],
    related: ["baking-masterclass","healthy-meal-prep","home-coffee"],
    accent: "#ea580c",
    surface: "linear-gradient(180deg, #fff7ed 0%, #fed7aa 48%, #fb923c 100%)",
    motif: "wave"
  },
  {
    id: "baking-masterclass",
    category: "Cooking & Lifestyle",
    tag: "Baking",
    title: "Baking Masterclass",
    author: "Sophie Laurent",
    summary: "Bread, pastries, and desserts with professional techniques simplified for home bakers.",
    description: "From sourdough to croissants, macarons to layer cakes. Learn professional baking techniques with detailed instructions, troubleshooting guides, and stunning food photography.",
    length: "340 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 38,
    rating: 4.8,
    published: 202505,
    highlights: ["Professional techniques simplified for home use","Troubleshooting guide for common baking mistakes","80+ recipes with step-by-step photos"],
    chapters: ["Bread Foundations","Pastry Arts","Cake Architecture","Chocolate Work","Seasonal Baking"],
    related: ["world-kitchen","healthy-meal-prep","home-coffee"],
    accent: "#92400e",
    surface: "linear-gradient(180deg, #fefce8 0%, #fde68a 48%, #f59e0b 100%)",
    motif: "grid"
  },
  {
    id: "healthy-meal-prep",
    category: "Cooking & Lifestyle",
    tag: "Health Food",
    title: "Healthy Meal Prep",
    author: "Natasha Green",
    summary: "Weekly meal plans, batch cooking guides, and nutritious recipes for busy lives.",
    description: "Simple, delicious, and nutritious meal prep plans designed for real life. Includes shopping lists, storage tips, macros for every recipe, and plans for different dietary preferences.",
    length: "260 pages",
    format: "Spiralbound",
    edition: "2025 Edition",
    price: 26,
    rating: 4.7,
    published: 202504,
    highlights: ["12-week meal prep plans","Macros and nutritional info for every recipe","Vegan, keto, and balanced diet options"],
    chapters: ["Prep Basics","Protein Power","Plant-Based Week","Batch Cooking","Snack Smart"],
    related: ["world-kitchen","baking-masterclass","home-coffee"],
    accent: "#16a34a",
    surface: "linear-gradient(180deg, #f0fdf4 0%, #bbf7d0 48%, #4ade80 100%)",
    motif: "circuit"
  },
  {
    id: "home-coffee",
    category: "Cooking & Lifestyle",
    tag: "Beverages",
    title: "Home Coffee Guide",
    author: "Kai Nakamura",
    summary: "Master espresso, pour-over, and cold brew with professional barista techniques at home.",
    description: "From bean selection to latte art, this guide makes you a home barista. Covers brewing methods, equipment reviews, water chemistry, and recipes for café-quality drinks.",
    length: "220 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 28,
    rating: 4.8,
    published: 202506,
    highlights: ["Brewing method comparisons with flavor profiles","Equipment buying guide","Latte art tutorials with step-by-step photos"],
    chapters: ["Bean to Cup","Espresso Mastery","Pour-Over Precision","Cold Brew Lab","Latte Art School"],
    related: ["world-kitchen","baking-masterclass","healthy-meal-prep"],
    accent: "#78350f",
    surface: "linear-gradient(180deg, #fef3c7 0%, #fde68a 48%, #d97706 100%)",
    motif: "arc"
  },

  /* ─── HISTORY & BIOGRAPHY ─── */
  {
    id: "kingdom-of-ash",
    category: "History & Biography",
    tag: "Ancient History",
    title: "Kingdom of Ash",
    author: "Prof. Edward Blake",
    summary: "The rise and fall of ancient empires from Egypt to Rome to the Mongols.",
    description: "A sweeping narrative history covering the greatest empires that shaped civilization. Features maps, timelines, artifact photography, and brings ancient worlds vividly to life.",
    length: "480 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 46,
    rating: 4.9,
    published: 202502,
    highlights: ["Maps and timelines for every empire","Artifact photography from world museums","Engaging narrative style"],
    chapters: ["Egyptian Dawn","Greek Glory","Roman Might","Silk Road Empires","Mongol Storm"],
    related: ["innovators-chronicle","war-and-peace-history","great-leaders"],
    accent: "#92400e",
    surface: "linear-gradient(180deg, #fefce8 0%, #fde68a 48%, #f59e0b 100%)",
    motif: "wave"
  },
  {
    id: "innovators-chronicle",
    category: "History & Biography",
    tag: "Biography",
    title: "The Innovators Chronicle",
    author: "Sarah Mitchell",
    summary: "The stories of 20 visionaries who changed the world — from Tesla to Turing to modern tech founders.",
    description: "Engaging biographical profiles of history's greatest innovators. Each chapter explores not just what they achieved, but the habits, failures, and mindsets that made breakthrough possible.",
    length: "360 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 34,
    rating: 4.8,
    published: 202504,
    highlights: ["20 in-depth biographical profiles","Mindset and habit analysis","Connects historical innovation to modern breakthroughs"],
    chapters: ["Tesla's Vision","Turing's Mind","Curie's Lab","Jobs and Design","The AI Pioneers"],
    related: ["kingdom-of-ash","war-and-peace-history","great-leaders"],
    accent: "#4338ca",
    surface: "linear-gradient(180deg, #eef2ff 0%, #c7d2fe 48%, #818cf8 100%)",
    motif: "circuit"
  },
  {
    id: "war-and-peace-history",
    category: "History & Biography",
    tag: "Modern History",
    title: "War and Peace: A Modern History",
    author: "Prof. James Morton",
    summary: "From World War I to the Cold War — the conflicts and diplomacy that shaped our world.",
    description: "A comprehensive yet accessible modern history covering both World Wars, the Cold War, decolonization, and the emergence of the current world order. Packed with primary sources and photography.",
    length: "520 pages",
    format: "Hardcover",
    edition: "2025 Edition",
    price: 48,
    rating: 4.8,
    published: 202506,
    highlights: ["Primary source documents and photographs","Balanced coverage of all major conflicts","Maps and strategic analysis"],
    chapters: ["The Great War","Between the Wars","World War II","Cold War Era","New World Order"],
    related: ["kingdom-of-ash","innovators-chronicle","great-leaders"],
    accent: "#64748b",
    surface: "linear-gradient(180deg, #f1f5f9 0%, #cbd5e1 48%, #94a3b8 100%)",
    motif: "grid"
  },
  {
    id: "great-leaders",
    category: "History & Biography",
    tag: "Leadership",
    title: "Great Leaders of History",
    author: "Amanda Cross",
    summary: "Leadership lessons from Gandhi, Mandela, Lincoln, and 15 other iconic figures.",
    description: "Each chapter profiles a legendary leader and distills their principles into modern-day applicable lessons. Features rarely-seen photographs, quotes, and contextual analysis.",
    length: "340 pages",
    format: "Clothbound",
    edition: "2026 Edition",
    price: 36,
    rating: 4.9,
    published: 202601,
    highlights: ["Leadership principle frameworks from each figure","Rare photographs and primary quotes","Modern applications of historical wisdom"],
    chapters: ["Gandhi's Resistance","Mandela's Patience","Lincoln's Union","Churchill's Resolve","Modern Visionaries"],
    related: ["kingdom-of-ash","innovators-chronicle","war-and-peace-history"],
    accent: "#0f766e",
    surface: "linear-gradient(180deg, #f0fdfa 0%, #99f6e4 48%, #2dd4bf 100%)",
    motif: "arc"
  }
];

const features = [
  {
    icon: "AI",
    title: "AI-Powered Recommendations",
    description: "Surface the right books for frontend, React, backend, and platform engineers instantly.",
    details: [
      "Recommendation copy adapts to technical roles and learning goals.",
      "Helps customers move from one title to the next without guesswork.",
      "Supports premium merchandising for higher-conversion book shelves."
    ]
  },
  {
    icon: "PV",
    title: "Instant Product Preview",
    description: "Open a polished product page with chapters, highlights, and related technical titles.",
    details: [
      "Each book opens a dedicated product experience with richer buying context.",
      "Chapter preview and related titles help serious buyers compare quickly.",
      "Designed to support premium catalog browsing without clutter."
    ]
  },
  {
    icon: "WL",
    title: "Persistent Reading Wishlist",
    description: "Save technical books locally and bring them back on the next visit.",
    details: [
      "Wishlist state persists in local storage for repeat visitors.",
      "Useful for buyers comparing multiple titles or team-book orders.",
      "Makes the storefront feel like a real product rather than a static page."
    ]
  },
  {
    icon: "LP",
    title: "Curated Learning Paths",
    description: "Connect books across HTML, JavaScript, React, Node.js, and system design.",
    details: [
      "Related-title rails guide customers through logical next steps.",
      "Pairs foundational books with deeper architecture and deployment topics.",
      "Supports bundle thinking for technical teams and training programs."
    ]
  },
  {
    icon: "CK",
    title: "PayVista Checkout",
    description: "A secure payment-step flow with customer details, payment methods, and review screens.",
    details: [
      "Includes card, UPI, bank, wallet, and COD payment options.",
      "Price breakdown, session timer, and trust copy create a premium checkout feel.",
      "Every checkout action is connected to real cart state and order review."
    ]
  },
  {
    icon: "RV",
    title: "Verified Reader Reviews",
    description: "Show trust-building feedback from engineers, managers, and technical buyers.",
    details: [
      "Review cards are written for the same technical audience buying the books.",
      "Supports premium positioning with practical, role-based feedback.",
      "Adds social proof around deeper technical titles and bundles."
    ]
  }
];

const premiumUpdates = [
  {
    icon: "fa-solid fa-layer-group",
    title: "Team Learning Bundles",
    copy: "Pre-built technical bundles for frontend teams, full-stack squads, and platform engineering groups.",
    cta: "View bundle strategy",
    featureLink: 3
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "Workshop Add-ons",
    copy: "Attach implementation workshops and chapter-based assignments to any technical book order.",
    cta: "Explore workshop flow",
    featureLink: 1
  },
  {
    icon: "fa-solid fa-building",
    title: "Enterprise Library Access",
    copy: "Centralized seat-based access for companies buying technical books for onboarding and upskilling.",
    cta: "See enterprise model",
    featureLink: 4
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Launch Growth Toolkit",
    copy: "Promotional rails, verified reviews, and premium checkout blocks built to increase conversion.",
    cta: "Open growth tools",
    featureLink: 5
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Performance Dashboard",
    copy: "Track top technical categories, conversion by title, and repeat buyer trends from one view.",
    cta: "View performance layer",
    featureLink: 5
  },
  {
    icon: "fa-solid fa-user-gear",
    title: "Role-Based Learning Paths",
    copy: "Serve role-specific paths for frontend engineers, full-stack developers, and platform teams.",
    cta: "Explore role paths",
    featureLink: 3
  }
];

const shelfVisuals = [
  {
    title: "Frontend Foundations",
    copy: "HTML, CSS, JavaScript, and React books curated for production teams.",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    featureLink: 0
  },
  {
    title: "Platform Engineering Picks",
    copy: "Node.js, system design, and DevOps reads for scalable architecture decisions.",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    featureLink: 3
  },
  {
    title: "Premium Checkout Experience",
    copy: "PayVista-style checkout with customer, payment, and review steps.",
    src: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1200&q=80",
    featureLink: 4
  }
];

const galleryPromotions = [
  {
    badge: "Launch Week",
    title: "Frontend Starter Bundle",
    copy: "Get HTML and CSS + JavaScript Patterns with a combined 15% technical-bundle discount.",
    cta: "See bundle details",
    featureLink: 3
  },
  {
    badge: "Team Offer",
    title: "React and TypeScript Pro Pack",
    copy: "Save 20% when your team purchases 5+ seats for React Systems and TypeScript in Action.",
    cta: "Open team pricing",
    featureLink: 0
  },
  {
    badge: "New Release",
    title: "Next.js Production Priority Access",
    copy: "Early access chapter drops, release notes, and bonus deployment checklists for premium members.",
    cta: "Unlock priority access",
    featureLink: 1
  },
  {
    badge: "Enterprise",
    title: "PayVista Assisted Checkout",
    copy: "Enterprise invoice support, seat provisioning, and secure multi-method payment orchestration.",
    cta: "Review checkout model",
    featureLink: 4
  }
];

const reviews = [
  { name: "Anita Sharma", role: "Frontend Engineer", rating: 5, quote: "The React and TypeScript titles feel aligned to real product work instead of generic tutorials." },
  { name: "Marcus Lee", role: "Full-Stack Developer", rating: 5, quote: "The chapter preview and related-title flow make comparison simple before checkout." },
  { name: "Diana Flores", role: "Engineering Manager", rating: 4, quote: "This is the kind of technical shelf I would actually send to onboarding teams." },
  { name: "Jordan Patel", role: "Platform Engineer", rating: 5, quote: "The system design and DevOps titles are packaged like premium products, not just listings." },
  { name: "Lisa Chen", role: "Parent & Teacher", rating: 5, quote: "My kids are obsessed with the Jungle Adventures and Ocean Explorers books. Beautiful illustrations!" },
  { name: "Robert Kim", role: "Medical Student", rating: 5, quote: "The Human Body Atlas is the most visually stunning anatomy reference I've ever used for studying." },
  { name: "Emma Wilson", role: "Book Club Leader", rating: 5, quote: "The Midnight Library and Whispers of Time sparked the best discussions our club has ever had." },
  { name: "Carlos Rivera", role: "Home Chef", rating: 4, quote: "The World Kitchen took me on a culinary journey. Every recipe is beautifully photographed and tested." },
  { name: "Dr. Nina Gupta", role: "Psychologist", rating: 5, quote: "The Mental Health Handbook is exactly what I recommend to both colleagues and clients." },
  { name: "Alex Torres", role: "Film Student", rating: 5, quote: "Cinema Masterclass breaks down filmmaking in a way no lecture ever could. A must-have reference." }
];

const paymentMethodCopy = {
  card: { label: "Credit / Debit Card", tickerLabel: "Card", badge: "Card offers enabled", buttonLabel: (amount) => `Pay ${amount} Now` },
  upi: { label: "UPI / QR", tickerLabel: "UPI", badge: "UPI lightning mode", buttonLabel: (amount) => `Pay ${amount} with UPI` },
  netbanking: { label: "Net Banking", tickerLabel: "Bank transfer", badge: "Bank-grade security", buttonLabel: (amount) => `Pay ${amount} via Net Banking` },
  wallets: { label: "Wallets", tickerLabel: "Wallet", badge: "Wallet booster active", buttonLabel: (amount) => `Pay ${amount} from Wallet` },
  cod: { label: "Cash on Delivery", tickerLabel: "COD", badge: "COD verification needed", buttonLabel: (amount) => `Place Order (${amount})` }
};

const liveFeedNames = ["Mason", "Olivia", "Elijah", "Sophia", "Lucas", "Ava", "Noah", "Emma"];
const liveFeedCities = ["Seattle", "New York", "Boston", "Miami", "Denver", "Chicago", "Dallas", "Portland"];
const checkoutRates = { USD: 1, EUR: 0.93, GBP: 0.79, CAD: 1.35 };
const languageLocales = { en: "en-US", es: "es-ES", fr: "fr-FR" };

const pageWatermarkRoot = document.getElementById("pageWatermark");
const footerYearRoot = document.getElementById("footerYear");
const storySlidesRoot = document.getElementById("storySlides");
const galleryViewportRoot = document.getElementById("galleryViewport");
const galleryPhotoGridRoot = document.getElementById("galleryPhotoGrid");
const galleryPromoGridRoot = document.getElementById("galleryPromoGrid");
const activeMetaRoot = document.getElementById("activeMeta");
const activeCountRoot = document.getElementById("activeCount");
const openWishlistBtnRoot = document.getElementById("openWishlistBtn");
const floatingWishlistBtnRoot = document.getElementById("floatingWishlistBtn");
const floatingWishlistIconRoot = document.getElementById("floatingWishlistIcon");
const floatingWishlistCountRoot = document.getElementById("floatingWishlistCount");
const openShortcutsBtnRoot = document.getElementById("openShortcutsBtn");
const openCartBtnRoot = document.getElementById("openCartBtn");
const wishlistTopIconRoot = document.getElementById("wishlistTopIcon");
const wishlistTopLabelRoot = document.getElementById("wishlistTopLabel");
const wishlistCountRoot = document.getElementById("wishlistCount");
const cartCountRoot = document.getElementById("cartCount");
const featureGridRoot = document.getElementById("featureGrid");
const filterBarRoot = document.getElementById("filterBar");
const searchInputRoot = document.getElementById("searchInput");
const sortSelectRoot = document.getElementById("sortSelect");
const catalogGridRoot = document.getElementById("catalogGrid");
const reviewGridRoot = document.getElementById("reviewGrid");
const expansionGridRoot = document.getElementById("expansionGrid");
const featureModalRoot = document.getElementById("featureModal");
const featureModalTitleRoot = document.getElementById("featureModalTitle");
const featureModalCopyRoot = document.getElementById("featureModalCopy");
const featureModalListRoot = document.getElementById("featureModalList");
const modalCloseRoot = document.getElementById("modalClose");

const productModalRoot = document.getElementById("productModal");
const productModalCloseRoot = document.getElementById("productModalClose");
const productModalCoverRoot = document.getElementById("productModalCover");
const productModalTagRoot = document.getElementById("productModalTag");
const productModalTitleRoot = document.getElementById("productModalTitle");
const productModalMetaRoot = document.getElementById("productModalMeta");
const productModalSummaryRoot = document.getElementById("productModalSummary");
const productHighlightsRoot = document.getElementById("productHighlights");
const productChaptersRoot = document.getElementById("productChapters");
const productRelatedRoot = document.getElementById("productRelated");
const productModalStatusRoot = document.getElementById("productModalStatus");
const productBuyNowBtnRoot = document.getElementById("productBuyNowBtn");
const productWishlistBtnRoot = document.getElementById("productWishlistBtn");

const wishlistDrawerRoot = document.getElementById("wishlistDrawer");
const wishlistCloseRoot = document.getElementById("wishlistClose");
const wishlistListRoot = document.getElementById("wishlistList");

const cartDrawerRoot = document.getElementById("cartDrawer");
const cartCloseRoot = document.getElementById("cartClose");
const cartListRoot = document.getElementById("cartList");
const cartItemsTotalRoot = document.getElementById("cartItemsTotal");
const cartSubtotalRoot = document.getElementById("cartSubtotal");
const cartTaxRoot = document.getElementById("cartTax");
const cartShippingRoot = document.getElementById("cartShipping");
const cartTotalRoot = document.getElementById("cartTotal");
const cartStatusRoot = document.getElementById("cartStatus");
const openCheckoutBtnRoot = document.getElementById("openCheckoutBtn");

const checkoutModalRoot = document.getElementById("checkoutModal");
const checkoutCloseRoot = document.getElementById("checkoutClose");
const checkoutBackBtnRoot = document.getElementById("checkoutBackBtn");
const checkoutNextBtnRoot = document.getElementById("checkoutNextBtn");
const checkoutErrorRoot = document.getElementById("checkoutError");
const checkoutSuccessRoot = document.getElementById("checkoutSuccess");
const checkoutTransactionIdRoot = document.getElementById("checkoutTransactionId");
const checkoutSuccessCloseRoot = document.getElementById("checkoutSuccessClose");
const checkoutSubtotalRoot = document.getElementById("checkoutSubtotal");
const checkoutTaxRoot = document.getElementById("checkoutTax");
const checkoutShippingRoot = document.getElementById("checkoutShipping");
const checkoutTotalRoot = document.getElementById("checkoutTotal");
const checkoutTotalLargeRoot = document.getElementById("checkoutTotalLarge");
const sessionTimerRoot = document.getElementById("sessionTimer");
const checkoutSidebarItemsRoot = document.getElementById("checkoutSidebarItems");
const checkoutReviewCustomerRoot = document.getElementById("checkoutReviewCustomer");
const checkoutReviewPaymentRoot = document.getElementById("checkoutReviewPayment");
const checkoutReviewItemsRoot = document.getElementById("checkoutReviewItems");
const languageSelectRoot = document.getElementById("languageSelect");
const currencySelectRoot = document.getElementById("currencySelect");
const themeToggleRoot = document.getElementById("themeToggle");
const themeIconRoot = document.getElementById("themeIcon");
const themeLabelRoot = document.getElementById("themeLabel");
const exchangeRateNoteRoot = document.getElementById("exchangeRateNote");
const shortcutsModalRoot = document.getElementById("shortcutsModal");
const shortcutsCloseRoot = document.getElementById("shortcutsClose");

/* ── Premium Feature DOM References ── */
const globalThemeToggleRoot = document.getElementById("globalThemeToggle");
const heroSpotlightRoot = document.getElementById("heroSpotlight");
const heroSectionRoot = document.getElementById("heroSection");
const toastContainerRoot = document.getElementById("toastContainer");
const testimonialCarouselRoot = document.getElementById("testimonialCarousel");
const testimonialTrackRoot = document.getElementById("testimonialTrack");
const testimonialDotsRoot = document.getElementById("testimonialDots");
const testimonialPrevRoot = document.getElementById("testimonialPrev");
const testimonialNextRoot = document.getElementById("testimonialNext");
const topbarRoot = document.querySelector(".topbar");

const customerFieldRoots = {
  name: document.getElementById("checkoutName"),
  email: document.getElementById("checkoutEmail"),
  phone: document.getElementById("checkoutPhone"),
  company: document.getElementById("checkoutCompany"),
  address: document.getElementById("checkoutAddress"),
  city: document.getElementById("checkoutCity"),
  country: document.getElementById("checkoutCountry"),
  postalCode: document.getElementById("checkoutPostalCode")
};

const paymentRoots = {
  methodBadge: document.getElementById("methodBadge"),
  liveTickerText: document.getElementById("liveTickerText"),
  cardNumber: document.getElementById("cardNumber"),
  cardExpiry: document.getElementById("cardExpiry"),
  cardCvv: document.getElementById("cardCvv"),
  cardHolder: document.getElementById("cardHolder"),
  upiId: document.getElementById("upiId"),
  netBankSelect: document.getElementById("netBankSelect"),
  walletVerifyBtn: document.getElementById("walletVerifyBtn"),
  walletStatus: document.getElementById("walletStatus"),
  walletError: document.getElementById("walletError"),
  codCode: document.getElementById("codCode"),
  codInput: document.getElementById("codInput")
};

const stepPillRoots = Array.from(document.querySelectorAll("[data-step-target]"));
const checkoutPanelRoots = Array.from(document.querySelectorAll("[data-step-panel]"));
const paymentMethodButtonRoots = Array.from(document.querySelectorAll("[data-payment-method]"));
const paymentViewRoots = Array.from(document.querySelectorAll("[data-method-view]"));

const state = {
  activeIndex: 0,
  selectedBookId: books[0].id,
  selectedCategory: "All",
  sortOrder: "top-rated",
  searchTerm: "",
  wishlist: new Set(),
  cart: new Map(),
  checkoutStep: 1,
  paymentMethod: "card",
  checkoutCurrency: "USD",
  checkoutLanguage: "en",
  checkoutTheme: "light",
  checkoutSecondsRemaining: checkoutSessionDuration,
  checkoutTimerId: 0,
  liveTickerId: 0,
  shelfOffset: 0,
  shelfLoopWidth: 0,
  shelfLastTime: 0,
  shelfPaused: false,
  featuredTickerId: 0,
  biometricVerified: false,
  processingOrder: false,
  catalogPage: 0,
  booksPerPage: 8
};

const categories = ["All", ...new Set(books.map((book) => book.category))];

const formatPrice = (price) => `$${price.toFixed(2)}`;
const formatCheckoutPrice = (amountUsd) => {
  const locale = languageLocales[state.checkoutLanguage] || "en-US";
  const rate = checkoutRates[state.checkoutCurrency] ?? 1;
  const convertedAmount = amountUsd * rate;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: state.checkoutCurrency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(convertedAmount);
};

const getBookById = (bookId) => books.find((book) => book.id === bookId);

const getCartEntries = () =>
  Array.from(state.cart.entries())
    .map(([bookId, quantity]) => {
      const book = getBookById(bookId);
      return book ? { book, quantity } : null;
    })
    .filter(Boolean);

const getCartAmounts = () => {
  const subtotal = getCartEntries().reduce((total, entry) => total + entry.book.price * entry.quantity, 0);
  const tax = subtotal ? Number((subtotal * 0.05).toFixed(2)) : 0;
  const shipping = subtotal ? (subtotal >= 120 ? 0 : 12) : 0;
  const total = subtotal + tax + shipping;
  return { subtotal, tax, shipping, total };
};

const createCoverMarkup = (book, options = {}) => {
  const { interactive = true, sizeClass = "" } = options;
  const tagName = interactive ? "button" : "div";
  const actionAttributes = interactive
    ? `type="button" data-book-id="${book.id}" aria-label="${book.title} by ${book.author}"`
    : `role="img" aria-label="${book.title} by ${book.author}"`;

  return `
    <${tagName} class="book-cover ${sizeClass} motif-${book.motif}" style="--accent: ${book.accent}; --surface: ${book.surface};" ${actionAttributes}>
      <span class="cover-topline">${brandName}</span>
      <span class="cover-tag">${book.tag}</span>
      <h3 class="cover-title">${book.title}</h3>
      <p class="cover-author">by ${book.author}</p>
      <span class="cover-edition">${book.edition}</span>
      <span class="cover-format">${book.format}</span>
      <span class="cover-length">${book.length}</span>
      <span class="cover-spine" aria-hidden="true"></span>
      <span class="cover-art" aria-hidden="true"></span>
    </${tagName}>
  `;
};

const renderCollection = (root, markup) => {
  if (root) {
    root.innerHTML = markup;
  }
};

const readWishlist = () => {
  try {
    const stored = window.localStorage.getItem(storageKeys.wishlist);
    const parsed = stored ? JSON.parse(stored) : [];
    state.wishlist = new Set(parsed.filter((value) => typeof value === "string"));
  } catch {
    state.wishlist = new Set();
  }
};

const readCart = () => {
  try {
    const stored = window.localStorage.getItem(storageKeys.cart);
    const parsed = stored ? JSON.parse(stored) : [];
    state.cart = new Map(
      parsed
        .filter((entry) => entry && typeof entry.bookId === "string" && Number.isInteger(entry.quantity) && entry.quantity > 0)
        .map((entry) => [entry.bookId, entry.quantity])
    );
  } catch {
    state.cart = new Map();
  }
};

const persistWishlist = () => {
  try {
    window.localStorage.setItem(storageKeys.wishlist, JSON.stringify(Array.from(state.wishlist)));
  } catch {
  }
};

const persistCart = () => {
  try {
    window.localStorage.setItem(
      storageKeys.cart,
      JSON.stringify(Array.from(state.cart.entries()).map(([bookId, quantity]) => ({ bookId, quantity })))
    );
  } catch {
  }
};

const syncBodyLock = () => {
  const hasOpenLayer = Array.from(document.querySelectorAll(".modal-shell, .drawer-shell")).some(
    (layer) => !layer.classList.contains("is-hidden")
  );
  document.body.classList.toggle("modal-open", hasOpenLayer);
};

const showLayer = (root) => {
  root.classList.remove("is-hidden");
  root.setAttribute("aria-hidden", "false");
  syncBodyLock();
};

const hideLayer = (root) => {
  root.classList.add("is-hidden");
  root.setAttribute("aria-hidden", "true");
  syncBodyLock();
};

const updateTopbarCounts = () => {
  const cartCount = Array.from(state.cart.values()).reduce((total, quantity) => total + quantity, 0);
  const wishlistCount = state.wishlist.size;
  wishlistCountRoot.textContent = String(wishlistCount);
  cartCountRoot.textContent = String(cartCount);

  if (wishlistTopIconRoot) {
    wishlistTopIconRoot.className = wishlistCount ? "fa-solid fa-heart" : "fa-regular fa-heart";
  }
  if (wishlistTopLabelRoot) {
    wishlistTopLabelRoot.textContent = wishlistCount ? "Saved" : "Wishlist";
  }
  if (floatingWishlistIconRoot) {
    floatingWishlistIconRoot.className = wishlistCount ? "fa-solid fa-heart" : "fa-regular fa-heart";
  }
  if (floatingWishlistCountRoot) {
    floatingWishlistCountRoot.textContent = String(wishlistCount);
    floatingWishlistCountRoot.classList.toggle("is-hidden", wishlistCount === 0);
  }
  if (floatingWishlistBtnRoot) {
    floatingWishlistBtnRoot.classList.toggle("is-active", wishlistCount > 0);
  }
};

const syncActiveCover = () => {
  const activeBookId = books[state.activeIndex].id;
  storySlidesRoot.querySelectorAll("[data-book-id]").forEach((cover) => {
    cover.classList.toggle("is-active", cover.dataset.bookId === activeBookId);
  });
};

const setActiveBook = (bookId) => {
  const nextIndex = books.findIndex((book) => book.id === bookId);
  if (nextIndex === -1) {
    return;
  }
  state.activeIndex = nextIndex;
  state.selectedBookId = bookId;
  updateActiveMeta();
};

const updateActiveMeta = () => {
  const book = books[state.activeIndex];
  activeMetaRoot.innerHTML = `
    <p class="active-label">${book.tag}</p>
    <h2>${book.title}</h2>
    <p class="active-author">${book.author}</p>
    <p class="active-summary">${book.description}</p>
    <div class="active-meta-row">
      <span>${book.category}</span>
      <span>${book.length}</span>
      <span>${formatPrice(book.price)}</span>
      <span>Rated ${book.rating}/5</span>
    </div>
    <div class="active-actions">
      <button class="control-btn control-btn--solid" type="button" data-active-action="product">Open product page</button>
      <button class="control-btn" type="button" data-active-action="buy">Buy featured title</button>
    </div>
  `;
  activeCountRoot.textContent = `Featured ${state.activeIndex + 1} of ${books.length}. Premium books for kids, students, professionals, and everyone.`;
  syncActiveCover();
};

const renderShelf = () => {
  const loopMarkup = books.map((book) => createCoverMarkup(book, { sizeClass: "book-cover--hero" })).join("");
  renderCollection(storySlidesRoot, `<div class="gallery-loop">${loopMarkup}</div><div class="gallery-loop" aria-hidden="true">${loopMarkup}</div>`);
};

const renderFeatures = () => {
  renderCollection(
    featureGridRoot,
    features.map((feature, index) => `
      <button class="feature-card" type="button" data-feature-index="${index}">
        <span class="feature-icon" aria-hidden="true">${feature.icon}</span>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </button>
    `).join("")
  );
};

const renderExpansion = () => {
  renderCollection(
    expansionGridRoot,
    premiumUpdates
      .map(
        (item) => `
          <article class="expansion-card">
            <div class="expansion-icon"><i class="${item.icon}" aria-hidden="true"></i></div>
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
            <button class="control-btn" type="button" data-expansion-feature="${item.featureLink}">
              ${item.cta}
            </button>
          </article>
        `
      )
      .join("")
  );
};

const renderGalleryPhotos = () => {
  renderCollection(
    galleryPhotoGridRoot,
    shelfVisuals
      .map(
        (item) => `
          <button class="gallery-photo-card" type="button" data-gallery-feature="${item.featureLink}">
            <img src="${item.src}" alt="${item.title}">
            <span class="gallery-photo-overlay"></span>
            <span class="gallery-photo-copy">
              <strong>${item.title}</strong>
              <small>${item.copy}</small>
            </span>
          </button>
        `
      )
      .join("")
  );
};

const renderGalleryPromotions = () => {
  renderCollection(
    galleryPromoGridRoot,
    galleryPromotions
      .map(
        (item, index) => `
          <article class="gallery-promo-card" style="--promo-stagger: ${index};">
            <p class="gallery-promo-badge">${item.badge}</p>
            <h4>${item.title}</h4>
            <p>${item.copy}</p>
            <button class="control-btn" type="button" data-promo-feature="${item.featureLink}">
              ${item.cta}
            </button>
          </article>
        `
      )
      .join("")
  );
};

const renderFilters = () => {
  const counts = {};
  books.forEach((b) => { counts[b.category] = (counts[b.category] || 0) + 1; });
  renderCollection(
    filterBarRoot,
    categories.map((category) => {
      const count = category === "All" ? books.length : (counts[category] || 0);
      return `
      <button class="filter-chip ${state.selectedCategory === category ? "is-active" : ""}" type="button" data-category="${category}">
        ${category} <span class="chip-count">${count}</span>
      </button>
    `;
    }).join("")
  );
};
const getFilteredBooks = () => {
  const filtered = books.filter((book) => {
    const matchesCategory = state.selectedCategory === "All" || book.category === state.selectedCategory;
    const searchHaystack = `${book.title} ${book.author} ${book.category} ${book.summary} ${book.description}`.toLowerCase();
    const matchesSearch = searchHaystack.includes(state.searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  filtered.sort((left, right) => {
    if (state.sortOrder === "newest") {
      return right.published - left.published;
    }
    if (state.sortOrder === "price") {
      return left.price - right.price;
    }
    return right.rating - left.rating || right.published - left.published;
  });

  return filtered;
};

const renderCatalog = () => {
  const filteredBooks = getFilteredBooks();
  const totalPages = Math.ceil(filteredBooks.length / state.booksPerPage);
  if (state.catalogPage >= totalPages) state.catalogPage = Math.max(0, totalPages - 1);
  const start = state.catalogPage * state.booksPerPage;
  const pageBooks = filteredBooks.slice(start, start + state.booksPerPage);

  if (!filteredBooks.length) {
    catalogGridRoot.innerHTML = `<article class="empty-state"><h3>No matching books found</h3><p>Try another category, author, or search term.</p></article>`;
    const paginationRoot = document.getElementById("catalogPagination");
    if (paginationRoot) paginationRoot.innerHTML = "";
    return;
  }

  catalogGridRoot.innerHTML = pageBooks.map((book) => `
    <article class="catalog-card">
      <div class="catalog-cover">${createCoverMarkup(book, { sizeClass: "book-cover--catalog" })}</div>
      <div class="catalog-copy">
        <p class="catalog-kicker">${book.category}</p>
        <h3>${book.title}</h3>
        <p class="catalog-author">${book.author}</p>
        <p class="catalog-summary">${book.summary}</p>
        <div class="catalog-meta">
          <span>${book.format}</span>
          <span>${book.length}</span>
          <span>${book.rating}/5 rating</span>
          <strong>${formatPrice(book.price)}</strong>
        </div>
        <div class="catalog-actions">
          <button class="control-btn control-btn--solid" type="button" data-buy-book="${book.id}">Buy now</button>
          <button class="control-btn control-btn--wishlist ${state.wishlist.has(book.id) ? "is-active" : ""}" type="button" data-wishlist-book="${book.id}">
            <i class="fa-${state.wishlist.has(book.id) ? "solid" : "regular"} fa-heart" aria-hidden="true"></i>
            <span>${state.wishlist.has(book.id) ? "Saved" : "Wishlist"}</span>
          </button>
          <button class="control-btn" type="button" data-product-book="${book.id}">View product page</button>
        </div>
      </div>
    </article>
  `).join("");

  /* Pagination controls */
  const paginationRoot = document.getElementById("catalogPagination");
  if (paginationRoot && totalPages > 1) {
    const pageNums = [];
    for (let i = 0; i < totalPages; i++) pageNums.push(i);
    paginationRoot.innerHTML = `
      <button class="pagination-btn pagination-prev" type="button" ${state.catalogPage === 0 ? "disabled" : ""} data-page-dir="prev">
        <i class="fa-solid fa-chevron-left"></i> Previous
      </button>
      <div class="pagination-numbers">
        ${pageNums.map(i => `<button class="pagination-num ${i === state.catalogPage ? "is-active" : ""}" type="button" data-page-num="${i}">${i + 1}</button>`).join("")}
      </div>
      <button class="pagination-btn pagination-next" type="button" ${state.catalogPage >= totalPages - 1 ? "disabled" : ""} data-page-dir="next">
        Next <i class="fa-solid fa-chevron-right"></i>
      </button>
    `;
  } else if (paginationRoot) {
    paginationRoot.innerHTML = "";
  }
};

const renderReviews = () => {
  renderCollection(reviewGridRoot, reviews.map((review) => `
    <article class="review-card">
      <p class="review-rating">Rating ${review.rating}/5</p>
      <p class="review-quote">${review.quote}</p>
      <p class="review-name">${review.name}</p>
      <p class="review-role">${review.role}</p>
    </article>
  `).join(""));
};

const renderWishlist = () => {
  const wishlistBooks = books.filter((book) => state.wishlist.has(book.id));

  if (!wishlistBooks.length) {
    wishlistListRoot.innerHTML = `<article class="empty-state"><h3>Your wishlist is empty</h3><p>Save technical books from the catalog or product page to keep them here.</p></article>`;
    return;
  }

  wishlistListRoot.innerHTML = wishlistBooks.map((book) => `
    <article class="drawer-item drawer-item--media">
      <div class="drawer-media">
        ${createCoverMarkup(book, { interactive: false, sizeClass: "book-cover--wishlist" })}
      </div>
      <div class="drawer-body">
        <p class="drawer-kicker">${book.category}</p>
        <h3>${book.title}</h3>
        <p>${book.author} . ${formatCheckoutPrice(book.price)}</p>
      </div>
      <div class="drawer-actions">
        <button class="control-btn" type="button" data-product-book="${book.id}">Open</button>
        <button class="control-btn" type="button" data-remove-wishlist="${book.id}">Remove</button>
      </div>
    </article>
  `).join("");
};

const renderCart = () => {
  const cartEntries = getCartEntries();
  const amounts = getCartAmounts();
  const itemCount = cartEntries.reduce((total, entry) => total + entry.quantity, 0);

  cartItemsTotalRoot.textContent = String(itemCount);
  cartSubtotalRoot.textContent = formatCheckoutPrice(amounts.subtotal);
  cartTaxRoot.textContent = formatCheckoutPrice(amounts.tax);
  cartShippingRoot.textContent = formatCheckoutPrice(amounts.shipping);
  cartTotalRoot.textContent = formatCheckoutPrice(amounts.total);
  openCheckoutBtnRoot.disabled = cartEntries.length === 0;

  if (!cartEntries.length) {
    cartListRoot.innerHTML = `<article class="empty-state"><h3>Your cart is empty</h3><p>Add titles from the catalog or product page to begin checkout.</p></article>`;
    return;
  }

  cartListRoot.innerHTML = cartEntries.map(({ book, quantity }) => `
    <article class="drawer-item">
      <div>
        <p class="drawer-kicker">${book.category}</p>
        <h3>${book.title}</h3>
        <p>${formatCheckoutPrice(book.price)} each</p>
      </div>
      <div class="drawer-actions drawer-actions--column">
        <div class="quantity-row">
          <button class="qty-btn" type="button" data-cart-decrease="${book.id}">-</button>
          <span>${quantity}</span>
          <button class="qty-btn" type="button" data-cart-increase="${book.id}">+</button>
        </div>
        <div class="drawer-actions">
          <button class="control-btn" type="button" data-product-book="${book.id}">Open</button>
          <button class="control-btn" type="button" data-cart-remove="${book.id}">Remove</button>
        </div>
      </div>
    </article>
  `).join("");
};

const renderCheckoutSidebarItems = () => {
  const cartEntries = getCartEntries();

  if (!cartEntries.length) {
    const emptyMarkup = `<article class="empty-state empty-state--compact"><h3>No items selected</h3><p>Add a book before opening secure checkout.</p></article>`;
    checkoutSidebarItemsRoot.innerHTML = emptyMarkup;
    checkoutReviewItemsRoot.innerHTML = emptyMarkup;
    return;
  }

  const markup = cartEntries.map(({ book, quantity }) => `
    <article class="checkout-item">
      <div>
        <p class="drawer-kicker">${book.category}</p>
        <h3>${book.title}</h3>
        <p>${quantity} x ${formatCheckoutPrice(book.price)}</p>
      </div>
      <strong>${formatCheckoutPrice(book.price * quantity)}</strong>
    </article>
  `).join("");

  checkoutSidebarItemsRoot.innerHTML = markup;
  checkoutReviewItemsRoot.innerHTML = markup;
};

const renderCheckoutSummary = () => {
  const amounts = getCartAmounts();
  checkoutSubtotalRoot.textContent = formatCheckoutPrice(amounts.subtotal);
  checkoutTaxRoot.textContent = formatCheckoutPrice(amounts.tax);
  checkoutShippingRoot.textContent = formatCheckoutPrice(amounts.shipping);
  checkoutTotalRoot.textContent = formatCheckoutPrice(amounts.total);
  checkoutTotalLargeRoot.textContent = formatCheckoutPrice(amounts.total);
  renderCheckoutSidebarItems();
  updateCheckoutPrimaryButton();
  renderCheckoutReview();
};

const refreshProductWishlistState = () => {
  const selectedBook = getBookById(state.selectedBookId);
  if (selectedBook) {
    const isSaved = state.wishlist.has(selectedBook.id);
    productWishlistBtnRoot.classList.toggle("is-active", isSaved);
    productWishlistBtnRoot.innerHTML = `
      <i class="fa-${isSaved ? "solid" : "regular"} fa-heart" aria-hidden="true"></i>
      <span>${isSaved ? "Saved in wishlist" : "Add to wishlist"}</span>
    `;
  }
};

const refreshAll = () => {
  renderFilters();
  renderCatalog();
  renderWishlist();
  renderCart();
  renderCheckoutSummary();
  updateTopbarCounts();
  refreshProductWishlistState();
};

const getRelatedBooks = (book) => book.related.map((relatedBookId) => getBookById(relatedBookId)).filter(Boolean).slice(0, 3);

const openFeatureModal = (featureIndex) => {
  const feature = features[featureIndex];
  if (!feature) {
    return;
  }
  featureModalTitleRoot.textContent = feature.title;
  featureModalCopyRoot.textContent = feature.description;
  featureModalListRoot.innerHTML = feature.details.map((detail) => `<li>${detail}</li>`).join("");
  showLayer(featureModalRoot);
};

const closeFeatureModal = () => hideLayer(featureModalRoot);

const openProductModal = (bookId) => {
  const book = getBookById(bookId);
  if (!book) {
    return;
  }

  state.selectedBookId = bookId;
  setActiveBook(bookId);
  productModalCoverRoot.innerHTML = createCoverMarkup(book, { interactive: false, sizeClass: "book-cover--product" });
  productModalTagRoot.textContent = book.tag;
  productModalTitleRoot.textContent = book.title;
  productModalMetaRoot.textContent = `${book.author} . ${book.category} . ${book.format} . ${book.length} . ${formatPrice(book.price)}`;
  productModalSummaryRoot.textContent = book.description;
  productHighlightsRoot.innerHTML = book.highlights.map((item) => `<li>${item}</li>`).join("");
  productChaptersRoot.innerHTML = book.chapters.map((item) => `<li>${item}</li>`).join("");
  productRelatedRoot.innerHTML = getRelatedBooks(book).map((relatedBook) => `
    <button class="related-card" type="button" data-related-book="${relatedBook.id}">
      <p class="drawer-kicker">${relatedBook.category}</p>
      <h4>${relatedBook.title}</h4>
      <p>${relatedBook.author}</p>
      <strong>${formatPrice(relatedBook.price)}</strong>
    </button>
  `).join("");
  productModalStatusRoot.textContent = "";
  refreshProductWishlistState();
  showLayer(productModalRoot);
};

const closeProductModal = () => hideLayer(productModalRoot);
const openDrawer = (drawerRoot) => showLayer(drawerRoot);
const closeDrawer = (drawerRoot) => hideLayer(drawerRoot);
const openShortcuts = () => {
  if (shortcutsModalRoot) showLayer(shortcutsModalRoot);
};

const closeShortcuts = () => {
  if (shortcutsModalRoot) hideLayer(shortcutsModalRoot);
};
const bindBackdropClose = (root, closeAttribute, closeHandler) => {
  root.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLElement) || !event.target.hasAttribute(closeAttribute)) {
      return;
    }
    closeHandler();
  });
};

/* ═══════════════════════════════════════════════════
   FEATURE 6: Toast Notification System
   ═══════════════════════════════════════════════════ */
const showToast = (options = {}) => {
  const { title = "", message = "", type = "success", duration = 3000 } = options;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  const iconMap = {
    cart: `<span class="toast-icon toast-icon--cart"><i class="fa-solid fa-cart-plus"></i></span>`,
    wishlist: `<span class="toast-icon toast-icon--wishlist"><i class="fa-solid fa-heart"></i></span>`,
    success: `<span class="toast-icon toast-icon--success"><i class="fa-solid fa-circle-check"></i></span>`,
    error: `<span class="toast-icon toast-icon--error"><i class="fa-solid fa-circle-xmark"></i></span>`
  };

  toast.innerHTML = `
    ${iconMap[type] || iconMap.success}
    <div class="toast-body">
      <p class="toast-title">${title}</p>
      ${message ? `<p class="toast-message">${message}</p>` : ""}
    </div>
    <div class="toast-progress" style="animation-duration:${duration}ms"></div>
  `;

  if (toastContainerRoot) toastContainerRoot.appendChild(toast);

  const removeTimer = setTimeout(() => {
    toast.classList.add("is-leaving");
    toast.addEventListener("animationend", () => toast.remove());
  }, duration);

  toast.addEventListener("click", () => {
    clearTimeout(removeTimer);
    toast.classList.add("is-leaving");
    toast.addEventListener("animationend", () => toast.remove());
  });
};

/* ═══════════════════════════════════════════════════
   FEATURE 2: Cart Micro-Interaction (fly ghost)
   ═══════════════════════════════════════════════════ */
const triggerBadgeBounce = (badgeRoot) => {
  if (!badgeRoot) return;
  badgeRoot.classList.remove("is-bouncing");
  void badgeRoot.offsetWidth;
  badgeRoot.classList.add("is-bouncing");
};

const addToCart = (bookId, quantity = 1) => {
  const book = books.find((b) => b.id === bookId);
  const currentQuantity = state.cart.get(bookId) ?? 0;
  state.cart.set(bookId, currentQuantity + quantity);
  persistCart();
  refreshAll();

  // Badge bounce
  triggerBadgeBounce(cartCountRoot);

  // Toast
  if (book) {
    showToast({
      title: `${book.title} added to cart`,
      message: `Qty: ${currentQuantity + quantity} · ${book.author}`,
      type: "cart"
    });
  }
};

const updateCartQuantity = (bookId, delta) => {
  const currentQuantity = state.cart.get(bookId) ?? 0;
  const nextQuantity = currentQuantity + delta;
  if (nextQuantity <= 0) {
    state.cart.delete(bookId);
  } else {
    state.cart.set(bookId, nextQuantity);
  }
  persistCart();
  refreshAll();
};

const removeFromCart = (bookId) => {
  state.cart.delete(bookId);
  persistCart();
  refreshAll();
};

const toggleWishlist = (bookId) => {
  const book = books.find((b) => b.id === bookId);
  if (state.wishlist.has(bookId)) {
    state.wishlist.delete(bookId);
  } else {
    state.wishlist.add(bookId);
  }
  persistWishlist();
  refreshAll();

  // Badge bounce
  triggerBadgeBounce(wishlistCountRoot);

  // Toast
  const isSaved = state.wishlist.has(bookId);
  if (book) {
    showToast({
      title: isSaved ? `${book.title} saved` : `${book.title} removed`,
      message: isSaved ? "Added to your wishlist" : "Removed from wishlist",
      type: "wishlist"
    });
  }

  return isSaved;
};

const buyNow = (bookId) => {
  addToCart(bookId, 1);
  openCheckout();
};
const updateShelfMetrics = () => {
  const firstLoop = storySlidesRoot.querySelector(".gallery-loop");
  const trackStyles = window.getComputedStyle(storySlidesRoot);
  const gap = parseFloat(trackStyles.gap || "0");
  if (!firstLoop) {
    state.shelfLoopWidth = 0;
    return;
  }
  state.shelfLoopWidth = firstLoop.getBoundingClientRect().width + gap;
  if (state.shelfOffset >= state.shelfLoopWidth && state.shelfLoopWidth > 0) {
    state.shelfOffset %= state.shelfLoopWidth;
  }
};

const animateShelf = (timestamp) => {
  if (!state.shelfLastTime) {
    state.shelfLastTime = timestamp;
  }
  const delta = (timestamp - state.shelfLastTime) / 1000;
  state.shelfLastTime = timestamp;
  if (!state.shelfPaused && state.shelfLoopWidth > 0) {
    state.shelfOffset += shelfSpeed * delta;
    if (state.shelfOffset >= state.shelfLoopWidth) {
      state.shelfOffset -= state.shelfLoopWidth;
    }
    storySlidesRoot.style.transform = `translateX(-${state.shelfOffset}px)`;
  }
  window.requestAnimationFrame(animateShelf);
};

const startFeaturedRotation = () => {
  window.clearInterval(state.featuredTickerId);
  state.featuredTickerId = window.setInterval(() => {
    state.activeIndex = (state.activeIndex + 1) % books.length;
    state.selectedBookId = books[state.activeIndex].id;
    updateActiveMeta();
  }, 4200);
};

const getMethodCopy = () => paymentMethodCopy[state.paymentMethod] || paymentMethodCopy.card;

const updateCheckoutPrimaryButton = () => {
  const amounts = getCartAmounts();
  if (state.checkoutStep === 1) {
    checkoutNextBtnRoot.textContent = "Continue to payment";
    return;
  }
  if (state.checkoutStep === 2) {
    checkoutNextBtnRoot.textContent = "Review order";
    return;
  }
  checkoutNextBtnRoot.textContent = getMethodCopy().buttonLabel(formatCheckoutPrice(amounts.total));
};

const updateCheckoutSessionLabel = () => {
  const minutes = String(Math.floor(state.checkoutSecondsRemaining / 60)).padStart(2, "0");
  const seconds = String(state.checkoutSecondsRemaining % 60).padStart(2, "0");
  sessionTimerRoot.textContent = `${minutes}:${seconds}`;
};

const updateCheckoutUtilityMeta = () => {
  const languageLabel = state.checkoutLanguage === "es"
    ? "Spanish"
    : state.checkoutLanguage === "fr"
      ? "French"
      : "English";
  const themeLabel = state.checkoutTheme === "dark" ? "Light Theme" : "Dark Theme";

  checkoutModalRoot.classList.toggle("checkout-modal--dark", state.checkoutTheme === "dark");
  themeLabelRoot.textContent = themeLabel;
  themeIconRoot.className = state.checkoutTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  exchangeRateNoteRoot.textContent = `Checkout language: ${languageLabel}. Currency: ${state.checkoutCurrency}.`;
};

const stopCheckoutTimer = () => {
  if (state.checkoutTimerId) {
    window.clearInterval(state.checkoutTimerId);
    state.checkoutTimerId = 0;
  }
};

const startCheckoutTimer = () => {
  stopCheckoutTimer();
  state.checkoutSecondsRemaining = checkoutSessionDuration;
  updateCheckoutSessionLabel();
  state.checkoutTimerId = window.setInterval(() => {
    if (state.checkoutSecondsRemaining <= 0) {
      stopCheckoutTimer();
      checkoutErrorRoot.textContent = "Session expired. Reopen checkout to continue.";
      checkoutNextBtnRoot.disabled = true;
      return;
    }
    state.checkoutSecondsRemaining -= 1;
    updateCheckoutSessionLabel();
  }, 1000);
};

const updateLiveTicker = () => {
  const name = liveFeedNames[Math.floor(Math.random() * liveFeedNames.length)];
  const city = liveFeedCities[Math.floor(Math.random() * liveFeedCities.length)];
  const method = getMethodCopy().tickerLabel;
  const amount = formatCheckoutPrice(72 + Math.floor(Math.random() * 44));
  paymentRoots.liveTickerText.textContent = `${name} from ${city} just paid ${amount} using ${method}.`;
};

const stopLiveTicker = () => {
  if (state.liveTickerId) {
    window.clearInterval(state.liveTickerId);
    state.liveTickerId = 0;
  }
};

const startLiveTicker = () => {
  stopLiveTicker();
  updateLiveTicker();
  state.liveTickerId = window.setInterval(updateLiveTicker, 4200);
};

const setCheckoutStep = (nextStep) => {
  state.checkoutStep = nextStep;
  checkoutErrorRoot.textContent = "";
  checkoutBackBtnRoot.hidden = nextStep === 1;
  stepPillRoots.forEach((pill) => pill.classList.toggle("is-active", Number(pill.dataset.stepTarget) === nextStep));
  checkoutPanelRoots.forEach((panel) => panel.classList.toggle("is-active", Number(panel.dataset.stepPanel) === nextStep));
  updateCheckoutPrimaryButton();
  renderCheckoutReview();
};

const clearFieldMessage = (fieldRoot) => {
  const group = fieldRoot.closest(".form-group");
  if (!group) {
    return;
  }
  group.classList.remove("has-error");
  const errorRoot = group.querySelector(".field-error");
  if (errorRoot) {
    errorRoot.textContent = "";
  }
};

const setFieldMessage = (fieldRoot, message) => {
  const group = fieldRoot.closest(".form-group");
  if (!group) {
    return;
  }
  group.classList.add("has-error");
  const errorRoot = group.querySelector(".field-error");
  if (errorRoot) {
    errorRoot.textContent = message;
  }
};

const clearCheckoutErrors = () => {
  document.querySelectorAll(".checkout-form .form-group").forEach((group) => group.classList.remove("has-error"));
  document.querySelectorAll(".checkout-form .field-error").forEach((errorRoot) => {
    errorRoot.textContent = "";
  });
  paymentRoots.walletError.textContent = "";
};

const validateCustomerStep = () => {
  clearCheckoutErrors();
  let isValid = true;
  const rules = [
    { field: customerFieldRoots.name, check: (value) => value.trim().split(/\s+/).filter(Boolean).length >= 2, message: "Enter the full customer name." },
    { field: customerFieldRoots.email, check: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()), message: "Enter a valid email address." },
    { field: customerFieldRoots.phone, check: (value) => value.replace(/[^\d]/g, "").length >= 10, message: "Enter a valid phone number." },
    { field: customerFieldRoots.address, check: (value) => value.trim().length >= 6, message: "Enter the street address." },
    { field: customerFieldRoots.city, check: (value) => value.trim().length >= 2, message: "Enter the city." },
    { field: customerFieldRoots.country, check: (value) => value.trim().length >= 2, message: "Enter the country." },
    { field: customerFieldRoots.postalCode, check: (value) => value.trim().length >= 4, message: "Enter the postal code." }
  ];
  rules.forEach(({ field, check, message }) => {
    if (!check(field.value)) {
      setFieldMessage(field, message);
      isValid = false;
    }
  });
  return isValid;
};

const luhnCheck = (number) => {
  let sum = 0;
  let shouldDouble = false;
  for (let index = number.length - 1; index >= 0; index -= 1) {
    let digit = Number(number[index]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
};

const validateCardPayment = () => {
  const digits = paymentRoots.cardNumber.value.replace(/\s/g, "");
  let isValid = true;
  if (digits.length < 15 || digits.length > 19 || !luhnCheck(digits)) {
    setFieldMessage(paymentRoots.cardNumber, "Enter a valid card number.");
    isValid = false;
  }
  const expiryMatch = paymentRoots.cardExpiry.value.match(/^(0[1-9]|1[0-2])\/(\d{2})$/);
  if (!expiryMatch) {
    setFieldMessage(paymentRoots.cardExpiry, "Enter a valid future expiry date.");
    isValid = false;
  } else {
    const expiryMonth = Number(expiryMatch[1]);
    const expiryYear = Number(`20${expiryMatch[2]}`);
    const expiryDate = new Date(expiryYear, expiryMonth, 0, 23, 59, 59);
    if (expiryDate < new Date()) {
      setFieldMessage(paymentRoots.cardExpiry, "Enter a valid future expiry date.");
      isValid = false;
    }
  }
  if (!/^\d{3,4}$/.test(paymentRoots.cardCvv.value)) {
    setFieldMessage(paymentRoots.cardCvv, "Enter a valid 3 or 4 digit CVV.");
    isValid = false;
  }
  if (paymentRoots.cardHolder.value.trim().split(/\s+/).filter(Boolean).length < 2) {
    setFieldMessage(paymentRoots.cardHolder, "Enter the full cardholder name.");
    isValid = false;
  }
  return isValid;
};

const validatePaymentStep = () => {
  clearCheckoutErrors();
  if (state.paymentMethod === "card") {
    return validateCardPayment();
  }
  if (state.paymentMethod === "upi") {
    const upiValue = paymentRoots.upiId.value.trim();
    if (!/^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-]{2,}$/.test(upiValue)) {
      setFieldMessage(paymentRoots.upiId, "Enter a valid UPI ID.");
      return false;
    }
    return true;
  }
  if (state.paymentMethod === "netbanking") {
    if (!paymentRoots.netBankSelect.value) {
      setFieldMessage(paymentRoots.netBankSelect, "Select a bank to continue.");
      return false;
    }
    return true;
  }
  if (state.paymentMethod === "wallets") {
    if (!state.biometricVerified) {
      paymentRoots.walletError.textContent = "Complete biometric verification to pay with wallet.";
      return false;
    }
    return true;
  }
  if (state.paymentMethod === "cod") {
    if (paymentRoots.codInput.value.trim().toUpperCase() !== paymentRoots.codCode.textContent) {
      setFieldMessage(paymentRoots.codInput, "Enter the correct verification code.");
      return false;
    }
    return true;
  }
  return false;
};
const renderCheckoutReview = () => {
  const customerName = customerFieldRoots.name.value.trim() || "Not provided";
  const customerEmail = customerFieldRoots.email.value.trim() || "Not provided";
  const customerPhone = customerFieldRoots.phone.value.trim() || "Not provided";
  const customerCompany = customerFieldRoots.company.value.trim() || "Independent buyer";
  const customerAddress = [
    customerFieldRoots.address.value.trim(),
    customerFieldRoots.city.value.trim(),
    customerFieldRoots.country.value.trim(),
    customerFieldRoots.postalCode.value.trim()
  ].filter(Boolean).join(", ");

  checkoutReviewCustomerRoot.innerHTML = `
    <p><strong>${customerName}</strong></p>
    <p>${customerEmail}</p>
    <p>${customerPhone}</p>
    <p>${customerCompany}</p>
    <p>${customerAddress || "Address not provided yet."}</p>
  `;

  checkoutReviewPaymentRoot.innerHTML = `
    <p><strong>${getMethodCopy().label}</strong></p>
    <p>${getMethodCopy().badge}</p>
    <p>Session timer: ${sessionTimerRoot.textContent}</p>
  `;
};

const resetCheckoutSuccess = () => {
  checkoutSuccessRoot.classList.add("is-hidden");
  checkoutSuccessRoot.setAttribute("aria-hidden", "true");
};

const openCheckout = () => {
  if (!state.cart.size) {
    cartStatusRoot.textContent = "Add a technical book to the cart before checkout.";
    return;
  }
  cartStatusRoot.textContent = "";
  checkoutErrorRoot.textContent = "";
  resetCheckoutSuccess();
  checkoutNextBtnRoot.disabled = false;
  state.processingOrder = false;
  setCheckoutStep(1);
  renderCheckoutSummary();
  updatePaymentMethodUI();
  startCheckoutTimer();
  startLiveTicker();
  showLayer(checkoutModalRoot);
};

const closeCheckout = () => {
  stopCheckoutTimer();
  stopLiveTicker();
  hideLayer(checkoutModalRoot);
};

const generateTransactionId = () => {
  const stamp = String(Date.now()).slice(-6);
  const token = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `#PV-${stamp}${token}`;
};

const completeOrder = () => {
  if (state.processingOrder) {
    return;
  }
  state.processingOrder = true;
  checkoutErrorRoot.textContent = "Processing payment...";
  checkoutNextBtnRoot.disabled = true;
  window.setTimeout(() => {
    checkoutTransactionIdRoot.textContent = generateTransactionId();
    checkoutErrorRoot.textContent = "";
    checkoutSuccessRoot.classList.remove("is-hidden");
    checkoutSuccessRoot.setAttribute("aria-hidden", "false");
    state.cart.clear();
    persistCart();
    refreshAll();
    stopCheckoutTimer();
    stopLiveTicker();

    showToast({
      title: "Order placed successfully!",
      message: `Transaction: ${checkoutTransactionIdRoot.textContent}`,
      type: "success",
      duration: 5000
    });

    /* Premium confetti + success sound */
    if (typeof launchConfetti === "function") launchConfetti();
    if (typeof playSuccessSound === "function") playSuccessSound();
  }, 1000);
};

const updatePaymentMethodUI = () => {
  paymentMethodButtonRoots.forEach((buttonRoot) => {
    buttonRoot.classList.toggle("is-active", buttonRoot.dataset.paymentMethod === state.paymentMethod);
  });
  paymentViewRoots.forEach((viewRoot) => {
    viewRoot.classList.toggle("is-active", viewRoot.dataset.methodView === state.paymentMethod);
  });
  paymentRoots.methodBadge.textContent = getMethodCopy().badge;
  updateLiveTicker();
  updateCheckoutPrimaryButton();
  renderCheckoutReview();
};

const handleCheckoutAdvance = () => {
  if (!state.cart.size) {
    checkoutErrorRoot.textContent = "Your cart is empty.";
    return;
  }
  if (state.checkoutSecondsRemaining <= 0) {
    checkoutErrorRoot.textContent = "Session expired. Reopen checkout to continue.";
    return;
  }
  if (state.checkoutStep === 1) {
    if (!validateCustomerStep()) {
      checkoutErrorRoot.textContent = "Complete the customer details before continuing.";
      return;
    }
    setCheckoutStep(2);
    return;
  }
  if (state.checkoutStep === 2) {
    if (!validatePaymentStep()) {
      checkoutErrorRoot.textContent = "Fix the payment details before reviewing the order.";
      return;
    }
    setCheckoutStep(3);
    return;
  }
  if (!validateCustomerStep() || !validatePaymentStep()) {
    checkoutErrorRoot.textContent = "Review the customer and payment details before paying.";
    return;
  }
  completeOrder();
};

const jumpToCheckoutStep = (stepNumber) => {
  if (stepNumber === 1) {
    setCheckoutStep(1);
    return;
  }
  if (stepNumber === 2) {
    if (!validateCustomerStep()) {
      checkoutErrorRoot.textContent = "Complete the customer details before opening payment.";
      return;
    }
    setCheckoutStep(2);
    return;
  }
  if (!validateCustomerStep() || !validatePaymentStep()) {
    checkoutErrorRoot.textContent = "Finish the customer and payment details before reviewing.";
    return;
  }
  setCheckoutStep(3);
};

const handleWishlistAction = (bookId, statusRoot) => {
  const isSaved = toggleWishlist(bookId);
  const book = getBookById(bookId);
  if (statusRoot && book) {
    statusRoot.textContent = isSaved ? `${book.title} saved to wishlist.` : `${book.title} removed from wishlist.`;
  }
};

const initializePaymentInputs = () => {
  paymentRoots.cardNumber.addEventListener("input", () => {
    const digits = paymentRoots.cardNumber.value.replace(/[^\d]/g, "").slice(0, 19);
    paymentRoots.cardNumber.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    clearFieldMessage(paymentRoots.cardNumber);
  });
  paymentRoots.cardExpiry.addEventListener("input", () => {
    const digits = paymentRoots.cardExpiry.value.replace(/[^\d]/g, "").slice(0, 4);
    paymentRoots.cardExpiry.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    clearFieldMessage(paymentRoots.cardExpiry);
  });
  paymentRoots.cardCvv.addEventListener("input", () => clearFieldMessage(paymentRoots.cardCvv));
  paymentRoots.cardHolder.addEventListener("input", () => clearFieldMessage(paymentRoots.cardHolder));
  paymentRoots.upiId.addEventListener("input", () => clearFieldMessage(paymentRoots.upiId));
  paymentRoots.netBankSelect.addEventListener("change", () => clearFieldMessage(paymentRoots.netBankSelect));
  paymentRoots.codInput.addEventListener("input", () => clearFieldMessage(paymentRoots.codInput));
  Object.values(customerFieldRoots).forEach((fieldRoot) => {
    fieldRoot.addEventListener("input", () => clearFieldMessage(fieldRoot));
  });
};

const initialize = () => {
  readWishlist();
  readCart();
  pageWatermarkRoot.textContent = brandName;
  footerYearRoot.textContent = String(new Date().getFullYear());
  sortSelectRoot.value = state.sortOrder;
  languageSelectRoot.value = state.checkoutLanguage;
  currencySelectRoot.value = state.checkoutCurrency;

  /* Feature 3: Show skeletons briefly before content */
  renderSkeletons(catalogGridRoot, 6);
  renderSkeletons(featureGridRoot, 3);
  renderSkeletons(expansionGridRoot, 3);

  renderShelf();
  renderGalleryPhotos();
  renderGalleryPromotions();

  /* Reveal real content after a brief skeleton flash */
  setTimeout(() => {
    renderExpansion();
    renderFeatures();
    renderReviews();
    renderCatalog();
  }, 400);

  refreshAll();
  updateActiveMeta();
  updateShelfMetrics();
  startFeaturedRotation();
  updatePaymentMethodUI();
  updateCheckoutSessionLabel();
  updateCheckoutUtilityMeta();
  initializePaymentInputs();

  /* Feature 7: Setup lazy images after gallery renders */
  setTimeout(setupLazyImages, 500);

  window.requestAnimationFrame(animateShelf);
};

storySlidesRoot.addEventListener("click", (event) => {
  const triggerRoot = event.target.closest("[data-book-id]");
  if (triggerRoot) {
    openProductModal(triggerRoot.dataset.bookId);
  }
});

galleryViewportRoot.addEventListener("mouseenter", () => {
  state.shelfPaused = true;
});

galleryViewportRoot.addEventListener("mouseleave", () => {
  state.shelfPaused = false;
});

activeMetaRoot.addEventListener("click", (event) => {
  const triggerRoot = event.target.closest("[data-active-action]");
  if (!triggerRoot) {
    return;
  }
  const currentBookId = books[state.activeIndex].id;
  if (triggerRoot.dataset.activeAction === "product") {
    openProductModal(currentBookId);
  }
  if (triggerRoot.dataset.activeAction === "buy") {
    buyNow(currentBookId);
  }
});

featureGridRoot.addEventListener("click", (event) => {
  const triggerRoot = event.target.closest("[data-feature-index]");
  if (triggerRoot) {
    openFeatureModal(Number(triggerRoot.dataset.featureIndex));
  }
});

expansionGridRoot.addEventListener("click", (event) => {
  const triggerRoot = event.target.closest("[data-expansion-feature]");

  if (!triggerRoot) {
    return;
  }

  openFeatureModal(Number(triggerRoot.dataset.expansionFeature));
});

galleryPhotoGridRoot.addEventListener("click", (event) => {
  const triggerRoot = event.target.closest("[data-gallery-feature]");

  if (!triggerRoot) {
    return;
  }

  openFeatureModal(Number(triggerRoot.dataset.galleryFeature));
});

galleryPromoGridRoot.addEventListener("click", (event) => {
  const triggerRoot = event.target.closest("[data-promo-feature]");

  if (!triggerRoot) {
    return;
  }

  openFeatureModal(Number(triggerRoot.dataset.promoFeature));
});

filterBarRoot.addEventListener("click", (event) => {
  const triggerRoot = event.target.closest("[data-category]");
  if (!triggerRoot) {
    return;
  }
  state.selectedCategory = triggerRoot.dataset.category;
  state.catalogPage = 0;
  renderFilters();
  renderCatalog();
});

searchInputRoot.addEventListener("input", (event) => {
  state.searchTerm = event.target.value.trim();
  state.catalogPage = 0;
  renderCatalog();
});

sortSelectRoot.addEventListener("change", (event) => {
  state.sortOrder = event.target.value;
  state.catalogPage = 0;
  renderCatalog();
});

catalogGridRoot.addEventListener("click", (event) => {
  const bookRoot = event.target.closest("[data-book-id]");
  const productRoot = event.target.closest("[data-product-book]");
  const wishlistRoot = event.target.closest("[data-wishlist-book]");
  const buyRoot = event.target.closest("[data-buy-book]");
  if (bookRoot) {
    openProductModal(bookRoot.dataset.bookId);
    return;
  }
  if (productRoot) {
    openProductModal(productRoot.dataset.productBook);
  }
  if (wishlistRoot) {
    handleWishlistAction(wishlistRoot.dataset.wishlistBook);
  }
  if (buyRoot) {
    buyNow(buyRoot.dataset.buyBook);
  }
});

/* ── Catalog Pagination Event Listener ── */
const catalogPaginationRoot = document.getElementById("catalogPagination");
if (catalogPaginationRoot) {
  catalogPaginationRoot.addEventListener("click", (event) => {
    const dirBtn = event.target.closest("[data-page-dir]");
    const numBtn = event.target.closest("[data-page-num]");
    if (dirBtn) {
      const dir = dirBtn.dataset.pageDir;
      if (dir === "prev" && state.catalogPage > 0) state.catalogPage--;
      if (dir === "next") state.catalogPage++;
      renderCatalog();
      document.getElementById("catalogGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (numBtn) {
      state.catalogPage = Number(numBtn.dataset.pageNum);
      renderCatalog();
      document.getElementById("catalogGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

productModalRoot.addEventListener("click", (event) => {
  const relatedRoot = event.target.closest("[data-related-book]");
  if (relatedRoot) {
    openProductModal(relatedRoot.dataset.relatedBook);
  }
});

productBuyNowBtnRoot.addEventListener("click", () => {
  buyNow(state.selectedBookId);
  productModalStatusRoot.textContent = `${getBookById(state.selectedBookId).title} moved to checkout.`;
});

productWishlistBtnRoot.addEventListener("click", () => {
  handleWishlistAction(state.selectedBookId, productModalStatusRoot);
  refreshProductWishlistState();
});

wishlistListRoot.addEventListener("click", (event) => {
  const productRoot = event.target.closest("[data-product-book]");
  const removeRoot = event.target.closest("[data-remove-wishlist]");
  if (productRoot) {
    openProductModal(productRoot.dataset.productBook);
  }
  if (removeRoot) {
    state.wishlist.delete(removeRoot.dataset.removeWishlist);
    persistWishlist();
    refreshAll();
  }
});

cartListRoot.addEventListener("click", (event) => {
  const increaseRoot = event.target.closest("[data-cart-increase]");
  const decreaseRoot = event.target.closest("[data-cart-decrease]");
  const removeRoot = event.target.closest("[data-cart-remove]");
  const productRoot = event.target.closest("[data-product-book]");
  if (increaseRoot) {
    updateCartQuantity(increaseRoot.dataset.cartIncrease, 1);
  }
  if (decreaseRoot) {
    updateCartQuantity(decreaseRoot.dataset.cartDecrease, -1);
  }
  if (removeRoot) {
    removeFromCart(removeRoot.dataset.cartRemove);
  }
  if (productRoot) {
    openProductModal(productRoot.dataset.productBook);
  }
});

openWishlistBtnRoot.addEventListener("click", () => openDrawer(wishlistDrawerRoot));
floatingWishlistBtnRoot.addEventListener("click", () => openDrawer(wishlistDrawerRoot));
if (openShortcutsBtnRoot) {
  openShortcutsBtnRoot.addEventListener("click", openShortcuts);
}
openCartBtnRoot.addEventListener("click", () => openDrawer(cartDrawerRoot));
wishlistCloseRoot.addEventListener("click", () => closeDrawer(wishlistDrawerRoot));
cartCloseRoot.addEventListener("click", () => closeDrawer(cartDrawerRoot));
if (shortcutsCloseRoot) {
  shortcutsCloseRoot.addEventListener("click", closeShortcuts);
}
openCheckoutBtnRoot.addEventListener("click", openCheckout);

modalCloseRoot.addEventListener("click", closeFeatureModal);
productModalCloseRoot.addEventListener("click", closeProductModal);
bindBackdropClose(featureModalRoot, "data-close-feature-modal", closeFeatureModal);
bindBackdropClose(productModalRoot, "data-close-product-modal", closeProductModal);
bindBackdropClose(wishlistDrawerRoot, "data-close-wishlist", () => closeDrawer(wishlistDrawerRoot));
bindBackdropClose(cartDrawerRoot, "data-close-cart", () => closeDrawer(cartDrawerRoot));

checkoutCloseRoot.addEventListener("click", closeCheckout);
checkoutSuccessCloseRoot.addEventListener("click", () => {
  resetCheckoutSuccess();
  closeCheckout();
});
bindBackdropClose(checkoutModalRoot, "data-close-checkout", closeCheckout);
if (shortcutsModalRoot) {
  bindBackdropClose(shortcutsModalRoot, "data-close-shortcuts", closeShortcuts);
}

checkoutBackBtnRoot.addEventListener("click", () => {
  if (state.checkoutStep > 1) {
    setCheckoutStep(state.checkoutStep - 1);
  }
});

checkoutNextBtnRoot.addEventListener("click", handleCheckoutAdvance);

stepPillRoots.forEach((pillRoot) => {
  pillRoot.addEventListener("click", () => {
    jumpToCheckoutStep(Number(pillRoot.dataset.stepTarget));
  });
});

paymentMethodButtonRoots.forEach((buttonRoot) => {
  buttonRoot.addEventListener("click", () => {
    state.paymentMethod = buttonRoot.dataset.paymentMethod;
    state.biometricVerified = false;
    paymentRoots.walletStatus.textContent = "Tap verify to simulate wallet biometric confirmation.";
    paymentRoots.walletError.textContent = "";
    updatePaymentMethodUI();
  });
});

paymentRoots.walletVerifyBtn.addEventListener("click", () => {
  paymentRoots.walletError.textContent = "";
  paymentRoots.walletStatus.textContent = "Scanning fingerprint signature...";
  paymentRoots.walletVerifyBtn.disabled = true;
  window.setTimeout(() => {
    state.biometricVerified = true;
    paymentRoots.walletStatus.textContent = "Biometric match approved. Wallet ready.";
    paymentRoots.walletVerifyBtn.disabled = false;
  }, 900);
});

document.querySelectorAll('input[name="wallet"]').forEach((radioRoot) => {
  radioRoot.addEventListener("change", () => {
    state.biometricVerified = false;
    paymentRoots.walletError.textContent = "";
    paymentRoots.walletStatus.textContent = "Tap verify to simulate wallet biometric confirmation.";
  });
});

languageSelectRoot.addEventListener("change", (event) => {
  state.checkoutLanguage = event.target.value;
  updateCheckoutUtilityMeta();
  renderCheckoutSummary();
  updatePaymentMethodUI();
});

currencySelectRoot.addEventListener("change", (event) => {
  state.checkoutCurrency = event.target.value;
  updateCheckoutUtilityMeta();
  renderCart();
  renderCheckoutSummary();
  updatePaymentMethodUI();
});

themeToggleRoot.addEventListener("click", () => {
  state.checkoutTheme = state.checkoutTheme === "light" ? "dark" : "light";
  updateCheckoutUtilityMeta();
});

window.addEventListener("resize", updateShelfMetrics);
window.addEventListener("load", updateShelfMetrics);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeFeatureModal();
    closeProductModal();
    closeDrawer(wishlistDrawerRoot);
    closeDrawer(cartDrawerRoot);
    closeCheckout();
    closeShortcuts();
    return;
  }

  const target = event.target;
  const isTypingTarget = target instanceof HTMLElement
    && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

  if (isTypingTarget || event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  if (event.key === "/") {
    event.preventDefault();
    searchInputRoot.focus();
    searchInputRoot.select();
    return;
  }

  if (event.key.toLowerCase() === "w") {
    openDrawer(wishlistDrawerRoot);
    return;
  }

  if (event.key.toLowerCase() === "c") {
    openDrawer(cartDrawerRoot);
    return;
  }

  if (event.key.toLowerCase() === "p") {
    openProductModal(books[state.activeIndex].id);
    return;
  }

});

/* ── Premium Preloader ── */
const preloaderRoot = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    if (preloaderRoot) preloaderRoot.classList.add("is-hidden");
  }, 600);
});

/* ═══════════════════════════════════════════════════
   FEATURE 1: Global Dark Mode Toggle
   ═══════════════════════════════════════════════════ */
const darkModeStorageKey = "codeastrahub-theme";

const applyGlobalTheme = (isDark) => {
  document.body.classList.toggle("dark-mode", isDark);
  if (globalThemeToggleRoot) {
    globalThemeToggleRoot.innerHTML = isDark
      ? `<i class="fa-solid fa-sun"></i>`
      : `<i class="fa-solid fa-moon"></i>`;
    globalThemeToggleRoot.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
  try { localStorage.setItem(darkModeStorageKey, isDark ? "dark" : "light"); } catch (_) {}
};

(() => {
  try {
    const savedTheme = localStorage.getItem(darkModeStorageKey);
    if (savedTheme === "dark") applyGlobalTheme(true);
    else if (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) applyGlobalTheme(true);
  } catch (_) {}
})();

if (globalThemeToggleRoot) {
  globalThemeToggleRoot.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    applyGlobalTheme(isDark);
  });
}

/* ═══════════════════════════════════════════════════
   FEATURE 4: Hero Cursor Spotlight
   ═══════════════════════════════════════════════════ */
if (heroSectionRoot && heroSpotlightRoot) {
  heroSectionRoot.addEventListener("mousemove", (e) => {
    const rect = heroSectionRoot.getBoundingClientRect();
    heroSpotlightRoot.style.left = `${e.clientX - rect.left}px`;
    heroSpotlightRoot.style.top = `${e.clientY - rect.top}px`;
    heroSpotlightRoot.classList.add("is-visible");
  });
  heroSectionRoot.addEventListener("mouseleave", () => {
    heroSpotlightRoot.classList.remove("is-visible");
  });
}

/* ═══════════════════════════════════════════════════
   FEATURE 5: Parallax Hero Stats
   ═══════════════════════════════════════════════════ */
if (heroSectionRoot) {
  const parallaxStats = heroSectionRoot.querySelectorAll(".hero-stat");
  const speeds = [0.04, -0.06, 0.03];
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    parallaxStats.forEach((stat, i) => {
      const speed = speeds[i % speeds.length];
      stat.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════
   FEATURE 8: Testimonial Carousel
   ═══════════════════════════════════════════════════ */
const testimonialState = { current: 0, total: reviews.length, autoTimer: null };

const renderTestimonialSlides = () => {
  if (!testimonialTrackRoot) return;
  testimonialTrackRoot.innerHTML = reviews.map((r) => `
    <div class="testimonial-slide">
      <div class="testimonial-quote-mark">\u201C</div>
      <p class="testimonial-quote">${r.quote}</p>
      <div class="testimonial-avatar">${r.name.split(" ").map(n => n[0]).join("")}</div>
      <p class="testimonial-name">${r.name}</p>
      <p class="testimonial-role">${r.role}</p>
      <p class="testimonial-rating">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</p>
    </div>
  `).join("");
};

const renderTestimonialDots = () => {
  if (!testimonialDotsRoot) return;
  testimonialDotsRoot.innerHTML = reviews.map((_, i) =>
    `<button class="testimonial-dot${i === testimonialState.current ? " is-active" : ""}" data-slide="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
  ).join("");
};

const goToTestimonial = (index) => {
  testimonialState.current = ((index % testimonialState.total) + testimonialState.total) % testimonialState.total;
  if (testimonialTrackRoot) {
    testimonialTrackRoot.style.transform = `translateX(-${testimonialState.current * 100}%)`;
  }
  renderTestimonialDots();
};

const startTestimonialAuto = () => {
  clearInterval(testimonialState.autoTimer);
  testimonialState.autoTimer = setInterval(() => {
    goToTestimonial(testimonialState.current + 1);
  }, 5000);
};

if (testimonialTrackRoot) {
  renderTestimonialSlides();
  renderTestimonialDots();
  startTestimonialAuto();
}

if (testimonialPrevRoot) {
  testimonialPrevRoot.addEventListener("click", () => {
    goToTestimonial(testimonialState.current - 1);
    startTestimonialAuto();
  });
}

if (testimonialNextRoot) {
  testimonialNextRoot.addEventListener("click", () => {
    goToTestimonial(testimonialState.current + 1);
    startTestimonialAuto();
  });
}

if (testimonialDotsRoot) {
  testimonialDotsRoot.addEventListener("click", (e) => {
    if (e.target.dataset.slide !== undefined) {
      goToTestimonial(Number(e.target.dataset.slide));
      startTestimonialAuto();
    }
  });
}

/* ═══════════════════════════════════════════════════
   FEATURE 9: Sticky Topbar on Scroll
   ═══════════════════════════════════════════════════ */
if (topbarRoot) {
  const stickyObserver = new IntersectionObserver(
    ([entry]) => {
      topbarRoot.classList.toggle("is-scrolled", !entry.isIntersecting);
    },
    { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
  );
  const sentinel = document.createElement("div");
  sentinel.style.cssText = "height:1px;width:100%;pointer-events:none;visibility:hidden;position:absolute;top:0;";
  document.body.prepend(sentinel);
  stickyObserver.observe(sentinel);
}

/* ═══════════════════════════════════════════════════
   FEATURE 7: Progressive Image Loading
   ═══════════════════════════════════════════════════ */
const setupLazyImages = () => {
  document.querySelectorAll(".gallery-photo-card img").forEach((img) => {
    if (img.complete) {
      img.classList.add("is-loaded");
    } else {
      img.classList.add("is-loading");
      img.addEventListener("load", () => {
        img.classList.remove("is-loading");
        img.classList.add("is-loaded");
      }, { once: true });
    }
    img.setAttribute("loading", "lazy");
  });
};

/* ═══════════════════════════════════════════════════
   FEATURE 3: Skeleton Loading States
   ═══════════════════════════════════════════════════ */
const renderSkeletons = (root, count = 4) => {
  if (!root) return;
  root.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card">
      <div class="skeleton-line skeleton-line--xl"></div>
      <div class="skeleton-line skeleton-line--wide"></div>
      <div class="skeleton-line skeleton-line--md"></div>
      <div class="skeleton-line skeleton-line--sm"></div>
    </div>
  `).join("");
};

/* ═══════════════════════════════════════════════════
   FEATURE 10: Section Transition Reveal Enhancement
   ═══════════════════════════════════════════════════ */

/* ── Premium IntersectionObserver Reveal ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".premium-reveal, .premium-stagger").forEach((el) => {
  revealObserver.observe(el);
});

/* ═══════════════════════════════════════════════════
   FEATURE 11: Reading Progress Bar
   ═══════════════════════════════════════════════════ */
const readingBarRoot = document.getElementById("readingProgressBar");
if (readingBarRoot) {
  const readingFill = readingBarRoot.querySelector(".reading-progress-fill");
  window.addEventListener("scroll", () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    if (readingFill) readingFill.style.transform = `scaleX(${scrolled / 100})`;
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════
   FEATURE 12: Confetti Burst on Checkout Success
   ═══════════════════════════════════════════════════ */
const launchConfetti = () => {
  const canvas = document.createElement("canvas");
  canvas.id = "confettiCanvas";
  canvas.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#0f766e", "#f59e0b", "#2563eb", "#ec4899", "#22c55e", "#f97316", "#6366f1", "#dc2626"];
  const particles = [];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width * 0.5 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.5,
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -14 - 4,
      w: Math.random() * 8 + 4,
      h: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.18 + Math.random() * 0.08,
      opacity: 1
    });
  }

  let frame = 0;
  const maxFrames = 140;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.vy += p.gravity;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.opacity = Math.max(0, 1 - frame / maxFrames);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < maxFrames) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  };
  requestAnimationFrame(draw);
};

/* ═══════════════════════════════════════════════════
   FEATURE 13: Magnetic Buttons
   ═══════════════════════════════════════════════════ */
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".control-btn--solid, .pagination-btn").forEach((btn) => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const threshold = 100;
    if (dist < threshold) {
      const pull = (1 - dist / threshold) * 6;
      btn.style.transform = `translate(${dx * pull / threshold}px, ${dy * pull / threshold}px)`;
    } else {
      btn.style.transform = "";
    }
  });
});

/* ═══════════════════════════════════════════════════
   FEATURE 14: Quick-View on Hover (catalog cards)
   ═══════════════════════════════════════════════════ */
/* Handled via CSS hover overlay — see .catalog-card::after */

/* ═══════════════════════════════════════════════════
   FEATURE 15: Sound Micro-Feedback
   ═══════════════════════════════════════════════════ */
let soundEnabled = true;
const soundToggleRoot = document.getElementById("soundToggle");
if (soundToggleRoot) {
  soundToggleRoot.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggleRoot.innerHTML = soundEnabled
      ? `<i class="fa-solid fa-volume-high"></i>`
      : `<i class="fa-solid fa-volume-xmark"></i>`;
    soundToggleRoot.setAttribute("aria-label", soundEnabled ? "Mute sounds" : "Enable sounds");
  });
}

const playClickSound = () => {
  if (!soundEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.12);
  } catch(_) {}
};

const playSuccessSound = () => {
  if (!soundEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.12);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.12 + 0.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + i * 0.12);
      osc.stop(audioCtx.currentTime + i * 0.12 + 0.2);
    });
  } catch(_) {}
};

/* Hook sound into add-to-cart and wishlist */
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-buy-book]") || e.target.closest("[data-active-action='buy']")) {
    playClickSound();
  }
  if (e.target.closest("[data-wishlist-book]")) {
    playClickSound();
  }
});

initialize();
