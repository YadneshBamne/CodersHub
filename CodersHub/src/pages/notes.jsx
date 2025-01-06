// src/pages/notes.jsx
import React, { useState } from 'react';
import { NoteCard } from '@/components/NoteCard';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from '@/components/Sidebar';
import { SideHeader } from '@/components/sidebarhead';

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sampleNotes = [
    { id: 1, title: 'Arrays', text: 'Arrays are contiguous memory locations...', date: '2023-05-01' },
    { id: 2, title: 'Linked Lists', text: 'Linked Lists are linear data structures...', date: '2023-05-03' },
    { id: 3, title: 'Stacks', text: 'Stacks follow the Last In First Out (LIFO) principle...', date: '2023-05-05' },
    { id: 4, title: 'Queues', text: 'Queues follow the First In First Out (FIFO) principle...', date: '2023-05-07' },
    { id: 5, title: 'Trees', text: 'Trees are hierarchical data structures...', date: '2023-05-09' },
    { id: 6, title: 'Graphs', text: 'Graphs are non-linear data structures...', date: '2023-05-11' },
  ];

  // Filter notes based on search query
  const filteredNotes = sampleNotes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <SideHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main className="flex-1 p-6 overflow-auto">
            <h1 className="text-3xl font-bold mb-6 text-primary">Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <NoteCard key={note.id} {...note} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Notes;