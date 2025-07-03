import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// ───────────────────────────────────────────────────────────
//  1. Page <Metadata> – SEO / OG
// ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Projects – Ahmad Graham",
    description:
        "Explore Ahmad Graham’s featured apps and open‑source projects — from Divyo, the OCR‑powered receipt splitter, to a real‑time online Spades game.",
    openGraph: {
        title: "Projects – Ahmad Graham",
        description:
            "Explore Ahmad Graham’s featured apps and open‑source projects.",
        url: "https://yourdomain.com/projects",
        images: [
            {
                url: "https://yourdomain.com/images/preview.png",
                width: 1200,
                height: 630,
                alt: "Projects preview",
            },
        ],
    },
};

// ───────────────────────────────────────────────────────────
//  2. Helper types
// ───────────────────────────────────────────────────────────
type Repo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    language: string | null;
};

// ───────────────────────────────────────────────────────────
//  3. Server‑side fetch – public GitHub API
//     • Use a PAT via NEXT_PUBLIC_GITHUB_TOKEN (optional) to raise rate‑limit
//     • Cache for 1 hour
// ───────────────────────────────────────────────────────────
async function getRepos(): Promise<Repo[]> {
    const headers: HeadersInit = {
        Accept: "application/vnd.github+json",
        ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        }),
    };

    const res = await fetch(
        "https://api.github.com/users/agraham02/repos?sort=updated&per_page=100",
        {
            headers,
            next: { revalidate: 60 * 60 }, // 1 hour
        }
    );

    if (!res.ok) {
        console.error("GitHub fetch failed", await res.text());
        return [];
    }

    const data: Repo[] = await res.json();
    return data.filter(
        (r) =>
            !r.private && // skip private repos
            !r.fork && // skip forks
            r.description // only show repos with a description
    );
}

// ───────────────────────────────────────────────────────────
//  4. Featured projects – curated content
// ───────────────────────────────────────────────────────────
const featured = [
    {
        slug: "divyo",
        title: "Divyo – Receipt Splitter",
        tagline: "Scan receipts ➜ auto‑split costs for your crew",
        image: "/images/divyo-mock.png",
        href: "/projects/divyo",
    },
    {
        slug: "online-spades",
        title: "Multiplayer Spades",
        tagline: "Real‑time card rooms built with WebSockets",
        image: "/images/spades-mock.png",
        href: "/projects/online-spades",
    },
];

// ───────────────────────────────────────────────────────────
//  5. Components
// ───────────────────────────────────────────────────────────
function FeaturedProjects() {
    return (
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white dark:from-black dark:to-neutral-900">
            <div className="max-w-6xl mx-auto px-4">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        Featured Work
                    </h1>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A closer look at the products I’m most proud of shipping
                        and iterating on.
                    </p>
                </header>

                <div className="grid gap-10 md:grid-cols-2">
                    {featured.map((p) => (
                        <Link
                            key={p.slug}
                            href={p.href}
                            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                        >
                            <Image
                                src={p.image}
                                alt={p.title}
                                width={900}
                                height={600}
                                className="object-cover w-full h-64 md:h-80 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white">
                                    {p.title}
                                </h3>
                                <p className="text-teal-200">{p.tagline}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Button to dedicated featured page */}
                <div className="text-center mt-12">
                    <Link
                        href="/projects/featured"
                        className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition"
                    >
                        View Detailed Case Studies
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ repo }: { repo: Repo }) {
    return (
        <a
            href={repo.homepage || repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 bg-white/80 dark:bg-neutral-900/60 backdrop-blur hover:-translate-y-1 hover:shadow-xl transition"
        >
            <h4 className="text-lg font-semibold mb-2">{repo.name}</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-1">
                {repo.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>{repo.language}</span>
                <span>⭐ {repo.stargazers_count}</span>
            </div>
        </a>
    );
}

function ProjectsGrid({ repos }: { repos: Repo[] }) {
    if (repos.length === 0) {
        return (
            <p className="text-center text-neutral-600 dark:text-neutral-400">
                Couldn’t load projects right now – try refreshing.
            </p>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((r) => (
                <ProjectCard key={r.id} repo={r} />
            ))}
        </div>
    );
}

// ───────────────────────────────────────────────────────────
//  6. Page Component
// ───────────────────────────────────────────────────────────
export default async function ProjectsPage() {
    const repos = await getRepos();

    return (
        <>
            {/* You already have <Navbar /> and <Footer /> in your root layout → no duplicates */}

            {/* Featured */}
            <FeaturedProjects />

            {/* All GitHub projects */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <header className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Open‑Source & Experiments
                        </h2>
                        <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            A selection of public repositories & side projects I
                            tinker with in the open. Code, issues, and iterative
                            ideas welcome.
                        </p>
                    </header>

                    <ProjectsGrid repos={repos} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-teal-600 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">
                    Have an idea? Let’s collaborate.
                </h3>
                <p className="mb-8 max-w-xl mx-auto">
                    I’m always excited to tackle new challenges, pair‑program,
                    or chat about opportunities. Reach out and let’s build
                    something impactful together.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-white text-teal-700 font-medium rounded-lg shadow hover:bg-neutral-100 transition"
                >
                    Contact Me
                </Link>
            </section>
        </>
    );
}
