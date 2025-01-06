import Header from '@/components/header'
import DotPattern from '@/components/ui/dot-pattern'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils'



const AppLayout = () => {
  return (
    <div>
      {/* <div className='grid-background'></div> */}
     <main className='min-h-screen container mx-auto'>
      
      <Outlet />
     </main>
     <DotPattern className={cn(
          "-z-50 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}/>
        <div className='p-4 w-full text-center bg-slate-900 mt-10'>&copy; Growth-Chronicles 2025</div>
    </div>
  )
}

export default AppLayout