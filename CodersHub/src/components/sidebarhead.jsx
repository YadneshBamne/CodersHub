// src/components/sidebarhead.jsx
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SideHeader({ searchQuery, setSearchQuery }) {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold ml-4 text-primary">Notes Section</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 w-[200px] lg:w-[300px] bg-background text-foreground"
            />
          </div>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}