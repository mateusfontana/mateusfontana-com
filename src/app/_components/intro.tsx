import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col flex gap-16 mb-16 mt-8 md:mb-12">
      <div className="flex items-end justify-between">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
          Mateus Bez Fontana
        </h1>
        <div className="flex gap-4 ">
          <Link href='/posts' className="hover:underline">Posts</Link>
          <Link href='/about' className="hover:underline">About</Link>
          <Link href='/links' className="hover:underline">My Links</Link>
        </div>
      </div>
      <div className="flex gap-8">
        <Image src="/assets/profile.webp" alt="Mateus' profile picture" width={240} height={240} className="rounded-full"/>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-3xl">
            Hi!
          </h2>
          <p>
            I've been working as a <b>software engineer for 7 years</b>, with <b>React.js and Typescript for 6 years</b>, and with <b>Next.js for the past 2 years</b>, using these technologies to write high quality front-end applications and reusable components (design system), with a focus on <b>high test coverage, accessibility and performance</b>, all while making them look as good and as responsive as the designs.
          </p>
          <p>
            Currently I'm working as a <b>Senior Software Engineer at Staples Canada</b>, one of the biggest office supplies retailers in the world. There I am helping build a great store experience creating a design system in React and supporting Shopify and Next.js stores (staples.ca, staplescopyandprint.ca, and eway.ca).
          </p>
        </div>
      </div>
    </section>
  );
}
