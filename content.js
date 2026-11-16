/* ============================================================
   RSV LAB — SITE CONTENT v4
   ────────────────────────────────────────────────────────────
   EDIT THIS FILE ONLY. Push to GitHub → Cloudflare redeploys.
   Every array has a copy-paste template in the comments.
   Set any array to [] (or the object to null) to hide it.
   ============================================================ */

const SITE = {

  /* ── 1. BASIC INFO ──────────────────────────────────────── */
  labName:     "RSV Lab",
  shortName:   "RSV Lab",
  tagline:     "ML-assisted AMR Surveillance & AST Analysis",
  taglinePart1: "Machine Learning (ML) assisted Antimicrobial Resistance",
  taglinePart2: "Surveillance & Data Science",
  description: "A microbiology and bioinformatics research effort building open tools for antimicrobial susceptibility testing (AST) analysis, CLSI/EUCAST-aligned interpretation, and machine-learning-assisted AMR surveillance in Bangladesh.",
  founderName: "Kamol Das",
  year:        "2026",
  logo:        "assets/images/logo.svg",

  /* ── 2. HERO BUTTONS ─────────────────────────────────────
     Set to null to hide. */
  heroCtaPrimary:   { label: "Explore Research", href: "#research" },
  heroCtaSecondary: { label: "View on GitHub",   href: "https://github.com/KamolDas" },

  /* ── 3. NOTICE BOARD ─────────────────────────────────────
     Set update or deadline to null to hide that pill.
     Set the whole topNotices object to null to hide the bar. */
  topNotices: {
    update: {
      label: "Latest",
      text:  "RSV Lab AST Analysis Tool v2.2 released",
      date:  "Sept 2026",
      link:  "https://doi.org/10.5281/zenodo.20589848"
    },
    deadline: {
      label: "Deadline",
      text:  "Application window",
      date:  "13 December 2026",
      link:  ""
    }
  },

  /* ── 4. HERO HIGHLIGHT CHIPS ───────────────────────────── */
  heroHighlights: [
    { icon: "fa-microscope",  label: "AST & AMR Research" },
    { icon: "fa-brain",       label: "ML-assisted Surveillance" },
    { icon: "fa-code-branch", label: "Open-Source Tooling" }
    // TEMPLATE: { icon: "fa-flask", label: "Wet-Lab Verified" },
  ],

  /* ── 5. SOCIAL LINKS ─────────────────────────────────────
     Leave a field as "" to hide it everywhere. */
  github:   "https://github.com/KamolDas",
  twitter:  "https://x.com/KDKamol",
  linkedin: "https://www.linkedin.com/in/kamol-das-7a4b0b1b7/",
  youtube:  "https://www.youtube.com/@RSVLab",
  facebook: "https://www.facebook.com/profile.php?id=100090153347276",
  email:    "kamol.mbio@gmail.com",
  orcid:    "https://orcid.org/0009-0004-2253-7527",
  phone:    "01775510351",
  location: "Department of Microbiology, University of Chittagong · Ramakrishna Mission, Hathazari, Chittagong, Bangladesh",

  /* ── 6. PARTNER LAB PILL ─────────────────────────────────
     Set partnerLabUrl to "" to hide. */
  partnerLabUrl:  "https://skd.rsv8lab.workers.dev",
  partnerLabText: "Eco-Bio Lab",

  /* ── 7. NAV MENU ───────────────────────────────────────── */
  nav: [
    { label: "About",        href: "#about" },
    { label: "Research",     href: "#research" },
    { label: "Tools",        href: "#tools" },
    { label: "Publications", href: "#publications" },
    { label: "Projects",     href: "#projects" },
    { label: "Team",         href: "#team" },
    { label: "Contact",      href: "#contact" }
    // TEMPLATE: { label: "Blog", href: "https://example.com/blog" },
  ],

  heroBadge: "Kamol Das · Microbiology, University of Chittagong",

  /* ── HERO BANNER IMAGE ───────────────────────────────────
     Set image to "" to hide the banner entirely. */
  heroBanner: {
    image: "assets/images/hero-banner.jpg",
    alt:   "RSV Lab research banner",
    link:  ""
  },

  /* ── 8. ABOUT ────────────────────────────────────────────
     TEMPLATE for a new card:
     {
       icon:  "fa-circle",
       color: "var(--primary-cyan)",
       title: "Card title",
       text:  "Description goes here.",
       image: "assets/images/card.jpg",   // optional
       link:  "https://…",                // optional
       cta:   "Read more",                // optional
       pdf:   "assets/pdfs/file.pdf"      // optional
     } */
  about: {
    title:    "About RSV Lab",
    subtitle: "We bridge the gap between traditional microbiology and modern computational analysis, focusing on antimicrobial resistance surveillance and CLSI/EUCAST-compliant susceptibility testing.",
    cards: [
      {
        icon:  "fa-microscope",
        color: "var(--primary-blue)",
        title: "Research & Development",
        text:  "Clinical microbiology, AMR surveillance, and drug discovery, grounded in CLSI M100 and EUCAST breakpoint standards."
      },
      {
        icon:  "fa-laptop-code",
        color: "var(--primary-orange)",
        title: "Bioinformatics & Data Analysis",
        text:  "Python and R tools for AST data structuring, MDR/XDR/PDR classification, and machine learning in AMR data."
      },
      {
        icon:  "fa-flask",
        color: "var(--primary-purple)",
        title: "Biotechnology & Pharma",
        text:  "Applying scientific knowledge to real-world challenges in pharmaceuticals, quality control, and industrial biotechnology."
      }
    ]
  },

  /* ── 9. RESEARCH ─────────────────────────────────────────
     Same card structure as About. */
  research: {
    title:    "Research Focus",
    subtitle: "Core areas of the project and PhD track.",
    cards: [
      {
        icon:  "fa-vial-circle-check",
        color: "var(--primary-purple)",
        title: "AST Methodology",
        text:  "Kirby-Bauer disk diffusion and MIC/broth microdilution workflows aligned to CLSI M100 and EUCAST breakpoints."
      },
      {
        icon:  "fa-shield-virus",
        color: "var(--primary-blue)",
        title: "AMR Epidemiology",
        text:  "Antimicrobial resistance patterns in ICU, hospital, and diagnostic-centre settings across Bangladesh and South Asia."
      },
      {
        icon:  "fa-diagram-project",
        color: "var(--primary-orange)",
        title: "Data Quality & Interoperability",
        text:  "An ML-enabled framework for laboratory data quality, resistance-pattern detection, and sentinel-site interoperability."
      },
      {
        icon:  "fa-shield-halved",
        color: "var(--primary-purple)",
        title: "Open Science",
        text:  "Verified breakpoint data, reproducible Python tooling, and Zenodo/ORCID-linked open datasets."
      }
    ]
  },

  /* ── 10. TOOLS ───────────────────────────────────────────
     Cards can have link, pdf, or both (two buttons appear). */
  tools: {
    title:    "Tools & Software",
    subtitle: "Open tooling built around the RSV Lab AST workflow.",
    cards: [
      {
        icon:  "fa-desktop",
        color: "var(--primary-purple)",
        title: "RSV Lab Advanced AST Analysis Tool",
        text:  "A Python desktop GUI with an MDR/XDR/PDR classifier, ML clustering modules, and CLSI/EUCAST breakpoint lookup.",
        link:  "https://github.com/KamolDas",
        cta:   "View on GitHub"
      },
      {
        icon:  "fa-code",
        color: "var(--primary-blue)",
        title: "rsv_formulas_library.py",
        text:  "A Python library of AST/MIC statistics and ML-metric formulas underlying the tool's methodology.",
        link:  "https://github.com/KamolDas",
        cta:   "View on GitHub"
      },
      {
        icon:  "fa-table-list",
        color: "var(--primary-orange)",
        title: "Verified CLSI Breakpoint Table",
        text:  "A hand-checked breakpoint dataset cross-verified against CLSI M100-Ed36 (2026)."
      },
      {
        icon:  "fa-book",
        color: "var(--primary-purple)",
        title: "RSV AST Analysis Tool — User Manual",
        text:  "Comprehensive documentation for the RSV Laboratory Advanced AST Analysis Tool, integrating CLSI M100 (2026).",
        link:  "https://zenodo.org/records/21620688",
        cta:   "View on Zenodo",
        pdf:   "assets/pdfs/ast-tool-manual.pdf"
      }
    ]
  },

  /* ── 11. PUBLICATIONS ────────────────────────────────────
     TEMPLATE:
     {
       title:   "Paper title",
       authors: "First Author et al.",
       journal: "Journal Name, 2027",
       doi:     "https://doi.org/…",        // optional
       pdf:     "assets/pdfs/paper.pdf"     // optional
     } */
  publications: {
    title:    "Recent Research & Publications",
    subtitle: "Our latest contributions to the scientific community, available via open-access repositories.",
    items: [
      {
        title:   "An Integrated Computational Framework for Antimicrobial Susceptibility Testing",
        authors: "Kamol Das et al.",
        journal: "Zenodo Preprint, 2026",
        doi:     "https://doi.org/10.5281/zenodo.20589848",
        pdf:     "assets/pdfs/sample-paper.pdf"
      },
      {
        title:   "Machine Learning Analysis Reports for Microbial Data",
        authors: "Kamol Das et al.",
        journal: "Zenodo Dataset, 2026",
        doi:     "https://doi.org/10.5281/zenodo.21534293"
      },
      {
        title:   "RSV Lab Official Logo",
        authors: "Kamol Das",
        journal: "Zenodo, 2026",
        doi:     "https://doi.org/10.5281/zenodo.19209980"
      }
    ]
  },

  /* ── 12. PROJECTS ────────────────────────────────────────
     Add a category to filters[] to allow filtering by it. */
  projects: {
    title:    "Our Projects",
    subtitle: "Open-source tools and research repositories developed by RSV Lab and its founder.",
    filters: [
      { key: "all",      label: "All" },
      { key: "lab",      label: "RSV Lab Repos" },
      { key: "personal", label: "Founder's Repos" }
      // TEMPLATE: { key: "collab", label: "Collaborations" },
    ],
    cards: [
      { category: "lab", icon: "fa-robot",    color: "var(--primary-blue)",   title: "RSVLab-ASTLearn",       text: "AST machine learning toolkit for predicting antimicrobial susceptibility.", link: "https://github.com/rsv8lab/RSVLab-ASTLearn" },
      { category: "lab", icon: "fa-dna",      color: "var(--primary-orange)", title: "RSVLab-Bioinformatics", text: "DNA/RNA sequence analysis tools for genomic research.",                     link: "https://github.com/rsv8lab/RSVLab-Bioinformatics" },
      { category: "lab", icon: "fa-database", color: "var(--primary-purple)", title: "RSVLab-DNAStore",       text: "RSV algorithm DNA-computing framework for data storage.",                  link: "https://github.com/rsv8lab/RSVLab-DNAStore" },
      { category: "lab", icon: "fa-bacteria", color: "var(--primary-blue)",   title: "RSVLab-Microbiology",   text: "CLSI, EUCAST, MPN, drug development, and AST reference databases.",       link: "https://github.com/rsv8lab/RSVLab-Microbiology" },
      { category: "personal", icon: "fa-flask",    color: "var(--primary-orange)", title: "AST-Tool",                     text: "Python workflow for 2×2, 3×3, and 4×4 AST matrix agreement analysis.", link: "https://github.com/KamolDas/AST-Tool" },
      { category: "personal", icon: "fa-code",     color: "var(--primary-purple)", title: "DNA-sequence-for-data-store", text: "DNA-as-string and Unicode-text-based approaches for data storage.",    link: "https://github.com/KamolDas/DNA-sequence-for-data-store" },
      { category: "personal", icon: "fa-terminal", color: "var(--primary-blue)",   title: "C-basic",                     text: "Basic C programming practice and examples.",                            link: "https://github.com/KamolDas/C-basic" }
    ]
  },

  /* ── 13. TEAM ──────────────────────────────────────────── */
  team: {
    title:   "Meet the Founder",
    name:    "Kamol Das",
    role:    "Founder & Principal Investigator",
    bio:     "MS student, Department of Microbiology, University of Chittagong, Bangladesh. Works at the intersection of AMR surveillance, clinical microbiology, and computational tools for AST analysis.",
    avatar:  "assets/images/founder-photo.jpg",
    orcid:   "https://orcid.org/0009-0004-2253-7527",
    members: [
      {
        name:   "RSV Lab",
        role:   "Hosting Institution",
        avatar: "https://github.com/rsv8lab.png"
      },
      {
        name:   "Shamol Das, Senior Officer (IT), Sonali Bank",
        role:   "Sponsor",
        avatar: "https://github.com/shamoldas.png",
        url:    "https://github.com/shamoldas"
      },
      {
        name:   "Sazal Das",
        role:   "Assistant Engineer",
        avatar: "https://github.com/sazaldas.png",
        orcid:  "https://orcid.org/0009-0004-4220-4287",
        url:    "https://github.com/sazaldas"
      }
    ]
  },

  /* ── 14. CONTACT ─────────────────────────────────────────
     Base cards accept small HTML in `text` (<br>, <a>).
     TEMPLATE for a new social button:
     {
       label: "GitHub", icon: "fab fa-github",
       url: "https://…", color: "#333333",
       text: "…", cta: "View Repos"
     } */
  contact: {
    title:    "Contact RSV Lab",
    subtitle: "Get in touch for collaborations, research inquiries, or general questions.",
    cards: [
      { icon: "fa-map-marker-alt", color: "var(--primary-blue)",   title: "Location", text: "University of Chittagong<br>Chittagong, Bangladesh" },
      { icon: "fa-phone",          color: "var(--primary-purple)", title: "Phone",    text: "01775-510351<br>01867-771598" },
      { icon: "fa-envelope",       color: "var(--primary-orange)", title: "Email",    text: "kamol.mbio@gmail.com" }
    ],
    socials: [
      { label: "Facebook", icon: "fab fa-facebook", url: "https://www.facebook.com/profile.php?id=100090153347276", color: "#1877F2", text: "Follow RSV Lab for updates, news, and community posts.", cta: "Visit Page" },
      { label: "YouTube",  icon: "fab fa-youtube",  url: "https://www.youtube.com/@RSVLab",                          color: "#FF0000", text: "Subscribe for tutorials, research talks, and lab updates.", cta: "Subscribe" },
      { label: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/kamol-das-7a4b0b1b7/",          color: "#0A66C2", text: "Connect with us professionally.",                         cta: "Connect" }
    ]
  },

  /* ── 15. FOOTER ────────────────────────────────────────── */
  footer: {
    tagline:   "Advancing AMR surveillance through open science and computational biology.",
    copyright: "© 2026 RSV Lab — Kamol Das. All rights reserved."
  },

  /* ── 16. SEO ───────────────────────────────────────────── */
  siteUrl: "https://rsv8lab.github.io/",
  ogImage: "https://rsv8lab.github.io/assets/images/og-image.png"
};

window.SITE = SITE;
