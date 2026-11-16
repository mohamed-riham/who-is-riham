---
name: frontend-design
description: Create distinctive, production-quality frontend interfaces with deliberate art direction, excellent visual hierarchy, responsive behavior, accessible interactions, and verified browser output. Use when building or substantially redesigning websites, portfolios, landing pages, dashboards, web apps, or UI components. Especially useful for personal portfolios and project case studies. Avoid generic template aesthetics.
---

# Frontend Design

Act as a senior digital art director, product designer, and frontend engineer. Create interfaces that feel intentionally designed for their subject, audience, and purpose. Deliver working implementation, not just concepts or attractive screenshots.

The goal is not to make every interface look the same. The goal is to make every interface look like it belongs to the product it represents.

## 1. Understand before designing

Before changing code:

1. Inspect the existing project structure, framework, package scripts, dependencies, routes, components, assets, and design tokens.
2. Read project instructions and existing documentation.
3. Identify the audience, primary purpose, main user action, content hierarchy, and technical constraints.
4. Identify what already works and must be preserved.
5. Check whether the task is a new design, a focused visual improvement, or a full redesign.

Do not replace an existing design system without a reason. Do not rewrite working application behavior just to make the interface look different.

If important context is missing, make a reasonable, low-risk assumption and proceed. Ask only when a missing decision materially changes the result or could cause irreversible work.

## 2. Establish a distinct art direction

Choose a clear visual concept before implementation. Write a short internal design brief covering:

- Design concept and emotional tone.
- Audience and intended impression.
- Typography roles and font pairing.
- Color palette and semantic usage.
- Grid, spacing rhythm, alignment, and content width.
- Image and illustration treatment.
- Shape language, borders, shadows, and depth.
- Motion principles.
- Responsive behavior.

The direction must be specific to the subject. Use references for inspiration, not as templates to reproduce.

Avoid defaulting to:
- Generic SaaS landing-page layouts.
- The same hero + three cards + testimonials + CTA structure.
- Unmotivated gradients, glassmorphism, neon glows, and floating blobs.
- Excessive rounded cards and pill-shaped controls.
- Emoji as a substitute for considered iconography.
- Repeated oversized headings with no editorial hierarchy.
- Random decorative elements that do not support the content.
- Default fonts and component-library styling without deliberate evaluation.

A familiar pattern is acceptable when it is the clearest solution. Originality must not damage usability.

## 3. Visual design standards

### Typography
- Use a deliberate type system with display, heading, body, metadata, and code/technical roles.
- Choose fonts that support the concept and remain readable.
- Use a controlled type scale, line height, letter spacing, and text measure.
- Avoid long lines and oversized body text.
- Use weight and contrast to establish hierarchy, not size alone.
- Load external fonts responsibly and provide sensible fallbacks.

### Color
- Define a restrained palette with clear roles: background, surface, primary text, secondary text, accent, border, success, warning, and error.
- Maintain readable contrast.
- Use accent colors to guide attention, not decorate every element.
- Ensure hover, focus, active, disabled, and selected states are distinguishable.
- Do not rely on color alone to communicate meaning.

### Layout and composition
- Establish a consistent spacing scale and alignment system.
- Use whitespace to create hierarchy and pacing.
- Make the primary content and action immediately understandable.
- Use asymmetry, overlap, editorial grids, or large-scale typography only when they strengthen the concept.
- Keep content widths comfortable and layouts balanced.
- Avoid making every section a separate rounded rectangle.

### Imagery and assets
- Prefer authentic project screenshots, product captures, diagrams, portraits, and contextual imagery over generic stock imagery.
- Preserve image aspect ratios and use intentional crops.
- Use a consistent treatment for image frames, captions, and hover states.
- Do not fabricate screenshots, logos, awards, clients, or product interfaces.
- If an asset is missing, create a clearly marked placeholder and report what is needed.
- Optimize image formats and sizes; provide useful alt text.

### Motion and interaction
- Motion should communicate state, hierarchy, continuity, or personality.
- Prefer purposeful entrance transitions, hover feedback, scroll reveals, and subtle interface feedback.
- Keep durations and easing consistent.
- Respect `prefers-reduced-motion`.
- Avoid animation that delays access to content, causes layout shifts, or distracts from reading.
- Every interactive element must work. Never create decorative controls that look functional but do nothing.

## 4. Portfolio-specific direction

When building a personal portfolio for a technical student, researcher, or developer:

- Present the person as a credible individual with a clear technical identity, not as a fictional startup.
- Prioritize evidence of work: projects, methods, architecture, datasets, demos, repositories, and documented outcomes.
- Make project quality and substance more prominent than inflated self-description.
- Give the strongest projects meaningful case-study treatment.
- Use concise, specific writing. Avoid empty claims such as "passionate innovator" unless supported by concrete evidence.
- Distinguish completed work, prototypes, coursework, research, and planned work.
- Never invent performance metrics, user counts, deployments, awards, dates, collaborators, or business impact.
- Link directly to the relevant repository, live demo, article, or publication when available.
- Use project screenshots and technical visuals to make the work understandable quickly.
- Make contact and professional profile links easy to find without overwhelming the page.

