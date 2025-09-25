import React from 'react';
import { useParams } from 'react-router-dom';

export default function PlaceholderPage() {
  const { pageName } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the {pageName ? pageName.replace(/-/g, ' ') : 'Placeholder'} Page!
        </h1>
        <p className="text-gray-600">
          This page is under construction. Please check back later.
        </p>
      </div>
    </div>
  );
}