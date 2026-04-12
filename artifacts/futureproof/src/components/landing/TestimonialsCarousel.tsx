import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Inesha F.",
    quote:
      "If you have a business...YOU NEED TO DO THIS CHALLENGE! I setup my business workspace and I am so impressed with it. Since building it out, the level of 'on point' it is with its output far surpasses the use of a project for me...and I thought I had my project locked in. So make sure you guys JUMP IN!!!",
  },
  {
    name: "Michelle P.",
    quote:
      "Completed day 01 and I'm beyond happy! Finally, something that actually helps me spend the wee time I have working and not constantly catching up!",
  },
  {
    name: "Paula R.",
    quote:
      "Holy Smokes!! I joined for the 5-day challenge - built my AI brain, and I can't believe all I have learned and accomplished for my business in the last week!!",
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="md:col-span-2 border-hard text-white p-6 md:p-10 flex flex-col bg-foreground">
      <h2 className="font-anton text-5xl mb-8 leading-none pb-4 text-primary border-b-2 border-white/20">
        REAL RESULTS
      </h2>

      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={setApi}
        className="w-full flex-1"
      >
        <CarouselContent>
          {testimonials.map((testimonial, idx) => (
            <CarouselItem
              key={idx}
              className="basis-full md:basis-1/2 pb-3 pr-3"
            >
              <div className="relative h-full">
                {/* Offset shadow card */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary" />
                {/* Main card */}
                <motion.div
                  className="relative p-6 md:p-8 flex flex-col justify-between h-full bg-foreground border-2 border-white/30 transition-colors duration-200 hover:border-primary"
                  whileHover={{ x: 2, y: 2 }}
                >
                  <p className="text-base font-bold mb-4 uppercase leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-2 mt-auto border-t-2 border-primary">
                    <p className="font-anton text-xl tracking-wide">
                      {testimonial.name}
                    </p>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-4">
          <CarouselPrevious className="static translate-y-0 rounded-none border-hard bg-primary text-white hover:bg-primary hover:text-white" />
          <CarouselNext className="static translate-y-0 rounded-none border-hard bg-primary text-white hover:bg-primary hover:text-white" />
        </div>
      </Carousel>
    </div>
  );
}
