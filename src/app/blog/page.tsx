"use client";
// src/app/blog/page.tsx
// Blog landing page – featured carousel, searchable/filtered grid, bottom CTA

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// --- UI components (shadcn/ui + custom) ---
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// --- Types ---
type BlogPost = {
    slug: string;
    title: string;
    summary: string;
    date: string; // ISO
    category: string;
    tags: string[];
    featured: boolean;
    image: string; // public/image path
};

// --- Mock data / fetch helper ---
// Replace with `import { getAllBlogPosts } from "@/lib/getBlogPosts"` in prod
const posts: BlogPost[] = [
    {
        slug: "getting-started-with-react-native",
        title: "Getting Started with React Native",
        summary:
            "A practical guide to setting up your first React Native project the right way.",
        date: "2025-05-01",
        category: "Mobile Development",
        tags: ["react-native", "mobile", "javascript"],
        featured: true,
        image: "/images/blog/react-native.png",
    },
    {
        slug: "optimizing-nextjs-for-seo",
        title: "Optimizing Next.js Sites for SEO in 2025",
        summary:
            "Modern SEO techniques tailored for the App Router and edge-runtime world.",
        date: "2025-04-12",
        category: "Web Development",
        tags: ["nextjs", "seo", "web"],
        featured: true,
        image: "/images/blog/nextjs-seo.png",
    },
    {
        slug: "building-receipt-scanner-ai",
        title: "How I Built an OCR‑Powered Receipt Scanner for Divyo",
        summary:
            "Under the hood of my React Native ML‑Kit integration, data parsing, and on‑device performance tricks.",
        date: "2025-03-20",
        category: "AI / ML",
        tags: ["ocr", "ai", "react-native"],
        featured: false,
        image: "/images/blog/receipt-ocr.png",
    },
    // ...add more posts
];

// --- Page metadata ---
// Removed unused page metadata constant (was not exported or used)

// --- Components ---
const FeaturedCarousel: React.FC<{ featured: BlogPost[] }> = ({ featured }) => (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-white dark:from-neutral-950 dark:to-black">
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-center mb-10">
                Featured&nbsp;Posts
            </h1>
            <Carousel>
                <CarouselContent>
                    {featured.map((post) => (
                        <CarouselItem
                            key={post.slug}
                            className="basis-full sm:basis-1/2 lg:basis-1/3 p-4"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group block overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition"
                            >
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={800}
                                    height={500}
                                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-6 bg-white dark:bg-neutral-900">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                        {post.summary}
                                    </p>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </section>
);

const SearchFilters: React.FC<{
    categories: string[];
    query: string;
    setQuery: (v: string) => void;
    category: string;
    setCategory: (v: string) => void;
}> = ({ categories, query, setQuery, category, setCategory }) => (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 mb-10">
        <div className="flex-1">
            <label className="sr-only" htmlFor="search">
                Search
            </label>
            <Input
                id="search"
                placeholder="Search by title, summary, or tag…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
        <div className="w-full sm:w-56">
            <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="_all">All categories</SelectItem>
                    {categories.map((c) => (
                        <SelectItem key={c} value={c}>
                            {c}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    </div>
);

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition bg-white/80 dark:bg-neutral-900/60 backdrop-blur"
    >
        <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={350}
            className="h-44 w-full object-cover"
        />
        <div className="p-5 flex flex-col flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                    variant="secondary"
                    className="bg-teal-600/10 text-teal-700 dark:text-teal-300 dark:bg-teal-700/20"
                >
                    {post.category}
                </Badge>
                {post.tags.slice(0, 2).map((t) => (
                    <Badge
                        key={t}
                        variant="outline"
                        className="border-neutral-300 dark:border-neutral-700"
                    >
                        {t}
                    </Badge>
                ))}
            </div>
            <h4 className="text-lg font-semibold mb-2 line-clamp-2">
                {post.title}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 flex-1">
                {post.summary}
            </p>
            <span className="mt-4 text-xs text-neutral-500 dark:text-neutral-500">
                {new Date(post.date).toLocaleDateString()}
            </span>
        </div>
    </Link>
);

const BottomCTA = () => (
    <section className="py-16 bg-teal-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-3">
            Have a topic you’d love to see?
        </h3>
        <p className="mb-8 max-w-xl mx-auto">
            I’m always looking for fresh ideas and collaboration opportunities.
            Drop me a line and let’s chat!
        </p>
        <Button
            asChild
            variant="secondary"
            className="text-teal-700 hover:text-teal-900"
        >
            <Link href="/contact">Contact Me</Link>
        </Button>
    </section>
);

// --- Main Page Component ---
export default function BlogPage() {
    // • In prod, replace `posts` with data fetched from a CMS or file system.
    const categories = useMemo(
        () => Array.from(new Set(posts.map((p) => p.category))).sort(),
        []
    );
    const featured = posts.filter((p) => p.featured);

    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("_all");

    const filteredPosts = useMemo(() => {
        const q = query.toLowerCase();
        return posts.filter((p) => {
            const matchesCategory = category !== "_all" ? p.category === category : true;
            const haystack = `${p.title} ${p.summary} ${p.tags.join(
                " "
            )}`.toLowerCase();
            const matchesQuery = q ? haystack.includes(q) : true;
            return matchesCategory && matchesQuery;
        });
    }, [query, category]);

    return (
        <>
            {/* Header */}
            <header className="py-20 text-center bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800">
                <h1 className="text-5xl font-extrabold tracking-tight">Blog</h1>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    Thoughts, tutorials, and stories from my coding journey.
                </p>
            </header>

            {/* Featured carousel */}
            {featured.length > 0 && <FeaturedCarousel featured={featured} />}

            {/* Search / filter + grid */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <SearchFilters
                        categories={categories}
                        query={query}
                        setQuery={setQuery}
                        category={category}
                        setCategory={setCategory}
                    />

                    {filteredPosts.length === 0 ? (
                        <p className="text-center text-neutral-600 dark:text-neutral-400">
                            No posts match your search.
                        </p>
                    ) : (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post) => (
                                <PostCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <BottomCTA />
        </>
    );
}
