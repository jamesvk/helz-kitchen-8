import type { Route } from "./+types/food";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Food — Helz Kitchen" },
    {
      name: "description",
      content:
        "A taste of Helz Kitchen's Russian Fusion cooking. There is no set menu — every menu is built around your event.",
    },
  ];
}

export default function Food() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-ivory px-6 py-16 text-navy">
      <h1 className="font-logo text-4xl">Food</h1>
      <p className="mt-4 opacity-70">
        [Placeholder] Sample dishes will go here. There is no set menu — Helena
        builds and prices each menu around your event.
      </p>
    </main>
  );
}
