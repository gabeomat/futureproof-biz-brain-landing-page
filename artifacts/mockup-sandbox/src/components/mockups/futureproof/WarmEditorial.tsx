import React from "react";
import { Button } from "@/components/ui/button";

export default function WarmEditorial() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2825] font-editorial-body selection:bg-[#C45E3A]/20 selection:text-[#C45E3A]">
      {/* Navigation */}
      <nav className="w-full border-b border-[#2C2825]/10 bg-[#FAF7F2]">
        <div className="container mx-auto max-w-3xl px-6 h-16 flex items-center justify-between">
          <div className="font-editorial font-bold text-xl tracking-tight text-[#2C2825]">
            FUTUREPROOF.
          </div>
          <Button variant="ghost" className="text-[#C45E3A] hover:text-[#A04A2C] hover:bg-[#C45E3A]/10 font-medium rounded-none px-4">
            Join The Lab
          </Button>
        </div>
      </nav>

      <main className="pt-12 pb-24">
        
        {/* Hero Section */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-3xl">
            <div className="text-[#C45E3A] text-sm font-semibold tracking-widest uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C45E3A]"></span>
              Futureproof
            </div>
            
            <h1 className="font-editorial text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight mb-6 text-[#2C2825]">
              The Evolution Lab.
            </h1>
            
            <p className="text-xl md:text-2xl font-editorial-body font-light text-[#4A4541] mb-8 leading-snug">
              You don't need more AI tools. You need one system that runs your business.
            </p>
            
            <p className="text-lg text-[#4A4541] mb-10 leading-relaxed">
              Build an AI Business Brain, hire a Dream Team, and do 5 jobs by yourself. No complex tech background. Just a smart way to work.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-b border-[#2C2825]/10 py-6">
              <Button size="lg" className="w-full sm:w-auto px-8 bg-[#2C2825] text-[#FAF7F2] hover:bg-[#1A1715] font-medium rounded-none h-14 text-base">
                Join The Lab Now
              </Button>
              <p className="text-sm text-[#6B655F] italic">
                $47/month. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-6 mb-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-editorial text-3xl md:text-4xl font-normal mb-8 text-[#2C2825]">
              The "I feel behind" moment.
            </h2>
            
            <div className="prose prose-lg prose-p:leading-relaxed prose-p:text-[#4A4541] max-w-none font-editorial-body">
              <p className="text-xl font-medium text-[#2C2825]">
                You're using AI… but it doesn't feel like leverage.
              </p>
              <p>
                It feels like more tabs. More prompts. More starting over. You've got 87 chat threads open. Every new one = re-explaining your business. Your audience. Your offers. Your voice.
              </p>
              <p className="font-medium text-[#C45E3A]">
                So nothing compounds. Nothing sticks.
              </p>
              <p>
                Maybe you upgraded to Custom GPTs. Better… but still broken. Because they're static. Your "AI CMO" still thinks it's January. Old pricing. Old offers. Old messaging. Every change in your business = manual updates. Docs, prompts, instructions… again and again.
              </p>
              <p className="font-medium text-[#C45E3A]">
                So instead of saving time, you're maintaining AI.
              </p>
              <p>
                And then there's the tools. New one every week. Everyone chasing the next shiny thing. But tools don't fix this. Because the problem isn't access to AI. It's that you don't have a system.
              </p>
              
              <div className="bg-[#F0EBE1] p-8 my-10 border-l-2 border-[#C45E3A]">
                <p className="font-medium text-[#2C2825] m-0 mb-4">A system that:</p>
                <ul className="list-disc pl-5 space-y-2 m-0 text-[#4A4541] marker:text-[#C45E3A]">
                  <li>Knows your business</li>
                  <li>Remembers what matters</li>
                  <li>Evolves as you evolve</li>
                  <li>And actually does work for you</li>
                </ul>
              </div>
              
              <p className="text-xl italic text-[#2C2825] border-t border-[#2C2825]/10 pt-8 mt-8">
                Right now, you're chatting with AI. The people pulling ahead have a real system. They built something that works with them. Every day.
              </p>
            </div>
          </div>
        </section>

        {/* The 5 Layers Section */}
        <section className="px-6 mb-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-editorial text-3xl md:text-4xl font-normal mb-8 text-[#2C2825]">
              The 5 Layers of an AI-Powered Business.
            </h2>
            
            <div className="prose prose-lg prose-p:leading-relaxed prose-p:text-[#4A4541] max-w-none font-editorial-body mb-12">
              <p>
                Here's the part most people miss: Tools will change. They always do. New models. New apps. New features every week.
              </p>
              <p>
                If you build your business around tools… you'll always feel behind. But this? This doesn't change. These 5 layers are the structure underneath everything. No matter what happens to ChatGPT, Claude, Gemini, or whatever comes next… this is how an AI-powered business actually works.
              </p>
              <p>
                What we're building here is a wrapper around the models. Not just using AI… but creating a system that:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#4A4541] marker:text-[#C45E3A]">
                <li>plugs into any model</li>
                <li>evolves as tools evolve</li>
                <li>and keeps your business consistent underneath it all</li>
              </ul>
              <p className="italic font-medium text-[#2C2825]">
                Right now, the best place I've found to build this is inside Claude Co-work.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  num: "Chapter 01",
                  title: "The AI Engine",
                  desc: "The AI model itself. Pick your favorite. This is the raw horsepower, but without the right system, a brilliant engine sits idle. Today we use Claude because it supports the rest of the layers beautifully."
                },
                {
                  num: "Chapter 02",
                  title: "Context",
                  desc: "Where most people stop. This is the uploaded documents, the info you feed it. But static context isn't enough to pivot your messaging when things change."
                },
                {
                  num: "Chapter 03",
                  title: "Memory",
                  desc: "Your single source of truth. This layer lives, evolves, and changes with your business. It remembers past launches so you don't have to repeat yourself."
                },
                {
                  num: "Chapter 04",
                  title: "Execution & Skills",
                  desc: "Not a generic list of skills. Your specific workflows. Imagine choosing a hook and having a full YouTube script or carousel post generated while you sleep."
                },
                {
                  num: "Chapter 05",
                  title: "Automation",
                  desc: "Scheduled tasks. An automated pulse hits your inbox at 5 AM. Metric analysis and drafted check-ins prepared for you before you even open your laptop."
                }
              ].map((layer, idx) => (
                <div key={idx} className="border-t border-[#2C2825]/10 pt-6">
                  <div className="text-[#C45E3A] text-sm font-semibold tracking-widest uppercase mb-3">
                    {layer.num}
                  </div>
                  <h3 className="font-editorial text-2xl font-medium text-[#2C2825] mb-3">
                    {layer.title}
                  </h3>
                  <p className="text-[#4A4541] text-lg leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="px-6 mb-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-editorial text-3xl md:text-4xl font-normal mb-8 text-[#2C2825] border-b border-[#2C2825]/10 pb-6">
              What's Inside The Lab
            </h2>

            <div className="mb-12 bg-white p-2 shadow-sm border border-[#2C2825]/5">
              <img 
                src="/__mockup/images/classroom.png" 
                alt="Inside the lab" 
                className="w-full h-auto object-cover grayscale-[20%] sepia-[10%] opacity-90"
              />
              <p className="text-xs text-center text-[#6B655F] mt-2 italic font-editorial">
                Inside the Futureproof community
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                { title: "Plug & Play Custom GPTs", desc: "Not links to custom GPTs. Here you get the guts to make them your own. You control the outputs." },
                { title: "Plug & Play Claude Skills", desc: "Claude Skills are a total game-changer. They are reusable, purpose-built AI capabilities." },
                { title: "Plug & Play Web Apps", desc: "Useful web apps and Claude Artifacts done for you. Import vibe-coded projects immediately." },
                { title: "Bonus Trainings", desc: "A library of goodness categorized by type to help you level up your AI operations." },
                { title: "Mozi AI", desc: "Access to Alex Hormozi's mind, 24/7. Tap into elite business strategy anytime." },
                { title: "Live Q&A Calls", desc: "Share your question on the pinned Q&A thread and I answer them live every week. Replays with time stamps are always available." }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <h4 className="font-editorial font-medium text-xl text-[#2C2825] mb-2">{item.title}</h4>
                  <p className="text-[#4A4541] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 mb-24 bg-[#F0EBE1] py-16 border-y border-[#2C2825]/10">
          <div className="container mx-auto max-w-3xl">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-1/3 shrink-0">
                <div className="bg-white p-2 shadow-sm rotate-[-2deg]">
                  <img 
                    src="/__mockup/images/gabriel-headshot.jpeg" 
                    alt="Gabriel Omat" 
                    className="w-full aspect-[4/5] object-cover grayscale sepia-[20%] opacity-90"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="font-editorial text-3xl font-normal mb-6 text-[#2C2825]">
                  Who's Teaching?
                </h2>
                <div className="prose prose-lg prose-p:leading-relaxed prose-p:text-[#4A4541] font-editorial-body">
                  <p>
                    I'm Gabriel Omat and I built this lab to show coaches, consultants, and service-based business owners how to use AI in a way that actually makes a difference.
                  </p>
                  <p>
                    In 2021 I cut the golden handcuffs to go all in on my coaching business. By 2024 we'd generated over $1M in revenue and had a client list of over 100 high-ticket clients. Then the market shifted and that model started to break.
                  </p>
                  <p>
                    I'd been using AI since ChatGPT came out in 2022 and I was fascinated. Not only by what it could do, but because I understood that this was the worst it would ever be and the future of business would look completely different.
                  </p>
                  <p>
                    So when things started to break, I decided to change the model. Today I host a community called Futureproof - The Evolution Lab.
                  </p>
                  <p>
                    Instead of hiring a big team, I built my <strong>AI Dream Team</strong>. I ain't talking about a dream team who just gives me good marketing advice. I'm talking about team members who actually go out and execute on my behalf. Saving me 20+ hours a week.
                  </p>
                  <p className="font-editorial text-xl text-[#2C2825] italic mt-6 border-l-2 border-[#C45E3A] pl-4">
                    If you're still using AI like it's 2023, I invite you to a whole new paradigm, inside Futureproof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 mb-24">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-editorial text-3xl md:text-4xl font-normal text-center mb-12 text-[#2C2825]">
              Real Results
            </h2>
            
            <div className="space-y-8">
              {[
                { name: "Sarah M.", role: "Business Consultant", quote: "I was spending 15 hours a week just trying to make ChatGPT write in my voice. Setting up the memory layer changed everything. My AI team now drafts proposals that sound exactly like me in 4 minutes." },
                { name: "David K.", role: "Executive Coach", quote: "I thought I needed to hire a junior copywriter and an assistant. Instead, I built the 5 layers. I'm doing the output of a 3-person team and my profit margins are the highest they've ever been." },
                { name: "Elena R.", role: "Agency Owner", quote: "The Claude Skills module alone is worth 10x the yearly membership. I've completely automated my client onboarding and weekly check-ins. It feels like I cloned my brain." }
              ].map((testimonial, idx) => (
                <div key={idx} className="flex gap-6 items-start border-b border-[#2C2825]/10 pb-8 last:border-0 last:pb-0">
                  <div className="text-5xl font-editorial text-[#C45E3A] leading-none pt-2">"</div>
                  <div>
                    <p className="text-lg text-[#4A4541] mb-4 italic font-editorial leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className="font-medium text-[#2C2825]">{testimonial.name}</p>
                      <p className="text-sm text-[#6B655F] uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6">
          <div className="container mx-auto max-w-3xl text-center border-t-2 border-[#2C2825] pt-16">
            <h2 className="font-editorial text-4xl md:text-5xl font-normal mb-8 text-[#2C2825]">
              Ready to build your <br/>
              <span className="italic text-[#C45E3A]">AI Business Brain & Dream Team?</span>
            </h2>
            
            <div className="flex flex-col items-center gap-4 mt-10">
              <Button size="lg" className="px-10 py-7 text-lg bg-[#2C2825] text-[#FAF7F2] hover:bg-[#1A1715] font-medium rounded-none">
                Join The Lab - $47/mo
              </Button>
              <p className="text-[#6B655F] italic font-editorial text-lg mt-2">
                Cancel anytime. Zero risk.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-10 text-center text-[#6B655F] text-sm border-t border-[#2C2825]/10">
        <p className="font-editorial italic">
          © {new Date().getFullYear()} Futureproof - The Evolution Lab. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
