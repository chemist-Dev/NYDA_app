import "./index.css";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Caravans from "./pages/Caravans";
// import Testimonials from "./pages/Testimonials";
import DonationsPage from "./pages/Donations";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFoundPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donations" element={<DonationsPage />} />
            <Route path="/caravans" element={<Caravans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            {/* 
            <Route path="/testimonials" element={<Testimonials />} />
            
             */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            {/*  */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
