import React from "react";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import {
  ClapperboardIcon as ChalkboardTeacher,
  Book,
  Cog,
  LogOut,
  HouseIcon,
  LinkIcon,
  Info,
} from "lucide-react";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { PenBox, NotebookPen, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";

const ADMIN_EMAILS = [
  "yadnesh2105@gmail.com",
  "atharvashelke2303@gmail.com",
  "avanishvadke001@gmail.com",
]; // List of admin emails

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/sign-in" replace />; // Redirect to login if not authenticated
  }

  const email = user.primaryEmailAddress?.emailAddress.toLowerCase();
  const isAdmin = ADMIN_EMAILS.map((e) => e.toLowerCase()).includes(email);

  if (!isAdmin) {
    return <Navigate to="/access-denied" replace />; // Redirect to Access Denied
  }

  return children; // Render the protected component
};

export function Sidebar() {
  const { state } = useSidebar();
  const [search, setSearch] = useSearchParams();
  const [showSignIn, setShowSignIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useUser(); // Get user data from Clerk

  useEffect(() => {
    if (user && user.primaryEmailAddress?.emailAddress) {
      const email = user.primaryEmailAddress.emailAddress.toLowerCase();
      setIsAdmin(ADMIN_EMAILS.map((e) => e.toLowerCase()).includes(email));
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };
  return (
    <ShadSidebar className="bg-card">
      <SidebarHeader className="bg-opacity-50 bg-black">
        <h2 className="text-xl font-bold text-primary p-4">Dashboard</h2>
      </SidebarHeader>
      <SidebarContent className="bg-opacity-50 bg-black ">
        <SignedIn>
          {/* Show Post a Blog button only for admins */}
          {isAdmin && (
            <>
              <Link to="/add-notes">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
                >
                  <PenBox className="mr-2 h-4 w-4" />
                  Add Notes
                </Button>
              </Link>
              <Link to="/add-resources">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Add Resources
                </Button>
              </Link>
            </>
          )}

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
                  >
                    <HouseIcon className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/notes">
                  <Button
                    variant="ghost"
                    className="w-full justify-start bg-accent text-primary"
                  >
                    <Book className="mr-2 h-4 w-4" />
                    Notes
                  </Button>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/about-us">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
                  >
                    <Info className="mr-2 h-4 w-4" />
                    About us
                  </Button>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/resources">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
                  >
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Resources
                  </Button>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SignedIn>
      </SidebarContent>
      <SidebarFooter>
        <SignOutButton>
          <Button
            variant="ghost"
            className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </SignOutButton>
      </SidebarFooter>
    </ShadSidebar>
  );
}
