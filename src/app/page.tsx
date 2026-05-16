import Image from "next/image";
import {
  MapPinned,
  Building2,
  PackageOpen,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/LeadForm";
import ScrollToLeadButton from "@/components/ScrollToLeadButton";
import SectionHeader from "@/components/SectionHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "Innovative Branding Ideas | AD Vantage Integrated Marketing",
  description:
    "AD Vantage helping businesses to connect with customers in a meaningful way by being technology-enabled, data-driven, and creative marketing techniques.",
};

const LOGO_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778668639/advlogo_qq9f92.png";

const HERO_BG_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778674606/hero_qkgfwb.webp";

const DEFAULT_PLACEHOLDER =
  "https://picsum.photos/seed/placeholder/800/600";

export default function LandingPage() {
  const studentImg = PlaceHolderImages.find(
    (img) => img.id === "student-work"
  );

  const brandingImg = PlaceHolderImages.find(
    (img) => img.id === "branding-mockup"
  );

  const deferredSectionStyle = {
    contentVisibility: "auto",
    containIntrinsicSize: "900px",
  } as const;

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <nav className="fixed top-0 z-50 w-full overflow-x-hidden border-b bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2" aria-label="AD Vantage Logo">
            <Image
              src={LOGO_URL}
              alt="AD Vantage Logo"
              width={200}
              height={50}
              className="h-10 w-auto object-contain"
              priority
              quality={60}
            />
          </div>

          <div className="flex items-center gap-4">
            <ScrollToLeadButton className="bg-secondary px-6 font-bold text-white hover:bg-secondary/90">
             Plan Your Activation Campaign
            </ScrollToLeadButton>
          </div>
        </div>
      </nav>

      <main className="w-full pb-24 pt-20 lg:pb-0">
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-primary py-20 lg:py-20">
          <div className="absolute inset-0">
            <Image
              src={HERO_BG_URL}
              alt="Retail Branding"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
              quality={60}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />

          <div className="container relative z-10 mx-auto max-w-7xl px-4">
            <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="w-full space-y-6 text-white">
                <h1 className="font-headline text-3xl leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] md:text-3xl">
                  Your Target Audience Is Already In That Mall. <br />
                  We Make Sure They Leave Knowing Your Brand
                </h1>

                <p className="max-w-xl text-xl text-white">
                  On-ground brand activation campaigns for FMCG brands, D2C launches, real estate projects, and consumer brands across Bangalore.
                </p>

                {/* <div className="flex max-w-2xl flex-wrap gap-2">
                  {[
                    "Retail Branding Specialist",
                    "Store & Franchise Outlet Branding",
                    "Trusted by 100+ brands",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                    >
                      <Star className="h-3.5 w-3.5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div> */}

                {/* <div className="flex max-w-2xl flex-wrap gap-3">
                  {[
                    "Retail Experience Design",
                    "Visual Merchandising",
                    "Materials & Fabrications",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(219,52,54,0.35)]"
                    >
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div> */}

                <p className="text-lg italic text-secondary">
                  BOOK A FREE CONSULTATION
                </p>
              </div>

              <div id="lead-form-top">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

          {/* CLIENTS */}
          <section
            className="w-full overflow-hidden bg-muted py-14"
            style={deferredSectionStyle}
          >
            <div className="container mx-auto max-w-7xl px-4 text-center">
              
              <h2 className="mb-3 text-3xl font-bold text-primary">
                CLIENT’S WE SERVE
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
                Trusted by growing retail brands, franchise businesses, and emerging D2C companies across India.
              </p>

              {/* LOGO MARQUEE */}
              <div className="relative overflow-hidden">
                
                {/* LEFT FADE */}
                <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

                {/* RIGHT FADE */}
                <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

                <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16">
                  
                  {[
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839836/wipro_c4vtlh.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839845/raymond_uqgbc9.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839849/jbl-logo_ytljd0.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839851/hul_upiizw.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839854/hewlet_v97taj.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839856/ariseNshine_fwmfxw.webp",


                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839836/wipro_c4vtlh.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839845/raymond_uqgbc9.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839849/jbl-logo_ytljd0.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839851/hul_upiizw.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839854/hewlet_v97taj.webp",
                    "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778839856/ariseNshine_fwmfxw.webp",
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="flex h-24 w-44 items-center justify-center rounded-2xl border border-muted bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Image
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        width={140}
                        height={70}
                        className="h-auto max-h-12 w-auto object-contain transition duration-300 hover:scale-105"            />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

{/* ABOUT */}
<section
  className="w-full bg-white py-20"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* IMAGE */}
      <div className="order-2 relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:order-1">
        <Image
          src={studentImg?.imageUrl || DEFAULT_PLACEHOLDER}
          alt="Retail Branding"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* CONTENT */}
      <div className="order-1 space-y-6 lg:order-2">
        <SectionHeader
          title="Consumer Engagement Campaigns Designed For Brand Recall"
          subtitle={
            <>
            We create activation experiences that help brands engage audiences through mall activations, product sampling, campus campaigns, and on-ground engagement across Bengaluru.
            </>
          }
          centered={false}
        />
        <p className="mt-2 text-lg leading-relaxed text-primary">
          Built for visibility. Designed for interaction. Focused on brand recall.
        </p>

        <ul className="space-y-4">
          {[
            "Brand Activation Specialists - Bengaluru",
            "100+ Campaigns Executed Across India",
            "Mall | Campus | On Grpund | Sampling",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 font-medium text-primary"
            >
              <ShieldCheck className="h-6 w-6 text-secondary" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 inline-block border-b-2 border-secondary pb-1 text-lg font-bold text-primary">
          We don’t just run campaigns, we create experiences consumers remember.
        </p>
      </div>

    </div>
  </div>
</section>

{/* BRAND IMPACT */}
<section
  className="w-full bg-muted py-20"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* CONTENT */}
      <div className="order-1 space-y-6 lg:order-1">
        <SectionHeader
          title={
          <>
         Your Audience Is Already Outside.
          <br />
          The Right Activation Strategy Helps You Reach Them.
          </>
          }
          subtitle="Today’s consumers engage more with brands they experience directly."
          centered={false}
        />

      <div className="space-y-4">

      <p className="text-lg leading-relaxed text-muted-foreground">
        On-ground activations help brands:
      </p>

      <ul className="space-y-4">
        {[
          "Better retail visibility",
          "Improved customer engagement",
          "Stronger brand recall",
          "End-to-end retail execution",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 font-medium text-primary"
          >
            <ShieldCheck className="h-6 w-6 text-secondary" />
            {item}
          </li>
        ))}
      </ul>
            <div className="space-y-4">

      <p className="text-lg leading-relaxed text-muted-foreground">
        The right activation campaign helps your brand connect, engage, and stay memorable.
      </p>
      </div>

    </div>
      </div>

      {/* IMAGE */}
      <div className="order-2 relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:order-2">
        <Image
          src="https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778844599/WhatsApp_Image_2026-05-15_at_4.48.21_PM_zp8l0l.jpg"
          alt="Retail branding showcase"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

    </div>
  </div>
</section>
        {/* SERVICES */}
          <section
            className="w-full bg-white py-20"
            style={deferredSectionStyle}
          >
          <div className="container mx-auto max-w-7xl px-5">
            <SectionHeader
              title="Six Ways We Get Your Brand In Front of the Right Consumer"
              subtitle="From high-footfall mall environments to campus corridors and office parks, we activate your brand where your consumer actually is."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
              {
                icon: <Building2 />,
                title: "Mall Activations",
                desc: "High-footfall consumer engagement campaigns inside malls and retail environments.",
              },
              {
                icon: <PackageOpen />,
                title: "Product Sampling Campaigns",
                desc: "Wet & dry sampling campaigns that help consumers experience your product directly.",
              },
              {
                icon: <GraduationCap />,
                title: "School & College Activations",
                desc: "Youth-focused engagement campaigns designed to build early brand affinity.",
              },
              {
                icon: <MapPinned />,
                title: "Feet On Street Campaigns",
                desc: "Ground-level outreach campaigns that bring your brand directly to consumers.",
              },
              {
                icon: <Sparkles />,
                title: "Experiential Marketing",
                desc: "Immersive brand experiences designed to improve engagement and recall.",
              },
              {
                icon: <BriefcaseBusiness />,
                title: "Corporate Activations",
                desc: "Professional engagement campaigns for enterprise and workplace audiences.",
              },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-white/60 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-secondary/100 hover:bg-white"
                >
                  <div className="h-fit rounded-lg bg-primary/5 p-3 text-primary">
                    {item.icon}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-headline text-lg text-primary">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* PACKAGES */}
<section
  className="w-full bg-primary py-24 text-white"
  style={deferredSectionStyle}
>
  <div className="container mx-auto max-w-7xl px-4">
    <SectionHeader
      title="Choose Your Campaign Format. We Handle Everything Else."
      subtitle={
        <>
          Four activation formats. Each built for a different brand objective.{" "}
          <span className="font-semibold text-secondary">
          Not sure which one fits?
          </span>
          ,{" "}
          Tell us your campaign goal and we'll recommend the right approach.
        </>
      }
      light
    />

    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4 xl:grid-cols-4f">

      {[
      {
        tag: "STARTER",
        title: "Mall Activations",
        desc: "",
        features: [
          "Branded activation stall setup & branding",
          "Trained brand ambassadors (3–5 days)",
          "Consumer interaction & data capture",
          "Product sampling / demonstration",
          "Post-campaign interaction report",
        ],
        cta: "Get My Mall Activation Quote",
      },

      {
        tag: "SAMPLING",
        title: "Product Sampling Campaigns",
        desc: "",
        features: [
          "Wet or dry sampling campaign design",
          "Sampling location strategy (malls, RWA, retail clusters)",
          "Trained sampling brand ambassadors",
          "Consumer feedback capture",
          "Trial-to-intent measurement report",
        ],
        cta: "Plan my Sampling Campaign",
      },

      {
        tag: "CAMPUS",
        title: "Campus Activation Campaign",
        desc: "",
        features: [
          "Campus selection & permission management",
          "Brand ambassador teams (students preferred)",
          "Interactive engagement + digital integration",
          "App download / sign-up drive",
          "Campus-specific creative production",
        ],
        cta: "Get A Plan",
      },

      {
        tag: "FULL STACK",
        title: "Full Brand Activation Strategy",
        desc: "",
        features: [
          "Multi-channel activation strategy",
          "Mall + Campus + Feet-on-Street combined",
          "Dedicated activation manager",
          "Real-time campaign performance dashboard",
          "Post-campaign brand lift study",
          "Scalable for pan-India rollout",
        ],
        cta: "Get A Custom Activation Proposal",
      },
      ].map((item) => (
        <div
          key={item.title}
          className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/15"
        >

          {/* TOP */}
          <div className="p-6">
            <div className="mb-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
              {item.tag}
            </div>

            <h3 className="mb-4 text-2xl font-bold leading-tight text-white group-hover:text-secondary">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-white/70">
              {item.desc}
            </p>
          </div>

          {/* FEATURES */}
          <div className="flex-1 space-y-4 px-6 pb-6">
            {item.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 border-b border-white/10 pb-4"
              >
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                  ✓
                </div>

                <p className="text-sm leading-relaxed text-white/80">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto p-6 pt-0">
            <ScrollToLeadButton className="h-12 w-full rounded-xl bg-secondary text-sm font-bold text-white transition-all hover:bg-secondary/90">
              {item.cta} →
            </ScrollToLeadButton>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
          {/* MARKET SECTION */}
    <section
      className="w-full bg-muted py-20"
      style={deferredSectionStyle}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="order-2 relative h-96 overflow-hidden rounded-2xl shadow-2xl lg:order-1">
            <Image
              src="https://res.cloudinary.com/dw9v7jjrq/image/upload/v1778844598/WhatsApp_Image_2026-05-15_at_4.48.34_PM_fwdsic.jpg"
              alt="Retail Growth"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* CONTENT */}
          <div className="order-1 space-y-6 lg:order-2">
            <SectionHeader
              title="Numbers Our Clients Actually Measure After Every Campaign"
              subtitle=""
              centered={false}
            />

            <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground marker:text-secondary">
              <li>
                <span className="text-slate-600">
                  2,500+ direct consumer interactions per mall activation (average)
                </span>
              </li>

              <li>
                <span className="text-slate-600">
                  68% trial-to-purchase intent on product sampling campaigns
                </span>
              </li>

              <li>
                <span className="text-slate-600">
                  3.2x post-activation brand recall vs. pre-activation baseline
                </span>
              </li>
                        <li>
                <span className="text-slate-600">
                  200–400 campus touchpoints per college campaign day
                </span>
              </li>
                        <li>
                <span className="text-slate-600">
                  100% location-specific targeting - we activate where your consumer is
                </span>
              </li>
                        <li>
                <span className="text-slate-600">
                  Post-campaign data report - every activation is measured and reported
                </span>
              </li>
            </ul>
          </div>

            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section
          className="relative w-full overflow-hidden bg-white py-24"
          style={deferredSectionStyle}
        >
          <div className="container relative z-10 mx-auto max-w-7xl space-y-8 px-4 text-center">
            <h2 className="font-headline text-4xl text-primary md:text-3xl">
              Your Campaign Window Is Shorter Than You Think. Let's Build It Now
            </h2>

            <p>
              We're currently taking on 4 new activation campaigns for Q3 2026. Share your campaign brief and we'll respond with a strategy in 24 hours.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 w-full border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-auto"
              >
                Learn More
              </ScrollToLeadButton> */}

              <ScrollToLeadButton
                size="lg"
                className="h-14 w-full bg-secondary px-10 text-lg font-bold text-white hover:bg-secondary/90 sm:w-auto"
              >
              WhatsApp Us Now
              </ScrollToLeadButton>

              {/* <ScrollToLeadButton
                variant="outline"
                size="lg"
                className="h-14 border-primary px-10 text-lg text-primary hover:bg-primary/5 sm:w-auto"
              >
                Enquire Now
              </ScrollToLeadButton> */}
            </div>

            {/* <p className="text-sm text-muted-foreground">
              Don&apos;t wait to turn your brand&apos;s potential into
              performance.
            </p> */}
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="lead-form"
          className="w-full bg-muted py-10"
          style={deferredSectionStyle}
        >
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="font-headline text-3xl text-primary">
                    Are you ready to put your brand where it belongs?
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    Get expert retail branding strategies tailored to your store
                    and brand goals.
                  </p>

                  <p className="text-base font-semibold text-secondary">
                    BOOK A FREE CONSULTATION
                  </p>
                </div>

                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-primary pb-28 pt-8 text-white lg:py-8">
        <div className="container mx-auto max-w-7xl px-4 text-center text-xs text-white/60">
          <p>©2026 AD Vantage Integrated Marketing All Rights Reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 flex w-screen gap-2 border-t bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-2 px-4">
          <ScrollToLeadButton className="h-12 flex-1 bg-secondary font-bold text-white">
            BOOK A FREE CONSULTATION
          </ScrollToLeadButton>
        </div>
      </div>
    </div>
  );
}