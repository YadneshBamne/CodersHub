import React from 'react';
import { ClapperboardIcon as ChalkboardTeacher, Book, Cog, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from "@/components/ui/sidebar"
import { Link } from 'react-router-dom';
import { SignOutButton } from '@clerk/clerk-react';

export function Sidebar() {
  const { state } = useSidebar();

  return (
    <ShadSidebar className="bg-card">
      <SidebarHeader>
        <h2 className="text-xl font-bold text-primary p-4">Data Structures</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to='/'>
              <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-accent">
                <ChalkboardTeacher className="mr-2 h-4 w-4" />
                Home
              </Button>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to='/notes'>
              <Button variant="ghost" className="w-full justify-start bg-accent text-primary">
                <Book className="mr-2 h-4 w-4" />
                Notes
              </Button>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to='/about-us'>
              <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-accent">
                <Cog className="mr-2 h-4 w-4" />
                About us
              </Button>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SignOutButton>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-accent">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
        </SignOutButton>
      </SidebarFooter>
    </ShadSidebar>
  );
}