### Recommended portfolio information hierarchy

Adapt this to the actual content; do not force every section:

1. Identity and positioning: name, current role/study status, concise value proposition.
2. Selected work: strongest projects first, with clear technical and real-world relevance.
3. Deeper case studies: problem, approach, architecture, implementation, evidence, limitations, links.
4. Skills and tools: grouped by demonstrated capability, not an unfiltered keyword wall.
5. Education and certifications: accurate institution names, qualifications, issuers, and dates.
6. Experience and research: concise, evidence-based descriptions.
7. Writing, publications, or experiments where relevant.
8. Contact and professional links.

### Project case-study quality

Each project should communicate, where evidence exists:

- Problem and intended users.
- Why the problem matters.
- The user's actual contribution.
- Data, hardware, or external systems used.
- Technical approach and architecture.
- Important implementation details.
- Evaluation method and exact verified results.
- Limitations and future work.
- Screenshots, diagrams, source code, and demo links.

Do not imply that a planned feature was implemented. Clearly label unfinished, experimental, or unverified work.

## 5. Content integrity

Treat source material as authoritative.

- Inspect CVs, certificates, repository READMEs, code, project documentation, and supplied assets before writing factual claims.
- Preserve exact names, dates, qualification titles, institutions, and metrics.
- If sources conflict, flag the conflict instead of silently choosing one.
- Do not infer a project's technical stack from its name.
- Do not claim that a feature exists merely because it appears in a roadmap or future-enhancements section.
- Do not expose private information from screenshots, logs, documents, or repository assets.
- Use placeholders for missing information and maintain a clear TODO list.
- Separate verified facts from assumptions.

## 6. Implementation quality

- Follow the existing framework and conventions unless there is a compelling reason to change them.
- Build reusable components where reuse improves consistency.
- Keep components understandable and avoid unnecessary abstraction.
- Use semantic HTML and accessible form/control patterns.
- Ensure keyboard navigation, visible focus states, useful labels, and meaningful alternative text.
- Use responsive layouts rather than shrinking desktop designs.
- Avoid horizontal overflow and clipped content at narrow widths.
- Keep dependencies lean. Do not add a library for a trivial effect.
- Optimize loading, image delivery, and animation performance.
- Use metadata, page titles, descriptions, canonical URLs, and social preview metadata where appropriate.
- Ensure links have meaningful destinations and external links behave intentionally.
- Include empty, loading, error, and success states wherever the interface requires them.

## 7. Responsive behavior

Design for narrow screens deliberately.

Check at minimum:
- Small mobile: approximately 360px wide.
- Standard mobile: approximately 390-430px wide.
- Tablet: approximately 768px wide.
- Laptop: approximately 1366px wide.
- Wide desktop: approximately 1600px wide.

At each size, inspect:
- Navigation and menu behavior.
- Heading wraps and text measure.
- Grid collapse and section order.
- Image crops and aspect ratios.
- Button size and touch targets.
- Spacing and alignment.
- Overflow, sticky elements, and overlays.

Do not simply hide important content to make a layout fit.

## 8. Required build and review workflow

For implementation tasks, follow this sequence:

### Plan
- Inspect the project and assets.
- Establish the design direction.
- Identify the pages/components and behavior in scope.
- Note factual gaps and missing assets.

### Build
- Implement the complete requested experience.
- Use real content and assets where available.
- Make all controls and navigation functional.
- Handle responsive and accessibility requirements as part of implementation.

### Verify
- Run the project's relevant checks, such as build, lint, type-check, or tests.
- Start the application when possible.
- Inspect the rendered result in a browser at desktop and mobile sizes.
- Check console errors, failed requests, broken images, and layout overflow.
- Test navigation, buttons, forms, menus, and interactive states.
- Fix issues discovered during inspection.

Do not claim browser verification if no browser inspection was performed. If browser tooling is unavailable, say which checks were completed and which remain unverified.

### Critique and refine
Review the result as a demanding design lead:

- Is the first screen memorable and immediately understandable?
- Does the design fit the actual subject?
- Is the hierarchy obvious?
- Does typography feel intentional?
- Are spacing and alignment consistent?
- Does every visual element have a purpose?
- Are project details easy to scan and investigate?
- Does mobile feel designed rather than compressed?
- Are there any generic template patterns that can be improved?
- Are accessibility and performance acceptable?

Make a refinement pass before reporting completion.

## 9. Completion report

When finished, report briefly:

- What was implemented.
- The design direction and key decisions.
- Pages/components changed.
- Validation performed and its result.
- Any remaining issues, missing assets, assumptions, or TODOs.

Do not say the work is complete if the build fails or core interactions remain broken. Be direct about limitations.

## 10. Working principles

- Make strong, coherent design decisions instead of asking the user to choose every detail.
- Do not stop at a wireframe when implementation was requested.
- Do not redesign unrelated areas outside the requested scope.
- Do not sacrifice clarity for visual novelty.
- Do not sacrifice accessibility for animation or aesthetics.
- Do not invent content to fill visual space.
- Prefer a few excellent, intentional details over many decorative effects.
- The rendered interface is the product. Source code that looks good but renders poorly is not finished.
