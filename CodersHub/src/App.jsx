import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/app-layout';
import LandingPage from './pages/landingpage';
import AboutUs from './pages/aboutus';
import { ThemeProvider } from './components/theme-provider';
import Notes from './pages/notes';
import ProtectedRoute from './components/protected-route';

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path:'/',
        element:
        
        <LandingPage/>,
      },
      {
        path:'/about-us',
        element:
        <ProtectedRoute>
        <AboutUs/>
        </ProtectedRoute>
      },
      {
        path:'/notes',
        element:
        <ProtectedRoute>
        <Notes/>
        </ProtectedRoute>
      },
    ],
  },
]);

function App() {

  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
      </ThemeProvider>
  );
}

export default App
