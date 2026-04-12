import { motion } from "framer-motion";

export default function AboutCreator() {
  return (
    <motion.div
      className="md:col-span-1 border-hard bg-white flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/images/gabriel-headshot.jpeg"
        alt="Gabriel Omat"
        className="w-full h-96 object-cover object-center border-b-4 border-foreground"
        loading="lazy"
        decoding="async"
      />
      <div className="p-6">
        <h2 className="font-anton text-4xl mb-4 leading-none uppercase">
          Who's Teaching?
        </h2>
        <div className="text-xs font-bold space-y-3">
          <p>
            I'm Gabriel Omat and I built this lab to show coaches, consultants,
            and service-based business owners how to use AI in a way that
            actually makes a difference.
          </p>
          <p>
            In 2021 I cut the golden handcuffs to go all in on my coaching
            business. By 2024 we'd generated over $1M in revenue and had a
            client list of over 100 high-ticket clients. Then the market shifted.
            So I made a pivot. I re-imagined my business, and created a
            stress-free model, while still delivering mad value.
          </p>
          <p>
            Instead of hiring a big team, I built my AI Dream Team. Not just
            team members who give good advice — team members who actually go out
            and execute on my behalf. Saving me 20+ hours a week.
          </p>
          <p className="text-white p-3 uppercase bg-secondary">
            If you're still using AI like it's 2023, I invite you to a whole new
            paradigm, inside Futureproof.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
