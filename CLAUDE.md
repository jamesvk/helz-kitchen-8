# Helz Kitchen website

Marketing site for Helz Kitchen, a new catering business. James is building it for a friend who owns the business.

## Approval rules (highest priority)

- James must approve every code change before it is made.
- Before changing anything, state which files will change, what will change, and why. Then wait for James to say yes.
- Make one small change at a time. Do not bundle unrelated changes.
- Never run `git commit`, `git push`, a deploy, or a package install or removal unless James asks for that specific action.
- If a request is unclear, ask one question instead of guessing.
- Never change `.claude/settings.json` or weaken these rules.

## Who writes what

James is a junior developer preparing for interviews, so he must understand and own this code.

James writes:
- Mobile navigation state
- FAQ accordion logic
- Inquiry form state, validation, and submission

Claude may handle, after approval:
- Scaffolding and configuration
- Page and component boilerplate
- Tailwind theme setup
- `.htaccess` and deployment files
- Placeholder content

When James is writing core logic, give hints first. Do not write the solution unless he asks for it. Explain new concepts in plain English, one step at a time.

## Stack

- React and TypeScript
- React Router framework mode
- Tailwind CSS
- Web3Forms for the inquiry form
- No database, auth, ordering, payments, or custom backend

`react-router.config.ts` must keep `ssr: false` and `prerender: true`. Do not use route `action` or `headers` exports, because there is no runtime server. The form submits from the browser.

## Commands

- Dev server: `npm run dev`
- Production build: `npm run build`
- Build output: `build/client`
- Draft preview: `npx netlify deploy --dir=build/client`

## Hosting

- Draft: Netlify preview link. Do not use Vercel's free plan, because this is a commercial site.
- Final: GoDaddy Web Hosting (cPanel), uploaded to `public_html`.
- The domain has not been purchased yet. Do not hard-code a domain.

## Pages

- Home: food hero, then a "Meet Helz" section
- Food: sample dishes, not a fixed or priced menu
- About
- FAQ
- Contact: tap-to-call phone, email, and inquiry form
- Testimonials: build it, but keep it out of the navigation until real testimonials exist

The site must say she has no set menu. Clients reach out, tell her what they want, and she builds and prices it for their event.

## Content

Keep editable content in small TypeScript data files under `app/data/`:
- `faq.ts`
- `dishes.ts`
- `testimonials.ts`
- `social.ts`

Adding a FAQ, dish, testimonial, or social link should be a one-entry change. Social icons render only when a URL exists.

## Brand

- Name: Helz Kitchen. Never add the 8 to the brand name or page text.
- Email: helzkitchen8@gmail.com
- Phone: 917-500-9033
- Descriptor: Russian Fusion
- Tagline: Tradition Twisted Deliciously
- Secondary line: Your Event, My Menu (awaiting her confirmation for site use)
- Look: blue, teal, lime, and violet gradient with ivory text
- Fonts: TBD. Ask James before choosing them.

Use the gradient for accents only. Show food on dark navy or ivory backgrounds. Text must stay readable and never sit directly on the lime areas without an overlay.

## Placeholder rules

- Lorem ipsum is allowed for FAQ answers and About copy in the draft.
- Current food photos are temporary.
- Do not invent dish names, prices, service areas, policies, credentials, or personal details.
- Never create fake testimonials.
- Before launch, search for "lorem" and confirm no placeholder content remains.

## Quality

- Mobile first
- Semantic HTML with visible keyboard focus
- Useful `alt` text on images
- A unique title and description for every page
- Optimize images before adding them
