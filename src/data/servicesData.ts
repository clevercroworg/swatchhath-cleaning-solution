import { 
  Home, 
  Sparkles, 
  Droplet, 
  Wind, 
  Armchair, 
  Sun, 
  Wrench, 
  Layers, 
  Activity, 
  Heart, 
  Building2,
  Utensils,
  Trees
} from "lucide-react";

export type ServiceDetail = {
  slug: string;
  name: string;
  category: "Residential" | "Specialized" | "Commercial";
  tag: string;
  iconName: string;
  image: string;
  detailImage?: string;
  galleryImages?: string[];
  desc: string;
  longDesc: string;
  whyItMatters: string;
  steps: { title: string; desc: string }[];
  benefits: string[];
};

export const servicesList: ServiceDetail[] = [
  {
    slug: "solar-sales-services",
    name: "Solar Sales & Services",
    category: "Specialized",
    tag: "Authorized Sales & Setup",
    iconName: "Sun",
    image: "/images/services/solar-sales-services.png",
    desc: "Supply, sales, installation assistance, and end-to-end maintenance of residential & commercial solar systems.",
    longDesc: "We provide complete solar energy system sales, consultation, new unit installations, and routine maintenance packages. Whether upgrading your home water heating setup or configuring rooftop solar PV panels, our expert team delivers genuine parts and reliable regional service.",
    whyItMatters: "Transitioning to solar energy dramatically lowers utility costs. Expert sales advice combined with local service guarantees optimal system capacity, long life, and quick maintenance support.",
    steps: [
      { title: "Requirement & Site Assessment", desc: "Evaluate roof area, sun exposure, and daily hot water or energy requirements." },
      { title: "System Selection & Sales", desc: "Provide high-efficiency solar water heaters or solar panel units suited to your budget." },
      { title: "Installation Assistance & Setup", desc: "Professional mounting, tank fitting, plumbing connections, and safety checks." },
      { title: "Periodic Servicing Plans", desc: "Schedule regular checkups, tube descaling, and performance checks." }
    ],
    benefits: [
      "Genuine authorized equipment with reliable warranty coverage",
      "Customized solutions for individual homes, homestays, and commercial units",
      "All-in-one sales, installation support, and future servicing under one roof",
      "Prompt local support across Coastal and Central Karnataka"
    ]
  },
  {
    slug: "solar-coil-fitting-tube-changing",
    name: "Solar Repair & Tube Replacement",
    category: "Specialized",
    tag: "Solar Heating Repair",
    iconName: "Wrench",
    image: "/images/services/solar-coil-fitting-tube-changing.jpg",
    desc: "Fixing loose heating coils, leak repair, and replacement of damaged solar glass tubes.",
    longDesc: "We provide replacement of damaged solar water heater glass tubes, leak fixes for hot water coils, and descaling flushes to restore your solar water heating system back to peak performance at a fraction of the cost of a new unit.",
    whyItMatters: "Cracked vacuum tubes cause hot water leaks and reduce system heating. Replacing individual parts early saves money and prevents damage to the header tank.",
    steps: [
      { title: "System Drainage & Safe Shutdown", desc: "Isolate the solar system inputs and safely drain the hot water tank." },
      { title: "Damaged Tube Removal", desc: "Carefully detach broken or scaled vacuum glass tubes from the header." },
      { title: "Coil Scaling Cleanse", desc: "Flush tank coils using non-corrosive descalers to clear calcium blockages." },
      { title: "New Tube Fitting & Seals", desc: "Install high-grade replacement tubes with new food-grade silicone seals." }
    ],
    benefits: [
      "Saves money compared to replacing the whole solar tank unit",
      "Stops water leakage and ensures fast hot water recovery",
      "Uses high-grade replacement tubes and heat-resistant seals",
      "Includes free inspection of all other tubes during the service visit"
    ]
  },
  {
    slug: "overhead-tank-sump-cleaning",
    name: "Tank & Sump Cleaning",
    category: "Residential",
    tag: "Safe Drinking Water",
    iconName: "Droplet",
    image: "/images/services/overhead-tank-sump-cleaning.jpg",
    desc: "Mechanical water tank cleaning, high-pressure washing, sludge removal, and sanitization.",
    longDesc: "Clean water starts with a sanitized storage tank. We offer professional mechanical cleaning for sumps and overhead tanks of any size, removing silt, algae, and bacteria using safe, food-grade disinfectants.",
    whyItMatters: "Water tanks should be cleaned every six months to prevent waterborne bacteria (like E. coli) and algae from entering your drinking and bathing water supply.",
    steps: [
      { title: "De-watering & Sludge Sucking", desc: "Pump out remaining dirty water and manually remove bottom sludge." },
      { title: "High-Pressure Jet Clean", desc: "Wash all interior walls and corners using industrial high-pressure jets." },
      { title: "Antibacterial Spraying", desc: "Apply food-grade, safe disinfectants to kill remaining bacteria and spores." },
      { title: "Final Flush & Verification", desc: "Clear-water flush to remove all cleaning residue, leaving the tank ready." }
    ],
    benefits: [
      "Prevents waterborne sickness by destroying bacteria and algae",
      "Food-grade sanitizers that leave no chemical odor in your tap water",
      "Full before-and-after photo documentation shared on WhatsApp",
      "Available for both overhead rooftop tanks and underground sumps"
    ]
  },
  {
    slug: "solar-tubes-panel-cleaning",
    name: "Solar Panel & Tube Cleaning",
    category: "Specialized",
    tag: "Maximize Solar Power",
    iconName: "Sun",
    image: "/images/services/solar-tubes-panel-cleaning.jpg",
    desc: "Safe water jet cleaning of solar plates and glass tubes to maximize energy absorption.",
    longDesc: "Dust, bird droppings, and hard-water mineral deposits on solar panels reduce electricity and hot water generation by up to 25%. Our service uses soft non-abrasive brushes, safety rigs, and pure water to clean rooftop installations safely.",
    whyItMatters: "Dirty plates decrease solar light absorption. Regular quarterly cleaning restores full energy production and prevents permanent spot-heating damage to solar cells.",
    steps: [
      { title: "Safety Rigging & Inspection", desc: "Secure the crew with harness lines and check panels for cracks." },
      { title: "Soft Wash Flush", desc: "Rinse solar plates with low-pressure water to wash off loose dust." },
      { title: "Microfiber Scrubbing", desc: "Clean panels using non-abrasive wipers and solar-safe glass soaps." },
      { title: "Squeegee Dry & Report", desc: "Squeegee off water to prevent scale spots, leaving glass perfectly clear." }
    ],
    benefits: [
      "Boosts solar energy production and hot water temperature by up to 25%",
      "Prevents permanent hot-spot heating damage caused by bird droppings",
      "Safe, trained crew handling high-roof risk tasks",
      "Quarterly maintenance packages available at discounted rates"
    ]
  },
  {
    slug: "basic-deep-cleaning",
    name: "Basic & Deep Cleaning",
    category: "Residential",
    tag: "Intense Dirt Removal",
    iconName: "Sparkles",
    image: "/images/services/basic-deep-cleaning.png",
    desc: "Intense cleanup including stain removal, tile scrubbing, fan dusting, and window washing.",
    longDesc: "Our Deep Cleaning service tackles accumulated grime, mud, and water scale. Using mechanical floor scrubbers and industrial solutions, we restore the shine to your tiles, glass panels, and cupboards. Perfect for post-monsoon refreshes or new move-ins.",
    whyItMatters: "Regular mopping only pushes dirt into tile grout. Mechanical scrubbing extracts deeply embedded grime that standard home equipment cannot reach, restoring floor shine.",
    steps: [
      { title: "Deep Stain Assessment", desc: "Identify stubborn hard-water scale and tile stains for targeted treatment." },
      { title: "High-Pressure Vacuuming", desc: "Remove deep-seated dirt from window tracks and sliding door crevices." },
      { title: "Mechanical Floor Scrubbing", desc: "Run professional scrubbing machines to break through grease and red mud layers." },
      { title: "Polishing & Detailing", desc: "Microfiber wiping of premium fixtures, glass, and electrical outlets." }
    ],
    benefits: [
      "Tackles tough coastal humidity stains and monsoon mud layers",
      "Restores the original look of dull tiles, window frames, and glass panels",
      "Includes industrial-grade mechanical equipment beyond household capacity",
      "Ideal for move-in/move-out tenant turnovers and festival preparations"
    ]
  },
  {
    slug: "flat-house-cleaning",
    name: "Flat & House Cleaning",
    category: "Residential",
    tag: "Sparkling Clean Homes",
    iconName: "Home",
    image: "/images/services/flat-house-cleaning.png",
    desc: "Complete sweep, mop, dust, and deep sanitization of all rooms, kitchens, and toilets.",
    longDesc: "Our Flat & House Cleaning service ensures your home stays healthy and welcoming. Our trained local staff systematically deep-cleans and sanitizes every room, leaving your living spaces free from allergens, stubborn dust, and bacteria.",
    whyItMatters: "High coastal humidity accelerates mold and dust accumulation. Regular professional deep cleaning protects family health, eliminates allergens, and keeps rooms fresh.",
    steps: [
      { title: "Declutter & Dusting", desc: "Systematic high-to-low dusting of fans, ceilings, light fittings, and window grills." },
      { title: "Kitchen Sanitization", desc: "Thorough cleaning of countertops, cabinet exteriors, and sink scrubbing." },
      { title: "Bathroom Deep Clean", desc: "Chemical wash of tiles, floors, toilets, and mirrors to eliminate scale." },
      { title: "Floor Mop & Polish", desc: "Disinfectant sweeping and wet mopping of all room floors." }
    ],
    benefits: [
      "Trained, regional Karnataka staff who respect your privacy",
      "Eco-friendly, chemical-safe disinfectants used throughout",
      "Systematic room-by-room cleaning covering hard-to-reach corners",
      "Post-cleaning walk-through inspection with you before we leave"
    ]
  },
  {
    slug: "resort-homestay-cleaning",
    name: "Homestay, Resort & Commercial Cleaning",
    category: "Commercial",
    tag: "5-Star Guest Readiness",
    iconName: "Building2",
    image: "/images/services/resort-homestay-cleaning.png",
    desc: "Quick turnaround deep cleaning for resorts, homestays, offices, and commercial properties.",
    longDesc: "Airbnb homestays, resorts, and commercial spaces rely on pristine cleanliness ratings. We offer rapid-response deep cleaning during guest changeovers — scrubbing bathrooms to pristine standards, sanitizing rooms, and jet-washing verandas and pool decks.",
    whyItMatters: "Cleanliness is the number one driver of guest booking reviews and commercial client trust. Hospitality-grade sanitation ensures guest satisfaction and protects your brand reputation.",
    steps: [
      { title: "Room Checkout Clearance", desc: "Clear debris, strip linen, and detail rooms from dust." },
      { title: "Deep Bathroom Disinfection", desc: "Intense descaling of bathroom shower heads, taps, and commodes." },
      { title: "Balcony & Deck Jet Clean", desc: "Wash away salt spray, dust, and moss from balconies and pool decks." },
      { title: "Odor Removal & Sanitization", desc: "Spray natural, premium room fresheners and sanitize switchboards." }
    ],
    benefits: [
      "Ensures guest satisfaction with 100% spotless bathrooms",
      "Handles heavy salt-spray and mud buildup from beachside locations",
      "Fast turnaround options to accommodate booking schedules",
      "Flexible packages — per-room, per-property, or recurring seasonal contracts"
    ]
  },
  {
    slug: "high-pressure-wash-cleaning",
    name: "High Pressure Wash Cleaning",
    category: "Specialized",
    tag: "De-griming Compounds",
    iconName: "Droplet",
    image: "/images/services/high-pressure-wash-cleaning.png",
    desc: "Blast away deep grime from driveways, exterior walls, compounds, and gates.",
    longDesc: "Our High Pressure Wash Cleaning service uses industrial-grade water jet machines (operating at up to 150 bar pressure) to safely strip off years of accumulated stain, slippery green moss, and red mud without damaging paint or concrete.",
    whyItMatters: "Moss-covered steps and verandas are serious slip hazards. Pressure washing removes this threat in minutes, restoring natural stone textures and enhancing compound look.",
    steps: [
      { title: "Pre-soaking Stain Areas", desc: "Apply targeted cleaning agents to soften tough grease and heavy moss patches." },
      { title: "High-Pressure Jetting", desc: "Direct narrow water jet streams to strip dirt layers from tiles and concrete." },
      { title: "Corner & Crevice Detailing", desc: "Focus jetting on grooves, gate hinges, and narrow drainage lines." },
      { title: "Post-wash Scrubbing & Sweep", desc: "Sweep away detached mud and flush the clean compound driveway." }
    ],
    benefits: [
      "Removes slippery moss layers, making driveways safe to walk on",
      "Cleans compound walls and gates to look freshly painted",
      "Zero harsh scrubbing that scratches natural stones or tiles",
      "Covers large areas quickly — driveways, verandas, and building exteriors"
    ]
  },
  {
    slug: "signboard-facade-cleaning",
    name: "Facade & Signboard Cleaning",
    category: "Specialized",
    tag: "High-Reach Store Fronts",
    iconName: "Layers",
    image: "/images/services/signboard-facade-cleaning.png",
    desc: "High-reach washing and detailing for shops, hotels, and office exterior hoardings.",
    longDesc: "First impressions matter. Your storefront facade and signboards collect heavy traffic soot and rain stains. Swachhath uses high-reach telescopic water poles and glass squeegees to clean exterior hoardings safely from the ground.",
    whyItMatters: "A clean storefront directly attracts more foot traffic. Regular facade maintenance signals business quality and keeps shop signboards shining brightly.",
    steps: [
      { title: "Facade Material Inspection", desc: "Identify ACP sheets, glass panels, or flex banner material to select soaps." },
      { title: "Telescopic Water Brush Rinsing", desc: "Reach up to 30 feet using telescopic poles to wash off dirt." },
      { title: "Facade Scale Scraping", desc: "Wipe off tough rain stains and glue spots using squeegees." },
      { title: "Dry Polish Finish", desc: "Buff glass facades to a high-gloss, streak-free polish." }
    ],
    benefits: [
      "Attracts clients with a gleaming, professional storefront",
      "Safely cleans high-reach signs without scaffolding setups",
      "ACP-safe chemical agents that protect signage color and gloss",
      "Quick turnaround — most shops completed in under 3 hours"
    ]
  },
  {
    slug: "kitchen-deck-cleaning",
    name: "Kitchen Deck Cleaning",
    category: "Residential",
    tag: "Grease & Stain Extraction",
    iconName: "Utensils",
    image: "/images/services/kitchen-deck-cleaning.jpg",
    detailImage: "/images/services/kitchen-deck-cleaning-detail.jpg",
    galleryImages: [
      "/images/services/kitchen-deck-cleaning.jpg",
      "/images/services/kitchen-deck-cleaning-detail.jpg",
      "/images/services/kitchen-deck-cleaning-work1.jpg",
      "/images/services/kitchen-deck-cleaning-work2.jpg"
    ],
    desc: "Deep scrubbing, grease degreasing, backsplash tile cleaning, and sanitization of kitchen decks.",
    longDesc: "Kitchen decks accumulate tough oil residue, soot, and food stains over time. Our specialized Kitchen Deck Cleaning service deep cleans countertops, tile backsplashes, gas stove areas, and under-sink zones using non-toxic degreasers for a pristine, hygienic food prep space.",
    whyItMatters: "A grease-free kitchen deck prevents bacterial growth, pest infestations, and stubborn oil odors, keeping food prep areas safe and fresh.",
    steps: [
      { title: "Surface Degreasing", desc: "Apply heavy-duty food-safe degreasers to dissolve oil, soot, and burnt residue." },
      { title: "Backsplash & Deck Scrub", desc: "Intense tile grout scrubbing and granite/quartz countertop de-staining." },
      { title: "Sink & Drain Sanitization", desc: "Wash and sanitize sink basins, faucets, and drainage pipes to clear odor." },
      { title: "Polishing & Final Wipe", desc: "Buff countertops and stainless-steel fittings to a streak-free shine." }
    ],
    benefits: [
      "Removes tough oil grime and sticky soot from kitchen counters and tiles",
      "Uses non-toxic, food-safe cleaning agents suitable for cooking areas",
      "Prevents cockroach and pest attraction around grease traps and sinks",
      "Restores natural gloss of granite, marble, and quartz kitchen decks"
    ]
  },
  {
    slug: "temple-church-cleaning",
    name: "Worship Space Cleaning (Temple & Church)",
    category: "Commercial",
    tag: "Sacred Space Hygiene",
    iconName: "Heart",
    image: "/images/services/temple-church-cleaning.png",
    desc: "Dedicated large-scale hygiene services for holy spaces with regional respect and care.",
    longDesc: "Holy spaces host mass gatherings, requiring top-tier sanitation. We provide specialized deep cleaning packages for temples and churches, handled by a respectful local crew fluent in regional languages.",
    whyItMatters: "Places of worship are barefoot zones. Deep washing of stone steps, sanctuary sanitization, and polishing brass fixtures maintains sacred hygiene and safety.",
    steps: [
      { title: "Respectful Setup Planning", desc: "Coordinate with caretakers regarding rules, sanctuary restrictions, and timing." },
      { title: "Sanctuary Floor & Carpet Vacuuming", desc: "Perform deep dust extraction from hall carpets, altar carpets, and runners." },
      { title: "Floor Sanitization Wash", desc: "Run pressure jets and floor scrubbers on stone verandas and steps." },
      { title: "Brass & Metal Detailing", desc: "Clean and hand-polish large brass lamps and rails to a mirror finish." }
    ],
    benefits: [
      "Respectful, disciplined local crew speaking Kannada/Tulu/Konkani",
      "Special discounts and customized schedules to fit prayer timings",
      "Non-toxic, safe sanitizers used in barefoot areas",
      "Experience cleaning 30+ religious and community spaces"
    ]
  },
  {
    slug: "grass-tree-cutting",
    name: "Grass & Tree Cutting",
    category: "Specialized",
    tag: "Lawn & Compound Care",
    iconName: "Trees",
    image: "/images/services/grass-tree-cutting.png",
    desc: "Trimming overgrown lawns, clearing wild bushes, and pruning tree branches for clean, safe outdoor spaces.",
    longDesc: "Maintain safe and neat surroundings with our Grass & Tree Cutting service. We provide professional lawn mowing, weed removal, overgrown grass cutting, and tree branch trimming around residential compounds, resorts, and commercial plots.",
    whyItMatters: "Uncut grass and dense tree growth attract snakes, mosquitoes, and pests during monsoon seasons. Regular trimming keeps property premises safe, visible, and aesthetically appealing.",
    steps: [
      { title: "Premises Safety Inspection", desc: "Identify hazardous branches, power line clearance, and overgrown zones." },
      { title: "Mechanical Grass Mowing", desc: "Use heavy-duty brush cutters and mowers for uniform grass trim." },
      { title: "Tree Pruning & Branch Cut", desc: "Trim hanging tree branches safely without damaging nearby structures." },
      { title: "Debris Cleanup & Removal", desc: "Gather cut foliage, leaves, and branches for clean disposal." }
    ],
    benefits: [
      "Eliminates dangerous pest harboring zones like snakes and mosquitoes",
      "Enhances curb appeal and compound neatness for homes and resorts",
      "Trained crew equipped with power trimmers and safety equipment",
      "Custom single-visit or monthly lawn maintenance packages"
    ]
  },
  {
    slug: "well-cleaning",
    name: "Well Cleaning",
    category: "Specialized",
    tag: "Pure Ground Water",
    iconName: "Droplet",
    image: "/images/services/well-cleaning.png",
    desc: "Complete de-watering, silt/mud removal, wall scrubbing, and chlorination of traditional open wells.",
    longDesc: "Open wells accumulate leaf debris, mud silt, and bacterial growth at the bottom over time. Our Well Cleaning service safely pumps out stagnant water, removes bottom sludge, scrubs inner stone walls, and applies water-safe sanitizing treatment for clean ground water.",
    whyItMatters: "Regular well cleaning improves water clarity, removes bad odor, and ensures safe water for household, agriculture, or resort use.",
    steps: [
      { title: "Pumping & De-watering", desc: "Use high-capacity submersible pumps to drain standing well water." },
      { title: "Sludge & Mud Removal", desc: "Descend safely using harnesses to scoop out bottom silt, leaves, and debris." },
      { title: "Wall Scrubbing & Flushing", desc: "Scrub algae and moss from well stone walls and flush dirty residue." },
      { title: "Potable Chlorination", desc: "Treat well water with exact dosage of safe purifying compounds." }
    ],
    benefits: [
      "Restores clean, odorless, and silt-free well water supply",
      "Safe team execution with safety harnesses and air monitoring equipment",
      "Helps restore natural well water recharge rate by removing mud blockages",
      "Essential before monsoon or post-flooding water contamination"
    ]
  },
  {
    slug: "floor-scrubbing-rubbing",
    name: "Floor Scrubbing & Rubbing",
    category: "Commercial",
    tag: "Restore Dull Floors",
    iconName: "Activity",
    image: "/images/services/floor-scrubbing-rubbing.png",
    desc: "Industrial machine scrubbing for marble, granite, vitrified tile, and concrete floors.",
    longDesc: "Vitrified tiles, marble, and granite floors lose shine due to high foot traffic and red mud. We employ industrial floor scrubbing machines with specialized pads to strip grime, lift stains, and restore floor traction.",
    whyItMatters: "Daily mopping only pushes dirt into grout. Professional mechanical scrubbing deep-cleans the pores of the stone, removing slippery layers and dull film.",
    steps: [
      { title: "Floor Sweep & Edge Cleaning", desc: "Clear floor area and manually clean borders and corners." },
      { title: "Slurry Soap Application", desc: "Spread floor-restoring soaps across tiles to emulsify surface grime." },
      { title: "Rotary Floor Machine Scrub", desc: "Run heavy 17-inch rotary floor machines to lift deep mud, grease, and stains." },
      { title: "Water Extraction & Buffing", desc: "Extract dirty slurry water using wet-vacuums, mop dry, and polish-buff." }
    ],
    benefits: [
      "Removes dark grout dirt and deep oil/grease layers",
      "Restores natural tile shine and removes slipperiness",
      "Extremely fast cleanup for large commercial halls, showrooms, and shops",
      "Available for marble, granite, vitrified tiles, and polished concrete"
    ]
  },
  {
    slug: "vacuum-cleaning-sofa-rubbing",
    name: "Sofa Set & Vacuum Cleaning",
    category: "Residential",
    tag: "Dust & Allergen Extraction",
    iconName: "Wind",
    image: "/images/services/vacuum-cleaning-sofa-rubbing.png",
    desc: "Deep vacuuming of sofa sets, cot mattresses, carpets, and dust extraction from fabric surfaces.",
    longDesc: "Our Vacuum Cleaning & Sofa Rubbing service uses high-power extractors and eco-safe dry-shampoos to scrub fabric grains, pulling out layers of embedded soil, sweat residue, and bad odors that regular vacuuming misses.",
    whyItMatters: "Upholstery fabric harbors thousands of invisible dust mites. Professional extraction removes 98% of allergens, transforming your sofas into fresh, sanitary comfort zones.",
    steps: [
      { title: "Industrial Dry Vacuum", desc: "Run high-powered suction to pull out loose dust and hair from cushions." },
      { title: "Upholstery Shampooing", desc: "Apply targeted fabric-safe cleaners to dissolve sweat and coffee/tea stains." },
      { title: "Manual Sofa Rubbing", desc: "Use soft brush rotators or microfibers to gently lift stains from fabric fibers." },
      { title: "Extraction & Deodorizing", desc: "Extract moisture along with dissolved dirt, leaving fabrics fresh and clean." }
    ],
    benefits: [
      "Significantly reduces indoor dust-allergy triggers",
      "Restores original color and freshness of sofas and cushions",
      "Quick-drying process allows re-use in a few hours",
      "Safe for all fabric types including velvet, leather, and cotton"
    ]
  },
  {
    slug: "furniture-cleaning",
    name: "Furniture & Cot Cleaning & Polishing",
    category: "Residential",
    tag: "Wood & Cushion Renewal",
    iconName: "Armchair",
    image: "/images/services/furniture-cleaning.jpg",
    desc: "Polishing wooden furniture, cots, tables, cabinets, and deep cleaning chairs & mattresses.",
    longDesc: "Protect your expensive furniture investments from mold, wood dust, and surface dullness. We provide dedicated polishing for wooden cots, tables, cabinets, and doors, alongside sanitization of mattresses and dining chairs.",
    whyItMatters: "Coastal humidity causes teak and rosewood to develop white mold and crack. Professional wax-polishing seals the wood, preventing moisture damage and restoring rich gloss.",
    steps: [
      { title: "Surface Clearing", desc: "Wipe off loose dust, spider webs, and surface debris from furniture." },
      { title: "Wood & Metal Treatment", desc: "Apply wood-nourishing creams or specialized metal polishers to handles." },
      { title: "Mattress Sanitization", desc: "Vacuum and apply steam/UV-light sanitizers to eliminate bed bugs." },
      { title: "Buffing & Polish Finish", desc: "Wipe with soft lint-free cloths to bring back a rich, premium gloss." }
    ],
    benefits: [
      "Extends the lifespan of premium teak, rosewood, and engineered board",
      "Eliminates mattress odors, dust-mites, and surface mold growth",
      "No sticky residue left on surfaces",
      "Special attention to antique items and high-value wooden artifacts"
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesList.find((s) => s.slug === slug);
}
