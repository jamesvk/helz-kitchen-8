import type { Route } from "./+types/testimonials";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Testimonials — Helz Kitchen" },
    {
      name: "description",
      content: "What clients say about catering with Helz Kitchen.",
    },
  ];
}

export default function Testimonials() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-ivory px-6 py-16 text-navy">
      <h1 className="font-logo text-4xl">Testimonials</h1>
      <p className="mt-4 opacity-70">
        [Placeholder] Real testimonials will appear here once Helena shares
        them. We will not use fake testimonials.
      </p>
    </main>
  );
}
