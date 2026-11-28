import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Navigate to landing page and its respective section
    const handleSectionNavigation = (section) => {
        setOpen(false);

        if (location.pathname === "/") {
        document.getElementById(section)?.scrollIntoView({
            behavior: "smooth",
        });
        } else {
        navigate("/", {
            state: { scrollTo: section },
        });
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 text-white backdrop-blur">

        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">

            {/* Logo */}
            <div className="flex items-center gap-2">

                {/* Logo Icon */}
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-lime-400 font-bold text-black">
                    F
                </div>

                {/* Logo Text */}
                <Link
                    to="/"
                    onClick={() => handleSectionNavigation("home")}
                    className="text-xl font-bold tracking-tight"
                >
                    Fit<span className="text-lime-400">Genie</span>
                </Link>

                </div>
            

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">

            <button
                onClick={() => handleSectionNavigation("home")}
                className="transition hover:text-lime-400"
            >
                Home
            </button>

            <button
                onClick={() => handleSectionNavigation("features")}
                className="transition hover:text-lime-400"
            >
                Features
            </button>
            <button
                onClick={() => handleSectionNavigation("working")}
                className="transition hover:text-lime-400"
            >
                How it's works
            </button>

            <button
                onClick={() => handleSectionNavigation("about")}
                className="transition hover:text-lime-400"
            >
                About
            </button>

            </div>

            {/* Desktop Buttons */}
            <div className="hidden items-center gap-3 md:flex">

            <button
                onClick={() => navigate("/login")}
                className="rounded-xl px-4 py-2 text-sm text-zinc-300 transition hover:text-white"
            >
                Login
            </button>

            <button
                onClick={() => navigate("/register")}
                className="rounded-xl bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300"
            >
                Get Started
            </button>

            </div>

            {/* Mobile Toggle */}
            <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            >
            {open ? "✕" : "☰"}
            </button>

        </nav>

        {/* Mobile Menu */}
        {open && (
            <div className="border-t border-white/10 bg-zinc-950 px-5 py-5 md:hidden">

            <div className="flex flex-col gap-4 text-zinc-300">

                <button
                onClick={() => handleSectionNavigation("home")}
                className="text-left"
                >
                Home
                </button>

                <button
                onClick={() => handleSectionNavigation("features")}
                className="text-left"
                >
                Features
                </button>

                <button
                onClick={() => handleSectionNavigation("working")}
                className="text-left"
                >
                How it's work
                </button>

                <button
                onClick={() => handleSectionNavigation("about")}
                className="text-left"
                >
                About
                </button>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">

                <button
                onClick={() => {
                    setOpen(false);
                    navigate("/login");
                }}
                className="rounded-xl border border-white/10 py-3 text-sm"
                >
                Login
                </button>

                <button
                onClick={() => {
                    setOpen(false);
                    navigate("/register");
                }}
                className="rounded-xl bg-lime-400 py-3 text-sm font-semibold text-black"
                >
                Get Started
                </button>

            </div>

            </div>
        )}

        </header>
    );
}