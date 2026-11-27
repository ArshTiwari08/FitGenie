import { useState, useEffect } from "react";

const NAV = [
    { key: "features", label: "Features" },
    { key: "how", label: "How it works" },
    { key: "goals", label: "Goals" },
    { key: "pricing", label: "Pricing" },
    { key: "faq", label: "FAQ" },
];

const TITLES = {
    features: "Everything you need to stay consistent",
    how: "How it works",
    goals: "Pick a goal. We handle the plan.",
    pricing: "Simple pricing",
    faq: "Questions",
};

const FEATURES = [
    { icon: "🧠", title: "Adaptive workout plans", text: "Plans rebuild themselves each week based on how your last sessions went." },
    { icon: "📈", title: "Progress tracking", text: "Log lifts, runs and body metrics, then see trends instead of raw numbers." },
    { icon: "🥗", title: "Meal guidance", text: "Simple meal ideas and macro targets that match your goal and schedule." },
    { icon: "⏱️", title: "Smart rest timers", text: "Rest times adjust to the exercise and your recent recovery." },
    { icon: "🎯", title: "Goal milestones", text: "Break a big goal into weekly targets and get a nudge when you're off pace." },
    { icon: "💬", title: "Ask FitGenie", text: "Ask about form, swaps or soreness and get a clear answer in seconds." },
];

const STEPS = [
    { title: "Tell us about you", text: "Your goal, experience, equipment and the days you can train." },
    { title: "Get your plan", text: "A week of workouts and meals, ready in under a minute." },
    { title: "Train and log", text: "Follow the session, log each set, and mark how it felt." },
    { title: "Watch it adapt", text: "Your next week updates automatically from what you logged." },
];

const GOALS = [
    { name: "Build muscle", text: "Progressive overload plans with 3 to 6 sessions a week." },
    { name: "Lose fat", text: "Calorie targets, strength work and low-impact cardio." },
    { name: "Run farther", text: "5K to half-marathon plans with pace and recovery guidance." },
    { name: "Stay active", text: "Short, flexible routines that fit around a busy week." },
];

const PLANS = [
    { name: "Free", price: "$0", note: "For trying it out", items: ["1 active plan", "Basic progress tracking", "Community access"], cta: "Create free account", featured: false },
    { name: "Pro", price: "$9", note: "per month", items: ["Adaptive weekly plans", "Meal guidance and macros", "Ask FitGenie, unlimited", "Full progress analytics"], cta: "Start Pro trial", featured: true },
    { name: "Team", price: "$24", note: "per month, up to 5 people", items: ["Everything in Pro", "Shared plans and challenges", "Coach dashboard"], cta: "Register your team", featured: false },
];

const FAQ = [
    { q: "Do I need gym equipment?", a: "No. Choose bodyweight, home or full gym during setup and your plan matches it." },
    { q: "Is FitGenie suitable for beginners?", a: "Yes. Plans start at your level and increase gradually as you log your sessions." },
    { q: "Can I cancel any time?", a: "Yes. You can cancel Pro from your account settings and keep your data on the Free plan." },
    { q: "Is my data private?", a: "Your workout and body data stays in your account. You can export or delete it whenever you like." },
];

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400";
const isAuth = (t) => t === "login" || t === "register";

function Logo() {
    return (
        <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime-400 text-black">F</span>
        <span>Fit<span className="text-lime-400">Genie</span></span>
        </a>
    );
}

/* ---------- Shared modal behaviour (Esc to close, lock scroll) ---------- */
function useModalBehavior(onClose) {
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
        };
    }, [onClose]);
}

