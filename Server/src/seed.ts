import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { Blog } from "./models/Blog";
import { AdminUser } from "./models/AdminUser";

dotenv.config();

const initialBlogs = [
  {
    title: "Understanding Stamp Duty (SDLT) Changes for UK Homebuyers",
    slug: "stamp-duty-land-tax-changes-2026-guide",
    excerpt: "Navigating the latest UK Stamp Duty Land Tax thresholds and relief options for first-time buyers and property movers.",
    content: `
      <h2>Navigating Stamp Duty Land Tax (SDLT) in England & Wales</h2>
      <p>Stamp Duty Land Tax (SDLT) remains one of the largest upfront financial outlays when purchasing residential property in England and Northern Ireland. Understanding the specific thresholds, exemptions, and surcharges can significantly impact your purchase budgeting.</p>
      
      <h3>1. First-Time Buyer Relief</h3>
      <p>Eligible first-time purchasers can claim full relief on residential properties up to the designated statutory relief threshold. However, if the purchase price exceeds the maximum ceiling, standard residential rates apply to the entire amount, entirely forfeiting first-time buyer status.</p>

      <h3>2. Additional Properties and Higher Rates</h3>
      <p>If you or your spouse/civil partner already own a major interest in residential property anywhere globally, your transaction will likely attract the Higher Rates on Additional Dwellings (HRAD). This surcharge is calculated on top of standard residential rates from the initial transaction threshold.</p>

      <h3>3. Why Timely Legal Guidance Matters</h3>
      <p>At Quality Conveyancing, our experienced solicitors calculate and submit your SDLT return directly with HMRC on completion day, ensuring relief eligibility is claimed accurately and avoiding penalties.</p>
    `,
    category: "Property Law",
    author: "Sarah Jenkins",
    readTime: "5 min read",
    coverImage: "",
    tags: ["SDLT", "Property Law", "Taxes", "Buying"],
    isPublished: true,
  },
  {
    title: "Leasehold Reform & Extension: What Flat Owners Need to Know",
    slug: "leasehold-reform-act-what-it-means-for-flat-owners",
    excerpt: "A comprehensive guide on recent lease extension laws, ground rent caps, and how to protect your property equity.",
    content: `
      <h2>The Critical Importance of Your Lease Length</h2>
      <p>When purchasing a leasehold property, you own the right to occupy the property for the term stipulated in the lease. As this term ticks down below 80 years, marriage value kicks in, making statutory extensions dramatically more expensive and impeding mortgage approvals.</p>
      
      <h3>Key Changes in Leasehold Legislation</h3>
      <p>Recent legislative reforms continue to reshape how freeholders and leaseholders interact, specifically regarding ground rent transparency, service charge dispute procedures, and streamlined 990-year statutory extensions.</p>

      <h3>Protecting Your Asset</h3>
      <p>If you hold a lease with fewer than 85 years remaining, instructing specialist conveyancers early gives you the statutory leverage to extend before mortgage lenders restrict financing.</p>
    `,
    category: "Leasehold",
    author: "David Miller",
    readTime: "7 min read",
    coverImage: "",
    tags: ["Leasehold", "Apartments", "Reform", "Ground Rent"],
    isPublished: true,
  },
  {
    title: "The Step-by-Step Conveyancing Process: Offer to Completion",
    slug: "step-by-step-residential-conveyancing-timeline",
    excerpt: "Demystifying the property conveyancing timeline in England & Wales—local searches, exchange of contracts, and completion day.",
    content: `
      <h2>From Offer Accepted to Handing Over the Keys</h2>
      <p>Residential conveyancing is the legal transfer of home ownership from seller to buyer. While every transaction has unique quirks, every standard freehold or leasehold follows four milestone phases.</p>
      
      <h3>Phase 1: Instruction and Pre-Contract Enquiries</h3>
      <p>The buyer's solicitor receives the draft contract pack from the seller's conveyancer, including Title Deeds (Office Copies), property questionnaires (TA6 & TA10), and fittings lists.</p>

      <h3>Phase 2: Searches and Enquiries</h3>
      <p>Local authority, drainage, water, and environmental searches are ordered. Specialist conveyancers raise technical enquiries regarding planning permissions, boundary disputes, or restrictive covenants.</p>

      <h3>Phase 3: Exchange of Contracts</h3>
      <p>Once mortgages are formally offered and all queries are answered, contracts are formally exchanged with a legally binding 10% deposit. At this exact moment, neither party can withdraw without severe financial penalties.</p>

      <h3>Phase 4: Completion</h3>
      <p>Completion funds are transferred via CHAPS. Once verified by the seller's solicitor, estate agents are authorized to release keys to the proud new homeowner.</p>
    `,
    category: "Guides",
    author: "Elena Rostova",
    readTime: "6 min read",
    coverImage: "",
    tags: ["Conveyancing", "Home Buying", "Timeline", "Guide"],
    isPublished: true,
  }
];

const seed = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/qc_db";
    await mongoose.connect(uri);
    console.log("[Seeder] Connected to MongoDB");

    const existingCount = await Blog.countDocuments();
    if (existingCount === 0) {
      console.log("[Seeder] No blogs found. Seeding initial articles...");
      await Blog.insertMany(initialBlogs);
      console.log(`[Seeder] Successfully seeded ${initialBlogs.length} initial blogs.`);
    } else {
      console.log(`[Seeder] Database already contains ${existingCount} blogs. Skipping seed.`);
    }

    // Seed default Admin accounts
    const adminCount = await AdminUser.countDocuments();
    if (adminCount === 0) {
      console.log("[Seeder] No admin users found. Creating initial staff & Super Admin accounts...");
      const salt = await bcrypt.genSalt(10);
      const defaultPassword = await bcrypt.hash("Admin@123456", salt);

      const defaultAdmins = [
        {
          name: "Super Admin",
          email: "admin@qualityconveyancing.co.uk",
          password: defaultPassword,
          role: "Super Admin",
          phone: "020 3763 6767",
        },
        {
          name: "Brinda Nicholson",
          email: "brinda@qualityconveyancing.co.uk",
          password: defaultPassword,
          role: "Director (Senior Solicitor)",
          phone: "020 3763 6767",
        },
        {
          name: "Vijay Chandras",
          email: "vijay@qualityconveyancing.co.uk",
          password: defaultPassword,
          role: "Head Of Business Development",
          phone: "07843 476 594",
        },
        {
          name: "Chandni Evans",
          email: "chandni@qualityconveyancing.co.uk",
          password: defaultPassword,
          role: "Conveyancing Fee Earner",
          phone: "020 3763 6767",
        },
      ];

      await AdminUser.insertMany(defaultAdmins);
      console.log("[Seeder] Successfully created 4 initial role-based admin accounts (Password: Admin@123456).");
    } else {
      console.log(`[Seeder] Admin accounts exist (${adminCount}).`);
    }

    process.exit(0);
  } catch (err) {
    console.error("[Seeder] Error seeding database:", err);
    process.exit(1);
  }
};

seed();
