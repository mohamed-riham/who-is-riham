import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05070B] py-12 text-xs text-[#8B9BB0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-white text-sm">Mohamed Riham</div>
          <div className="text-[11px] font-mono text-[#5C6B7E] mt-0.5">
            BSc (Hons) Data Science • Cardiff Metropolitan University / ICBT Campus
          </div>
          <div className="text-[11px] text-[#5C6B7E] mt-1">
            Built with Next.js App Router, TypeScript, and Tailwind CSS.
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="hover:text-white transition-colors">
            Experience
          </Link>
          <Link href="#education" className="hover:text-white transition-colors">
            Education
          </Link>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
