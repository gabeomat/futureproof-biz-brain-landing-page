import { Zap, CheckSquare, Brain, Layers, Database, Workflow, Play } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="manifesto-root min-h-screen p-4 md:p-8">
      {/* Top Header */}
      <header className="border-hard border-b-[8px] flex justify-between items-center p-4 bg-white mb-8">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8" style={{ color: "#2a2e30", fill: "#2a2e30" }} />
          <span className="font-anton text-3xl tracking-wide mt-1">FUTUREPROOF</span>
        </div>
        <a
          href="#join"
          className="font-bold text-sm md:text-base border-hard px-4 py-2 bg-accent text-white uppercase tracking-tight hover:opacity-90 transition-opacity"
        >
          Join The Lab
        </a>
      </header>
      <main className="max-w-7xl mx-auto space-y-8">

        {/* Hero + Problem Side-by-Side */}
        <section className="border-hard bg-white flex flex-col md:flex-row">
          <div className="p-6 md:p-12 md:w-2/3 border-b-2 md:border-b-0 md:border-r-2" style={{ borderColor: "#2a2e30" }}>
            <div
              className="inline-block border-hard px-3 py-1 text-white text-xs font-bold uppercase mb-6"
              style={{ backgroundColor: "#345c72" }}
            >
              Futureproof Vol. 1
            </div>
            <h1 className="font-anton text-6xl md:text-8xl leading-[0.85] mb-6">
              THE EVOLUTION <br /> <span style={{ color: "#f46530" }}>LAB.</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-2xl leading-tight mb-4">
              You don't need more AI tools. You need one system that runs your business.
            </p>
            <p className="text-base md:text-lg mb-8 max-w-2xl leading-snug">
              Build an AI Business Brain, hire a Dream Team, and do 5 jobs by yourself. No complex tech background. Just a smart way to work.
            </p>
            <div id="join" className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://futureprooflab.com"
                className="border-hard text-white font-anton text-2xl px-8 py-4 uppercase tracking-widest hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#f46530" }}
              >
                Join The Lab Now — $47/mo
              </a>
              <span className="text-xs font-bold uppercase tracking-tight">Cancel anytime.</span>
            </div>
          </div>
          <div className="p-6 md:p-12 md:w-1/3 text-white flex flex-col justify-center bg-[#2a2e30]" style={{ backgroundColor: "#345c72" }}>
            <h2 className="font-anton text-4xl mb-6 leading-none" style={{ color: "#f46530" }}>
              THE "I FEEL BEHIND" MOMENT.
            </h2>
            <div className="space-y-4 text-sm font-bold leading-tight">
              <p>You're using AI… but it doesn't feel like leverage.</p>
              <p>It feels more like going down rabbit holes that waste your time.</p>
              <p>You've got 87 chat threads in ChatGPT. Every new one = re-explaining your business. Your audience. Your offers. Your voice.</p>
              <p className="uppercase text-base" style={{ color: "#f46530" }}>So nothing compounds. Nothing sticks.</p>
              <p>Maybe you upgraded to Custom GPTs. Better… but still broken. Because they're static.</p>
              <p>Your "AI CMO" still thinks it's January. Old pricing. Old offers. Old messaging.</p>
              <p>Every change in your business = manual updates. Docs, prompts, instructions… again and again.</p>
              <p className="uppercase text-base" style={{ color: "#f46530" }}>So instead of saving time, you're maintaining AI.</p>
            </div>
          </div>
        </section>

        {/* System Definition + 5 Layers Grid */}
        <section className="grid md:grid-cols-2 gap-8">

          {/* System Definition */}
          <div className="border-hard bg-white p-6 md:p-10">
            <h2
              className="font-anton text-4xl mb-6 leading-none pb-4"
              style={{ borderBottom: "4px solid #2a2e30" }}
            >
              THE PROBLEM ISN'T ACCESS TO AI. <br /> IT'S THAT YOU DON'T HAVE A SYSTEM.
            </h2>
            <div className="text-sm font-bold leading-relaxed mb-8 space-y-4">
              <p>And then there's the tools. New one every week. Everyone chasing the next shiny thing. But tools don't fix this.</p>
              <p className="text-white p-4 uppercase" style={{ backgroundColor: "#345c72" }}>
                A system that: <br />
                <span className="flex items-center gap-2 mt-2">
                  <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: "#f46530" }} /> Knows your business
                </span>
                <span className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: "#f46530" }} /> Remembers what matters
                </span>
                <span className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: "#f46530" }} /> Evolves as you evolve
                </span>
                <span className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: "#f46530" }} /> And actually does work for you
                </span>
              </p>
              <p className="text-lg uppercase">
                Right now, you're chatting with AI. The people pulling ahead have a real system. They built something that works with them. Every day.
              </p>
            </div>
            <h3
              className="font-anton text-3xl mb-4 pt-6"
              style={{ borderTop: "2px solid #2a2e30", color: "#f46530" }}
            >
              WHAT'S INSIDE THE LAB
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Plug & Play Custom GPTs", desc: "Not links to custom GPTs. Here you get the guts to make them your own. You control the outputs." },
                { title: "Plug & Play Claude Skills", desc: "Claude Skills are a total game-changer. They are reusable, purpose-built AI capabilities." },
                { title: "Plug & Play Web Apps", desc: "Useful web apps and Claude Artifacts done for you. Import vibe-coded projects immediately." },
                { title: "Bonus Trainings", desc: "A library of goodness categorized by type to help you level up your AI operations." },
                { title: "Mozi AI", desc: "Access to Alex Hormozi's mind, 24/7. Tap into elite business strategy anytime." },
                { title: "Live Q&A Calls", desc: "Share your question on the pinned Q&A thread and I answer them live every week. Replays with time stamps are always available." },
              ].map((item, idx) => (
                <div key={idx} className="border-hard p-4" style={{ backgroundColor: "#d4edf4" }}>
                  <h4 className="font-bold uppercase text-sm mb-1">{item.title}</h4>
                  <p className="text-xs leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The 5 Layers */}
          <div className="border-hard bg-white p-0 flex flex-col">
            <div
              className="p-6 md:p-10 text-white"
              style={{ borderBottom: "4px solid #2a2e30", backgroundColor: "#f46530" }}
            >
              <h2 className="font-anton text-5xl leading-none mb-4">
                THE 5 LAYERS OF AN AI-POWERED BUSINESS
              </h2>
              <div className="text-sm font-bold leading-tight space-y-2">
                <p>Here's the part most people miss: Tools will change. They always do. New models. New apps. New features every week.</p>
                <p>If you build your business around tools… you'll always feel behind. But this? This doesn't change. These 5 layers are the structure underneath everything.</p>
                <p>No matter what happens to ChatGPT, Claude, Gemini, or whatever comes next… this is how an AI-powered business actually works.</p>
                <p className="mt-4 pt-4 uppercase" style={{ borderTop: "2px solid rgba(255,255,255,0.3)" }}>
                  What we're building here is a wrapper around the models. Not just using AI… but creating a system that: plugs into any model, evolves as tools evolve, and keeps your business consistent underneath it all.
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              {[
                { num: "01", title: "The AI Engine", icon: <Brain className="w-5 h-5" />, desc: "The AI model itself. Pick your favorite. This is the raw horsepower, but without the right system, a brilliant engine sits idle. Today we use Claude because it supports the rest of the layers beautifully." },
                { num: "02", title: "Context", icon: <Layers className="w-5 h-5" />, desc: "Where most people stop. This is the uploaded documents, the info you feed it. But static context isn't enough to pivot your messaging when things change." },
                { num: "03", title: "Memory", icon: <Database className="w-5 h-5" />, desc: "Your single source of truth. This layer lives, evolves, and changes with your business. It remembers past launches so you don't have to repeat yourself." },
                { num: "04", title: "Execution & Skills", icon: <Workflow className="w-5 h-5" />, desc: "Not a generic list of skills. Your specific workflows. Imagine choosing a hook and having a full YouTube script or carousel post generated while you sleep." },
                { num: "05", title: "Automation", icon: <Play className="w-5 h-5" />, desc: "Scheduled tasks. An automated pulse hits your inbox at 5 AM. Metric analysis and drafted check-ins prepared for you before you even open your laptop." },
              ].map((layer, idx) => (
                <div key={idx} className="flex last:border-b-0 bg-white" style={{ borderBottom: "2px solid #2a2e30" }}>
                  <div
                    className="w-16 md:w-24 flex flex-col items-center justify-center font-anton text-3xl md:text-4xl"
                    style={{ borderRight: "2px solid #2a2e30", backgroundColor: "#d4edf4", color: "#2a2e30" }}
                  >
                    {layer.num}
                  </div>
                  <div className="flex-1 p-4 md:p-6">
                    <h3 className="font-anton text-2xl uppercase flex items-center gap-2 mb-2">
                      {layer.icon} {layer.title}
                    </h3>
                    <p className="text-sm font-bold leading-snug">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Classroom Image */}
        <section className="border-hard overflow-hidden">
          <img
            src="/images/classroom.png"
            alt="Inside The Evolution Lab"
            className="w-full object-cover max-h-[480px]"
          />
        </section>

        {/* About + Results */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 border-hard bg-white flex flex-col">
            <img
              src="/images/gabriel-headshot.jpeg"
              alt="Gabriel Omat"
              className="w-full h-72 object-cover object-top"
              style={{ borderBottom: "4px solid #2a2e30" }}
            />
            <div className="p-6">
              <h2 className="font-anton text-4xl mb-4 leading-none uppercase">Who's Teaching?</h2>
              <div className="text-xs font-bold space-y-3">
                <p>I'm Gabriel Omat and I built this lab to show coaches, consultants, and service-based business owners how to use AI in a way that actually makes a difference.</p>
                <p>In 2021 I cut the golden handcuffs to go all in on my coaching business. By 2024 we'd generated over $1M in revenue and had a client list of over 100 high-ticket clients. Then the market shifted.</p>
                <p>Instead of hiring a big team, I built my AI Dream Team. Not just team members who give good advice — team members who actually go out and execute on my behalf. Saving me 20+ hours a week.</p>
                <p className="text-white p-3 uppercase" style={{ backgroundColor: "#345c72" }}>
                  If you're still using AI like it's 2023, I invite you to a whole new paradigm, inside Futureproof.
                </p>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-2 border-hard text-white p-6 md:p-10 flex flex-col"
            style={{ backgroundColor: "#2a2e30" }}
          >
            <h2
              className="font-anton text-5xl mb-8 leading-none pb-4"
              style={{ color: "#f46530", borderBottom: "2px solid rgba(255,255,255,0.2)" }}
            >
              REAL RESULTS
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 flex-1">
              {[
                { name: "Sarah M.", role: "Business Consultant", quote: "I was spending 15 hours a week just trying to make ChatGPT write in my voice. Setting up the memory layer changed everything. My AI team now drafts proposals that sound exactly like me in 4 minutes." },
                { name: "David K.", role: "Executive Coach", quote: "I thought I needed to hire a junior copywriter and an assistant. Instead, I built the 5 layers. I'm doing the output of a 3-person team and my profit margins are the highest they've ever been." },
                { name: "Elena R.", role: "Agency Owner", quote: "The Claude Skills module alone is worth 10x the yearly membership. I've completely automated my client onboarding and weekly check-ins. It feels like I cloned my brain." },
              ].map((testimonial, idx) => (
                <div key={idx} className="p-4 flex flex-col justify-between" style={{ border: "2px solid rgba(255,255,255,0.3)" }}>
                  <p className="text-sm font-bold mb-4 uppercase leading-tight">"{testimonial.quote}"</p>
                  <div className="pt-2 mt-auto" style={{ borderTop: "2px solid #f46530" }}>
                    <p className="font-anton text-xl tracking-wide">{testimonial.name}</p>
                    <p className="text-xs uppercase font-bold" style={{ color: "#ff9e7a" }}>{testimonial.role}</p>
                  </div>
                </div>
              ))}

              <div
                className="p-4 flex flex-col justify-center items-center text-center"
                style={{ border: "2px solid #f46530", backgroundColor: "#f46530" }}
              >
                <h3 className="font-anton text-3xl leading-none mb-2 text-white">
                  READY TO BUILD YOUR AI BRAIN?
                </h3>
                <a
                  href="#join"
                  className="border-hard text-white font-anton text-xl px-4 py-3 uppercase tracking-widest w-full mt-4 text-center hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#2a2e30" }}
                >
                  Join The Lab - $47/mo
                </a>
                <p className="text-white/80 text-xs font-bold uppercase mt-3">Cancel anytime. Zero risk.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-hard bg-white p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" style={{ color: "#f46530" }} />
            <span className="font-anton text-xl tracking-wide">FUTUREPROOF</span>
          </div>
          <p className="text-xs font-bold uppercase" style={{ color: "#345c72" }}>
            The Evolution Lab &mdash; $47/month &mdash; Cancel anytime
          </p>
        </footer>

      </main>
      <style>{`
        .manifesto-root {
          font-family: 'Space Mono', monospace;
          background-color: #ffffff;
          color: #2a2e30;
        }
        .font-anton {
          font-family: 'Anton', sans-serif;
          text-transform: uppercase;
        }
        .border-hard {
          border: 2px solid #2a2e30;
        }
        .bg-accent {
          background-color: #f46530;
        }
      `}</style>
    </div>
  );
}
