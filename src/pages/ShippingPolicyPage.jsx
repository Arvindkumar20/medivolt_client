import React from 'react';
import { Truck, Package } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-4">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-2xl w-full transform transition-all duration-500 ease-in-out scale-95 hover:scale-100">
        <div className="mb-8">
          <Truck size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Shipping Policy</h1>
          <p className="text-xl font-light opacity-90">Detailed information about our shipping procedures and delivery times.</p>
        </div>
        <div className="border-t border-white border-opacity-30 pt-8">
          <Package size={48} className="mx-auto text-white mb-4 animate-pulse" />
          <p className="text-2xl font-semibold mb-4">Fast & Reliable Delivery</p>
          <p className="text-lg opacity-80">We strive to process and ship all orders within 1-2 business days. You will receive a tracking number once your order has been dispatched.</p>
        </div>
      </div>
    </div>
  );
}