/* ---------- Info popup content ---------- */
function PopupBody({ type, onAuth }) {
    const [openFaq, setOpenFaq] = useState(0);

    if (type === "features")
        return (
        <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
            <article key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime-400/10 text-lg" aria-hidden="true">{f.icon}</div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{f.text}</p>
            </article>
            ))}
        </div>
    );

    if (type === "how")
    return (
        <ol className="grid gap-6 sm:grid-cols-2">
            {STEPS.map((s, i) => (
            <li key={s.title} className="border-t-2 border-lime-400/60 pt-4">
                <span className="text-sm font-semibold text-lime-400">Step {i + 1}</span>
                <h3 className="mt-1.5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.text}</p>
            </li>
            ))}
        </ol>
    );

    if (type === "goals")
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {GOALS.map((g) => (
            <button key={g.name} onClick={() => onAuth("register")} className={"group flex items-center justify-between rounded-2xl border border-white/10 p-5 text-left transition hover:border-lime-400/50 hover:bg-lime-400/5 " + focus}>
                <div>
                <h3 className="text-lg font-semibold">{g.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{g.text}</p>
                </div>
                <span className="ml-4 text-lime-400 transition group-hover:translate-x-1" aria-hidden="true">→</span>
            </button>
            ))}
        </div>
    );

    if (type === "pricing")
    return (
        <div className="grid gap-4 lg:grid-cols-3">
            {PLANS.map((p) => (
            <div key={p.name} className={"flex flex-col rounded-2xl border p-6 " + (p.featured ? "border-lime-400 bg-lime-400/5" : "border-white/10 bg-white/[0.03]")}>
                <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.featured && <span className="rounded-full bg-lime-400 px-2.5 py-0.5 text-xs font-semibold text-black">Popular</span>}
                </div>
                <p className="mt-4"><span className="text-4xl font-extrabold">{p.price}</span> <span className="text-xs text-zinc-400">{p.note}</span></p>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-zinc-300">
                {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5"><span className="text-lime-400" aria-hidden="true">✓</span>{it}</li>
                ))}
                </ul>
                <button onClick={() => onAuth("register")} className={"mt-6 rounded-xl py-2.5 text-center text-sm font-semibold transition " + focus + (p.featured ? " bg-lime-400 text-black hover:bg-lime-300" : " border border-white/15 hover:bg-white/10")}>
                {p.cta}
                </button>
            </div>
            ))}
        </div>
    );

    return (
        <div className="divide-y divide-white/10 border-y border-white/10">
        {FAQ.map((f, i) => (
            <div key={f.q}>
            <button
                className={"flex w-full items-center justify-between py-4 text-left font-medium " + focus}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                aria-expanded={openFaq === i}
            >
                {f.q}
                <span className="ml-4 text-lime-400" aria-hidden="true">{openFaq === i ? "−" : "+"}</span>
            </button>
            {openFaq === i && <p className="pb-4 text-sm leading-relaxed text-zinc-400">{f.a}</p>}
            </div>
        ))}
        </div>
    );
}

/* ---------- Info popup shell ---------- */
function Modal({ type, onClose, onSwitch }) {
    useModalBehavior(onClose);

    return (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-950 shadow-2xl sm:rounded-3xl"
        >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
            <h2 id="popup-title" className="text-xl font-bold tracking-tight sm:text-2xl">{TITLES[type]}</h2>
            <button onClick={onClose} aria-label="Close" className={"grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-zinc-400 transition hover:text-white " + focus}>✕</button>
            </div>

            <div className="flex gap-2 overflow-x-auto border-b border-white/10 px-6 py-3 sm:px-8">
            {NAV.map((n) => (
                <button
                key={n.key}
                onClick={() => onSwitch(n.key)}
                aria-current={n.key === type}
                className={"whitespace-nowrap rounded-full px-4 py-1.5 text-sm transition " + focus + (n.key === type ? " bg-lime-400 font-semibold text-black" : " text-zinc-400 hover:bg-white/5 hover:text-white")}
                >
                {n.label}
                </button>
            ))}
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8">
            <PopupBody key={type} type={type} onAuth={onSwitch} />
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-sm text-zinc-500">Ready to start? It takes about a minute.</p>
            <div className="flex gap-3">
                <button onClick={() => onSwitch("login")} className={"rounded-xl border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5 " + focus}>Log in</button>
                <button onClick={() => onSwitch("register")} className={"rounded-xl bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300 " + focus}>Register</button>
            </div>
            </div>
        </div>
        </div>
    );
}

