import React, { useMemo, useState } from "react";
import { Check, Star, Zap, Crown, Info } from "lucide-react";

// Packages data as an array
const PLANS = [
    {
        id: "starter",
        name: "Starter",
        tagline: "Perfect for trying things out",
        monthly: 9,
        yearly: 84, // 2 months free
        cta: "Get Starter",
        highlight: false,
        features: [
            "1 project",
            "Up to 5 team members",
            "Basic analytics",
            "Community support",
        ],
        limits: {
            projects: 1,
            members: 5,
            storage: "5GB",
        },
    },
    {
        id: "pro",
        name: "Pro",
        tagline: "Everything you need to scale",
        monthly: 29,
        yearly: 276, // 2 months free
        cta: "Start Pro",
        highlight: true,
        features: [
            "Unlimited projects",
            "Up to 25 team members",
            "Advanced analytics",
            "Email & chat support",
            "API access",
        ],
        limits: {
            projects: "Unlimited",
            members: 25,
            storage: "100GB",
        },
    },
    {
        id: "business",
        name: "Business",
        tagline: "For growing teams with ambition",
        monthly: 79,
        yearly: 756, // 2 months free
        cta: "Go Business",
        highlight: false,
        features: [
            "Unlimited projects",
            "Unlimited team members",
            "Attribution & cohort analysis",
            "Priority support",
            "SSO & SAML",
        ],
        limits: {
            projects: "Unlimited",
            members: "Unlimited",
            storage: "1TB",
        },
    },
    {
        id: "enterprise",
        name: "Enterprise",
        tagline: "Security & support at scale",
        monthly: 199,
        yearly: 1896, // 2 months free
        cta: "Contact Sales",
        highlight: false,
        features: [
            "Custom SSO/SAML/SCIM",
            "VPC & on-prem options",
            "Uptime SLA & DPA",
            "Dedicated success manager",
            "Custom contracts & invoicing",
        ],
        limits: {
            projects: "Unlimited",
            members: "Unlimited",
            storage: "Unlimited",
        },
    },
    {
        id: "Sjpiar  [aclage",
        name: "Enterprise",
        tagline: "Security & support at scale",
        monthly: 199,
        yearly: 1896, // 2 months free
        cta: "Contact Sales",
        highlight: false,
        features: [
            "Custom SSO/SAML/SCIM",
            "VPC & on-prem options",
            "Uptime SLA & DPA",
            "Dedicated success manager",
            "Custom contracts & invoicing",
        ],
        limits: {
            projects: "Unlimited",
            members: "Unlimited",
            storage: "Unlimited",
        },
    },
];

