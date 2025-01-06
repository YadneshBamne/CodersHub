import React from "react";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar";
import { SideHeader } from "@/components/sidebarhead";

function AboutUs() {

  const sampleNotes = [
    { id: 1, title: 'Arrays', text: 'Arrays are contiguous memory locations...', date: '2023-05-01' },
    { id: 2, title: 'Linked Lists', text: 'Linked Lists are linear data structures...', date: '2023-05-03' },
    { id: 3, title: 'Stacks', text: 'Stacks follow the Last In First Out (LIFO) principle...', date: '2023-05-05' },
    { id: 4, title: 'Queues', text: 'Queues follow the First In First Out (FIFO) principle...', date: '2023-05-07' },
    { id: 5, title: 'Trees', text: 'Trees are hierarchical data structures...', date: '2023-05-09' },
    { id: 6, title: 'Graphs', text: 'Graphs are non-linear data structures...', date: '2023-05-11' },
  ];
  return (
    <>
    <SidebarProvider>
      <Sidebar/>
    <div className=" flex flex-col items-center justify-center h-full">
      
      <h1 className="text-4xl font-bold text-black dark:text-white">
        About Us
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Learn more about our mission and values.
      </p>
    </div>
    </SidebarProvider>
    </>
  );
}

export default AboutUs;
