"use client";

import { useState } from "react";
import {
  Button,
  ButtonLink,
  Card,
  Container,
  Divider,
  EmptyState,
  ErrorState,
  FormField,
  Grid,
  Heading,
  IconButton,
  Input,
  Label,
  Loading,
  Modal,
  Section,
  Select,
  Stack,
  Text,
  Textarea,
  TextLink,
  Toast,
} from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons/ArrowRight";
import { ArrowUpRight } from "@/components/ui/icons/ArrowUpRight";
import { Check } from "@/components/ui/icons/Check";
import { Close } from "@/components/ui/icons/Close";
import { Menu } from "@/components/ui/icons/Menu";
import { Minus } from "@/components/ui/icons/Minus";
import { Plus } from "@/components/ui/icons/Plus";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { EonxLogo } from "@/components/brand/EonxLogo";
import { EonxSymbol } from "@/components/brand/EonxSymbol";

const colors = [
  ["Eonx Black", "var(--color-eonx-black)"],
  ["Ultrasonic Blue", "var(--color-ultrasonic-blue)"],
  ["Hyper Magenta", "var(--color-hyper-magenta)"],
  ["Velvet Purple", "var(--color-velvet-purple)"],
  ["Periwinkle", "var(--color-periwinkle)"],
];

export default function DesignSystemPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorRetried, setErrorRetried] = useState(false);

  return (
    <main className="pb-24">
      {/* ============================================================
          00 / HEADER
          ============================================================ */}
      <Section spacing="large">
        <Container>
          <Stack gap="lg">
            <div>
              <Label>EONX DESIGN SYSTEM</Label>
              <Heading level={1} size="display">
                Design System
              </Heading>
            </div>

            <Text size="lg" muted>
              Foundation for the Eonx digital experience.
            </Text>
          </Stack>
        </Container>
      </Section>

      {/* ============================================================
          01 / BRAND IDENTITY & LOGO MARKS
          ============================================================ */}
      <Section>
        <Container>
          <Stack gap="md">
            <Heading level={2} size="lg">
              Brand Identity & Vector Marks
            </Heading>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="flex flex-col items-center justify-center p-8 text-center">
                <EonxSymbol size={48} className="text-white" />
                <Label className="mt-4">Symbol (48px)</Label>
              </Card>

              <Card className="flex flex-col items-center justify-center p-8 text-center">
                <EonxSymbol size={64} glow className="text-[var(--color-periwinkle)]" />
                <Label className="mt-4">Glowing Symbol (64px)</Label>
              </Card>

              <Card className="flex flex-col items-center justify-center p-8 text-center">
                <EonxLogo size="lg" href={undefined} />
                <Label className="mt-4">Full Wordmark</Label>
              </Card>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* ============================================================
          02 / COLOR TOKENS
          ============================================================ */}
      <Section>
        <Container>
          <Stack gap="md">
            <Heading level={2} size="lg">
              Colors
            </Heading>

            <Grid>
              {colors.map(([name, color]) => (
                <div
                  key={name}
                  className="min-h-40 rounded-[var(--radius-lg)] border-[var(--border-width)] border-[var(--color-border-default)] p-[var(--space-6)]"
                  style={{ background: color }}
                >
                  <span
                    className="type-body-sm font-medium"
                    style={{
                      color:
                        name === "Periwinkle"
                          ? "var(--color-eonx-black)"
                          : "var(--color-white)",
                    }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* ============================================================
          03 / TYPOGRAPHY SCALE
          ============================================================ */}
      <Section>
        <Container>
          <Stack gap="md">
            <Heading level={2} size="lg">
              Typography
            </Heading>

            <div className="type-display-xl">
              WE BUILD
              <br />
              EXPERIENCES.
            </div>

            <div className="type-heading-lg">
              Creative technology studio.
            </div>

            <Text size="lg">
              Eonx combines strategy, creativity, design, development and
              technology.
            </Text>

            <Label>01 / TYPOGRAPHY</Label>
          </Stack>
        </Container>
      </Section>

      {/* ============================================================
          04 / CORE UI COMPONENTS
          ============================================================ */}
      <Section>
        <Container>
          <Stack gap="lg">
            <div>
              <Label>02 / Components</Label>
              <Heading level={2} size="lg">
                Core UI
              </Heading>
            </div>

            <Divider />

            {/* Buttons */}
            <Stack gap="md">
              <Heading level={3} size="md">
                Buttons & Links
              </Heading>

              <div className="flex flex-wrap items-center gap-4">
                <Button>Book a Call</Button>
                <Button variant="secondary">View Work</Button>
                <Button variant="ghost">Explore</Button>
                <ButtonLink href="/services">Services</ButtonLink>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button loading>Loading...</Button>
                <Button disabled>Disabled</Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <TextLink href="/work">View Work</TextLink>
                <TextLink href="/about" showArrow={false}>
                  About Studio
                </TextLink>
              </div>
            </Stack>

            <Divider />

            {/* Icon Buttons & Icon System */}
            <Stack gap="md">
              <Heading level={3} size="md">
                Icon Buttons & Icons
              </Heading>

              <div className="flex flex-wrap items-center gap-4">
                <IconButton label="Next" size="sm">
                  <ArrowRight />
                </IconButton>
                <IconButton label="External link" size="md">
                  <ArrowUpRight />
                </IconButton>
                <IconButton label="Menu" size="lg">
                  <Menu />
                </IconButton>
                <IconButton label="Close" size="md">
                  <Close />
                </IconButton>
                <IconButton label="Check" size="md">
                  <Check />
                </IconButton>
                <IconButton label="Plus" size="md">
                  <Plus />
                </IconButton>
                <IconButton label="Minus" size="md">
                  <Minus />
                </IconButton>
              </div>
            </Stack>

            <Divider />

            {/* Cards & Dividers */}
            <Stack gap="md">
              <Heading level={3} size="md">
                Cards & Surfaces
              </Heading>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <Stack gap="sm">
                    <Label>Standard Card</Label>
                    <Heading level={4} size="md">
                      Subtle Border Surface
                    </Heading>
                    <Text size="md" muted>
                      Default surface styling using surface-01 and subtle
                      borders.
                    </Text>
                  </Stack>
                </Card>

                <Card elevated className="p-6">
                  <Stack gap="sm">
                    <Label>Elevated Card</Label>
                    <Heading level={4} size="md">
                      Elevated Shadow Surface
                    </Heading>
                    <Text size="md" muted>
                      Elevated surface with enhanced elevation shadow token.
                    </Text>
                  </Stack>
                </Card>
              </div>

              <div className="pt-4">
                <Text size="sm" muted className="mb-2">
                  Subtle Divider:
                </Text>
                <Divider />
                <Text size="sm" muted className="mb-2 mt-4">
                  Strong Divider:
                </Text>
                <Divider strong />
              </div>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* ============================================================
          05 / FORM FOUNDATION LABORATORY
          ============================================================ */}
      <Section>
        <Container>
          <Stack gap="lg">
            <div>
              <Label>03 / Forms</Label>
              <Heading level={2} size="lg">
                Form Foundation
              </Heading>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                label="Your Name"
                htmlFor="demo-name"
                hint="Enter your full name or company name"
                required
              >
                <Input
                  id="demo-name"
                  placeholder="e.g. John Doe"
                  aria-describedby="demo-name-hint"
                />
              </FormField>

              <FormField
                label="Project Type"
                htmlFor="demo-type"
                required
              >
                <Select id="demo-type" defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="branding">Branding & Identity</option>
                  <option value="web">Web Design & Development</option>
                  <option value="creative">Creative Technology</option>
                </Select>
              </FormField>

              <div className="md:col-span-2">
                <FormField
                  label="Project Details"
                  htmlFor="demo-details"
                  hint="Provide an overview of your vision, timeline, and goals"
                >
                  <Textarea
                    id="demo-details"
                    placeholder="Tell us about your project..."
                    aria-describedby="demo-details-hint"
                  />
                </FormField>
              </div>

              {/* Form Validation & Disabled State Tests */}
              <FormField
                label="Error State Field"
                htmlFor="demo-error"
                error="Please enter a valid email address."
                required
              >
                <Input
                  id="demo-error"
                  defaultValue="invalid-email"
                  aria-invalid="true"
                  aria-describedby="demo-error-error"
                />
              </FormField>

              <FormField
                label="Disabled Field"
                htmlFor="demo-disabled"
                hint="This input cannot be edited"
              >
                <Input
                  id="demo-disabled"
                  disabled
                  defaultValue="Disabled Input Value"
                  aria-describedby="demo-disabled-hint"
                />
              </FormField>
            </div>
          </Stack>
        </Container>
      </Section>

      {/* ============================================================
          06 / MODAL LABORATORY
          ============================================================ */}
      <Section>
        <Container>
          <Stack gap="lg">
            <div>
              <Label>04 / Overlays</Label>
              <Heading level={2} size="lg">
                Modal Dialog
              </Heading>
            </div>

            <Card className="p-6">
              <Stack gap="md">
                <Text size="md" muted>
                  Test the accessible client-side Modal dialog with backdrop
                  dismissal, Escape key listener, and accessible dialog
                  semantics.
                </Text>

                <div>
                  <Button onClick={() => setIsModalOpen(true)}>
                    Open Modal Dialog
                  </Button>
                </div>
              </Stack>
            </Card>

            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Start a Project"
            >
              <Stack gap="md">
                <Text size="md" muted>
                  Let&apos;s build something memorable together. Fill out the
                  form or reach out directly to begin the partnership.
                </Text>

                <FormField label="Email" htmlFor="modal-email" required>
                  <Input
                    id="modal-email"
                    type="email"
                    placeholder="you@domain.com"
                  />
                </FormField>

                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    variant="secondary"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setIsModalOpen(false)}>
                    Submit Inquiry
                  </Button>
                </div>
              </Stack>
            </Modal>
          </Stack>
        </Container>
      </Section>

      {/* ============================================================
          07 / FEEDBACK & STATE PRIMITIVES
          ============================================================ */}
      <Section>
        <Container>
          <Stack gap="lg">
            <div>
              <Label>05 / States & Feedback</Label>
              <Heading level={2} size="lg">
                States & Patterns
              </Heading>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <Stack gap="md">
                  <Label>Loading State</Label>
                  <Loading label="Fetching experience data..." />
                </Stack>
              </Card>

              <Card className="p-6">
                <Stack gap="md">
                  <Label>Toast Notification</Label>
                  <Toast
                    title="Inquiry Sent"
                    description="Our team will review your project and get back to you within 24 hours."
                  />
                </Stack>
              </Card>

              <Card className="p-6">
                <Stack gap="md">
                  <Label>Empty State</Label>
                  <EmptyState
                    title="No projects found"
                    description="We couldn't find any projects matching your current filter criteria."
                  />
                </Stack>
              </Card>

              <Card className="p-6">
                <Stack gap="md">
                  <Label>Error State</Label>
                  <ErrorState
                    title={
                      errorRetried
                        ? "Retry Successful!"
                        : "Failed to connect to experience API"
                    }
                    description={
                      errorRetried
                        ? "Connection re-established successfully."
                        : "Please check your network connection and try again."
                    }
                    onRetry={() => setErrorRetried(true)}
                  />
                </Stack>
              </Card>
            </div>

            {/* Section Header Shared Pattern */}
            <div className="pt-6">
              <SectionHeader
                eyebrow="06 / SHARED PATTERNS"
                title="Section Header Composition"
                description="Reusable section header pattern designed to establish consistent editorial hierarchy across all future pages."
              />
            </div>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}