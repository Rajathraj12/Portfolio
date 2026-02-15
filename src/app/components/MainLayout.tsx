import { useEffect, useRef } from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { ExperienceSection } from './ExperienceSection';
import { AchievementsSection } from './AchievementsSection';
import { SkillsSection } from './SkillsSection';
import { ServicesSection } from './ServicesSection';
import { ContactSection } from './ContactSection';
import { Navigation } from './Navigation';

export function MainLayout() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main ref={mainRef}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
