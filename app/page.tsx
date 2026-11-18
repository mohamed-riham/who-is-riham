import Hero from "@/components/Hero";
import PrinciplesSection from "@/components/PrinciplesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AllProjects from "@/components/AllProjects";
import AboutSection from "@/components/AboutSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import GitHubSection from "@/components/GitHubSection";
import WritingSection from "@/components/WritingSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-transparent relative z-10">
      <Hero />
      <PrinciplesSection />
      <FeaturedProjects />
      <AllProjects />
      <AboutSection />
      <SkillsMatrix />
      <ExperienceSection />
      <EducationSection />
      <GitHubSection />
      <WritingSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
