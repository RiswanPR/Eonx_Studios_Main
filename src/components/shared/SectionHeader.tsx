import { Heading } from "@/components/ui/Heading";
import { Label } from "@/components/ui/Label";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Stack gap="md">
      {eyebrow ? (
        <Label>{eyebrow}</Label>
      ) : null}

      <Heading level={2} size="lg">
        {title}
      </Heading>

      {description ? (
        <Text size="lg" muted>
          {description}
        </Text>
      ) : null}
    </Stack>
  );
}
