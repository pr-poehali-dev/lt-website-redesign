
import { Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import Cart from '@/pages/Cart';
import NotFound from '@/pages/NotFound';
import './App.css';
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as they are created */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
