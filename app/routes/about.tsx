import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About — Helz Kitchen" },
    {
      name: "description",
      content: "About Helz Kitchen and Helena, the chef behind the business.",
    },
  ];
}

export default function About() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-ivory px-6 py-16 text-navy">
      <h1 className="font-logo text-4xl">About</h1>
      <p className="mt-4 opacity-70">
        [HELENA TO CONFIRM] Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Draft About copy to be replaced before launch.
      </p>
    </main>
  );
}
