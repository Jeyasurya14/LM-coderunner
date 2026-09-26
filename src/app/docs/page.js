'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Download, Play, Code2, Settings, Cpu, BookOpen, ArrowLeft, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const sections = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        icon: Play,
        content: [
            {
                heading: 'Installation',
                body: `Download the latest version of LearnMade CodeRunner from the official website. The installer is a standard Windows executable (.exe). Run it, follow the on-screen instructions, and CodeRunner will be ready in under a minute.`,
                steps: [
                    'Download LearnMade-CodeRunner-Setup.exe',
                    'Run the installer as Administrator',
                    'Follow the setup wizard',
                    'Launch CodeRunner from the Desktop shortcut or Start Menu'
                ]
            },
            {
                heading: 'System Requirements',
                body: null,
                table: [
                    { label: 'OS', value: 'Windows 10 or Windows 11 (64-bit)' },
                    { label: 'RAM', value: '2 GB minimum, 4 GB recommended' },
                    { label: 'Disk Space', value: '150 MB for the app + compiler space' },
                    { label: 'Runtime', value: 'No additional runtime required' },
                ]
            }
        ]
    },
    {
        id: 'languages',
        title: 'Supported Languages',
        icon: Code2,
        content: [
            {
                heading: 'C++ (g++)',
                body: 'CodeRunner uses the g++ compiler via your system PATH. Install MinGW-w64 or MSYS2 on Windows to get g++ support. Once installed and added to PATH, CodeRunner will automatically detect it.',
                badge: 'Available'
            },
            {
                heading: 'Python 3',
                body: 'Install Python 3.x from python.org and ensure it is added to your system PATH. CodeRunner will detect the python or python3 binary automatically.',
                badge: 'Available'
            },
            {
                heading: 'Node.js',
                body: 'Install Node.js LTS from nodejs.org. CodeRunner will use the node binary from your PATH to execute JavaScript files.',
                badge: 'Available'
            },
            {
                heading: 'Java & Rust',
                body: 'Support for Java and Rust is currently under development and will be released in a future update.',
                badge: 'Coming Soon'
            }
        ]
    },
    {
        id: 'running-code',
        title: 'Running Code',
        icon: Cpu,
        content: [
            {
                heading: 'Quick Run',
                body: 'Writing and running code in CodeRunner is intentionally simple:',
                steps: [
                    'Open CodeRunner',
                    'Select your language from the dropdown in the top bar',
                    'Write your code in the editor panel',
                    'Click the Run button (or press Ctrl+Enter)',
                    'View your output in the Output panel at the bottom'
                ]
            },
            {
                heading: 'Standard Input',
                body: 'If your program expects stdin input (e.g. cin in C++, input() in Python), switch to the Input tab in the bottom panel and enter your test data before running.'
            }
        ]
    },
    {
        id: 'configuration',
        title: 'Configuration',
        icon: Settings,
        content: [
            {
                heading: 'Theme',
                body: 'CodeRunner supports Light and Dark themes. Toggle between them using the Theme icon (☀/🌙) in the top-right toolbar.'
            },
            {
                heading: 'Session Auto-save',
                body: 'Your code is automatically saved whenever you make changes. When you reopen CodeRunner, your last session is restored instantly — no manual saving needed.'
            },
            {
                heading: 'Font & Editor Settings',
                body: 'Editor preferences such as font size and tab size are available in the Studio panel (accessible via the Studio button in the toolbar).'
            }
        ]
    }
];

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState('getting-started');
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const currentSection = sections.find(s => s.id === activeSection);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            {/* Top bar */}
            <header className="fixed top-0 w-full z-50 border-b border-border bg-background/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Link>
                        <div className="h-5 w-px bg-border" />
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="LearnMade" width={24} height={24} className="object-contain rounded" />
                            <span className="font-semibold text-sm">Documentation</span>
                        </div>
                    </div>
                    <a href="/" className="hidden sm:flex items-center gap-2 bg-foreground text-background h-8 px-4 rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors">
                        <Download className="w-3.5 h-3.5" />
                        Download
                    </a>
                    <button className="sm:hidden" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                        {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 pt-14 flex">
                {/* Sidebar */}
                <aside className={`fixed sm:sticky top-14 sm:top-14 left-0 sm:left-auto inset-y-14 w-64 bg-background sm:bg-transparent border-r border-border z-40 sm:z-auto overflow-y-auto transition-transform duration-200 ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}>
                    <nav className="py-8 pr-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4 px-3">Contents</p>
                        <ul className="space-y-1">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => { setActiveSection(section.id); setIsMobileNavOpen(false); }}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                                            activeSection === section.id 
                                                ? 'bg-secondary text-foreground font-medium' 
                                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                                        }`}
                                    >
                                        <section.icon className="w-4 h-4 shrink-0" />
                                        {section.title}
                                        {activeSection === section.id && <ChevronRight className="w-3 h-3 ml-auto" />}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <motion.main
                    key={activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 sm:pl-12 py-12 max-w-3xl"
                >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>LearnMade CodeRunner</span>
                        <ChevronRight className="w-3 h-3" />
                        <span>{currentSection.title}</span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight mb-2">{currentSection.title}</h1>
                    <div className="h-px bg-border my-8" />

                    <div className="space-y-12">
                        {currentSection.content.map((block, i) => (
                            <div key={i}>
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-xl font-semibold">{block.heading}</h2>
                                    {block.badge && (
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${
                                            block.badge === 'Available' 
                                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                                : 'bg-secondary text-muted-foreground border-border'
                                        }`}>
                                            {block.badge}
                                        </span>
                                    )}
                                </div>

                                {block.body && (
                                    <p className="text-muted-foreground leading-relaxed mb-4">{block.body}</p>
                                )}

                                {block.steps && (
                                    <ol className="space-y-3 mt-4">
                                        {block.steps.map((step, j) => (
                                            <li key={j} className="flex items-start gap-4">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center text-xs font-bold text-foreground mt-0.5">
                                                    {j + 1}
                                                </span>
                                                <span className="text-muted-foreground">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                )}

                                {block.table && (
                                    <div className="rounded-xl border border-border overflow-hidden mt-4">
                                        <table className="w-full text-sm">
                                            <tbody>
                                                {block.table.map((row, j) => (
                                                    <tr key={j} className="border-b border-border last:border-0">
                                                        <td className="px-4 py-3 font-medium text-foreground w-1/3 bg-secondary/30">{row.label}</td>
                                                        <td className="px-4 py-3 text-muted-foreground">{row.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Section navigation */}
                    <div className="mt-16 pt-8 border-t border-border flex justify-between">
                        {sections.findIndex(s => s.id === activeSection) > 0 && (
                            <button
                                onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) - 1].id)}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                {sections[sections.findIndex(s => s.id === activeSection) - 1].title}
                            </button>
                        )}
                        {sections.findIndex(s => s.id === activeSection) < sections.length - 1 && (
                            <button
                                onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) + 1].id)}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
                            >
                                {sections[sections.findIndex(s => s.id === activeSection) + 1].title}
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </motion.main>
            </div>
        </div>
    );
}
