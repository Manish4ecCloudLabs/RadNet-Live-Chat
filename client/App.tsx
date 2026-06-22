import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/for-patients" element={<Placeholder />} />
          <Route path="/for-patients/appointment" element={<Placeholder />} />
          <Route path="/faqs" element={<Placeholder />} />
          <Route path="/billing" element={<Placeholder />} />
          <Route path="/exam-prep" element={<Placeholder />} />
          <Route path="/providers" element={<Placeholder />} />
          <Route path="/guides" element={<Placeholder />} />
          <Route path="/provider-portal" element={<Placeholder />} />
          <Route path="/services" element={<Placeholder />} />
          <Route path="/locations" element={<Placeholder />} />
          <Route path="/about" element={<Placeholder />} />
          <Route path="/careers" element={<Placeholder />} />
          <Route path="/contact" element={<Placeholder />} />
          <Route path="/blog" element={<Placeholder />} />
          <Route path="/blog/:slug" element={<Placeholder />} />
          <Route path="/privacy" element={<Placeholder />} />
          <Route path="/disclaimer" element={<Placeholder />} />
          <Route path="/accessibility" element={<Placeholder />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
