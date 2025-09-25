import React from 'react';
import { Newspaper, Megaphone, Mail } from 'lucide-react';

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: 'Medivolt Launches AI-Powered Medical Report Explainer',
      date: 'October 26, 2023',
      summary: 'Our new AI tool simplifies complex medical reports, making healthcare information accessible to everyone.',
      link: '#',
    },
    {
      id: 2,
      title: 'Medivolt Secures $15M in Series A Funding to Expand AI Health Solutions',
      date: 'September 15, 2023',
      summary: 'This funding will accelerate our mission to revolutionize healthcare through advanced AI technologies.',
      link: '#',
    },
    {
      id: 3,
      title: 'Partnership with National Health System Announced',
      date: 'August 1, 2023',
      summary: 'Collaborating to integrate Medivolt's AI Health Dashboard into national healthcare infrastructure.',
      link: '#',
    },
    {
      id: 4,
      title: 'Medivolt's AI Symptom Checker Reaches 1 Million Users',
      date: 'July 10, 2023',
      summary: 'A significant milestone reflecting the growing trust in our intelligent symptom assessment platform.',
      link: '#',
    },
  ];

  const mediaMentions = [
    {
      id: 1,
      title: 'How AI is Transforming Healthcare: A Look at Medivolt',
      source: 'Tech Innovations Magazine',
      date: 'November 5, 2023',
      link: '#',
    },
    {
      id: 2,
      title: 'Startup Spotlight: Medivolt's Impact on Patient Empowerment',
      source: 'Healthcare Weekly',
      date: 'September 20, 2023',
      link: '#',
    },
    {
      id: 3,
      title: 'The Future of Digital Health: Interview with Medivolt CEO',
      source: 'Global Health Forum',
      date: 'August 15, 2023',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Newspaper size={64} className="mx-auto text-white mb-4 animate-pulse" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Press & Media</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">Stay updated with the latest news, announcements, and media coverage of Medivolt's innovations in healthcare AI.</p>
        </div>

        {/* Press Releases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Latest Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((release) => (
              <div key={release.id} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 transform transition-all duration-500 ease-in-out hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">{release.title}</h3>
                <p className="text-blue-200 text-sm mb-3">{release.date}</p>
                <p className="opacity-90 mb-4">{release.summary}</p>
                <a href={release.link} className="text-white font-semibold hover:underline flex items-center">
                  Read More <Megaphone size={18} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Medivolt in the News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaMentions.map((mention) => (
              <div key={mention.id} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 transform transition-all duration-500 ease-in-out hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">{mention.title}</h3>
                <p className="text-blue-200 text-sm mb-1">Source: {mention.source}</p>
                <p className="text-blue-200 text-sm mb-3">Date: {mention.date}</p>
                <a href={mention.link} className="text-white font-semibold hover:underline flex items-center">
                  View Article <Newspaper size={18} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Contact Section */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">For all media-related inquiries, interview requests, or to receive our press kit, please contact our media relations team.</p>
          <a href="mailto:press@medivolt.com" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto max-w-xs">
            <Mail size={24} className="mr-2" /> Contact Press Team
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Feature Medivolt?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">We are always open to sharing our story and insights with reputable media outlets. Reach out to us!</p>
          <a href="mailto:info@medivolt.com" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}