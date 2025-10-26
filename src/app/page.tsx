
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, Swords, ToyBrick, Trophy, Wand2 } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Swords className="w-8 h-8 mb-4 text-primary" />,
    title: 'Live Duels',
    description:
      'Engage in real-time coding challenges against an AI opponent to test your problem-solving skills under pressure.',
  },
  {
    icon: <ToyBrick className="w-8 h-8 mb-4 text-primary" />,
    title: 'Interactive Playground',
    description:
      'Design and visualize complex backend systems using a drag-and-drop interface for APIs, databases, and more.',
  },
  {
    icon: <Trophy className="w-8 h-8 mb-4 text-primary" />,
    title: 'Global Leaderboard',
    description:
      'Earn experience points (XP) for completing challenges and see how you rank against a global community of developers.',
  },
  {
    icon: <Wand2 className="w-8 h-8 mb-4 text-primary" />,
    title: 'AI-Powered Tools',
    description:
      'Leverage generative AI to get code explanations, generate visual diagrams, and receive conceptual hints from an AI mentor.',
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GitBranch className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              DevArena
            </span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <div className="container">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
              The Ultimate Backend Playground
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Practice system design, solve coding challenges, and visualize complex architectures in a competitive, AI-powered environment.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Enter the Arena</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">I have an account</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 bg-secondary/50">
          <div className="container">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold">
                Why DevArena?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Go beyond algorithms. Sharpen the skills that matter.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className='font-headline'>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-32 text-center">
            <div className="container">
                <h2 className="font-headline text-3xl font-bold">Ready to Level Up?</h2>
                <p className="mt-2 text-muted-foreground">Join thousands of developers honing their backend skills.</p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/signup">Sign Up for Free</Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <footer className="py-6 md:py-8 border-t bg-secondary/50">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevArena. A Project for the Modern Developer.
          </p>
        </div>
      </footer>
    </div>
  );
}
