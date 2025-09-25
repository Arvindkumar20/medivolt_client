import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Apple, Camera, Search } from 'lucide-react';

const INDIAN_FOODS = [
  { name: 'Roti (1 medium)', calories: 120, protein: 3, carbs: 18, fat: 3 },
  { name: 'Dal (1 bowl)', calories: 180, protein: 12, carbs: 25, fat: 4 },
  { name: 'Paneer (100g)', calories: 265, protein: 18, carbs: 6, fat: 20 },
  { name: 'Biryani (1 plate)', calories: 420, protein: 15, carbs: 60, fat: 12 },
  { name: 'Idli (2 pcs)', calories: 140, protein: 6, carbs: 28, fat: 2 },
];

export default function NutritionCalculatorPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [totals, setTotals] = useState({ calories: 0, protein: 0, carbs: 0, fat: 0 });

  const search = () => {
    const r = INDIAN_FOODS.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));
    setResults(r);
  };

  const add = (item) => {
    setTotals(t => ({
      calories: t.calories + item.calories,
      protein: t.protein + item.protein,
      carbs: t.carbs + item.carbs,
      fat: t.fat + item.fat,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Purple Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-80 z-0">
          <div className="w-full h-full bg-gradient-to-t from-primary-500/40 via-accent-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30">
              <Apple className="h-12 w-12 text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
            🍎 Calories & Nutrition Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track calories, get nutrition insights, and discover healthy Indian recipes
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-primary-500/20 text-primary-300 border border-primary-500/30 rounded-full text-sm font-medium">
              🍽️ Indian Foods
            </span>
            <span className="px-4 py-2 bg-accent-500/20 text-accent-300 border border-accent-500/30 rounded-full text-sm font-medium">
              📱 Scan Food
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-200 border border-primary-500/30 rounded-full text-sm font-medium">
              📊 Track Nutrition
            </span>
          </div>
        </div>

        <div className="mb-6 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm relative z-10">
          <div className="flex gap-3">
            <Input 
              placeholder="Search Indian food (e.g., roti, dal)" 
              value={query} 
              onChange={(e)=>setQuery(e.target.value)}
              className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-primary-500/50"
            />
            <Button onClick={search} className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500">
              <Search className="h-4 w-4 mr-2"/>Search
            </Button>
            <Button variant="outline" className="border-gray-600/50 text-gray-300 hover:bg-gray-700/30">
              <Camera className="h-4 w-4 mr-2"/>Scan Food
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
            <h3 className="font-semibold mb-3 text-white">Results</h3>
            <div className="space-y-2">
              {results.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-gray-600/50 rounded-lg hover:bg-gray-700/30 transition-colors">
                  <div>
                    <div className="font-medium text-white">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.calories} kcal • P {item.protein}g • C {item.carbs}g • F {item.fat}g</div>
                  </div>
                  <Button size="sm" onClick={()=>add(item)} className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500">Add</Button>
                </div>
              ))}
              {results.length === 0 && (
                <div className="text-sm text-gray-400">Search to see foods.</div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
            <h3 className="font-semibold mb-3 text-white">Today's Total</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-300">{totals.calories}</div>
                <div className="text-xs text-orange-200">Calories</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-300">{totals.protein}g</div>
                <div className="text-xs text-blue-200">Protein</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-300">{totals.carbs}g</div>
                <div className="text-xs text-green-200">Carbs</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-300">{totals.fat}g</div>
                <div className="text-xs text-purple-200">Fat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
