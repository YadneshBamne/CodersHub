import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar";
import { SideHeader } from "@/components/sidebarhead";
import { Twitter, Instagram, LucideLinkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function AboutUs() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-auto flex-col md:flex-row text-white">
        <Sidebar />
        <div className="flex-1">
          <SideHeader />
          <div className="flex flex-col items-center justify-center py-16 px-6 md:px-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
              Coders Club Team
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
              {/* Individual Team Member Cards */}
              <div className="relative white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/20 hover:shadow-xl transition">
                <img
                  src="/atharva.jpg"
                  alt="Atharva Shelke"
                  className="w-32 h-32 rounded-full object-cover border border-white"
                />
                <h3 className="text-lg md:text-xl font-bold mt-4">
                  Atharva Shelke
                </h3>
                <p className="text-sm md:text-base opacity-80">Founder & CEO</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://x.com/_atharva_shelke" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-6 h-5 text-gray-400 hover:text-white transition"
                  />
                  </a>

                  <a href="https://www.linkedin.com/in/atharva-shelke-a9a9a9226/" target="_blank">

                  <LucideLinkedin className="w-6 h-5 text-gray-400 hover:text-blue-500 transition" />
                  </a>
                </div>
              </div>

              <div className="relative white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/20 hover:shadow-xl transition">
                <img
                  src="/photo.jpeg"
                  alt="Avanish Vadke"
                  className="w-32 h-32 rounded-full object-cover border border-white"
                />
                <h3 className="text-lg md:text-xl font-bold mt-4">
                  Avanish Vadke
                </h3>
                <p className="text-sm md:text-base opacity-80">
                  Technical Lead
                </p>
                <div className="flex gap-4 mt-4">
                  <a href="https://x.com/AvanisHCodes_" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-6 h-5 text-gray-400 hover:text-white transition"
                  />
                  </a>

                  <a href="https://www.linkedin.com/in/avanishvadke/" target="_blank">

                  <LucideLinkedin className="w-6 h-5 text-gray-400 hover:text-blue-500 transition" />
                  </a>
                </div>
              </div>

              <div className="relative white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/20 hover:shadow-xl transition">
                <img
                  src="/Parth.JPG"
                  alt="Parth Das"
                  className="w-32 h-32 rounded-full object-cover border border-white"
                />
                <h3 className="text-lg md:text-xl font-bold mt-4">Parth Das</h3>
                <p className="text-sm md:text-base opacity-80">
                  UI/UX Designer
                </p>
                <div className="flex gap-4 mt-4">

                  <a href="https://www.linkedin.com/in/parth-das-675784259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">

                  <LucideLinkedin className="w-6 h-5 text-gray-400 hover:text-blue-500 transition" />
                  </a>
                </div>
              </div>

              <div className="relative white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/20 hover:shadow-xl transition">
                <img
                  src="/abhiiii.png"
                  alt="Abhishek Thormothe"
                  className="w-32 h-32 rounded-full object-cover border border-white"
                />
                <h3 className="text-lg md:text-xl font-bold mt-4">
                  Abhishek Thormothe
                </h3>
                <p className="text-sm md:text-base opacity-80">
                  Full-Stack Developer
                </p>
                <div className="flex gap-4 mt-4">
                  <a href="https://twitter.com/yadneshbamne" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-6 h-5 text-gray-400 hover:text-white transition"
                  />
                  </a>

                  <a href="https://www.linkedin.com/in/thormotheabhishek/" target="_blank">

                  <LucideLinkedin className="w-6 h-5 text-gray-400 hover:text-blue-500 transition" />
                  </a>
                </div>
              </div>

              <div className="relative white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/20 hover:shadow-xl transition">
                <img
                  src="/sarakshi.jpg"
                  alt="Sarakshi More"
                  className="w-32 h-32 rounded-full object-cover border border-white"
                />
                <h3 className="text-lg md:text-xl font-bold mt-4">
                  Sarakshi More
                </h3>
                <p className="text-sm md:text-base opacity-80">AI Engineer</p>
                <div className="flex gap-4 mt-4">

                  <a href="https://www.linkedin.com/in/sarakshi-m-158212211/" target="_blank">

                  <LucideLinkedin className="w-6 h-5 text-gray-400 hover:text-blue-500 transition" />
                  </a>
                </div>
              </div>

              <div className="relative white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/20 hover:shadow-xl transition">
                <img
                  src="/yadnesh.jpg"
                  alt="Yadnesh Bamne"
                  className="w-32 h-32 rounded-full object-cover border border-white"
                />
                <h3 className="text-lg md:text-xl font-bold mt-4">
                  Yadnesh Bamne
                </h3>
                <p className="text-sm md:text-base opacity-80">
                  Cybersecurity Expert
                </p>
                <div className="flex gap-4 mt-4">
                  <a href="https://x.com/Yadnesh_Bamne" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-6 h-5 text-gray-400 hover:text-white transition"
                  />
                  </a>

                  <a href="https://www.linkedin.com/in/yadneshbamne21" target="_blank">

                  <LucideLinkedin className="w-6 h-5 text-gray-400 hover:text-blue-500 transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
