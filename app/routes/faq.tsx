import type { Route } from "./+types/faq";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ — Helz Kitchen" },
    {
      name: "description",
      content: "Answers to common questions about catering with Helz Kitchen.",
    },
  ];
}

export default function Faq() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-ivory px-6 py-16 text-navy">
      <h1 className="font-logo text-4xl">FAQ</h1>
      <p className="mt-4 opacity-70">
        [Placeholder] FAQ answers are drafts until Helena confirms them. The
        accordion will be added later.
      </p>
    </main>
  );
}
