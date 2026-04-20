import { motion } from "framer-motion";
import { Link } from "wouter";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const paraVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutStory() {
  return (
    <motion.section
      className="on-cream py-20 md:py-28 px-2 md:px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-4xl mx-auto">
        <span className="eyebrow mb-6 text-ink-soft">
          <span className="rule-coral" aria-hidden />
          The Story
        </span>
        <h2 className="display-sans text-4xl md:text-5xl leading-[0.95] mb-12">
          I&rsquo;m Gabriel Omat. <em>Multifaceted human being</em> &mdash; just like you.
        </h2>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 mb-14">
          <div className="relative w-full md:w-72">
            <img
              src="/images/g-headshot.jpeg"
              alt="Gabriel Omat"
              className="w-full h-80 md:h-[22rem] object-cover object-center rounded-[1.25rem] border border-ink/15"
              loading="lazy"
            />
            <span className="absolute -bottom-3 left-4 bg-cream px-3 py-1 font-serif italic text-ink text-sm">
              Gabriel, 2026
            </span>
          </div>

          <div className="space-y-6 text-ink">
            <motion.p className="text-base md:text-lg leading-relaxed" variants={paraVariants}>
              I spent 28 years in corporate. Cut the golden handcuffs in November
              2021 to go all-in on my own business.
            </motion.p>
            <motion.p className="text-base md:text-lg leading-relaxed" variants={paraVariants}>
              Over the next 3 years, I built{" "}
              <strong className="font-semibold text-anchor">Energetic Alignment Academy</strong>{" "}
              to 7 figures. Then the market shifted. What was working stopped
              working, and the whole thing came apart.
            </motion.p>
            <motion.p
              className="font-serif italic text-xl md:text-2xl leading-snug text-coral"
              variants={paraVariants}
            >
              That&rsquo;s when I knew I had to do things differently.
            </motion.p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <motion.p
            className="font-serif italic text-2xl md:text-3xl leading-snug text-anchor"
            variants={paraVariants}
          >
            Today I run a stress-free business with just me and AI as my
            business partner.
          </motion.p>

          <motion.p className="text-base md:text-lg leading-relaxed" variants={paraVariants}>
            I help business owners use AI to get their time back, sharpen their
            creativity, and level up how they deliver to clients &mdash; so they
            can spend more of their day doing the work they actually love.
          </motion.p>

          <motion.p className="text-base md:text-lg leading-relaxed" variants={paraVariants}>
            To make that possible, I built{" "}
            <strong className="font-semibold text-anchor">The Living Workspace</strong>.
            Your business brain. The only operating system that evolves as fast
            as your business does.
          </motion.p>

          <motion.figure
            className="on-anchor bg-anchor text-cream rounded-[1.5rem] px-8 md:px-12 py-10 md:py-14 my-10"
            variants={paraVariants}
          >
            <span className="eyebrow text-cream/80 mb-5">
              <span className="rule-coral" aria-hidden />
              For the Record
            </span>
            <blockquote className="display-sans text-3xl md:text-4xl leading-[1.05]">
              There&rsquo;s <em>nothing else</em> like it.
            </blockquote>
          </motion.figure>

          <motion.p className="text-base md:text-lg leading-relaxed" variants={paraVariants}>
            It&rsquo;s changing the way people work.
          </motion.p>

          <motion.div variants={paraVariants} className="pt-6">
            <span className="eyebrow mb-4 text-ink-soft">
              <span className="rule-coral" aria-hidden />
              If you&rsquo;re a coach, consultant, or service provider
            </span>
            <h3 className="display-sans text-2xl md:text-[1.75rem] leading-tight mb-4 text-anchor">
              Cut the noise. <em>Move the needle.</em>
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-5">
              If it feels like AI moves fast and there&rsquo;s a new shiny
              object every week, I get it. That&rsquo;s exactly the world{" "}
              <strong className="font-semibold text-anchor">Futureproof</strong>{" "}
              was built for. It&rsquo;s where we cut the noise and focus on
              what actually moves the needle in your business.
            </p>
            <Link
              href="/futureproof"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-anchor hover:text-coral transition-colors"
            >
              <span className="rule-coral" aria-hidden />
              Come join us
              <span aria-hidden>&rarr;</span>
            </Link>
          </motion.div>

          <motion.div variants={paraVariants} className="pt-10">
            <span className="eyebrow mb-4 text-ink-soft">
              <span className="rule-coral" aria-hidden />
              For enterprises
            </span>
            <h3 className="display-sans text-2xl md:text-[1.75rem] leading-tight mb-4 text-anchor">
              Real structure. <em>Real adoption.</em>
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-5">
              I also bring AI into teams. If your people are stuck in the
              sloppy, random-prompt stage and need real structure around how
              they use these tools &mdash; that&rsquo;s a conversation I love
              having.
            </p>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-anchor hover:text-coral transition-colors"
            >
              <span className="rule-coral" aria-hidden />
              Send me a note
              <span aria-hidden>&rarr;</span>
            </Link>
          </motion.div>

          <motion.p
            className="pt-10 font-serif italic text-2xl text-anchor"
            variants={paraVariants}
          >
            ~ Gabriel
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