// Utility: currency formatting
const formatPrice = (amount, currency) =>
    new Intl.NumberFormat(undefined, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(amount);

export default function PricingTable({packages}) {
    const [billing, setBilling] = useState("monthly"); // 'monthly' | 'yearly'
    const [currency, setCurrency] = useState("USD");

    const savingsCopy = useMemo(() => {
        return billing === "yearly" ? "Save 2 months" : "";
    }, [billing]);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-white via-slate-50 to-white text-slate-900">
            {/* Header */}
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600">
                        <Zap className="h-3.5 w-3.5" />
                        Unlock Your global Career Growth
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500">
                        All Packages with capital return policy after 24 month
                    </h1>
                    <h2 className="max-w-2xl text-slate-600">
                        And get Life Insurance policy Certificate for 24 month.
                    </h2>

                    {/* Controls */}
                    {/*<div className="mt-4 flex flex-wrap items-center justify-center gap-3">*/}
                    {/*    /!* Billing toggle *!/*/}
                    {/*    <div className="relative inline-flex select-none items-center gap-1 rounded-full border border-slate-200 bg-slate-100 p-1">*/}
                    {/*        <button*/}
                    {/*            aria-pressed={billing === "monthly"}*/}
                    {/*            onClick={() => setBilling("monthly")}*/}
                    {/*            className={`px-3 py-1.5 text-sm rounded-full transition-all ${*/}
                    {/*                billing === "monthly"*/}
                    {/*                    ? "bg-slate-900 text-white shadow"*/}
                    {/*                    : "text-slate-600 hover:text-slate-900"*/}
                    {/*            }`}*/}
                    {/*        >*/}
                    {/*            Monthly*/}
                    {/*        </button>*/}
                    {/*        <button*/}
                    {/*            aria-pressed={billing === "yearly"}*/}
                    {/*            onClick={() => setBilling("yearly")}*/}
                    {/*            className={`px-3 py-1.5 text-sm rounded-full transition-all ${*/}
                    {/*                billing === "yearly"*/}
                    {/*                    ? "bg-slate-900 text-white shadow"*/}
                    {/*                    : "text-slate-600 hover:text-slate-900"*/}
                    {/*            }`}*/}
                    {/*        >*/}
                    {/*            Yearly <span className="ml-1 text-[10px] align-middle opacity-70">(2 mo free)</span>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}

                    {/*    /!* Currency select *!/*/}
                    {/*    <label className="flex items-center gap-2 text-sm text-slate-700">*/}
                    {/*        <span className="inline-flex items-center gap-1"><Info className="h-3.5 w-3.5" /> Currency</span>*/}
                    {/*        <select*/}
                    {/*            value={currency}*/}
                    {/*            onChange={(e) => setCurrency(e.target.value)}*/}
                    {/*            className="rounded-xl border border-slate-300 bg-white px-2 py-1 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"*/}
                    {/*        >*/}
                    {/*            <option value="USD">USD</option>*/}
                    {/*            <option value="EUR">EUR</option>*/}
                    {/*            <option value="GBP">GBP</option>*/}
                    {/*        </select>*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                </div>
            </div>

            {/* Cards */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-4">
                {packages.map((plan) => {
                    // const price = billing === "monthly" ? plan.monthly : plan.yearly;
                    // const per = billing === "monthly" ? "/mo" : "/yr";
                     const isPopular = true;
                    return (
                        <div
                            key={plan.id}
                            className={`relative rounded-3xl border bg-white backdrop-blur border-slate-200 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1 hover:shadow-xl ${
                                isPopular ? "ring-2 ring-indigo-400/70" : ""
                            }`}
                        >
                            {isPopular && (
                                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-medium text-white shadow-md">
                                    <Star className="h-3.5 w-3.5" /> Most Popular
                                </div>
                            )}

                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                                    {/*<p className="text-sm text-slate-600">{plan.tagline}</p>*/}
                                </div>
                                {plan.name === "enterprise" && (
                                    <Crown className="h-6 w-6 text-amber-500" />
                                )}
                            </div>

                            <div className="mb-4">
                                <div className="flex items-end gap-2">
                                  <span className="text-4xl font-bold tracking-tight">
                                    {plan.amount}
                                  </span>
                                </div>
                                {billing === "yearly" && (
                                    <div className="mt-1 text-xs text-emerald-600">{savingsCopy}</div>
                                )}
                            </div>

                            {/*<ul className="mb-6 space-y-2">*/}
                            {/*    {plan.features.map((f, idx) => (*/}
                            {/*        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">*/}
                            {/*            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />*/}
                            {/*            <span>{f}</span>*/}
                            {/*        </li>*/}
                            {/*    ))}*/}
                            {/*</ul>*/}

                            <button
                                className={`group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                                    isPopular
                                        ? "bg-indigo-500 hover:bg-indigo-400 text-white focus:ring-indigo-400"
                                        : "bg-slate-900 hover:bg-slate-800 text-white focus:ring-slate-400"
                                }`}
                                onClick={() => alert(`${plan.name} selected`)}
                            >
                                {plan.name}
                                <Zap className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </button>

                            {/* Small comparison footer */}
                            <dl className="mt-6 grid grid-cols-3 gap-3 text-xs text-slate-500">
                                <div>
                                    <dt className="text-slate-500">Projects</dt>
                                    <dd className="font-medium text-slate-700">5</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-500">Members</dt>
                                    <dd className="font-medium text-slate-700">40404</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-500">Return</dt>
                                    <dd className="font-medium text-slate-700">US$10303003</dd>
                                </div>
                            </dl>
                        </div>
                    );
                })}
            </div>

            {/* Trust bar */}
            <div className="mx-auto max-w-7xl px-6 pb-20">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow">
                    <p className="text-sm text-slate-600">
                        You can travel 11, 12, 24 and 25 of each month and stay for free.
                    </p>
                </div>
            </div>
        </div>
    );
}
