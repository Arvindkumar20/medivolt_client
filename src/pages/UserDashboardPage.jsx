import React from 'react';
import { User, Settings } from 'lucide-react';

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-2xl w-full transform transition-all duration-500 ease-in-out scale-95 hover:scale-100">
        <div className="mb-8">
          <User size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">My Account</h1>
          <p className="text-xl font-light opacity-90">Welcome to your personalized dashboard!</p>
        </div>
        <div className="border-t border-white border-opacity-30 pt-8">
          <Settings size={48} className="mx-auto text-white mb-4 animate-pulse" />
          <p className="text-2xl font-semibold mb-4">Dashboard Under Construction</p>
          <p className="text-lg opacity-80">We are actively building out new features and functionalities for your account. Check back soon for exciting updates!</p>
        </div>
      </div>
    </div>
  );
}