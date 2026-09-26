import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | LearnMade CodeRunner',
    description: 'Privacy Policy for LearnMade CodeRunner.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <header className="fixed top-0 w-full z-50 border-b border-border bg-background/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Link>
                    <div className="h-5 w-px bg-border" />
                    <div className="flex items-center gap-2">
                        <Image src="/logo.png" alt="LearnMade" width={24} height={24} className="object-contain rounded" />
                        <span className="font-semibold text-sm">Privacy Policy</span>
                    </div>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
                <p className="text-sm text-muted-foreground mb-10">Last updated: September 2026</p>

                <div className="space-y-10 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">1. Overview</h2>
                        <p>LearnMade CodeRunner is designed with privacy first. The App runs entirely on your local machine and does not collect, transmit, or store any personal data on external servers.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">2. Data We Collect</h2>
                        <p>We do not collect any personally identifiable information. All your code snippets, settings, and session data are stored locally on your device in the application data directory. None of this data is ever sent to LearnMade or any third party.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">3. Code Execution</h2>
                        <p>All code you write and execute within CodeRunner runs locally on your machine using your installed compilers and runtimes. No code is uploaded to any server.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">4. Crash Reports & Analytics</h2>
                        <p>CodeRunner does not currently collect crash reports or usage analytics. If this changes in a future version, users will be notified and given the option to opt-out.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">5. Third-Party Services</h2>
                        <p>This website (software-landing-next) may use standard web analytics. The desktop application itself does not communicate with any third-party services.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">6. Children's Privacy</h2>
                        <p>CodeRunner is designed to be used by students of all ages. Because we collect no personal data, there are no special considerations regarding children's privacy.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">7. Contact</h2>
                        <p>If you have any questions about this Privacy Policy, please reach out to us through the official LearnMade website.</p>
                    </section>
                </div>
            </main>
        </div>
    );
}
