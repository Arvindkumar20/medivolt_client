import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { BookOpen, Search } from 'lucide-react';

export default function HealthLiteracyPage() {
  const [term, setTerm] = useState('');
  const [info, setInfo] = useState(null);

  const search = () => {
    setInfo({
      title: term || 'Diabetes',
      simple: 'Sugar zyada hone ka matlab insulin kam kaam kar raha hai. Diet + exercise follow karo.',
      english: 'High blood sugar means insulin is not working well. Follow diet and exercise.',
      do: ['Walk 20 mins daily', 'Avoid sugary drinks', 'Eat more veggies'],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-yellow-100 rounded-full">
              <BookOpen className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📚 AI Health Literacy</h1>
          <p className="text-gray-600">Explain diseases in simple Hindi/English with visuals.</p>
        </div>

        <Card className="mb-6">
          <div className="flex gap-3">
            <input className="input" placeholder="Search disease (e.g., Diabetes)" value={term} onChange={(e)=>setTerm(e.target.value)} />
            <Button onClick={search}><Search className="h-4 w-4 mr-2"/>Search</Button>
          </div>
        </Card>

        {info && (
          <Card>
            <h3 className="text-xl font-bold mb-2">{info.title}</h3>
            <p className="text-gray-800">{info.simple}</p>
            <p className="text-gray-600 text-sm mt-2">{info.english}</p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">What to do</h4>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                {info.do.map((d,i)=>(<li key={i}>{d}</li>))}
              </ul>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
