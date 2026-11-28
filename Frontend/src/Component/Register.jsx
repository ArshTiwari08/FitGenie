import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        goal: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
        }

        console.log("Register Data:", formData);

        // Later connect this with your backend API
        navigate("/login");
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-zinc-950 px-5 py-12 text-white md:px-10">

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl md:grid-cols-2">

            {/* LEFT SIDE - FORM */}
            <div className="p-7 md:p-10">

            {/* Logo */}
            <div className="mb-8 flex items-center gap-2">
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
                Start Your Journey
                </p>

                <h1 className="mt-3 text-3xl font-bold md:text-4xl">
                Create Your Account
                </h1>

                <p className="mt-3 text-zinc-400">
                Create your FitGenie account and take the first step
                toward a healthier version of yourself.
                </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                {/* Name */}
                <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Full Name
                </label>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                />
                </div>

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
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                />
                </div>

                {/* Password */}
                <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Password
                </label>

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                />
                </div>

                {/* Confirm Password */}
                <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Confirm Password
                </label>

                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
                />
                </div>

                {/* Goal */}
                <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Fitness Goal
                </label>

                <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-zinc-300 outline-none transition focus:border-lime-400"
                >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="fitness">Improve Fitness</option>
                    <option value="strength">Build Strength</option>
                    <option value="healthy-lifestyle">
                    Healthy Lifestyle
                    </option>
                </select>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-lime-400"
                />

                <p className="text-sm leading-6 text-zinc-500">
                    I agree to the FitGenie{" "}
                    <span className="text-lime-400">
                    Terms & Conditions
                    </span>{" "}
                    and Privacy Policy.
                </p>
                </div>

                {/* Submit */}
                <button
                type="submit"
                className="w-full rounded-xl bg-lime-400 py-3.5 font-semibold text-black transition hover:bg-lime-300"
                >
                Create Account →
                </button>

            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-zinc-500">
                Already have an account?{" "}
                <Link
                to="/login"
                className="font-semibold text-lime-400 transition hover:text-lime-300"
                >
                Login
                </Link>
            </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative hidden overflow-hidden bg-gradient-to-br from-lime-400/20 via-zinc-900 to-zinc-950 md:block">

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/20 blur-[100px]" />

            <div className="relative flex h-full flex-col justify-between p-10">

                {/* Top */}
                <div>
                <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-400">
                    ✦ Welcome to FitGenie
                </span>

                <h2 className="mt-8 text-4xl font-bold leading-tight">
                    Build the
                    <span className="block text-lime-400">
                    Best Version
                    </span>
                    of Yourself.
                </h2>

                <p className="mt-5 max-w-md leading-7 text-zinc-400">
                    Your fitness journey starts with a single decision.
                    Let FitGenie help you build better habits and stay
                    consistent.
                </p>
                </div>

                {/* Fitness Card */}
                <div className="relative mx-auto w-full max-w-sm">

                <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl">

                    <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">
                        YOUR JOURNEY
                    </span>

                    <span className="text-lime-400">
                        ✦
                    </span>
                    </div>

                    <div className="mt-8 text-center">

                    <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border-4 border-lime-400/20 bg-lime-400/10">
                        <span className="text-6xl">
                        🏋️
                        </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">
                        Stronger Every Day
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                        Consistency creates results.
                    </p>

                    </div>

                    <div className="mt-7 grid grid-cols-3 gap-3">

                    <div className="rounded-xl bg-white/5 p-3 text-center">
                        <p className="text-lg font-bold text-lime-400">
                        01
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                        Profile
                        </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-3 text-center">
                        <p className="text-lg font-bold text-lime-400">
                        02
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                        Plan
                        </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-3 text-center">
                        <p className="text-lg font-bold text-lime-400">
                        03
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                        Progress
                        </p>
                    </div>

                    </div>

                </div>

                </div>

                <p className="text-center text-sm text-zinc-600">
                "Your only limit is the one you set yourself."
                </p>

            </div>

            </div>

        </div>

        </div>
    );
}