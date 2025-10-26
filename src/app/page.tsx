
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, Swords, ToyBrick, Trophy, Wand2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

const testimonials = [
  {
    quote: "DevArena is a game-changer. The interactive playground made system design concepts click for me in a way tutorials never could.",
    name: "Elena Rodriguez",
    title: "Backend Engineer @ TechCorp"
  },
  {
    quote: "The AI Mentor is brilliant. It gives you just enough of a hint to get you unstuck without solving the problem for you. It's like having a senior dev partner on demand.",
    name: "Ben Carter",
    title: "Software Developer @ Innovate Inc."
  },
  {
    quote: "I used to dread system design interviews. After a week on DevArena, I feel more confident than ever. The duels are intense but incredibly effective.",
    name: "Aisha Khan",
    title: "SRE @ CloudFlare"
  }
];


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
        <section className="relative py-20 md:py-32 text-center">
           <div
              aria-hidden="true"
              className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
            >
              <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
              <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
          <div className="container relative">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
              The Ultimate Backend Playground
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Practice system design, solve coding challenges, and visualize complex architectures in a competitive, AI-powered environment.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Enter the Arena <ArrowRight className='ml-2' /></Link>
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
                <Card key={feature.title} className="text-center bg-background/50 border-0 shadow-lg hover:shadow-primary/20 transition-shadow">
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

        {/* Testimonials Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold">
                Loved by Developers Worldwide
              </h2>
              <p className="mt-2 text-muted-foreground">
                Don't just take our word for it. Here's what engineers are saying.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <Card key={i} className="flex flex-col justify-between bg-secondary/30">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                       <Avatar>
                          <Image src={`https://picsum.photos/seed/${i+10}/40/40`} width={40} height={40} alt={testimonial.name} data-ai-hint="person" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action Section */}
        <section className="py-20 md:py-32 text-center bg-secondary/50">
            <div className="container">
                <h2 className="font-headline text-3xl font-bold">Ready to Level Up?</h2>
                <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Join thousands of developers honing their backend skills, preparing for interviews, and building the future of the web.</p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/signup">Sign Up for Free</Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <footer className="py-6 md:py-8 border-t">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevArena. A Project for the Modern Developer.
          </p>
           <p className="text-sm text-muted-foreground">
            Built for the Google AI Hackathon.
          </p>
        </div>
      </footer>
    </div>
  );
}
