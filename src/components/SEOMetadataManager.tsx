import * as React from 'react';
import { useEffect, useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import baseMetadata from '../../metadata.json';

interface SEOMetadataManagerProps {
  activeProject: Project | null;
}

export default function SEOMetadataManager({ activeProject }: SEOMetadataManagerProps) {
  const [resolvedProject, setResolvedProject] = useState<Project | null>(activeProject);

  // Synchronize resolved project either from prop or from the URL search query parameter
  useEffect(() => {
    if (activeProject) {
      setResolvedProject(activeProject);
    } else {
      const checkQuery = () => {
        if (typeof window !== 'undefined') {
          const params = new URLSearchParams(window.location.search);
          const projectId = params.get('project');
          if (projectId) {
            const found = PROJECTS.find((p) => p.id === projectId);
            if (found) {
              setResolvedProject(found);
              return;
            }
          }
        }
        setResolvedProject(null);
      };

      checkQuery();
      // Listen for browser navigation changes
      window.addEventListener('popstate', checkQuery);
      // Continuous check in case state is updated programmatically
      const interval = setInterval(checkQuery, 500);
      return () => {
        window.removeEventListener('popstate', checkQuery);
        clearInterval(interval);
      };
    }
  }, [activeProject]);

  useEffect(() => {
    // 1. Core Default Constants from metadata.json
    const defaultTitle = baseMetadata.name || "M.A. Mohamed Riham | Software Engineer & Data Science Undergraduate Portfolio";
    const defaultDesc = baseMetadata.description || "Interactive professional portfolio of M.A. Mohamed Riham, a dual-disciplinary Software Engineer & Data Science Undergraduate. Discover YOLOv8 Edge AI projects, Credit Card Fraud research, and SOLID software implementations.";
    const authorName = "M.A. Mohamed Riham";
    const baseKeywords = "Mohamed Riham, M.A. Mohamed Riham, Software Engineer, Data Science Undergraduate, Sri Lanka, Addalaichenai, YOLOv8, Edge AI, Credit Card Fraud, SMOTE, XGBoost, PHP, SQL, Unity, SOLID Design, Portfolio Website, Crawler Visibility";

    // 2. Define the exact function to perform dynamic DOM tag updates
    const applySEOMetadata = (project: Project | null) => {
      const currentTitle = project 
        ? `${project.title} | Projects | ${defaultTitle}` 
        : defaultTitle;

      const currentDesc = project 
        ? `${project.shortDescription} Developed with: ${project.techStack.join(', ')}. ${project.problem} ${project.solution}`
        : defaultDesc;

      const currentKeywords = project 
        ? `${project.title}, ${project.category}, ${project.techStack.join(', ')}, ${baseKeywords}`
        : baseKeywords;

      const currentUrl = typeof window !== 'undefined' 
        ? window.location.origin + window.location.pathname + (project ? `?project=${project.id}` : '')
        : '';

      const currentImage = project?.image || 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80';

      // Re-trigger Document Title
      document.title = currentTitle;

      // Meta helper function
      const updateOrCreateMetaTag = (attributeName: 'name' | 'property', key: string, value: string) => {
        const selector = `meta[${attributeName}="${key}"]`;
        let metaEl = document.head.querySelector(selector);
        if (!metaEl) {
          metaEl = document.createElement('meta');
          metaEl.setAttribute(attributeName, key);
          document.head.appendChild(metaEl);
        }
        metaEl.setAttribute('content', value);
      };

      // General Crawler Meta Tags
      updateOrCreateMetaTag('name', 'description', currentDesc.substring(0, 320));
      updateOrCreateMetaTag('name', 'keywords', currentKeywords);
      updateOrCreateMetaTag('name', 'author', authorName);
      updateOrCreateMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      updateOrCreateMetaTag('name', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large');

      // Facebook & LinkedIn Open Graph Protocol Tags
      updateOrCreateMetaTag('property', 'og:title', currentTitle);
      updateOrCreateMetaTag('property', 'og:description', currentDesc.substring(0, 200));
      updateOrCreateMetaTag('property', 'og:image', currentImage);
      updateOrCreateMetaTag('property', 'og:url', currentUrl);
      updateOrCreateMetaTag('property', 'og:type', project ? 'article' : 'profile');
      updateOrCreateMetaTag('property', 'og:site_name', defaultTitle);
      updateOrCreateMetaTag('property', 'og:locale', 'en_US');

      if (!project) {
        updateOrCreateMetaTag('property', 'profile:first_name', 'Mohamed');
        updateOrCreateMetaTag('property', 'profile:last_name', 'Riham');
        updateOrCreateMetaTag('property', 'profile:username', 'mohamed-riham');
        updateOrCreateMetaTag('property', 'profile:gender', 'male');
      }

      // Twitter Cards Meta Tags
      updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
      updateOrCreateMetaTag('name', 'twitter:title', currentTitle);
      updateOrCreateMetaTag('name', 'twitter:description', currentDesc.substring(0, 200));
      updateOrCreateMetaTag('name', 'twitter:image', currentImage);
      updateOrCreateMetaTag('name', 'twitter:creator', '@mohamed_riham');

      // Canonical Element Link Updates
      let canonicalLink = document.head.querySelector('link[rel="canonical"]');
      if (!canonicalLink && typeof window !== 'undefined') {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      if (canonicalLink) {
        canonicalLink.setAttribute('href', currentUrl);
      }

      // Inject Schema.org JSON-LD Structured Data for Rich Snippet Search Carousel
      let schemaScript = document.head.querySelector('script[id="seo-structured-data"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('id', 'seo-structured-data');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }

      // Formulate complete structured entities
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home Portal",
            "item": typeof window !== 'undefined' ? window.location.origin : 'https://mohamed-riham.github.io'
          },
          ...(project ? [
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Projects Hub",
              "item": (typeof window !== 'undefined' ? window.location.origin : 'https://mohamed-riham.github.io') + '#projects'
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": project.title,
              "item": currentUrl
            }
          ] : [
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Interactive Career Profile",
              "item": currentUrl
            }
          ])
        ]
      };

      const primaryEntity = project 
        ? {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "headline": project.title,
            "description": project.shortDescription,
            "image": currentImage,
            "genre": project.category,
            "datePublished": "2025-11-01",
            "author": {
              "@type": "Person",
              "name": authorName,
              "jobTitle": "Software Engineer & Data Science Undergraduate"
            },
            "keywords": project.techStack.join(', '),
            "abstract": project.longDescription,
            "mainEntityOfPage": currentUrl,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }
        : {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": defaultTitle,
            "description": defaultDesc,
            "mainEntity": {
              "@type": "Person",
              "name": authorName,
              "givenName": "Mohamed Riham",
              "familyName": "M.A.",
              "jobTitle": "Software Engineer & Data Science Undergraduate",
              "nationality": "Sri Lankan",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Addalaichenai",
                "addressRegion": "Eastern Province",
                "addressCountry": "Sri Lanka"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "ICBT Campus",
                  "description": "BSc (Hons) in Data Science candidate"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "BCAS Campus",
                  "description": "Higher National Diploma (HND) in Software Engineering"
                }
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Advanced Data Science",
                "Edge Computing with YOLOv8",
                "Imbalanced Credit Card Fraud Classifiers",
                "SOLID Software Design Principles",
                "Computer Vision with OpenCV",
                "Relational Database Normalization"
              ]
            }
          };

      // Compile both schemas into an array to maximize indexing coverage
      schemaScript.textContent = JSON.stringify([primaryEntity, breadcrumbData], null, 2);
    };

    // 3. Apply SEO for the active/resolved project
    applySEOMetadata(resolvedProject);

    // 4. Expose dynamic updater function to the global scope (resolving user request)
    if (typeof window !== 'undefined') {
      (window as any).updateSEOMetadata = (project: Project | null) => {
        applySEOMetadata(project);
      };
    }

    // 5. Cleanup on Unmount (Restore baseline tags)
    return () => {
      applySEOMetadata(null);
    };
  }, [resolvedProject]);

  return null; // Renderless component used purely for head tag injections
}
