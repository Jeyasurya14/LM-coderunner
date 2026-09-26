'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap, Download, ChevronRight, Menu, X,
    GitBranch, Code2, Cpu, Globe, ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const [isDownloading, setIsDownloading] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDownload = () => {
        setIsDownloading(true);

        const link = document.createElement('a');
        link.href = 'https://github.com/Jeyasurya14/LM-coderunner/releases/latest/download/LearnMadeCodeRunner-Setup.exe';
        link.setAttribute('download', 'LearnMadeCodeRunner-Setup.exe');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => setIsDownloading(false), 2000);
    };

    const faqs = [
        { q: "Is CodeRunner free?", a: "Yes. LearnMade CodeRunner is free for individual developers and students." },
        { q: "Do I need to configure compilers?", a: "No. CodeRunner automatically detects existing toolchains like g++ and Python on your system." },
        { q: "Which operating systems are supported?", a: "Currently, CodeRunner is built specifically for Windows 10 and Windows 11." },
        { q: "What languages can I run?", a: "C++, Python, and Node.js are supported out of the box with zero configuration." }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">

            {/* Minimalist Navigation */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-200 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src="/logo.png" alt="LearnMade" width={40} height={40} className="object-contain rounded-lg" priority />
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
                        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
                        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
                        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="https://github.com/learnmade" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            {/* <GitBranch className="w-4 h-4" /> */}
                        </a>
                        <button onClick={handleDownload} className="bg-foreground text-background hover:bg-foreground/90 h-8 px-4 rounded-md text-sm font-medium transition-colors">
                            Download
                        </button>
                    </div>

                    <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-0 top-[64px] z-40 bg-background border-b border-border md:hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
                            <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                            <button onClick={handleDownload} className="w-full bg-foreground text-background h-10 rounded-md mt-2">
                                Download for Windows
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="pt-32 pb-16">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                    <a href="#download" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium mb-8 border border-border hover:bg-secondary transition-colors">
                        CodeRunner v0.1.0 is now available
                        <ChevronRight className="w-3 h-3" />
                    </a>

                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 max-w-4xl text-foreground">
                        Write code. <br className="hidden md:block" />
                        Execute instantly.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                        A blazing fast, lightweight environment designed specifically for Windows. Forget the complex configurations and just focus on the logic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-20 w-full sm:w-auto">
                        <button onClick={handleDownload} disabled={isDownloading} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 h-11 px-8 rounded-md font-medium transition-colors">
                            {isDownloading ? (
                                <><div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" /> Downloading...</>
                            ) : (
                                <><Download className="w-4 h-4" /> Download for Windows</>
                            )}
                        </button>
                        <Link href="/docs" className="w-full sm:w-auto flex items-center justify-center gap-2 h-11 px-8 rounded-md font-medium text-foreground bg-background hover:bg-secondary border border-border transition-colors">
                            Read the Docs
                        </Link>
                    </div>
                    <p className="text-xs text-muted-foreground/60 mt-2">
                        Windows may show a SmartScreen warning — click <span className="text-muted-foreground font-medium">"More info" → "Run anyway"</span> to install.
                    </p>

                    {/* Minimalist Mockup Image Container */}
                    <div className="w-full max-w-5xl rounded-xl overflow-hidden border border-border/40 shadow-2xl bg-card">
                        <div className="relative aspect-[16/10] w-full">
                            <Image src="/mockup.png?v=3" unoptimized alt="LearnMade CodeRunner Interface" fill className="object-cover object-top" priority />
                        </div>
                    </div>
                </section>

                {/* Features (Bento-style Grid) */}
                <section id="features" className="max-w-6xl mx-auto px-6 py-32">
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Built for speed and simplicity.</h2>
                        <p className="text-muted-foreground text-lg max-w-xl">Everything you need to write and test code, packaged in a lightweight native application.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Zap, title: "Zero Configuration", desc: "Instantly switch between languages. No json files to edit, no build tasks to configure." },
                            { icon: Cpu, title: "Native Windows", desc: "Optimized specifically for Windows 10/11. Starts up in milliseconds." },
                            { icon: Code2, title: "Smart Diagnostics", desc: "Compiler errors are parsed and displayed beautifully to help you fix bugs faster." },
                            { icon: Globe, title: "Offline by Default", desc: "No internet required. Your code compiles and runs entirely on your local machine." }
                        ].map((feature, i) => (
                            <div key={i} className="p-6 rounded-xl bg-card border border-border/40 hover:border-border transition-colors flex flex-col">
                                <feature.icon className="w-5 h-5 mb-4 text-foreground" />
                                <h3 className="font-medium mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Simple Pricing */}
                <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 border-t border-border/40">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight mb-4">Pricing</h2>
                            <p className="text-muted-foreground text-lg">CodeRunner is completely free for individual use.</p>
                        </div>
                        <div className="p-8 rounded-xl bg-card border border-border/40 min-w-[300px]">
                            <div className="mb-4">
                                <span className="text-4xl font-semibold">$0</span>
                                <span className="text-muted-foreground"> / forever</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-foreground" /> All supported languages</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-foreground" /> Unlimited local executions</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-foreground" /> Community support</li>
                            </ul>
                            <button onClick={handleDownload} className="w-full bg-foreground text-background h-10 rounded-md text-sm font-medium transition-colors hover:bg-foreground/90">
                                Download Free
                            </button>
                        </div>
                    </div>
                </section>

                {/* Clean FAQ */}
                <section id="faq" className="max-w-3xl mx-auto px-6 py-32">
                    <h2 className="text-2xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-1">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-border/40 last:border-0">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full py-4 text-left flex justify-between items-center hover:text-foreground/80 transition-colors"
                                >
                                    <span className="font-medium text-sm">{faq.q}</span>
                                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                            <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Minimal Footer */}
            <footer className="border-t border-border/40 bg-background py-12">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <Image src="/logo.png" alt="LearnMade" width={32} height={32} className="object-contain rounded-md" />
                    </div>
                    <div className="flex gap-6">
                        <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
                        <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
