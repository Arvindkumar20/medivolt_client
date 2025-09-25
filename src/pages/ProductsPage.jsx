import React from 'react';
import { Package, Construction } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-2xl w-full transform transition-all duration-500 ease-in-out scale-95 hover:scale-100">
        <div className="mb-8">
          <Package size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Products</h1>
          <p className="text-xl font-light opacity-90">Our exciting range of products is currently under development.</p>
        </div>
        <div className="border-t border-white border-opacity-30 pt-8">
          <Construction size={48} className="mx-auto text-white mb-4 animate-pulse" />
          <p className="text-2xl font-semibold mb-4">Something amazing is coming very soon!</p>
          <p className="text-lg opacity-80">We are working hard to bring you innovative solutions. Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
}