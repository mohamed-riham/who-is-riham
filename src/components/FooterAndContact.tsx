import * as React from 'react';
import { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  BookOpen, 
  Send, 
  CheckCircle,
  MapPin,
  ExternalLink,
  MessageSquareCode,
  Instagram
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { playCyberClick, playSuccessChime } from '../lib/audio';

export default function FooterAndContact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submittedLogs, setSubmittedLogs] = useState<Array<any>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playCyberClick();
    setIsSubmitting(true);
    
    // Simulate brief pipeline delay
    setTimeout(() => {
      const newLog = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'General Engineering Inquiry',
        message: formData.message
      };

      setSubmittedLogs([newLog, ...submittedLogs]);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      playSuccessChime();
    }, 1200);
  };

  return (
    <div id="footer-contact-root" className="space-y-12">
      
      {/* Contact Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Hand: Secure Messaging Station */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded font-mono font-semibold">
              Secure Communications Node
            </span>
            <h3 className="text-xl font-heading font-bold text-slate-100 flex items-center gap-1.5">
              <MessageSquareCode className="w-5 h-5 text-indigo-400 shrink-0" />
              Dispatch a Message to Riham
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Looking for an AI engineer or analytics developer? Drop a project prompt or educational inquiry below. Submissions are compiled into the client state buffer in real-time.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900/30 p-5 md:p-6 border border-slate-800 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-mono text-slate-500 block">Your Name / Organization *</label>
                <input 
                  id="contact-form-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Acme Industries"
                  className="w-full bg-slate-950 text-slate-200 text-xs px-3.5 py-2 rounded-lg border border-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-mono text-slate-500 block">Your Email Address *</label>
                <input 
                  id="contact-form-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. contact@acme.com"
                  className="w-full bg-slate-950 text-slate-200 text-xs px-3.5 py-2 rounded-lg border border-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-mono text-slate-500 block">Inquiry Subject</label>
              <input 
                id="contact-form-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. AI Model Integration Consultation"
                className="w-full bg-slate-950 text-slate-200 text-xs px-3.5 py-2 rounded-lg border border-slate-900 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-mono text-slate-500 block">Message Body *</label>
              <textarea 
                id="contact-form-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Detail your system goals, tech stack specifications, or project roadmap constraints..."
                className="w-full bg-slate-950 text-slate-200 text-xs px-3.5 py-2.5 rounded-lg border border-slate-900 focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <button
              id="btn-contact-submit"
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                  <span>Transmitting Query...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit to Riham</span>
                </>
              )}
            </button>
          </form>

          {/* Buffer Message Logs */}
          {submittedLogs.length > 0 && (
            <div className="space-y-3 p-4 bg-slate-950 rounded-lg border border-slate-900">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 uppercase">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Message Buffer Successful Updates ({submittedLogs.length})</span>
              </div>
              
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {submittedLogs.map((log) => (
                  <div key={log.id} className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] font-mono space-y-1">
                    <div className="flex justify-between text-slate-500">
                      <span>Sender: {log.name} &lt;{log.email}&gt;</span>
                      <span>{log.timestamp}</span>
                    </div>
                    <div className="text-indigo-300 font-semibold">Subject: {log.subject}</div>
                    <p className="text-slate-400 leading-relaxed font-sans">{log.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Hand: Locations and Hubs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded font-mono font-semibold">
              Location Metrics
            </span>
            <h3 className="text-xl font-heading font-bold text-slate-100 flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
              Operational Base
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Currently executing projects out of the Eastern Province of Sri Lanka:
            </p>
          </div>

          <div className="p-5 bg-slate-900/30 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-950 rounded border border-slate-900 text-indigo-400">
                <MapPin className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <span className="block text-sm font-semibold font-heading text-slate-200">Kalmunai / Akkaraipattu</span>
                <span className="block text-[10px] font-mono text-slate-500">Eastern Sri Lanka, SA-ST Zone</span>
              </div>
            </div>

            {/* Simulated Coordinate telemetry panel */}
            <div className="p-3 bg-slate-950 font-mono text-[10px] text-slate-500 rounded space-y-1 border border-slate-900">
              <div className="flex justify-between">
                <span>LATITUDE MATCH</span>
                <span className="text-indigo-400 font-bold">7.4111° N</span>
              </div>
              <div className="flex justify-between">
                <span>LONGITUDE MATCH</span>
                <span className="text-indigo-400 font-bold">81.8286° E</span>
              </div>
              <div className="flex justify-between">
                <span>UTC OFFSET</span>
                <span className="text-slate-300">+05:30 SLT</span>
              </div>
            </div>
            
            {/* Visual aesthetic quote card */}
            <div className="p-3.5 bg-indigo-950/15 border border-indigo-900/15 rounded-lg text-xs leading-relaxed text-slate-300">
              "Building lightweight models directly onto silicon hardware represents the absolute edge of regional accessibility. In places like Sri Lanka, this design approach guarantees service security where persistent networks are missing."
            </div>
          </div>

          {/* Social connections roster list */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono text-slate-500 block">External Network Links Directory</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a 
                id="social-link-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-lg flex items-center gap-2 group transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-500 uppercase leading-none mb-1">LinkedIn</span>
                  <span className="text-slate-200 text-xs font-semibold group-hover:text-white transition-colors">@mohamed-riham</span>
                </div>
              </a>

              <a 
                id="social-link-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-lg flex items-center gap-2 group transition-all cursor-pointer"
              >
                <Github className="w-4 h-4 text-slate-300 shrink-0" />
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-500 uppercase leading-none mb-1">GitHub</span>
                  <span className="text-slate-200 text-xs font-semibold group-hover:text-white transition-colors">@mohamed-riham</span>
                </div>
              </a>

              <a 
                id="social-link-devto"
                href={PERSONAL_INFO.devTo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-lg flex items-center gap-2 group transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-400 shrink-0" />
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-500 uppercase leading-none mb-1">Dev.to</span>
                  <span className="text-slate-200 text-xs font-semibold group-hover:text-white transition-colors">@mohamed-riham</span>
                </div>
              </a>

              <a 
                id="social-link-medium"
                href={PERSONAL_INFO.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-lg flex items-center gap-2 group transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-500 uppercase leading-none mb-1">Medium</span>
                  <span className="text-slate-200 text-xs font-semibold group-hover:text-white transition-colors">@mohamed-riham</span>
                </div>
              </a>

              <a 
                id="social-link-instagram"
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-lg flex items-center gap-2 group transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-500 uppercase leading-none mb-1">Instagram</span>
                  <span className="text-slate-200 text-xs font-semibold group-hover:text-white transition-colors">@_mohamed_riham</span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Main Bottom Line */}
      <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <span>© 2026 M.A. Mohamed Riham. All system parameters valid.</span>
          <p className="text-[10px] text-slate-600">Dual-disciplinary Software Engineer (HND Merit) & Data Science Undergraduate (BSc Hons).</p>
        </div>
        <div className="flex gap-4">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-400 transition-colors">
            {PERSONAL_INFO.email}
          </a>
          <span>·</span>
          <span className="text-emerald-500">Node Hub Online</span>
        </div>
      </div>

    </div>
  );
}