/* ---------- Form field ---------- */
function Field({ label, id, error, ...props }) {
    return (
        <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-300">{label}</label>
        <input
            id={id}
            name={id}
            {...props}
            className={"w-full rounded-lg border bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 outline-none transition focus:ring-2 focus:ring-lime-400/60 " + (error ? "border-red-500" : "border-zinc-700 focus:border-lime-400")}
        />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </div>
    );
}

/* ---------- Login form ---------- */
function LoginForm({ onSwitch }) {
    const [form, setForm] = useState({ identifier: "", password: "", remember: false });
    const [errors, setErrors] = useState({});
    const [done, setDone] = useState(false);

    const change = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    };

    const submit = (e) => {
        e.preventDefault();
        const er = {};
        if (!form.identifier.trim()) er.identifier = "Enter your email or username.";
        if (!form.password) er.password = "Enter your password.";
        setErrors(er);
        if (!Object.keys(er).length) {
        setDone(true);
        // TODO: call your login API with `form`
        console.log("Login payload:", form);
        }
    };

    if (done)
    return <div className="rounded-lg border border-lime-400/50 bg-lime-400/10 p-4 text-lime-300">You're logged in. Welcome back!</div>;

    return (
        <form onSubmit={submit} noValidate className="space-y-4">
        <Field label="Email or username" id="identifier" type="text" placeholder="alex@example.com" value={form.identifier} onChange={change} error={errors.identifier} />
        <Field label="Password" id="password" type="password" placeholder="Your password" value={form.password} onChange={change} error={errors.password} />
        <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-zinc-300">
            <input type="checkbox" name="remember" checked={form.remember} onChange={change} className="h-4 w-4 cursor-pointer accent-lime-400" />
            Remember me
            </label>
            <a href="/forgot-password" className="text-lime-400 hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className={"w-full rounded-lg bg-lime-400 py-3 font-bold text-black shadow-[0_0_20px_rgba(163,230,53,0.3)] transition hover:bg-lime-300 " + focus}>Log in</button>
        <p className="text-center text-sm text-zinc-400">
            New to FitGenie?{" "}
            <button type="button" onClick={() => onSwitch("register")} className="font-semibold text-lime-400 hover:underline">Create an account</button>
        </p>
        </form>
    );
}

