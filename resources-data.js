/**
 * resources-data.js
 * ------------------------------------------------------------------
 * Single source of truth for every resource card on the site.
 * To add a resource: copy one object below and edit the fields.
 *
 *   id          unique string, no spaces
 *   title       shown as the card heading
 *   description one or two sentences, plain language
 *   category    must match a key in RESOURCE_CATEGORIES below
 *   url         "#" until a real download/view link is supplied
 *   featured    true = also appears in the "Featured Resources" strip
 * ------------------------------------------------------------------
 */

const RESOURCE_CATEGORIES = {
  healthcare: { label: "Healthcare", icon: "🩺", accent: "#22c55e" },
  medstudent: { label: "Medical Students", icon: "📚", accent: "#007aff" },
  neet: { label: "NEET", icon: "🎯", accent: "#ffb800" },
  useful: { label: "Useful", icon: "🧠", accent: "#a78bfa" },
};

const RESOURCES = [
  {
    id: "health-guide-01",
    title: "[Resource title — health guide]",
    description: "[Short description of a health guide or awareness resource.]",
    category: "healthcare",
    url: "#", // [Resource Download URL]
    featured: true,
  },
  {
    id: "health-tool-01",
    title: "[Resource title — health tool]",
    description: "[Short description of a useful health tool.]",
    category: "healthcare",
    url: "#",
    featured: false,
  },
  {
    id: "med-notes-01",
    title: "[Resource title — study notes]",
    description: "[Short description of a note set or reference material.]",
    category: "medstudent",
    url: "#",
    featured: true,
  },
  {
    id: "med-guide-01",
    title: "[Resource title — study guide]",
    description: "[Short description of a guide for medical students.]",
    category: "medstudent",
    url: "#",
    featured: false,
  },
  {
    id: "neet-prep-01",
    title: "[Resource title — NEET prep guide]",
    description: "[Short description of a NEET preparation resource.]",
    category: "neet",
    url: "#",
    featured: true,
  },
  {
    id: "neet-plan-01",
    title: "[Resource title — planning tool]",
    description: "[Short description of a NEET planning tool.]",
    category: "neet",
    url: "#",
    featured: false,
  },
  {
    id: "useful-template-01",
    title: "[Resource title — template]",
    description: "[Short description of a productivity or study template.]",
    category: "useful",
    url: "#",
    featured: true,
  },
  {
    id: "useful-tool-01",
    title: "[Resource title — useful tool]",
    description: "[Short description of a practical, everyday tool or site.]",
    category: "useful",
    url: "#",
    featured: false,
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { RESOURCES, RESOURCE_CATEGORIES };
}
