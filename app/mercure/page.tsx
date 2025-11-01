"use client";

import Header from "@/components/mercure/Header";
import HeroSection from "@/components/mercure/HeroSection";
import BookingWidget from "@/components/mercure/BookingWidget";
import OffersSection from "@/components/mercure/OffersSection";
import Footer from "@/components/mercure/Footer";

export default function MercurePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <BookingWidget />
        <OffersSection />
      </main>
      <Footer />
    </div>
  );
}