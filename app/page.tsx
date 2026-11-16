import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AllProjects from "@/components/AllProjects";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import WritingSection from "@/components/WritingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <AllProjects />
      <SkillsMatrix />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <WritingSection />
      <ContactSection />
    </div>
  );
}
