import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from '@/components/Sidebar';
import { SideHeader } from "@/components/sidebarhead";

export default function AboutUs() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full ">
        <Sidebar />
        
        <div className="flex-1 overflow-clip">
        <SideHeader />
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="space-y-12 text-center">
              {/* Header Section */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-primary">About CodersHub</h1>
                <p className="text-xl text-muted-foreground">
                  Empowering developers to learn, collaborate, and grow together
                </p>
              </div>

              {/* Mission Section */}
              <div className="bg-card p-8 rounded-lg shadow-sm"> 
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  CodersHub is dedicated to creating an inclusive platform where developers 
                  can share knowledge, collaborate on projects, and build their skills 
                  through practical learning experiences.
                </p>
              </div>

              {/* Features Section */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Learn</h3>
                  <p className="text-muted-foreground">Access comprehensive programming tutorials and resources</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Practice</h3>
                  <p className="text-muted-foreground">Solve real-world coding challenges and exercises</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Connect</h3>
                  <p className="text-muted-foreground">Join a community of passionate developers</p>
                </div>
              </div>

              {/* Team Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Our Team</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">Founder & Lead Developer</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">Jane Smith</h3>
                    <p className="text-muted-foreground">Technical Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}