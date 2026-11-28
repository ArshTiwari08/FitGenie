import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login Data:", formData);

        // Connect your backend authentication here.
        // Navigate to dashboard after successful login.
        // navigate("/dashboard");
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-zinc-950 px-5 py-12 text-white md:px-10">

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl md:grid-cols-2">

            {/* LEFT SIDE - LOGIN FORM */}
            <div className="flex flex-col justify-center p-7 md:p-12">

            {/* Logo */}
            <div className="mb-10 flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-lime-400 font-bold text-black">
                F
                </div>

                <span className="text-xl font-bold">
                Fit<span className="text-lime-400">Genie</span>
                </span>
            </div>

            {/* Heading */}
            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Welcome Back
                </p>

                <h1 className="mt-3 text-4xl font-bold">
                Login to Your Account
                </h1>

                <p className="mt-4 leading-7 text-zinc-400">
                Your fitness journey is waiting for you.
                Login and continue building a stronger, healthier you.
                </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-9 space-y-6">

                {/* Email */}
                <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Email Address
                </label>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                />
                </div>

                {/* Password */}
                <div>
                <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-zinc-300">
                    Password
                    </label>

                    <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                    className="text-sm text-lime-400 transition hover:text-lime-300"
                    >
                    Forgot Password?
                    </button>
                </div>

                <div className="relative">
                    <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 pr-20 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                    />

                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-lime-400"
                    >
                    {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 accent-lime-400"
                />

                <label
                    htmlFor="remember"
                    className="text-sm text-zinc-400"
                >
                    Remember me
                </label>
                </div>

                {/* Login Button */}
                <button
                type="submit"
                className="w-full rounded-xl bg-lime-400 py-4 font-semibold text-black transition hover:bg-lime-300"
                >
                Login to FitGenie →
                </button>

            </form>

            {/* Register Link */}
            <p className="mt-8 text-center text-sm text-zinc-500">
                Don't have an account?{" "}
                <Link
                to="/register"
                className="font-semibold text-lime-400 transition hover:text-lime-300"
                >
                Create Account
                </Link>
            </p>

            </div>

            {/* RIGHT SIDE - FITNESS PANEL */}
            <div className="relative hidden overflow-hidden bg-gradient-to-br from-lime-400/20 via-zinc-900 to-zinc-950 p-10 md:flex md:flex-col md:justify-between">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/20 blur-[100px]" />

            <div className="relative">

                <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-400">
                ✦ Your Fitness Partner
                </span>

                <h2 className="mt-10 text-5xl font-bold leading-tight">
                Every Day Is
                <span className="block text-lime-400">
                    A New Chance
                </span>
                To Improve.
                </h2>

                <p className="mt-6 max-w-md leading-8 text-zinc-400">
                Stay focused on your goals. Track your progress,
                follow your personalized workouts, and make
                every day count with FitGenie.
                </p>

            </div>

            {/* Fitness Illustration */}
            <div className="relative mx-auto w-full max-w-sm">

                <div className="rounded-3xl border border-white/10 bg-black/30 p-8 text-center backdrop-blur-xl">

                <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border-4 border-lime-400/30 bg-lime-400/10">
                    <span className="text-7xl">
                    🏃
                    </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                    Keep Moving Forward
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                    Your consistency today creates your strength tomorrow.
                </p>

                <div className="mt-7 flex justify-center gap-2">
                    <span className="h-2 w-8 rounded-full bg-lime-400" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                </div>

            </div>

            <p className="relative text-center text-sm text-zinc-600">
                "Discipline is the bridge between goals and achievement."
            </p>

            </div>

        </div>

        </div>
    );
}