import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Camera, Video, MapPin } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: "Mohamed Riham | Photos, Media and Portfolio Highlights",
  },
  description:
    "Verified photographs, academic convocation media, engineering studio snapshots, and project video demonstrations of Mohamed Riham, Data Science student in Sri Lanka.",
  alternates: {
    canonical: "https://mohamed-riham.github.io/who-is-riham/media/",
  },
  openGraph: {
    title: "Mohamed Riham | Photos, Media and Portfolio Highlights",
    description:
      "Verified photographs, academic convocation media, engineering studio snapshots, and project video demonstrations of Mohamed Riham, Data Science student in Sri Lanka.",
    url: "https://mohamed-riham.github.io/who-is-riham/media/",
    images: [
      {
        url: "https://mohamed-riham.github.io/who-is-riham/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Riham — Photography and Media Highlights",
      },
    ],
  },
};

const VERIFIED_PHOTOS = [
  {
    src: "/images/profile/mohamed-riham-portrait.webp",
    alt: "Mohamed Riham academic candidate portrait for Cardiff Metropolitan University",
    caption: "Academic Candidate Portrait — Cardiff Metropolitan University",
    location: "Colombo, Sri Lanka",
    year: "2025",
  },
  {
    src: "/images/profile/mohamed-riham-campus.webp",
    alt: "Mohamed Riham on campus balcony during BTEC Higher National Diploma coursework",
    caption: "Campus Academic Life — BTEC Higher National Diploma",
    location: "Kalmunai, Sri Lanka",
    year: "2024",
  },
  {
    src: "/images/profile/random/colombo-urban-candid.webp",
    alt: "Mohamed Riham authentic urban portrait in Colombo",
    caption: "Urban Candid — Colombo City Center",
    location: "Colombo, Sri Lanka",
    year: "2025",
  },
  {
    src: "/images/profile/random/addalaichenai-motorbike-candid.webp",
    alt: "Mohamed Riham candid with motorbike in Addalaichenai",
    caption: "Coastal Road Candid — Addalaichenai",
    location: "Addalaichenai, Sri Lanka",
    year: "2024",
  },
  {
    src: "/images/profile/random/motorbike-sunset-portrait.webp",
    alt: "Mohamed Riham golden hour outdoor candid portrait with motorbike",
    caption: "Golden Hour Motorbike Portrait",
    location: "Addalaichenai, Sri Lanka",
    year: "2024",
  },
  {
    src: "/images/profile/random/formal-sunglasses-portrait.webp",
    alt: "Mohamed Riham formal editorial suit and sunglasses portrait",
    caption: "Editorial Suit & Sunglasses Portrait",
    location: "Addalaichenai, Sri Lanka",
    year: "2024",
  },
  {
    src: "/images/profile/random/formal-tie-adjust.webp",
    alt: "Mohamed Riham executive tie adjustment candid portrait",
    caption: "Convocation Formal Wear",
    location: "Addalaichenai, Sri Lanka",
    year: "2024",
  },
  {
    src: "/images/profile/random/diploma-awards-convocation.webp",
    alt: "Mohamed Riham graduation awards convocation ceremony in Kalmunai",
    caption: "Diploma Awards Convocation Ceremony",
    location: "Kalmunai, Sri Lanka",
    year: "2024",
  },
  {
    src: "/images/experience/bcas-bits-honour.webp",
    alt: "Mohamed Riham receiving official BITS commendation certificate at BCAS Kalmunai Campus Auditorium",
    caption: "BITS Leadership Tribute Ceremony",
    location: "Kalmunai, Sri Lanka",
    year: "2025",
  },
  {
    src: "/images/experience/bcas-pc-clinic-team.webp",
    alt: "Mohamed Riham as PC Clinic Official with technical diagnostics engineering team",
    caption: "PC Clinic Technical Diagnostics Team",
    location: "Kalmunai, Sri Lanka",
    year: "2024",
  },
  {
    src: "/images/certifications/bcas-pc-clinic-award-stage.webp",
    alt: "Mohamed Riham receiving Certificate of Appreciation on auditorium stage",
    caption: "Auditorium Stage Award Handover",
    location: "Kalmunai, Sri Lanka",
    year: "2024",
  },
  {
    src: "/images/workspace/mohamed-riham-craft-studio.webp",
    alt: "Mohamed Riham at creative maker and hardware craft studio desk",
    caption: "Maker Mindset — Hardware Craft & Systems Studio",
    location: "Sri Lanka",
    year: "2025",
  },
];

