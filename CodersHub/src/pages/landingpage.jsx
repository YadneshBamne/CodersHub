import React from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "../data/faq.json";
import { Link } from "react-router-dom";
import Header from "@/components/header";
import { TextAnimate } from "@/components/ui/text-animate";


function LandingPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col p-8 mt-40 items-center justify-center text-center h-full">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600 text-7xl font-bold">
          Welcome To The{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Coders Club
          </span>
        </h1>
        <Link to="/notes">
          <InteractiveHoverButton className=" mt-12 shadow-2xl"></InteractiveHoverButton>
        </Link>
      </div>
      <section className="p-8 mt-72">
        <Accordion className="text-left" type="single" collapsible>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
           
        </Accordion>
      </section>
    </>
  );
}

export default LandingPage;
