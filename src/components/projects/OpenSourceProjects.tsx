"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Input } from "../ui/input";
import {
    ExternalLink,
    Filter,
    GitBranch,
    Search,
    Star,
    X,
    ArrowUpDown,
    Globe,
    Clock,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { Tooltip, TooltipProvider } from "../ui/tooltip";

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics: string[];
    updated_at: string;
    created_at: string;
    fork?: boolean;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function OpenSourceProjects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [ghPage, setGhPage] = useState(1);
    const [ghHasMore, setGhHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("all");
    const [sortBy, setSortBy] = useState<"updated" | "stars" | "name">(
        "updated"
    );
    const [withHomepage, setWithHomepage] = useState(false);
    const [excludeForks, setExcludeForks] = useState(true);
    const [minStars, setMinStars] = useState<number>(0);
    const [uiPage, setUiPage] = useState(1);
    const pageSize = 9; // items per grid page
    const [pageDirection, setPageDirection] = useState<1 | -1>(1);

    useEffect(() => {
        const fetchFirstPage = async () => {
            try {
                const perPage = 100; // maximize to reduce calls
                const url = `https://api.github.com/users/agraham02/repos?sort=updated&per_page=${perPage}&page=1`;
                const response = await fetch(url, {
                    headers: {
                        Accept: "application/vnd.github+json",
                        ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                        }),
                    },
                });

                if (!response.ok) {
                    const remaining = response.headers.get(
                        "x-ratelimit-remaining"
                    );
                    if (response.status === 403 && remaining === "0") {
                        throw new Error(
                            "GitHub API rate limit exceeded. Please try again later."
                        );
                    }
                    throw new Error(
                        `Failed to load repositories (status ${response.status}).`
                    );
                }

                const pageData: any[] = await response.json();
                const normalized: Repo[] = pageData.map((r: any) => ({
                    ...r,
                    topics: Array.isArray(r.topics) ? r.topics : [],
                }));

                setRepos(normalized);
                setGhPage(1);
                // Parse Link header to see if there's a next page
                const link = response.headers.get("link") || "";
                setGhHasMore(/rel="next"/.test(link));
            } catch (error) {
                console.error("Error fetching repos:", error);
                setError(
                    error instanceof Error
                        ? error.message
                        : "Failed to load repositories."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchFirstPage();
    }, []);

    const loadMoreGitHub = async () => {
        if (loadingMore || !ghHasMore) return;
        setLoadingMore(true);
        try {
            const perPage = 100;
            const nextPage = ghPage + 1;
            const url = `https://api.github.com/users/agraham02/repos?sort=updated&per_page=${perPage}&page=${nextPage}`;
            const response = await fetch(url, {
                headers: {
                    Accept: "application/vnd.github+json",
                    ...(process.env.NEXT_PUBLIC_GITHUB_TOKEN && {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    }),
                },
            });

            if (!response.ok) {
                const remaining = response.headers.get("x-ratelimit-remaining");
                if (response.status === 403 && remaining === "0") {
                    throw new Error(
                        "GitHub API rate limit exceeded. Please try again later."
                    );
                }
                throw new Error(
                    `Failed to load more repositories (status ${response.status}).`
                );
            }
            const pageData: any[] = await response.json();
            const normalized: Repo[] = pageData.map((r: any) => ({
                ...r,
                topics: Array.isArray(r.topics) ? r.topics : [],
            }));
            setRepos((prev) => [...prev, ...normalized]);
            setGhPage(nextPage);
            const link = response.headers.get("link") || "";
            setGhHasMore(/rel="next"/.test(link));
        } catch (err) {
            console.error("Error loading more repos:", err);
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to load more repositories."
            );
        } finally {
            setLoadingMore(false);
        }
    };

    // Filter repos
    const filteredRepos = useMemo(() => {
        const filtered = repos.filter((repo) => {
            const matchesSearch =
                repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                repo.description
                    ?.toLowerCase()
                    .includes(searchTerm.toLowerCase());
            const matchesLanguage =
                selectedLanguage === "all" ||
                repo.language === selectedLanguage;
            const matchesHomepage = !withHomepage || !!repo.homepage;
            const matchesFork = !excludeForks || !repo.fork;
            const matchesStars = repo.stargazers_count >= minStars;
            return (
                matchesSearch &&
                matchesLanguage &&
                matchesHomepage &&
                matchesFork &&
                matchesStars
            );
        });

        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === "stars") {
                return b.stargazers_count - a.stargazers_count;
            }
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            }
            // updated
            return (
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime()
            );
        });

        return sorted;
    }, [
        repos,
        searchTerm,
        selectedLanguage,
        withHomepage,
        excludeForks,
        minStars,
        sortBy,
    ]);

    // Get unique languages
    const languages = useMemo(() => {
        const langs = repos
            .map((repo) => repo.language)
            .filter((lang): lang is string => Boolean(lang))
            .filter((lang, index, arr) => arr.indexOf(lang) === index);
        return ["all", ...langs.sort()];
    }, [repos]);

    const timeAgo = (iso: string) => {
        const diff = Date.now() - new Date(iso).getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        if (days > 30) return new Date(iso).toLocaleDateString();
        if (days >= 1) return `${days}d ago`;
        if (hours >= 1) return `${hours}h ago`;
        if (minutes >= 1) return `${minutes}m ago`;
        return `${seconds}s ago`;
    };

    // Reset UI page when filters change
    useEffect(() => {
        setUiPage(1);
    }, [
        searchTerm,
        selectedLanguage,
        withHomepage,
        excludeForks,
        minStars,
        sortBy,
    ]);

    const totalPages = Math.max(1, Math.ceil(filteredRepos.length / pageSize));
    const currentItems = filteredRepos.slice(
        (uiPage - 1) * pageSize,
        uiPage * pageSize
    );

    const startIndex =
        filteredRepos.length === 0 ? 0 : (uiPage - 1) * pageSize + 1;
    const endIndex = Math.min(uiPage * pageSize, filteredRepos.length);

    const goToPage = (next: number) => {
        const safe = Math.max(1, Math.min(totalPages, next));
        setPageDirection(safe > uiPage ? 1 : -1);
        setUiPage(safe);
    };

    return (
        <TooltipProvider>
            <motion.section
                className="py-20 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div variants={itemVariants} className="mb-10">
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Open Source & Experiments
                                </h2>
                                <p className="text-muted-foreground max-w-2xl mt-2">
                                    Explore my public GitHub repositories, side
                                    projects, and coding experiments with rich
                                    filtering and sorting.
                                </p>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                Updated{" "}
                                {repos[0]?.updated_at
                                    ? timeAgo(repos[0].updated_at)
                                    : "recently"}
                            </div>
                        </div>
                    </motion.div>

                    {/* Toolbar */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto_auto] items-stretch gap-3">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search repositories..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="pl-10"
                                />
                            </div>

                            {/* Language */}
                            <div className="flex items-center gap-2">
                                <Filter className="h-4 w-4 text-muted-foreground" />
                                <Select
                                    value={selectedLanguage}
                                    onValueChange={setSelectedLanguage}
                                >
                                    <SelectTrigger className="min-w-[160px]">
                                        <SelectValue placeholder="Language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {languages.map((lang) => (
                                                <SelectItem
                                                    key={lang}
                                                    value={lang}
                                                >
                                                    {lang === "all"
                                                        ? "All Languages"
                                                        : lang}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Sort */}
                            <div className="flex items-center gap-2">
                                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                                <Select
                                    value={sortBy}
                                    onValueChange={(v) => setSortBy(v as any)}
                                >
                                    <SelectTrigger className="min-w-[160px]">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="updated">
                                            Recently updated
                                        </SelectItem>
                                        <SelectItem value="stars">
                                            Most stars
                                        </SelectItem>
                                        <SelectItem value="name">
                                            Name (A–Z)
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Stars min */}
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="number"
                                    min={0}
                                    value={minStars}
                                    onChange={(e) =>
                                        setMinStars(Number(e.target.value) || 0)
                                    }
                                    className="w-[120px]"
                                    placeholder="Min stars"
                                />
                            </div>

                            {/* Toggles */}
                            <div className="flex items-center justify-start lg:justify-end gap-4">
                                <label className="flex items-center gap-2 text-sm">
                                    <Switch
                                        checked={withHomepage}
                                        onCheckedChange={setWithHomepage}
                                    />
                                    <span className="whitespace-nowrap flex items-center gap-1">
                                        <Globe className="h-4 w-4" /> With
                                        homepage
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <Switch
                                        checked={excludeForks}
                                        onCheckedChange={setExcludeForks}
                                    />
                                    <span className="whitespace-nowrap">
                                        Exclude forks
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Results count and reset */}
                        <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                            <motion.div
                                key={`${startIndex}-${endIndex}-${filteredRepos.length}`}
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {filteredRepos.length > 0
                                    ? `Showing ${startIndex}-${endIndex} of ${filteredRepos.length} repositories`
                                    : `Showing 0 of 0 repositories`}
                            </motion.div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedLanguage("all");
                                    setSortBy("updated");
                                    setWithHomepage(false);
                                    setExcludeForks(true);
                                    setMinStars(0);
                                }}
                            >
                                <X className="h-4 w-4 mr-2" /> Reset
                            </Button>
                        </div>
                    </motion.div>

                    {/* GitHub Projects Grid */}
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <SkeletonCard key={i} />
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center py-16">
                            <p className="text-destructive font-medium">
                                {error}
                            </p>
                            <p className="text-muted-foreground mt-2">
                                You can refresh in a few minutes or try with a
                                GitHub token.
                            </p>
                        </div>
                    ) : (
                        <>
                            <AnimatePresence mode="wait" initial={false}>
                                {(() => {
                                    const pageEnterX =
                                        pageDirection === 1 ? 40 : -40;
                                    const pageExitX =
                                        pageDirection === 1 ? -40 : 40;
                                    return (
                                        <motion.div
                                            key={`page-${uiPage}`}
                                            initial={{
                                                x: pageEnterX,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                x: 0,
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.35,
                                                    ease: "easeOut",
                                                },
                                            }}
                                            exit={{
                                                x: pageExitX,
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.25,
                                                    ease: "easeIn",
                                                },
                                            }}
                                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                        >
                                            {currentItems.map((repo) => (
                                                <motion.div
                                                    key={repo.id}
                                                    layout
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -20,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                    }}
                                                    whileHover={{ y: -5 }}
                                                >
                                                    <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                                        <CardHeader className="pb-0">
                                                            <div className="flex items-start justify-between gap-3">
                                                                <div className="min-w-0">
                                                                    <CardTitle className="text-lg truncate group-hover:text-primary transition-colors">
                                                                        {
                                                                            repo.name
                                                                        }
                                                                    </CardTitle>
                                                                    <CardDescription className="line-clamp-2 mt-1">
                                                                        {repo.description ||
                                                                            "No description available"}
                                                                    </CardDescription>
                                                                </div>
                                                                <div className="flex items-center gap-1">
                                                                    {repo.homepage && (
                                                                        <Tooltip label="Open homepage">
                                                                            <Button
                                                                                size="sm"
                                                                                variant="ghost"
                                                                                onClick={() =>
                                                                                    window.open(
                                                                                        repo.homepage!,
                                                                                        "_blank"
                                                                                    )
                                                                                }
                                                                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                                            >
                                                                                <Globe className="h-4 w-4" />
                                                                            </Button>
                                                                        </Tooltip>
                                                                    )}
                                                                    <Tooltip label="Open on GitHub">
                                                                        <Button
                                                                            size="sm"
                                                                            variant="ghost"
                                                                            onClick={() =>
                                                                                window.open(
                                                                                    repo.html_url,
                                                                                    "_blank"
                                                                                )
                                                                            }
                                                                            className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
                                                                        >
                                                                            <ExternalLink className="h-4 w-4" />
                                                                        </Button>
                                                                    </Tooltip>
                                                                </div>
                                                            </div>
                                                        </CardHeader>

                                                        <CardContent className="pt-4">
                                                            {/* Topics */}
                                                            {repo.topics
                                                                .length > 0 && (
                                                                <div className="flex flex-wrap gap-1 mb-4">
                                                                    {repo.topics
                                                                        .slice(
                                                                            0,
                                                                            4
                                                                        )
                                                                        .map(
                                                                            (
                                                                                topic
                                                                            ) => (
                                                                                <Badge
                                                                                    key={
                                                                                        topic
                                                                                    }
                                                                                    variant="outline"
                                                                                    className="text-xs"
                                                                                >
                                                                                    {
                                                                                        topic
                                                                                    }
                                                                                </Badge>
                                                                            )
                                                                        )}
                                                                    {repo.topics
                                                                        .length >
                                                                        4 && (
                                                                        <Badge
                                                                            variant="outline"
                                                                            className="text-xs"
                                                                        >
                                                                            +
                                                                            {repo
                                                                                .topics
                                                                                .length -
                                                                                4}
                                                                        </Badge>
                                                                    )}
                                                                </div>
                                                            )}

                                                            {/* Stats */}
                                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                                <div className="flex items-center gap-4">
                                                                    {repo.language && (
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                                                                            <span>
                                                                                {
                                                                                    repo.language
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                    <div className="flex items-center gap-1">
                                                                        <Star className="h-3.5 w-3.5" />
                                                                        <span>
                                                                            {
                                                                                repo.stargazers_count
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center gap-1">
                                                                        <GitBranch className="h-3.5 w-3.5" />
                                                                        <span>
                                                                            {
                                                                                repo.forks_count
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden sm:block">
                                                                    Updated{" "}
                                                                    {timeAgo(
                                                                        repo.updated_at
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                        <CardFooter />
                                                    </Card>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    );
                                })()}
                            </AnimatePresence>

                            {/* Pagination Controls */}
                            <div className="mt-8 flex flex-col items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        disabled={uiPage === 1}
                                        onClick={() => goToPage(uiPage - 1)}
                                    >
                                        Prev
                                    </Button>
                                    {Array.from({ length: totalPages })
                                        .slice(0, 7)
                                        .map((_, i) => {
                                            const pageNum = i + 1;
                                            return (
                                                <Button
                                                    key={pageNum}
                                                    variant={
                                                        uiPage === pageNum
                                                            ? "default"
                                                            : "outline"
                                                    }
                                                    size="sm"
                                                    onClick={() =>
                                                        goToPage(pageNum)
                                                    }
                                                >
                                                    {pageNum}
                                                </Button>
                                            );
                                        })}
                                    {totalPages > 7 && (
                                        <span className="px-2 text-muted-foreground">
                                            … {totalPages}
                                        </span>
                                    )}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        disabled={uiPage === totalPages}
                                        onClick={() => goToPage(uiPage + 1)}
                                    >
                                        Next
                                    </Button>
                                </div>

                                {/* Load more from GitHub if available */}
                                {ghHasMore && (
                                    <Button
                                        onClick={loadMoreGitHub}
                                        disabled={loadingMore}
                                        className="mt-1"
                                    >
                                        {loadingMore
                                            ? "Loading more…"
                                            : "Load more repositories"}
                                    </Button>
                                )}
                            </div>
                        </>
                    )}

                    {filteredRepos.length === 0 && !loading && !error && (
                        <motion.div
                            className="text-center py-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-muted-foreground text-lg">
                                No repositories found matching your criteria.
                            </p>
                            <Button
                                variant="outline"
                                className="mt-4"
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedLanguage("all");
                                    setSortBy("updated");
                                    setWithHomepage(false);
                                    setExcludeForks(true);
                                    setMinStars(0);
                                }}
                            >
                                <X className="h-4 w-4 mr-2" />
                                Clear Filters
                            </Button>
                        </motion.div>
                    )}
                </div>
            </motion.section>
        </TooltipProvider>
    );
}

function SkeletonCard() {
    return (
        <div className="h-[172px] rounded-xl border bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 animate-pulse">
            <div className="flex items-start justify-between mb-4">
                <div className="space-y-2 w-full">
                    <div className="h-4 w-1/3 bg-muted rounded" />
                    <div className="h-3 w-2/3 bg-muted/80 rounded" />
                </div>
                <div className="h-8 w-8 bg-muted/60 rounded-md" />
            </div>
            <div className="flex gap-2 mb-4">
                <div className="h-5 w-16 bg-muted/70 rounded" />
                <div className="h-5 w-12 bg-muted/70 rounded" />
                <div className="h-5 w-20 bg-muted/70 rounded" />
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="h-4 w-16 bg-muted/70 rounded" />
                <div className="h-4 w-12 bg-muted/70 rounded" />
                <div className="h-4 w-12 bg-muted/70 rounded" />
            </div>
        </div>
    );
}
