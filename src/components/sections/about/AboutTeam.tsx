"use client";

import { useState } from "react";
import type { TeamMember } from "@/types/team";
import { TeamGrid } from "@/components/team/TeamGrid";
import { TeamMemberModal } from "@/components/team/TeamMemberModal";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { team } from "@/content/team/team";

export function AboutTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <Section id="team" spacing="large">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Label>05 / The Team</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            PEOPLE BEHIND THE WORK.
          </h2>

          <Text size="lg" muted className="mt-6">
            Eonx is built by a multidisciplinary team working across creative,
            content, design, technology and business.
          </Text>
        </div>

        <TeamGrid members={team} onSelect={setSelectedMember} />

        <TeamMemberModal
          member={selectedMember}
          open={Boolean(selectedMember)}
          onClose={() => setSelectedMember(null)}
        />
      </Container>
    </Section>
  );
}
