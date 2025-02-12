// src/pages/notes.jsx
import React, { useState } from 'react';
import NoteCard from '@/components/NoteCard';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from '@/components/Sidebar';
import { SideHeader } from '@/components/sidebarhead';
import ResourcesCard from '@/components/ResourcesCard';

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      description:
        "Hooks let you use state and other React features without writing a class. They make your code cleaner and simpler.",
      topic: {
        topic_logo_url: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
      },
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      description:
        "ES6 introduced new features such as arrow functions, classes, template literals, and destructuring assignments.",
      topic: {
        topic_logo_url: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      },
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      description:
        "CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web.",
      topic: {
        topic_logo_url: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
      },
    },
  ];
  const handleBlogSaved = () => {
    console.log("Blog saved or deleted!");
  };

  // Filter notes based on search query

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <SideHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main className="flex-1 p-6 overflow-auto">
            <h1 className="text-3xl font-bold mb-6 text-primary">Resources</h1>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <ResourcesCard
          key={blog.id}
          blog={blog}
          isMyBlog={false}
          savedInit={false}
          onBlogSaved={handleBlogSaved}
        />
      ))}
    </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Notes;