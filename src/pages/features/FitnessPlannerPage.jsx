import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Dumbbell, Sun, Footprints, Wind } from 'lucide-react';

export default function FitnessPlannerPage() {
  const [plan, setPlan] = useState(null);

  const generate = () => {
    setPlan({
      morning: 'Surya Namaskar x 12, Pranayama 10 mins',
      evening: 'Walk 20 mins, Light stretching',
      weekly: '3x Yoga sessions, 2x Strength light',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-pink-100 rounded-full">
              <Dumbbell className="h-12 w-12 text-pink-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🏃 AI Lifestyle & Fitness Planner</h1>
          <p className="text-gray-600">Plans tailored for Indian lifestyle: yoga, walk, pranayama.</p>
        </div>

        <Card>
          <Button onClick={generate}>Generate My Plan</Button>
          {plan && (
            <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
              <div className="p-4 bg-white border rounded">
                <div className="font-semibold flex items-center gap-2"><Sun className="h-4 w-4"/>Morning</div>
                <div className="text-gray-700 mt-2">{plan.morning}</div>
              </div>
              <div className="p-4 bg-white border rounded">
                <div className="font-semibold flex items-center gap-2"><Footprints className="h-4 w-4"/>Evening</div>
                <div className="text-gray-700 mt-2">{plan.evening}</div>
              </div>
              <div className="p-4 bg-white border rounded">
                <div className="font-semibold flex items-center gap-2"><Wind className="h-4 w-4"/>Weekly</div>
                <div className="text-gray-700 mt-2">{plan.weekly}</div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
