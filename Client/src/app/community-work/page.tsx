"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, ExternalLink, Globe, Sparkles, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Local image imports from assets/
import londonCharityImg from "@/assets/teams/london.png";
import fhWhistlersImg1 from "@/assets/teams/FH Whistlers FC.png";
import fhWhistlersImg2 from "@/assets/teams/FH Whistlers FC -2.png";
import fhWhistlersImg3 from "@/assets/teams/FH Whistlers FC -3.jpeg";
import abayamDonateImg from "@/assets/abayam-donate.jpg";
import vakariImg1 from "@/assets/vakari-1.jpg";
import vakariImg2 from "@/assets/vakari-2.jpg";
import vakariImg3 from "@/assets/vakari-3.jpg";
import vakariImg4 from "@/assets/vakari-4.jpg";

export default function CommunityWorkPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Banner Section */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
              <Heart className="w-3.5 h-3.5" /> Giving Back & Social Impact
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Our Community/Charity Work & Corporate Responsibility
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
              At Quality Conveyancing, we believe that true business success goes hand in hand with giving back. Our commitment to legal excellence is matched only by our dedication to supporting both local and global communities.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-5xl space-y-16">
            
            {/* Core Philosophy Introduction */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm text-center max-w-4xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">OUR PHILOSOPHY</span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-legalDark mb-4">
                Helping People Thrive Wherever They Are
              </h2>
              <p className="text-legalDark/80 text-base md:text-lg leading-relaxed font-light">
                For us, property law is about more than just contracts and completion dates—it is about helping people thrive wherever they are. Locally, we proudly dedicate our time, resources, and sponsorship to impactful causes.
              </p>
            </div>

            {/* 1) Shooting Star Children's Hospices Section */}
            <div className="bg-emerald-50/50 p-8 md:p-12 rounded-3xl border border-emerald-100 shadow-sm grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-2">LOCAL COMMUNITY CAUSE</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-legalDark mb-4">
                  Shooting Star Children’s Hospices
                </h3>
                <p className="text-legalDark/85 text-sm md:text-base leading-relaxed mb-4">
                  Locally, we proudly support vital organizations like <strong className="text-legalDark">Shooting Star Children’s Hospices</strong>—a charity that provides dedicated care for babies, children, and young people with life-limiting conditions, and their families, across Surrey and West London.
                </p>
                <p className="text-legalDark/75 text-xs md:text-sm leading-relaxed">
                  Through ongoing sponsorships and fundraising, we aim to help provide respite care, family support, and specialized therapies during life’s most challenging moments.
                </p>
              </div>

              <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-emerald-200 bg-white">
                <Image
                  src={londonCharityImg}
                  alt="Shooting Star Children's Hospices West London Care Support"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* 2) FH Whistlers FC Local Youth Football Sponsorship */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">LOCAL YOUTH SPONSORSHIP</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-legalDark">
                    Handwell FH Whistlers FC (6+ Years Sponsorship)
                  </h3>
                </div>

                <a
                  href="https://www.instagram.com/fhwhistlersfc?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-legalDark hover:bg-legalNavy text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md shrink-0 border border-white/10 group"
                >
                  <span>Follow @fhwhistlersfc</span>
                  <ExternalLink className="w-3.5 h-3.5 text-tealAccent group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <div className="space-y-4 text-legalDark/85 text-sm md:text-base leading-relaxed">
                <p>
                  We have proudly sponsored local team <strong className="text-legalDark">Handwell FH Whistlers FC</strong> for over six years, helping to mentor, inspire, and empower young people across our community. FH Whistlers FC is far more than just a Saturday football team—it is a vital pillar of the local community.
                </p>
                <p>
                  The club provides a safe, constructive space for young people to come together, build friendships, and open up about the real challenges they face every day. Beyond the pitch, the team encourages open conversations about work, education, and personal growth, with older players and coaches acting as positive role models to guide the next generation.
                </p>
                <p>
                  Our ongoing sponsorship directly supports these young players by providing essential football kits, training equipment, and matchday refreshments, as well as supporting local community initiatives like Handwell. By investing in FH Whistlers FC, we are helping to empower young people and build a stronger, more united local community.
                </p>
              </div>

              {/* FH Whistlers FC 3 Image Gallery */}
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-warmGray">
                  <Image
                    src={fhWhistlersImg1}
                    alt="FH Whistlers FC Youth Team Kit Sponsorship"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-warmGray">
                  <Image
                    src={fhWhistlersImg2}
                    alt="FH Whistlers FC Squad Training & Mentorship"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* 3rd Image with Color Correction Fix */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-warmGray">
                  <Image
                    src={fhWhistlersImg3}
                    alt="FH Whistlers FC Matchday Community Support"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top brightness-105 contrast-[1.05] saturate-[1.1]"
                  />
                </div>
              </div>
            </div>

            {/* 3) Global Outreach - Abayam Sri Lanka */}
            <div className="bg-purple-50/50 p-8 md:p-12 rounded-3xl border border-purple-100 shadow-sm grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-700 block">
                  GLOBAL OUTREACH &amp; CHARITY
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-legalDark">
                  Supporting Abayam (Sri Lanka Healthcare &amp; Education)
                </h3>
                <p className="text-legalDark/85 text-sm md:text-base leading-relaxed">
                  Beyond our local community, we actively support charities like <strong className="text-legalDark">Abayam</strong>, helping to transform healthcare, medical facilities, and educational infrastructure for underprivileged and war-torn communities in Sri Lanka.
                </p>
                <div className="pt-2">
                  <a
                    href="https://justgiving.com/campaign/abayam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#7a127a] hover:bg-[#600e60] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all group"
                  >
                    <span>Donate via JustGiving</span>
                    <ExternalLink className="w-4 h-4 text-white/90 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-5 relative aspect-[3/4] max-w-sm mx-auto w-full rounded-2xl overflow-hidden shadow-lg border border-purple-200 bg-white">
                <Image
                  src={abayamDonateImg}
                  alt="Make a Soul Smile - Donate Now to Abayam Sri Lanka"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* 4) Abayam Free Education Centre Opens in Palchenai (Article) */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-tealAccent">
                      A Project Funded by Quality Conveyancing
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-textMuted font-medium">
                      Vakarai &amp; Batticaloa districts, Sri Lanka • 27 June 2026
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-legalDark">
                    Abayam Free Education Centre Opens in Palchenai
                  </h3>
                </div>

                <a
                  href="https://justgiving.com/campaign/abayam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-legalDark hover:bg-legalNavy text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md shrink-0 border border-white/10 group"
                >
                  <span>Support Projects on JustGiving</span>
                  <ExternalLink className="w-3.5 h-3.5 text-tealAccent group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Lead Story */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-legalDark/85 text-sm md:text-base leading-relaxed">
                  <p className="font-medium text-legalDark text-base md:text-lg">
                    On 27th June 2026, we celebrated the opening of the Abayam Free Education Centre in Palchenai, serving communities across the Vakarai and Batticaloa districts of Sri Lanka.
                  </p>
                  <p>
                    The building was fully funded by our firm, <strong className="text-legalDark">Quality Conveyancing</strong>, through Pat &amp; Vijay Chandrasekaram, and is dedicated in loving memory of Vijay’s mother, Valliyammah — a tribute to her wish to see children given a path forward through education. The centre is run in partnership with the Rural Development Society, Palchenai.
                  </p>
                  <p>
                    The opening day began with a ribbon-cutting and the unveiling of the centre’s nameboard, followed by prayers and blessings. Villagers, parents, students, the village leader, the village women’s leader, and principals from surrounding schools all came out to celebrate — along with refreshments for the children.
                  </p>
                </div>

                <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-warmGray">
                  <Image
                    src={vakariImg1}
                    alt="Opening day ribbon cutting, 27 June 2026 - Abayam Free Education Centre"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-white text-xs text-center font-medium">
                    Opening day ribbon cutting ceremony, 27 June 2026
                  </div>
                </div>
              </div>

              {/* Article Photo Gallery */}
              <div className="grid sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-warmGray">
                    <Image
                      src={vakariImg2}
                      alt="The centre's nameboard, dedicated in memory of Valliyammah"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="text-xs text-textMuted text-center">
                    The centre&apos;s nameboard, dedicated in memory of Valliyammah
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-warmGray">
                    <Image
                      src={vakariImg3}
                      alt="Villagers, parents and students on opening day"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="text-xs text-textMuted text-center">
                    Villagers, parents and students on opening day
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-warmGray">
                    <Image
                      src={vakariImg4}
                      alt="The finished centre, ready to welcome its first students"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="text-xs text-textMuted text-center">
                    The finished centre, ready to welcome its first students
                  </p>
                </div>
              </div>
            </div>

            {/* 4) Supporting Sanctuary and Sustainability at Bhaktivedanta Manor */}
            <div className="bg-amber-50/40 p-8 md:p-12 rounded-3xl border border-amber-200/60 shadow-sm grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Information & Link */}
              <div className="md:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">
                  SANCTUARY &amp; SUSTAINABILITY
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-legalDark leading-tight">
                  Supporting Sanctuary and Sustainability at Bhaktivedanta Manor
                </h3>
                <p className="text-legalDark/85 text-sm md:text-base leading-relaxed">
                  Every month, Quality Conveyancing makes a dedicated donation to support the sanctuary at Bhaktivedanta Manor. As shown in the video during feeding time, these contributions go directly toward providing high-quality feed, daily care, and medical support for over 60 resident cows and bulls.
                </p>
                <div className="p-4 bg-white/80 rounded-2xl border border-amber-200/80 shadow-xs space-y-3">
                  <p className="text-legalDark/80 text-xs sm:text-sm font-medium">
                    Anyone interested in making donations to this cause can do so via this link:
                  </p>
                  <div>
                    <a
                      href="https://www.krishnatemple.com/manor/godaan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-legalDark hover:bg-legalNavy text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all border border-white/10 group"
                    >
                      <span>Donate to Bhaktivedanta Manor (Go Seva / Godaan)</span>
                      <ExternalLink className="w-4 h-4 text-tealAccent group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Portrait Video Player (9:16) */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200/80 bg-black w-full max-w-[280px] sm:max-w-[310px] aspect-[9/16]">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src="/bhaktivedanta-manor-cows.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
