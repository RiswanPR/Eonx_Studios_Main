import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/booking/BookingForm";
import { BookingHero } from "@/components/sections/booking/BookingHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Book a Call — Eonx",
  description: "Tell Eonx about your next project and start a conversation.",
};

export default function BookACallPage() {
  return (
    <main>
      <BookingHero />

      <Section spacing="default" className="pt-0 pb-24">
        <Container className="max-w-4xl">
          <BookingForm />
        </Container>
      </Section>
    </main>
  );
}
