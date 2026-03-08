"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Users,
    Send,
    Bot,
    Settings,
    Bell,
    Search,
    CheckCircle2,
    Sparkles,
    BarChart3,
    Mail,
    MessageSquare
} from "lucide-react";

export function DashboardMockup() {
    const [activeTab, setActiveTab] = useState("overview");
    const [isGenerating, setIsGenerating] = useState(false);
    const [emailsGenerated, setEmailsGenerated] = useState(false);

    const handleGenerateClick = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setEmailsGenerated(true);
        }, 1500);
    };

    return (
        <div className="w-full h-[600px] flex bg-white text-foreground font-sans overflow-hidden select-none">
            {/* Sidebar */}
            <div className="w-[240px] border-r border-border bg-background/50 hidden md:flex flex-col pt-6 pb-4 shrink-0">
                <div className="px-6 mb-8 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-serif font-bold text-xl tracking-tight">Leadle</span>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {[
                        { id: "overview", icon: LayoutDashboard, label: "Overview" },
                        { id: "campaigns", icon: Send, label: "Campaigns" },
                        { id: "leads", icon: Users, label: "Leads database" },
                        { id: "agents", icon: Bot, label: "AI Agents" },
                        { id: "analytics", icon: BarChart3, label: "Analytics" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeTab === item.id
                                ? "bg-primary text-primary-foreground"
                                : "text-muted hover:bg-accent-stone/50 hover:text-foreground"
                                }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="px-4 mt-auto">
                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted hover:bg-accent-stone/50 hover:text-foreground transition-colors">
                        <Settings className="w-4 h-4" />
                        Settings
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[#F9FAFB] min-w-0">
                {/* Header */}
                <header className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-border bg-white shrink-0">
                    <div className="flex items-center gap-2 bg-accent-stone/30 px-3 py-1.5 rounded-md border border-border/50 focus-within:ring-2 ring-primary/20 w-32 sm:w-64 transition-shadow">
                        <Search className="w-4 h-4 text-muted shrink-0" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-muted hover:text-foreground relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-accent-stone border border-border flex items-center justify-center font-medium text-sm">
                            JD
                        </div>
                    </div>
                </header>

                {/* Scrollable Area */}
                <div className="flex-1 overflow-y-auto relative p-4 md:p-8">
                    <AnimatePresence mode="wait">
                        {activeTab === "overview" && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 px-4 py-4 md:px-8 md:py-8 h-max"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
                                            Good morning, John Doe
                                        </h2>
                                        <p className="text-sm md:text-base text-muted mt-1">Here's what your agents are up to today.</p>
                                    </div>
                                    <button
                                        onClick={handleGenerateClick}
                                        disabled={isGenerating || emailsGenerated}
                                        className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                    >
                                        <Sparkles className={`w-4 h-4 shrink-0 ${isGenerating ? "animate-pulse delay-75" : ""}`} />
                                        {isGenerating ? "Generating..." : emailsGenerated ? "Ready" : "Auto-Draft"}
                                    </button>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                                    {[
                                        { label: "New Leads Sourced", value: "1,284", change: "+12%", icon: Search },
                                        { label: "Emails Sent", value: "8,942", change: "+4%", icon: Mail },
                                        { label: "Replies Handled", value: "312", change: "+28%", icon: MessageSquare },
                                    ].map((stat, i) => (
                                        <div
                                            key={i}
                                            className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="p-2 bg-accent-stone/50 rounded-lg shrink-0">
                                                    <stat.icon className="w-5 h-5 text-foreground" />
                                                </div>
                                                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full shrink-0">
                                                    {stat.change}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold font-sans mt-auto">{stat.value}</h3>
                                            <p className="text-sm text-muted mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Agent Activity Feed */}
                                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-8">
                                    <div className="px-6 py-4 border-b border-border">
                                        <h3 className="font-semibold text-foreground">Live Agent Activity</h3>
                                    </div>
                                    <div className="divide-y divide-border">
                                        <AnimatePresence>
                                            {emailsGenerated && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="px-6 py-4 flex items-center justify-between bg-green-50/50"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-foreground">Copywriter Agent finished drafting 50 emails.</p>
                                                            <p className="text-xs text-muted mt-0.5">Campaign "HVAC Reactivation Q3" is ready for review.</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs font-medium text-muted">Just now</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        {[
                                            { time: "2 mins ago", title: "Scout Agent found 14 new local plumbers.", desc: "Added to 'Plumbing Outreach' list.", icon: Search, color: "text-blue-600", bg: "bg-blue-100" },
                                            { time: "15 mins ago", title: "Responder Agent booked a meeting.", desc: "Meeting scheduled with John Doe for tomorrow at 2 PM.", icon: Bot, color: "text-purple-600", bg: "bg-purple-100" },
                                            { time: "1 hour ago", title: "Deliverability Agent rotated 3 sending domains.", desc: "Maintaining 99.8% inbox placement rate.", icon: Settings, color: "text-orange-600", bg: "bg-orange-100" },
                                        ].map((event, i) => (
                                            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-accent-stone/10 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-8 h-8 rounded-full ${event.bg} flex items-center justify-center ${event.color}`}>
                                                        <event.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-foreground">{event.title}</p>
                                                        <p className="text-xs text-muted mt-0.5">{event.desc}</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-medium text-muted">{event.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "campaigns" && (
                            <motion.div
                                key="campaigns"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 px-4 py-4 md:px-8 md:py-8 h-max"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground">Active Campaigns</h2>
                                        <p className="text-sm md:text-base text-muted mt-1">Manage and track your autonomous outreach.</p>
                                    </div>
                                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all flex items-center gap-2 whitespace-nowrap">
                                        <Send className="w-4 h-4" /> <span className="hidden sm:inline">New Campaign</span>
                                    </button>
                                </div>

                                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-8 w-full overflow-x-auto">
                                    <table className="w-full text-left text-sm min-w-[600px]">
                                        <thead className="bg-accent-stone/30 border-b border-border">
                                            <tr>
                                                <th className="px-6 py-4 font-semibold text-muted whitespace-nowrap">Name</th>
                                                <th className="px-6 py-4 font-semibold text-muted whitespace-nowrap">Status</th>
                                                <th className="px-6 py-4 font-semibold text-muted whitespace-nowrap">Sent</th>
                                                <th className="px-6 py-4 font-semibold text-muted whitespace-nowrap">Replies</th>
                                                <th className="px-6 py-4 font-semibold text-muted whitespace-nowrap">Meetings</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {[
                                                { name: "HVAC Reactivation Q3", status: "Active", sent: "1,200", replies: "45", meetings: "12", statusColor: "text-green-600 bg-green-50" },
                                                { name: "Plumbing Outbound 01", status: "Drafting", sent: "-", replies: "-", meetings: "-", statusColor: "text-yellow-600 bg-yellow-50" },
                                                { name: "Roofing Follow-up", status: "Paused", sent: "4,500", replies: "120", meetings: "28", statusColor: "text-muted bg-accent-stone/50" },
                                            ].map((camp, i) => (
                                                <tr key={i} className="hover:bg-accent-stone/10 transition-colors">
                                                    <td className="px-6 py-4 font-medium whitespace-nowrap">{camp.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${camp.statusColor}`}>{camp.status}</span>
                                                    </td>
                                                    <td className="px-6 py-4 text-muted whitespace-nowrap">{camp.sent}</td>
                                                    <td className="px-6 py-4 text-muted whitespace-nowrap">{camp.replies}</td>
                                                    <td className="px-6 py-4 text-muted whitespace-nowrap">{camp.meetings}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "leads" && (
                            <motion.div
                                key="leads"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 px-4 py-4 md:px-8 md:py-8 h-max"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground">Leads Database</h2>
                                        <p className="text-sm md:text-base text-muted mt-1">Sourced and verified by your agents.</p>
                                    </div>
                                    <button className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium hover:bg-accent-stone/30 transition-all flex items-center justify-center gap-2">
                                        <Users className="w-4 h-4" /> Import CSV
                                    </button>
                                </div>

                                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-8">
                                    <div className="divide-y divide-border">
                                        {[
                                            { name: "John Doe", title: "Owner @ JD Plumbing", status: "Enriched", ready: true },
                                            { name: "Sarah Smith", title: "Marketing Dir @ Elite HVAC", status: "Enriched", ready: true },
                                            { name: "Mike Johnson", title: "CEO @ Dallas Roofing", status: "Scouting...", ready: false },
                                        ].map((lead, i) => (
                                            <div key={i} className="px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-accent-stone/10 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-accent-stone flex items-center justify-center font-bold text-muted shrink-0">
                                                        {lead.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-foreground">{lead.name}</p>
                                                        <p className="text-xs text-muted mt-0.5">{lead.title}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 sm:ml-auto">
                                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${lead.ready ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                                                        {lead.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "agents" && (
                            <motion.div
                                key="agents"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 px-4 py-4 md:px-8 md:py-8 h-max"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground">AI Agent Fleet</h2>
                                        <p className="text-sm md:text-base text-muted mt-1">Configure your specialized team.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                                    {[
                                        { name: "Scout", role: "Researcher", color: "bg-blue-100 text-blue-600", active: true, desc: "Currently indexing 400 LinkedIn profiles for 'Plumbing Outbound 01'." },
                                        { name: "Writer", role: "Copywriter", color: "bg-purple-100 text-purple-600", active: false, desc: "Idle. Waiting for Scout to complete enrichment." },
                                        { name: "Sender", role: "Deliverability", color: "bg-orange-100 text-orange-600", active: true, desc: "Warming up 12 new domains. Sending rate: 140/hr." },
                                        { name: "Responder", role: "Inbox Manager", color: "bg-green-100 text-green-600", active: true, desc: "Handling objections and booking meetings for 3 active campaigns." },
                                    ].map((agent, i) => (
                                        <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col h-full">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-xl ${agent.color} flex items-center justify-center shrink-0`}>
                                                        <Bot className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-foreground">{agent.name}</h3>
                                                        <p className="text-xs text-muted">{agent.role}</p>
                                                    </div>
                                                </div>
                                                {agent.active ? (
                                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full shrink-0">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> <span className="hidden sm:inline">Active</span>
                                                    </span>
                                                ) : (
                                                    <span className="text-xs font-semibold text-muted bg-accent-stone/50 px-2 py-1 rounded-full shrink-0">
                                                        Idle
                                                    </span>
                                                )}
                                            </div>
                                            <div className="bg-[#F9FAFB] p-4 rounded-xl text-sm text-foreground/80 mt-auto border border-border/50">
                                                {agent.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "analytics" && (
                            <motion.div
                                key="analytics"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 px-8 py-8 h-max"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-2xl font-serif font-semibold text-foreground">Analytics</h2>
                                        <p className="text-muted mt-1">High-level overview of your pipeline health.</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 bg-white border border-border rounded-lg text-sm hover:bg-accent-stone/30 transition-colors">7d</button>
                                        <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm border-transparent hover:bg-primary/90 transition-colors">30d</button>
                                        <button className="px-3 py-1.5 bg-white border border-border rounded-lg text-sm hover:bg-accent-stone/30 transition-colors">90d</button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 mb-8 h-64 flex flex-col">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-semibold text-foreground">Meetings Booked Trend</h3>
                                        <div className="text-lg font-bold text-green-600">42 total</div>
                                    </div>
                                    {/* Mock Chart Area */}
                                    <div className="flex-1 flex items-end justify-between gap-2 px-4 pb-2 border-b border-l border-border/50">
                                        {[40, 60, 30, 80, 50, 90, 70, 100, 60, 40].map((h, i) => (
                                            <div key={i} className="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-sm relative group cursor-pointer" style={{ height: `${h}%` }}>
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {Math.floor(h / 10)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-muted mt-2 px-4">
                                        <span>Sep 1</span>
                                        <span>Sep 15</span>
                                        <span>Sep 30</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
