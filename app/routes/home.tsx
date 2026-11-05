import type { Route } from './+types/home';
import { site } from '../data/site';
import { CtaButton, ImageSlot } from '../components/ui';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Helz Kitchen — Russian Fusion Catering' },
    {
      name: 'description',
      content:
        'Helz Kitchen is a Russian Fusion catering business. There is no set menu — tell Helena about your event and she builds and prices a custom menu.',
    },
  ];
}

const EVENT_CARDS = [
  { title: 'Private Parties' },
  { title: 'Office Lunches' },
  { title: 'Custom Requests' },
];

const HOW_IT_WORKS = [
  { title: 'Reach out', body: 'Tell Helena about your event.' },
  { title: 'Build your menu', body: 'She creates and prices a menu for you.' },
  { title: 'Enjoy', body: 'Helena caters your event.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-card-gradient text-ivory">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-20">
          {/* Card-style name block: name, descriptor tucked under it to the
              right, then the tagline flush left. w-fit keeps them as one unit. */}
          <div className="w-fit">
            <div className="w-fit">
              <h1 className="font-logo text-5xl leading-none sm:text-6xl">
                {site.name}
              </h1>
              <p className="-mr-3 text-right text-sm font-light uppercase tracking-[0.3em]">
                {site.descriptor}
              </p>
            </div>
            <p className="mt-2 font-logo text-xl leading-tight sm:text-2xl">
              {site.tagline}
            </p>
          </div>
          <CtaButton onGradient />
          <ImageSlot
            label="Hero food photo"
            className="mt-4 aspect-video w-full"
          />
        </div>
      </section>

      {/* Meet Helz */}
      <section className="bg-deep-teal text-ivory">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h2 className="font-sans text-3xl font-semibold">Meet Helz</h2>
            <p>Helena is the chef behind Helz Kitchen.</p>
            <p className="opacity-80">
              [HELENA TO CONFIRM] Short placeholder bio. Helena will confirm
              this copy before launch.
            </p>
          </div>
          <ImageSlot
            label="Photo of Helena"
            className="aspect-[4/3] w-full md:w-1/2"
          />
        </div>
      </section>

      {/* Events */}
      <section className="bg-ivory text-navy">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 font-sans text-3xl font-semibold">Events</h2>
          <ul className="grid gap-6 sm:grid-cols-3">
            {EVENT_CARDS.map((card) => (
              <li
                key={card.title}
                className="rounded-2xl border border-navy/15 p-6"
              >
                <h3 className="font-sans text-xl font-semibold">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm opacity-70">
                  [Placeholder — HELENA TO CONFIRM]
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm opacity-60">
            Event types are drafts until Helena confirms them.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-navy/10 bg-ivory text-navy">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 font-sans text-3xl font-semibold">
            How It Works
          </h2>
          <ol className="grid gap-6 sm:grid-cols-3">
            {HOW_IT_WORKS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2">
                <span className="font-sans text-4xl font-semibold opacity-40">
                  {i + 1}
                </span>
                <h3 className="font-sans text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm opacity-70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sample Dishes */}
      <section className="border-t border-navy/10 bg-ivory text-navy">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-2 font-sans text-3xl font-semibold">
            Sample Dishes
          </h2>
          <p className="mb-8 text-sm opacity-70">
            A taste of her work — there is no set menu. Helena builds each menu
            around your event.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ImageSlot label="Dish photo" className="aspect-square" />
            <ImageSlot label="Dish photo" className="aspect-square" />
            <ImageSlot label="Dish photo" className="aspect-square" />
            <ImageSlot label="Dish photo" className="aspect-square" />
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="bg-card-gradient text-ivory">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-16">
          <h2 className="font-sans text-3xl font-semibold">
            Ready to plan your event?
          </h2>
          <p className="opacity-80">
            Serving {site.serviceArea}. [HELENA TO CONFIRM]
          </p>
          <CtaButton onGradient />
          <a href={site.phoneHref} className="underline">
            Call {site.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
