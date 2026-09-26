export interface DemoProject {
  slug: string;
  title: string;
  category: "E-Commerce" | "Landing Page" | "Management System";
  subCategory: string;
  description: string;
  previewUrl: string;
  features: string[];
  bannerImage: string;
  metrics: string;
}

export const demos: DemoProject[] = [
  {
    slug: "smart-hospital-erp",
    title: "ApexCare Clinic & Hospital ERP",
    category: "Management System",
    subCategory: "Hospital / Clinic",
    description: "Doctor appointment queues, automated lab pathology report generation, patient beds, and multi-counter invoice POS.",
    previewUrl: "https://demo-hospital.kivoit.com",
    features: ["Doctor Rostering", "OPD & IPD Billing", "Prescription Generator", "Pathology Test Integration"],
    bannerImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    metrics: "Handles 1,500+ daily OPD tokens",
  },
  {
    slug: "campus-school-management",
    title: "EduCore School & College ERP",
    category: "Management System",
    subCategory: "School / Education",
    description: "Automated student monthly fee receipts, digital attendance cards, exam grading sheet, and SMS notices.",
    previewUrl: "https://demo-school.kivoit.com",
    features: ["Dynamic Fee Structure", "Admit Card & Result Automation", "Teacher Payroll", "Parent App API"],
    bannerImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    metrics: "99.8% Parent Fee Ledger Reliability",
  },
  {
    slug: "pourashava-union-portal",
    title: "CitizenLink Pouroshava & Union Portal",
    category: "Management System",
    subCategory: "Municipality / Local Govt",
    description: "Trade license issuance, citizen citizen-certificate generation, holding tax tracking, and local development budget logs.",
    previewUrl: "https://demo-union.kivoit.com",
    features: ["Online Trade License QR Verify", "Warish / Character Certificate Generator", "Holding Tax POS", "Ward Council Notices"],
    bannerImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    metrics: "Paperless workflow for 40,000+ residents",
  },
  {
    slug: "fashion-store-engine",
    title: "NovaHeadless Next.js E-Commerce",
    category: "E-Commerce",
    subCategory: "Retail Storefront",
    description: "Sub-second load times, cart abandonment recovery, multi-step checkout, and seamless bKash/Nagad/SSLCommerz gateway.",
    previewUrl: "https://demo-store.kivoit.com",
    features: ["Instant Cart & Drawer", "Inventory Sync Engine", "Automated Promo Banners", "Instant SMS Order Alert"],
    bannerImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    metrics: "0.8s Mobile Page Load Speed",
  },
  {
    slug: "sales-funnel-landing",
    title: "GrowthMatrix SaaS & Direct Sales Funnel",
    category: "Landing Page",
    subCategory: "High-Converting Page",
    description: "Direct conversion-optimized single-page architecture built for targeted Meta/Google Ads traffic with pixel integration.",
    previewUrl: "https://demo-funnel.kivoit.com",
    features: ["Sticky Direct Checkout", "Dynamic Scarcity Counter", "Split Test Variants", "Live Customer Proof Popups"],
    bannerImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    metrics: "5.4% Avg Checkout Conversion",
  },
];