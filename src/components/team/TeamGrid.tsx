import type { TeamMember } from "@/types/team";
import { TeamCard } from "@/components/team/TeamCard";

interface TeamGridProps {
  members: TeamMember[];
  onSelect?: (member: TeamMember) => void;
}

export function TeamGrid({ members, onSelect }: TeamGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <TeamCard key={member.slug} member={member} onSelect={onSelect} />
      ))}
    </div>
  );
}