/* ---------- Register form ---------- */
function RegisterForm({ onSwitch }) {
    const [form, setForm] = useState({ fullName: "", username: "", email: "", password: "", confirmPassword: "", agree: false });
    const [errors, setErrors] = useState({});
    const [done, setDone] = useState(false);

    const change = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    };

    const submit = (ev) => {
        ev.preventDefault();
        const er = {};
        if (!form.fullName.trim()) er.fullName = "Enter your full name.";
        if (!/^[a-zA-Z0-9_]{3,}$/.test(form.username)) er.username = "Use 3+ letters, numbers or underscores.";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Enter a valid email address.";
        if (form.password.length < 8) er.password = "Password must be at least 8 characters.";
        if (form.confirmPassword !== form.password) er.confirmPassword = "Passwords do not match.";
        if (!form.agree) er.agree = "You must accept the terms and conditions.";
        setErrors(er);
        if (!Object.keys(er).length) {
        setDone(true);
        // TODO: call your register API with `form`
        console.log("Register payload:", form);
        }
    };

    if (done)
    return <div className="rounded-lg border border-lime-400/50 bg-lime-400/10 p-4 text-lime-300">Account created. Welcome to FitGenie!</div>;

    return (
        <form onSubmit={submit} noValidate className="space-y-4">
        <Field label="Full name" id="fullName" type="text" placeholder="Alex Johnson" value={form.fullName} onChange={change} error={errors.fullName} />
        <Field label="Username" id="username" type="text" placeholder="alex_fit" value={form.username} onChange={change} error={errors.username} />
        <Field label="Email" id="email" type="email" placeholder="alex@example.com" value={form.email} onChange={change} error={errors.email} />
        <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Password" id="password" type="password" placeholder="8+ characters" value={form.password} onChange={change} error={errors.password} />
            <Field label="Confirm password" id="confirmPassword" type="password" placeholder="Re-enter password" value={form.confirmPassword} onChange={change} error={errors.confirmPassword} />
        </div>
        <div>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-zinc-300">
            <input type="checkbox" name="agree" checked={form.agree} onChange={change} className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-lime-400" />
            <span>
                I agree to the <a href="/terms" className="text-lime-400 hover:underline">Terms &amp; Conditions</a> and <a href="/privacy" className="text-lime-400 hover:underline">Privacy Policy</a>.
            </span>
            </label>
            {errors.agree && <p className="mt-1 text-xs text-red-400">{errors.agree}</p>}
        </div>
        <button type="submit" className={"w-full rounded-lg bg-lime-400 py-3 font-bold text-black shadow-[0_0_20px_rgba(163,230,53,0.3)] transition hover:bg-lime-300 " + focus}>Create account</button>
        <p className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <button type="button" onClick={() => onSwitch("login")} className="font-semibold text-lime-400 hover:underline">Log in</button>
        </p>
        </form>
    );
}   

