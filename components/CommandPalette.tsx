"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  FolderGit2,
  FileText,
  Mail,
  ExternalLink,
  Download,
  GraduationCap,
  Briefcase,
  BookOpen,
  X,
  Sparkles,
} from "lucide-react";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigationItems = [
    { label: "Featured Projects", href: "#projects", category: "Navigation", icon: FolderGit2 },
    { label: "Technical Skills Matrix", href: "#skills", category: "Navigation", icon: Sparkles },
    { label: "Experience & Leadership", href: "#experience", category: "Navigation", icon: Briefcase },
    { label: "Education (Cardiff Met / Pearson)", href: "#education", category: "Navigation", icon: GraduationCap },
    { label: "Research & Writing", href: "#writing", category: "Navigation", icon: BookOpen },
    { label: "Contact & Email", href: "#contact", category: "Navigation", icon: Mail },
  ];

  const projectItems = projects.map((p) => ({
    label: p.title,
    href: `/projects/${p.slug}`,
    category: "Projects",
    sublabel: `${p.category} • ${p.results[0]?.value || ""}`,
    icon: FolderGit2,
  }));

  const actionItems = [
    {
      label: "Download CV (PDF)",
      action: () => {
        window.open("/cv.pdf", "_blank");
        setOpen(false);
      },
      category: "Quick Actions",
      icon: Download,
    },
    {
      label: "Copy Email Address",
      action: () => {
        navigator.clipboard.writeText(profile.email);
        alert("Email copied: " + profile.email);
        setOpen(false);
      },
      category: "Quick Actions",
      icon: Mail,
    },
    {
      label: "GitHub Profile (@mohamed-riham)",
      action: () => {
        window.open(profile.socials.github, "_blank");
        setOpen(false);
      },
      category: "External Links",
      icon: ExternalLink,
    },
    {
      label: "LinkedIn Profile",
      action: () => {
        window.open(profile.socials.linkedin, "_blank");
        setOpen(false);
      },
      category: "External Links",
      icon: ExternalLink,
    },
  ];

  const filteredNavigation = navigationItems.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );
  const filteredProjects = projectItems.filter(
    (i) =>
      i.label.toLowerCase().includes(query.toLowerCase()) ||
      (i.sublabel && i.sublabel.toLowerCase().includes(query.toLowerCase()))
  );
  const filteredActions = actionItems.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-[#080D18]/80 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-xl rounded-3xl bg-[#0D1422] border border-white/15 shadow-2xl shadow-black/90 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-white/10 gap-3">
          <Search className="w-4 h-4 text-[#63DCC6]" />
          <input
            type="text"
            placeholder="Search projects, research, skills, or navigate..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-sm text-[#F2F0E9] placeholder-[#69778A] focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-lg text-[#A4ADBB] hover:text-[#F2F0E9] transition-colors"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-4">
          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#69778A]">
                Projects & Research
              </div>
              <div className="space-y-1 mt-1">
                {filteredProjects.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      router.push(item.href);
                      setOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-white/[0.05] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <FolderGit2 className="w-4 h-4 text-[#63DCC6]" />
                      <div>
                        <div className="text-xs font-semibold text-[#F2F0E9] group-hover:text-[#63DCC6] transition-colors">
                          {item.label}
                        </div>
                        {item.sublabel && (
                          <div className="text-[11px] font-mono text-[#A4ADBB]">
                            {item.sublabel}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#69778A] group-hover:text-[#F2F0E9]">
                      Jump →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          {filteredNavigation.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#69778A]">
                Sections
              </div>
              <div className="space-y-1 mt-1">
                {filteredNavigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-white/[0.05] transition-colors group"
                  >
                    <div className="flex items-center gap-3 text-xs font-medium text-[#F2F0E9] group-hover:text-[#63DCC6]">
                      <item.icon className="w-3.5 h-3.5 text-[#69778A] group-hover:text-[#63DCC6]" />
                      {item.label}
                    </div>
                    <span className="text-[10px] font-mono text-[#69778A]">Section</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          {filteredActions.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#69778A]">
                Actions
              </div>
              <div className="space-y-1 mt-1">
                {filteredActions.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-white/[0.05] transition-colors group"
                  >
                    <div className="flex items-center gap-3 text-xs font-medium text-[#F2F0E9] group-hover:text-[#63DCC6]">
                      <item.icon className="w-3.5 h-3.5 text-[#63DCC6]" />
                      {item.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 bg-[#080D18] border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#69778A]">
          <div className="flex items-center gap-2">
            <span>Nav:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
              ↑↓
            </kbd>
            <span>Select:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
              ↵
            </kbd>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Close:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
              ESC
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
