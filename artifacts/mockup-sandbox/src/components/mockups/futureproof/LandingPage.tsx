import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Zap, Play, Workflow, Brain, Database, Layers } from "lucide-react";

// Intersection Observer Hook for scroll animations
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return ref;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-in-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function LandingPage() {
  // Enforce dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl tracking-tight">FUTUREPROOF</span>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-none px-6">
            Join The Lab
          </Button>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Futureproof
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                The Evolution Lab<span className="text-primary">.</span>
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-6 max-w-3xl mx-auto leading-tight">
                You don't need more AI tools. You need one system that runs your business.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
                Build an AI Business Brain, hire a Dream Team, and do 5 jobs by yourself. No complex tech background. Just a smart way to work.
              </p>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" className="h-16 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-none box-glow transition-all hover:scale-105">
                  Join The Lab Now <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-sm text-muted-foreground font-medium">$47/month. Cancel anytime.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 bg-black/40 border-y border-white/5 relative">
          <div className="container mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-primary">
                The "I feel behind" moment.
              </h2>
            </Reveal>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              <Reveal delay={100}><p className="text-white">You're using AI… but it doesn't feel like leverage.</p></Reveal>
              <Reveal delay={150}><p>It feels like more tabs. More prompts. More starting over.</p></Reveal>
              <Reveal delay={200}><p>You've got 87 chat threads open. Every new one = re-explaining your business. Your audience. Your offers. Your voice.</p></Reveal>
              <Reveal delay={250}><p className="text-white font-medium">So nothing compounds. Nothing sticks.</p></Reveal>
              <Reveal delay={300}><p>Maybe you upgraded to Custom GPTs. Better… but still broken. Because they're static.</p></Reveal>
              <Reveal delay={350}><p>Your "AI CMO" still thinks it's January. Old pricing. Old offers. Old messaging.</p></Reveal>
              <Reveal delay={400}><p>Every change in your business = manual updates. Docs, prompts, instructions… again and again.</p></Reveal>
              <Reveal delay={450}><p className="text-white font-medium">So instead of saving time, you're maintaining AI.</p></Reveal>
              <Reveal delay={500}><p>And then there's the tools. New one every week. Everyone chasing the next shiny thing. But tools don't fix this.</p></Reveal>
              <Reveal delay={550}><p className="text-white">Because the problem isn't access to AI. It's that you don't have a system.</p></Reveal>
              
              <Reveal delay={600}>
                <div className="glass-panel p-8 my-10 border-l-4 border-l-primary">
                  <p className="text-white font-medium mb-4">A system that:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Knows your business</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Remembers what matters</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Evolves as you evolve</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> And actually does work for you</li>
                  </ul>
                </div>
              </Reveal>
              
              <Reveal delay={650}>
                <p className="text-xl md:text-2xl text-white font-medium">
                  Right now, you're chatting with AI. The people pulling ahead have a real system. They built something that works with them. Every day.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The 5 Layers Section */}
        <section className="py-32 px-6 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              <div className="sticky top-32 h-fit">
                <Reveal>
                  <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
                    The 5 Layers of an <br/>
                    <span className="text-primary text-glow">AI-Powered</span> Business
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>Here's the part most people miss: Tools will change. They always do. New models. New apps. New features every week.</p>
                    <p>If you build your business around tools… you'll always feel behind. But this? This doesn't change. These 5 layers are the structure underneath everything.</p>
                    <p>No matter what happens to ChatGPT, Claude, Gemini, or whatever comes next… this is how an AI-powered business actually works.</p>
                    <p>What we're building here is a wrapper around the models. Not just using AI… but creating a system that:</p>
                    <ul className="pl-4 border-l border-primary/30 space-y-2 py-2 text-white/90">
                      <li>• plugs into any model</li>
                      <li>• evolves as tools evolve</li>
                      <li>• and keeps your business consistent underneath it all</li>
                    </ul>
                    <p className="text-white font-medium mt-6 pt-6 border-t border-white/10">Right now, the best place I've found to build this is inside Claude Co-work.</p>
                  </div>
                </Reveal>
              </div>

              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "The AI Engine",
                    desc: "The AI model itself. Pick your favorite. This is the raw horsepower, but without the right system, a brilliant engine sits idle. Today we use Claude because it supports the rest of the layers beautifully.",
                    icon: <Brain className="w-6 h-6 text-primary" />
                  },
                  {
                    num: "02",
                    title: "Context",
                    desc: "Where most people stop. This is the uploaded documents, the info you feed it. But static context isn't enough to pivot your messaging when things change.",
                    icon: <Layers className="w-6 h-6 text-primary" />
                  },
                  {
                    num: "03",
                    title: "Memory",
                    desc: "Your single source of truth. This layer lives, evolves, and changes with your business. It remembers past launches so you don't have to repeat yourself.",
                    icon: <Database className="w-6 h-6 text-primary" />
                  },
                  {
                    num: "04",
                    title: "Execution & Skills",
                    desc: "Not a generic list of skills. Your specific workflows. Imagine choosing a hook and having a full YouTube script or carousel post generated while you sleep.",
                    icon: <Workflow className="w-6 h-6 text-primary" />
                  },
                  {
                    num: "05",
                    title: "Automation",
                    desc: "Scheduled tasks. An automated pulse hits your inbox at 5 AM. Metric analysis and drafted check-ins prepared for you before you even open your laptop.",
                    icon: <Play className="w-6 h-6 text-primary" />
                  }
                ].map((layer, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="glass-panel p-8 md:p-10 relative overflow-hidden group hover:border-primary/50 transition-colors">
                      <div className="absolute top-0 right-0 p-6 opacity-10 font-display text-8xl font-bold text-primary translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                        {layer.num}
                      </div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                          {layer.icon}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-4">
                          <span className="text-primary">{layer.num} //</span> {layer.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {layer.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-32 px-6 bg-black/60 border-y border-white/5">
          <div className="container mx-auto max-w-6xl">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">What's Inside The Lab</h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 mb-20 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                <img 
                  src="/__mockup/images/classroom.png" 
                  alt="Inside the lab" 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Plug & Play Custom GPTs", desc: "Not links to custom GPTs. Here you get the guts to make them your own. You control the outputs." },
                { title: "Plug & Play Claude Skills", desc: "Claude Skills are a total game-changer. They are reusable, purpose-built AI capabilities." },
                { title: "Plug & Play Web Apps", desc: "Useful web apps and Claude Artifacts done for you. Import vibe-coded projects immediately." },
                { title: "Bonus Trainings", desc: "A library of goodness categorized by type to help you level up your AI operations." },
                { title: "Mozi AI", desc: "Access to Alex Hormozi's mind, 24/7. Tap into elite business strategy anytime." },
                { title: "Live Q&A Calls", desc: "Share your question on the pinned Q&A thread and I answer them live every week. Replays with time stamps are always available." }
              ].map((item, idx) => (
                <Reveal key={idx} delay={100 + (idx * 50)}>
                  <div className="p-8 border border-white/10 bg-white/[0.02] h-full hover:bg-white/[0.04] transition-colors">
                    <h4 className="font-display font-bold text-xl text-white mb-3">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 relative">
                <Reveal>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-none"></div>
                    <img 
                      src="/__mockup/images/gabriel-headshot.jpeg" 
                      alt="Gabriel Omat" 
                      className="relative z-10 w-full aspect-[4/5] object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </Reveal>
              </div>
              <div className="md:col-span-7">
                <Reveal delay={100}>
                  <h2 className="font-display text-4xl font-bold mb-8">Who's Teaching?</h2>
                </Reveal>
                <Reveal delay={200}>
                  <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                    <p>I'm Gabriel Omat and I built this lab to show coaches, consultants, and service-based business owners how to use AI in a way that actually makes a difference.</p>
                    <p>In 2021 I cut the golden handcuffs to go all in on my coaching business. By 2024 we'd generated over $1M in revenue and had a client list of over 100 high-ticket clients. Then the market shifted and that model started to break.</p>
                    <p>I'd been using AI since ChatGPT came out in 2022 and I was fascinated. Not only by what it could do, but because I understood that this was the worst it would ever be and the future of business would look completely different.</p>
                    <p>So when things started to break, I decided to change the model. Today I host a community called Futureproof - The Evolution Lab.</p>
                    <p>Instead of hiring a big team, I built my <span className="text-primary font-medium">AI Dream Team</span>. I ain't talking about a dream team who just gives me good marketing advice. I'm talking about team members who actually go out and execute on my behalf. Saving me 20+ hours a week.</p>
                    <p className="text-white font-medium text-xl mt-8 border-l-2 border-primary pl-6">If you're still using AI like it's 2023, I invite you to a whole new paradigm, inside Futureproof.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-6 bg-black/40 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">Real Results</h2>
            </Reveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah M.", role: "Business Consultant", quote: "I was spending 15 hours a week just trying to make ChatGPT write in my voice. Setting up the memory layer changed everything. My AI team now drafts proposals that sound exactly like me in 4 minutes." },
                { name: "David K.", role: "Executive Coach", quote: "I thought I needed to hire a junior copywriter and an assistant. Instead, I built the 5 layers. I'm doing the output of a 3-person team and my profit margins are the highest they've ever been." },
                { name: "Elena R.", role: "Agency Owner", quote: "The Claude Skills module alone is worth 10x the yearly membership. I've completely automated my client onboarding and weekly check-ins. It feels like I cloned my brain." }
              ].map((testimonial, idx) => (
                <Reveal key={idx} delay={idx * 150}>
                  <div className="glass-panel p-8 flex flex-col h-full relative">
                    <div className="absolute top-6 right-6 text-6xl text-primary/20 font-display font-bold leading-none">"</div>
                    <p className="text-lg text-white mb-8 flex-grow relative z-10">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Ready to build your <br/>
                <span className="text-primary">AI Business Brain & Dream Team?</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col items-center gap-6 mt-12">
                <Button size="lg" className="h-20 px-12 text-2xl bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold rounded-none box-glow transition-all hover:scale-105 duration-300">
                  Join The Lab - $47/mo
                </Button>
                <p className="text-muted-foreground font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Cancel anytime. Zero risk.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5 relative z-10 bg-background">
        <p>© {new Date().getFullYear()} Futureproof - The Evolution Lab. All rights reserved.</p>
      </footer>
    </div>
  );
}
