import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const paraVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutStory() {
  return (
    <motion.section
      className="border-hard bg-white p-6 md:p-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <img
            src="/images/g-headshot.jpeg"
            alt="Gabriel Omat"
            className="w-full md:w-64 h-64 md:h-80 object-cover object-center border-hard flex-shrink-0"
            loading="lazy"
          />
          <div className="space-y-4">
            <motion.p className="text-sm font-medium leading-relaxed" variants={paraVariants}>
              I spent 28 years in corporate leadership at one of Alaska's largest
              transportation companies. I know how big organizations move, how teams
              adopt new tools, and what it takes to make change stick at scale.
            </motion.p>
            <motion.p className="text-sm font-medium leading-relaxed" variants={paraVariants}>
              Along the way, I built a 7-figure coaching business from scratch. I
              know the climb: late nights, big wins, the feeling that you're finally
              building something real.
            </motion.p>
            <motion.p
              className="text-sm font-bold leading-relaxed text-primary"
              variants={paraVariants}
            >
              I also know what happens when it all comes apart.
            </motion.p>
          </div>
        </div>

        <div className="space-y-4">
          <motion.p className="text-sm font-medium leading-relaxed" variants={paraVariants}>
            When my business went under, I didn't lose my skills. I still knew how
            to build, sell, and serve clients. But the infrastructure was gone. I was
            starting over — and I needed a smarter way to do it.
          </motion.p>
          <motion.p className="text-sm font-medium leading-relaxed" variants={paraVariants}>
            That's where AI came in. Not the hype version. The practical kind —
            where it becomes your thinking partner, your operating system, your way
            of doing the work of 5 people when you can only afford to pay one.
          </motion.p>
          <motion.p className="text-sm font-medium leading-relaxed" variants={paraVariants}>
            I went back to corporate as a national sales rep and started rebuilding
            my business on the side. Same ambition, completely different approach. I
            built an AI-powered operating system that tracks my metrics, drafts my
            content, manages my strategy, and keeps my business moving — even when
            I'm on the road for my day job.
          </motion.p>

          <motion.div
            className="border-hard bg-foreground text-white p-6 my-6"
            variants={paraVariants}
          >
            <p className="text-sm font-bold leading-relaxed">
              Now I do two things:
            </p>
          </motion.div>

          <motion.p className="text-sm font-medium leading-relaxed" variants={paraVariants}>
            I run <strong>Futureproof — The Evolution Lab</strong>, a community
            where coaches, consultants, and service providers learn to build the same
            AI-powered systems I use every day. And I consult with organizations to
            close the AI skill gap — helping teams actually use tools like{" "}
            <strong>Claude Enterprise</strong> to transform how they work.
          </motion.p>
          <motion.p className="text-sm font-medium leading-relaxed" variants={paraVariants}>
            I've lived both sides: the solopreneur grind and the corporate machine.
            That's why I can help a one-person business build smarter AND help a
            500-person org get their teams productive with AI.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
