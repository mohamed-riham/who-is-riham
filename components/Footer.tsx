import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050810] py-14 text-xs text-[#A4ADBB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-[#F2F0E9] text-sm tracking-tight">Mohamed Riham</div>
          <div className="text-xs font-mono text-[#69778A] mt-1">
            BSc (Hons) Data Science • Cardiff Metropolitan University / ICBT Campus
          </div>
          <div className="text-xs text-[#69778A] mt-1">
            Carefully crafted with Next.js App Router, TypeScript, and Tailwind CSS.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
          <Link href="#projects" className="hover:text-[#63DCC6] transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-[#63DCC6] transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="hover:text-[#63DCC6] transition-colors">
            Experience
          </Link>
          <Link href="#education" className="hover:text-[#63DCC6] transition-colors">
            Education
          </Link>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#63DCC6] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#63DCC6] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
