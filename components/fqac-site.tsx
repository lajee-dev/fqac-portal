"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { SiteFooter } from "./fqac/footer";
import { SiteHeader } from "./fqac/header";
import {
  AboutSection,
  ContactSection,
  DownloadsSection,
  EventsSection,
  FaqSection,
  GallerySection,
  GovernanceSection,
  HeroSection,
  HighlightsSection,
  MeetingsSection,
  MembersSection,
  QuoteSection,
  ServicesSection,
} from "./fqac/sections";

export default function FqacSite({
  lecturerStats,
}: {
  lecturerStats: ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [openCommittee, setOpenCommittee] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <HeroSection />
      {lecturerStats}
      <AboutSection />
      <GovernanceSection />
      <ServicesSection />
      <QuoteSection />
      <MembersSection
        openCommittee={openCommittee}
        setOpenCommittee={setOpenCommittee}
      />
      <HighlightsSection />
      <EventsSection />
      <MeetingsSection />
      <DownloadsSection />
      <GallerySection />
      <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <ContactSection sent={sent} setSent={setSent} />
      <SiteFooter />
    </main>
  );
}
