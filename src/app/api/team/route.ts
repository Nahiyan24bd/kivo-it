import { NextResponse } from "next/server";

export async function GET() {
  const teamMembers = [
    {
      id: "1",
      name: "Nahiyan",
      designation: "Founder & Principal Architect",
      role: "Full-Stack & Cloud Systems",
      experience: "7+ Years Exp",
      bio: "Oversees enterprise platform architecture, Next.js optimization, and cloud scalability.",
      image: "/images/team/nahiyan.jpg",
    },
    {
      id: "2",
      name: "Tanvir Hasan",
      designation: "Head of Engineering",
      role: "Backend & Database Lead",
      experience: "6+ Years Exp",
      bio: "Specializes in high-concurrency database design, PostgreSQL clustering, and microservices.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      name: "Zubair Rahman",
      designation: "Lead UI/UX Engineer",
      role: "Design Systems & Frontend",
      experience: "5+ Years Exp",
      bio: "Crafts accessible, high-performance web applications and conversion-oriented design tokens.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "4",
      name: "Sabbir Ahmed",
      designation: "VP of Growth & Acquisition",
      role: "Performance Ads & CRO",
      experience: "5+ Years Exp",
      bio: "Directs full-funnel paid acquisition, multivariate A/B testing, and ROAS enhancement.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      name: "Mahmudul Karim",
      designation: "DevOps & Security Specialist",
      role: "Infrastructure & CI/CD",
      experience: "4+ Years Exp",
      bio: "Manages container orchestration, automated security audits, and zero-downtime deployments.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return NextResponse.json(teamMembers);
}