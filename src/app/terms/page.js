import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service | LearnMade CodeRunner',
    description: 'Terms of Service for LearnMade CodeRunner.',
};

export default function TermsPage() {
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
                        <span className="font-semibold text-sm">Terms of Service</span>
                    </div>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
                <p className="text-sm text-muted-foreground mb-10">Last updated: September 2026</p>

                <div className="space-y-10 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                        <p>By downloading, installing, or using LearnMade CodeRunner ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">2. License</h2>
                        <p>LearnMade CodeRunner is provided free of charge for personal, educational, and non-commercial use. We grant you a limited, non-exclusive, non-transferable license to install and use the App solely for these purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">3. Restrictions</h2>
                        <p>You may not reverse-engineer, decompile, modify, redistribute, or sell the App or any part of it without express written permission from LearnMade.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">4. Disclaimer of Warranties</h2>
                        <p>The App is provided "as is" without any warranties of any kind, express or implied. We do not guarantee that the App will be error-free, uninterrupted, or meet your specific requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, LearnMade shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">6. Changes to Terms</h2>
                        <p>We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the new Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-foreground mb-3">7. Contact</h2>
                        <p>For any questions regarding these Terms, please contact us through the official LearnMade website.</p>
                    </section>
                </div>
            </main>
        </div>
    );
}
