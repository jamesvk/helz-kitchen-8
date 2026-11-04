import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      {/* TEMPORARY gradient + font test block. Remove when the real hero is built. */}
      <section className="bg-card-gradient flex min-h-[50vh] flex-col items-start justify-center gap-4 p-8 text-ivory">
        <p className="font-logo text-6xl font-normal">Helz Kitchen</p>
        <p className="font-logo text-xl">Tradition Twisted Deliciously</p>
      </section>
      <Welcome />
    </>
  );
}
