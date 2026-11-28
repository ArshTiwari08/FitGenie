import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-950 text-white">

        {/* HERO SECTION */}
        <section
            id="home"
            className="min-h-[85vh] flex items-center px-6 md:px-16"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-32 md:grid-cols-2">

            {/* Left Content */}
            <div>
                <span className="inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-400">
                ✦ Your Personal AI Fitness Companion
                </span>

                <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
                Transform Your
                <span className="block text-lime-400">
                    Body & Mind.
                </span>
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
                Your fitness journey deserves a smarter approach.
                Get personalized workout plans, nutrition guidance,
                and track your progress with FitGenie.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                <button
                    onClick={() => navigate("/register")}
                    className="rounded-xl bg-lime-400 px-7 py-4 font-semibold text-black transition hover:bg-lime-300"
                >
                    Start Your Journey →
                </button>

                <a
                    href="#features"
                    className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
                >
                    Explore Features
                </a>

                </div>

                <div className="mt-12 flex gap-10">

                <div>
                    <h3 className="text-3xl font-bold text-lime-400">AI</h3>
                    <p className="mt-1 text-sm text-zinc-500">Smart Guidance</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-lime-400">24/7</h3>
                    <p className="mt-1 text-sm text-zinc-500">Fitness Support</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-lime-400">100%</h3>
                    <p className="mt-1 text-sm text-zinc-500">Personalized</p>
                </div>

                </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex items-center justify-center mt-18">

                <div className="absolute h-72 w-72 rounded-full bg-lime-400/20 blur-[100px]"></div>

                <div className="relative flex h-[420px] w-full max-w-md flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 p-8">

                <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">
                    YOUR FITNESS JOURNEY
                    </span>
                    <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-400">
                    ACTIVE
                    </span>
                </div>

                <div className="text-center">

                    <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border-4 border-lime-400/30">
                    <div className="grid h-32 w-32 place-items-center rounded-full bg-lime-400/10">
                        <span className="text-7xl">🏋️</span>
                    </div>
                    </div>

                    <h2 className="mt-8 text-3xl font-bold">
                    Stay Strong.
                    </h2>

                    <p className="mt-2 text-zinc-400">
                    Every rep brings you closer.
                    </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">
                        Daily Motivation
                    </span>
                    <span className="text-lime-400">✦</span>
                    </div>

                    <p className="mt-2 font-medium">
                    "Small progress is still progress."
                    </p>
                </div>

                </div>
            </div>

            </div>
        </section>


        {/* FEATURES SECTION */}
        <section id="features" className="px-6 py-24 md:px-16">

            <div className="mx-auto max-w-7xl">

            <div className="text-center">

                <span className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                What We Offer
                </span>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Everything You Need to
                <span className="text-lime-400"> Level Up</span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
                One platform to manage your workouts, nutrition,
                and fitness progress.
                </p>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">

                {[
                {
                    icon: "🏋️",
                    title: "Smart Workout Plans",
                    description:
                    "Get personalized workout routines based on your fitness level, goals, and body measurements.",
                },
                {
                    icon: "🥗",
                    title: "AI Nutrition Guide",
                    description:
                    "Discover meal suggestions and protein-rich food options that support your fitness goals.",
                },
                {
                    icon: "📊",
                    title: "Progress Tracking",
                    description:
                    "Track your weight, fitness activities, and improvements through your personal dashboard.",
                },
                {
                    icon: "🎯",
                    title: "Personalized Goals",
                    description:
                    "Set realistic fitness targets and follow a structured plan to achieve them.",
                },
                {
                    icon: "⏱️",
                    title: "Daily Routine",
                    description:
                    "Build healthy habits with structured daily exercise schedules and activity recommendations.",
                },
                {
                    icon: "🤖",
                    title: "AI Fitness Assistant",
                    description:
                    "Get intelligent fitness guidance and recommendations according to your personal profile.",
                },
                ].map((feature, index) => (

                <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-400/50"
                >

                    <div className="text-4xl">
                    {feature.icon}
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                    {feature.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                    {feature.description}
                    </p>

                </div>

                ))}

            </div>

            </div>
        </section>


        {/* HOW IT WORKS */}
        <section  id ="working"className="bg-zinc-900 px-6 py-24 md:px-16">

            <div className="mx-auto max-w-7xl">

            <div className="text-center">

                <span className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Simple Process
                </span>

                <h2 className="mt-4 text-4xl font-bold">
                Your Journey in 3 Steps
                </h2>

            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-3">

                {[
                {
                    number: "01",
                    title: "Create Your Profile",
                    description:
                    "Register and provide your age, height, weight, activity level, and fitness goals.",
                },
                {
                    number: "02",
                    title: "Get Your Plan",
                    description:
                    "Receive personalized workout routines and nutrition recommendations.",
                },
                {
                    number: "03",
                    title: "Track Your Growth",
                    description:
                    "Monitor your progress, maintain consistency, and improve over time.",
                },
                ].map((step, index) => (

                <div key={index} className="text-center">

                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-lime-400/30 bg-lime-400/10 text-3xl font-bold text-lime-400">
                    {step.number}
                    </div>

                    <h3 className="mt-7 text-2xl font-bold">
                    {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                    {step.description}
                    </p>

                </div>

                ))}

            </div>

            </div>
        </section>


        {/* ABOUT SECTION */}
        <section id="about" className="px-6 py-24 md:px-16">

            <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 text-center md:p-16">

            <span className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                About FitGenie
            </span>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                Fitness Is Not a
                <span className="text-lime-400"> Destination.</span>
                <br />
                It's a Lifestyle.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
                FitGenie is designed to make fitness guidance more
                accessible and personalized. Whether you are starting
                your journey or improving your existing routine,
                we help you take the next step.
            </p>

            <button
                onClick={() => navigate("/register")}
                className="mt-9 rounded-xl bg-lime-400 px-8 py-4 font-semibold text-black transition hover:bg-lime-300"
            >
                Get Started Today →
            </button>

            </div>

        </section>

        </div>
    );
    }