const VERIFIED_VIDEOS = [
  {
    title: "Azirah: Don't Let Her See You — 3D Gameplay & Atmospheric Demo",
    description: "In-engine walkthrough of first-person psychological horror prototype built in Unity 6 and C# with spatial 3D audio and URP volumetric lighting.",
    videoUrl: "/videos/azirah-gameplay-demo.mp4",
    isLocal: true,
    year: "2024",
  },
  {
    title: "Sri Lankan Currency Detector (Assistive AI) — YOLOv8 Real-Time Inference",
    description: "Real-time edge computer vision model classifying 6 Sri Lankan banknote denominations with 99.20% mAP@50 and automated audio feedback.",
    videoUrl: "https://youtu.be/IeytAWt0NNw",
    embedUrl: "https://www.youtube-nocookie.com/embed/IeytAWt0NNw",
    isLocal: false,
    year: "2025",
  },
  {
    title: "Automated Student Attendance System Using 128D Face Recognition",
    description: "Real-time video evaluation loop identifying facial encodings against MySQL database with automated timestamp generation and SMTP alerts.",
    videoUrl: "https://youtu.be/s1kjEoHqRIo",
    embedUrl: "https://www.youtube-nocookie.com/embed/s1kjEoHqRIo",
    isLocal: false,
    year: "2024",
  },
  {
    title: "IoT Smart Home Door Lock System — RFID Authentication & Blynk Telemetry",
    description: "Hardware demonstration integrating ESP8266/ESP32 firmware with MFRC522 RFID reader, servo latching, and real-time cloud notifications.",
    videoUrl: "https://youtu.be/S1Fof4P0N-s",
    embedUrl: "https://www.youtube-nocookie.com/embed/S1Fof4P0N-s",
    isLocal: false,
    year: "2024",
  },
];

export default function MediaPage() {
  const baseUrl = "https://mohamed-riham.github.io/who-is-riham";
  const canonicalUrl = `${baseUrl}/media/`;

  const mediaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Mohamed Riham | Photos, Media and Portfolio Highlights",
        description:
          "Official photographic and video media archive of Mohamed Riham, Data Science student at ICBT Campus / Cardiff Metropolitan University.",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
      },
      ...VERIFIED_VIDEOS.map((v, idx) => ({
        "@type": "VideoObject",
        "@id": `${canonicalUrl}#video-${idx + 1}`,
        name: v.title,
        description: v.description,
        thumbnailUrl: `${baseUrl}/og-image.png`,
        uploadDate: `${v.year}-01-01T00:00:00Z`,
        ...(v.isLocal ? { contentUrl: `${baseUrl}${v.videoUrl}` } : {}),
        ...(v.embedUrl ? { embedUrl: v.embedUrl } : {}),
      })),
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Media",
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <article className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-transparent text-[#D3C29F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A09383] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </Link>

          <span className="font-mono text-xs text-[#C43E17] uppercase tracking-wider font-semibold">
            Media Archive // Photography &amp; Video Demonstrations
          </span>
        </div>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#140A06] border border-[#C43E17]/40 shadow-[0_0_15px_rgba(196,62,23,0.18)] text-xs font-mono tracking-widest text-[#F9F9F6] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C43E17] animate-pulse" />
            <span>AUTHENTIC MEDIA &amp; VERIFIED DEMONSTRATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
            Photographs &amp; <span className="text-[#C43E17]">Demonstration Videos.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#D3C29F] font-light leading-relaxed">
            Genuine personal photographs, academic convocation moments, and video demonstrations documenting Mohamed Riham&apos;s real-world engineering projects.
          </p>
        </div>

        {/* Video Demonstrations Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 font-mono text-xs text-[#C43E17] uppercase tracking-wider font-semibold">
            <Video className="w-4 h-4" />
            <span>01 // Project Video Demonstrations &amp; System Walkthroughs</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {VERIFIED_VIDEOS.map((video, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0A0503] border border-white/10 rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_35px_rgba(196,62,23,0.18)] transition-all space-y-4"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#040202] border border-white/10 rounded-sm">
                  {video.isLocal ? (
                    <video
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={getAssetPath(video.videoUrl)} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#A09383]">
                    <span>RECORDED // {video.year}</span>
                    <span className="text-[#C43E17] font-semibold">VERIFIED DEMO</span>
                  </div>
                  <h2 className="text-lg font-bold text-white font-sans">{video.title}</h2>
                  <p className="text-xs text-[#D3C29F] font-light leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photography Gallery Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 font-mono text-xs text-[#C43E17] uppercase tracking-wider font-semibold">
            <Camera className="w-4 h-4" />
            <span>02 // Verified Personal &amp; Academic Photography</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERIFIED_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#0A0503] border border-white/10 rounded-sm hover:border-[#C43E17]/60 hover:shadow-[0_0_30px_rgba(196,62,23,0.15)] transition-all space-y-3 group"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#040202] rounded-sm">
                  <Image
                    src={getAssetPath(photo.src)}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040202] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#040202]/90 border border-white/10 px-2 py-1 text-[10px] font-mono text-white flex items-center justify-between">
                    <span className="truncate">{photo.caption}</span>
                    <span className="text-[#C43E17] ml-1 shrink-0">{photo.year}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#A09383] px-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C43E17]" />
                    {photo.location}
                  </span>
                  <span className="text-white font-medium">Authentic</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