/* ---------- Auth popup (login / register) ---------- */
function AuthModal({ type, onClose, onSwitch }) {
  useModalBehavior(onClose);
  const isLogin = type === "login";

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-950 shadow-2xl sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-8">
          <div>
            <h2 id="auth-title" className="text-2xl font-bold tracking-tight">{isLogin ? "Welcome back" : "Create your account"}</h2>
            <p className="mt-1 text-sm text-zinc-400">{isLogin ? "Log in to continue your training." : "Join FitGenie and start your first workout."}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className={"grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-zinc-400 transition hover:text-white " + focus}>✕</button>
        </div>
        <div className="overflow-y-auto px-6 pb-7 pt-6 sm:px-8">
          {isLogin ? <LoginForm key="login" onSwitch={onSwitch} /> : <RegisterForm key="register" onSwitch={onSwitch} />}
        </div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
function Landing() {
    const [menuOpen, setMenuOpen] = useState(false);
    // "features" | "how" | "goals" | "pricing" | "faq" | "login" | "register" | null
    const [popup, setPopup] = useState(null);

    const open = (key) => {
        setMenuOpen(false);
        setPopup(key);
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main">
            <Logo />

            <div className="hidden items-center gap-8 text-sm text-zinc-400 lg:flex">
                {NAV.map((n) => (
                <button key={n.key} onClick={() => open(n.key)} className={"transition hover:text-lime-400 " + focus}>{n.label}</button>
                ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
                <button onClick={() => open("login")} className={"rounded-xl px-4 py-2 text-sm text-zinc-300 transition hover:text-white " + focus}>Log in</button>
                <button onClick={() => open("register")} className={"rounded-xl bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300 " + focus}>Register</button>
            </div>

            <button
                className={"grid h-10 w-10 place-items-center rounded-lg border border-white/10 md:hidden " + focus}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>
            </nav>

            {menuOpen && (
            <div className="border-t border-white/10 bg-zinc-950 px-5 py-4 md:hidden">
                <div className="flex flex-col gap-1 text-zinc-300">
                {NAV.map((n) => (
                    <button key={n.key} onClick={() => open(n.key)} className="rounded-lg px-3 py-3 text-left hover:bg-white/5">{n.label}</button>
                ))}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                <button onClick={() => open("login")} className="rounded-xl border border-white/10 py-3 text-center text-sm">Log in</button>
                <button onClick={() => open("register")} className="rounded-xl bg-lime-400 py-3 text-center text-sm font-semibold text-black">Register</button>
                </div>
            </div>
            )}
        </header>

        <main>
            {/* HERO */}
            <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-lime-500/10 blur-[150px]" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
                <div>
                <p className="inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-sm text-lime-300">
                    Start your free trial..
                </p>
                <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                    Train smarter.
                    <br />
                    <span className="text-lime-400">Perform better.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                    FitGenie builds a workout and meal plan around your goal, then adjusts it every week
                    based on what you actually did.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <button onClick={() => open("register")} className={"rounded-2xl bg-lime-400 px-8 py-4 text-center font-bold text-black transition hover:bg-lime-300 " + focus}>
                    Create free account
                    </button>
                    <button onClick={() => open("how")} className={"rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center font-semibold transition hover:bg-white/10 " + focus}>
                    See how it works
                    </button>
                </div>
                <p className="mt-5 text-sm text-zinc-500">
                    Already training with us?{" "}
                    <button onClick={() => open("login")} className="text-lime-400 underline-offset-4 hover:underline">Log in</button>
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                    {["TRANSFORM", "REBUILD", "STRENGTH"].map((item) => (
                    <button
                        key={item}
                        onClick={() => open("register")}
                        className="rounded-full border border-lime-400/30 px-6 py-3 text-sm font-bold tracking-wider text-lime-400 transition-all duration-300 hover:bg-lime-400 hover:text-black"
                    >
                        {item}
                    </button>
                    ))}
                </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                <img
                    src="https://i.pinimg.com/736x/a2/83/ee/a283eef1cb9158de060d30b0c981cecd.jpg"
                    alt="Fitness"
                    className="h-auto w-96 rounded-4xl object-contain opacity-35"
                />
                </div>
            </div>
            </section>

            {/* FINAL CTA */}
            <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-15">
            <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
                <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Your first plan is a minute away.</h2>
                <p className="mx-auto mt-5 max-w-xl text-zinc-400">
                FitGenie was built by people who got tired of generic programs. Tell us your goal and we'll do the planning.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <button onClick={() => open("register")} className={"rounded-2xl bg-lime-400 px-8 py-4 font-bold text-black transition hover:bg-lime-300 " + focus}>Create free account</button>
                <button onClick={() => open("login")} className={"rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10 " + focus}>Log in</button>
                </div>
            </div>
            </section>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-12">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-8">
            <div>
                <Logo />
                <p className="mt-4 max-w-xs text-sm text-zinc-500">Personalized training and nutrition that adapts to you.</p>
            </div>
            <div>
                <h3 className="text-sm font-semibold">Product</h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                {NAV.map((n) => (
                    <li key={n.key}><button onClick={() => open(n.key)} className="transition hover:text-lime-400">{n.label}</button></li>
                ))}
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold">Account</h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li><button onClick={() => open("login")} className="transition hover:text-lime-400">Log in</button></li>
                <li><button onClick={() => open("register")} className="transition hover:text-lime-400">Register</button></li>
                <li><a href="/forgot-password" className="transition hover:text-lime-400">Forgot password</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold">Company</h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                <li><a href="/contact" className="transition hover:text-lime-400">Contact</a></li>
                <li><a href="/privacy" className="transition hover:text-lime-400">Privacy policy</a></li>
                <li><a href="/terms" className="transition hover:text-lime-400">Terms of service</a></li>
                </ul>
            </div>
            </div>
            <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-zinc-600 md:px-8">
            © {new Date().getFullYear()} FitGenie. FitGenie offers general fitness guidance and is not medical advice.
            </p>
        </footer>

        {/* POPUPS: header and footer stay on the page behind them */}
        {popup && (isAuth(popup)
            ? <AuthModal type={popup} onClose={() => setPopup(null)} onSwitch={setPopup} />
            : <Modal type={popup} onClose={() => setPopup(null)} onSwitch={setPopup} />)}
        </div>
    );
}

export default Landing;