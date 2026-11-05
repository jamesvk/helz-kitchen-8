import type { Route } from "./+types/contact";
import { site } from "../data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact — Helz Kitchen" },
    {
      name: "description",
      content:
        "Call, email, or send an inquiry to Helz Kitchen about catering your event.",
    },
  ];
}

export default function Contact() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 bg-ivory px-6 py-16 text-navy">
      <h1 className="font-logo text-4xl">Contact</h1>
      <a href={site.phoneHref} className="text-lg font-medium underline">
        Call {site.phone}
      </a>
      <a href={`mailto:${site.email}`} className="text-lg underline">
        {site.email}
      </a>
      <div className="rounded-2xl border-2 border-dashed border-navy/40 p-8 text-center opacity-70">
        Inquiry form goes here.
      </div>
    </main>
  );
}
