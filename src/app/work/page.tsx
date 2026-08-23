"use client";

import { useMemo, useState } from "react";
import { WorkHero } from "@/components/sections/work/WorkHero";
import { ProjectFilter } from "@/components/work/ProjectFilter";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { projects } from "@/content/projects/projects";

const categories = [
  "all",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  const featuredProject = projects.find((project) => project.featured);

  const remainingProjects =
    activeCategory === "all" && featuredProject
      ? filteredProjects.filter(
          (project) => project.slug !== featuredProject.slug,
        )
      : filteredProjects;

  return (
    <main>
      <WorkHero />

      <Section spacing="large">
        <Container>
          {activeCategory === "all" && featuredProject ? (
            <div className="mb-10">
              <ProjectGrid projects={[featuredProject]} />
            </div>
          ) : null}

          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <ProjectFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />

            <TextLink href="/book-a-call">Start a project</TextLink>
          </div>

          {remainingProjects.length > 0 ? (
            <ProjectGrid projects={remainingProjects} />
          ) : activeCategory !== "all" && filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-base text-[var(--foreground-muted)]">
                More work in this category will be featured soon.
              </p>
            </div>
          ) : null}
        </Container>
      </Section>
    </main>
  );
}
