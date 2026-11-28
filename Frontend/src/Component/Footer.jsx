const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400";

const PRODUCT = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
];

const COMPANY = [
    { label: "Contact", href: "/contact" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
];

function Logo() {
    return (
        <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime-400 text-black">F</span>
        <span>
            Fit<span className="text-lime-400">Genie</span>
        </span>
        </a>
    );
}

export default function Footer({ onLogin, onGetStarted }) {
    const linkClass = "transition hover:text-lime-400 " + focus;

    return (
        <footer className="border-t border-white/10 bg-zinc-950 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-8">
            <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
                Personalized training and nutrition that adapts to you.
            </p>
            </div>

            <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                {PRODUCT.map((l) => (
                <li key={l.label}>
                    <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
                ))}
            </ul>
            </div>

            <div>
            <h3 className="text-sm font-semibold">Account</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li><button onClick={onLogin} className={linkClass}>Login</button></li>
                <li><button onClick={onGetStarted} className={linkClass}>Get Started</button></li>
                <li><a href="/forgot-password" className={linkClass}>Forgot password</a></li>
            </ul>
            </div>

            <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                {COMPANY.map((l) => (
                <li key={l.label}>
                    <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
                ))}
            </ul>
            </div>
        </div>

        <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs text-zinc-600 md:px-8">
            © {new Date().getFullYear()} FitGenie. FitGenie offers general fitness guidance and is not medical advice.
        </p>
        </footer>
    );
}