import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, MapPin, Star, Clock, DollarSign, 
  User, Phone, Mail, Calendar, Award, Briefcase,
  Heart, Brain, Bone, Baby, Stethoscope, Activity,
  Plus, CheckCircle, Shield, Zap, Users, Eye, 
  FileText, Building, Timer, AlertCircle, Send,
  GraduationCap, Languages, BadgeCheck, Flame
} from 'lucide-react';

const HireDoctorsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showJobPostForm, setShowJobPostForm] = useState(false);
  const [activeTab, setActiveTab] = useState('browse'); // 'browse' or 'requirements'

  const specialties = [
    { id: 'all', name: 'All Specialties', icon: Stethoscope },
    { id: 'cardiology', name: 'Cardiology', icon: Heart },
    { id: 'neurology', name: 'Neurology', icon: Brain },
    { id: 'orthopedics', name: 'Orthopedics', icon: Bone },
    { id: 'pediatrics', name: 'Pediatrics', icon: Baby },
    { id: 'nursing', name: 'Nursing', icon: Users },
    { id: 'emergency', name: 'Emergency Medicine', icon: Activity }
  ];

  // Job Requirements Posted by Hospitals
  const jobRequirements = [
    {
      id: 1,
      hospital: "Apollo Hospital Mumbai",
      title: "Cardiologist for Emergency Coverage",
      specialty: "Cardiology",
      duration: "1 week",
      type: "Full-time",
      location: "Mumbai, Maharashtra",
      workType: "Onsite",
      budget: "₹50,000/week",
      urgency: "Immediate",
      description: "Need experienced cardiologist for emergency coverage during vacation period. Must be available for night shifts and emergency procedures.",
      requirements: ["MD Cardiology", "5+ years experience", "Emergency procedures certified"],
      postedDate: "2024-01-10",
      applications: 12,
      status: "active"
    },
    {
      id: 2,
      hospital: "Max Healthcare Delhi",
      title: "ICU Nurses - Night Shift",
      specialty: "Nursing",
      duration: "3 months",
      type: "Part-time",
      location: "Delhi, NCR",
      workType: "Onsite",
      budget: "₹25,000/month",
      urgency: "Within a week",
      description: "Looking for experienced ICU nurses for night shift coverage. 3-month contract with possibility of extension.",
      requirements: ["BSc Nursing", "ICU experience", "BLS certified"],
      postedDate: "2024-01-08",
      applications: 8,
      status: "active"
    },
    {
      id: 3,
      hospital: "Fortis Bangalore",
      title: "Orthopedic Surgeon - Weekend Coverage",
      specialty: "Orthopedics",
      duration: "6 months",
      type: "Part-time",
      location: "Bangalore, Karnataka",
      workType: "Onsite",
      budget: "₹40,000/month",
      urgency: "Flexible",
      description: "Weekend orthopedic surgeon needed for emergency cases and scheduled surgeries.",
      requirements: ["MS Orthopedics", "Surgical experience", "Available weekends"],
      postedDate: "2024-01-05",
      applications: 15,
      status: "active"
    }
  ];

  const freelancers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiology",
      location: "Mumbai, Maharashtra",
      rating: 4.9,
      reviews: 156,
      availability: "Available Today",
      shiftRate: "₹8,000/day",
      hourlyRate: "₹1,200/hour",
      monthlyRate: "₹1,80,000/month",
      experience: "15 years",
      image: null,
      verified: true,
      premium: true,
      availableNow: true,
      languages: ["English", "Hindi", "Marathi"],
      workTypes: ["Full-time", "Part-time", "Emergency shifts"],
      education: "MBBS - Grant Medical College Mumbai, MD Cardiology - AIIMS Delhi",
      certifications: ["Board Certified Cardiologist", "Echo Specialist", "Advanced Cardiac Life Support"],
      workHistory: [
        { hospital: "Apollo Hospital Mumbai", duration: "2018-2023", role: "Senior Cardiologist" },
        { hospital: "Fortis Healthcare", duration: "2015-2018", role: "Consultant Cardiologist" },
        { hospital: "Freelance Practice", duration: "2023-Present", role: "Independent Consultant" }
      ],
      availabilityCalendar: {
        thisWeek: ["Mon", "Tue", "Wed"],
        nextWeek: ["Mon", "Tue", "Wed", "Thu", "Fri"]
      },
      skills: ["Interventional Cardiology", "Echocardiography", "Cardiac Catheterization", "Emergency Care"]
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Neurology",
      location: "Delhi, NCR",
      rating: 4.8,
      reviews: 134,
      availability: "Available Tomorrow",
      shiftRate: "₹7,000/day",
      hourlyRate: "₹1,000/hour",
      monthlyRate: "₹1,50,000/month",
      experience: "12 years",
      image: null,
      verified: true,
      premium: false,
      availableNow: false,
      languages: ["English", "Hindi"],
      workTypes: ["Full-time", "Part-time"],
      education: "MBBS - Lady Hardinge Medical College, DM Neurology - PGI Chandigarh",
      certifications: ["Neurologist", "Stroke Specialist", "Epilepsy Certified"],
      workHistory: [
        { hospital: "Max Hospital Delhi", duration: "2019-2023", role: "Senior Neurologist" },
        { hospital: "Medanta Gurgaon", duration: "2016-2019", role: "Consultant Neurologist" },
        { hospital: "Independent Practice", duration: "2023-Present", role: "Freelance Neurologist" }
      ],
      availabilityCalendar: {
        thisWeek: ["Thu", "Fri"],
        nextWeek: ["Mon", "Tue", "Wed", "Thu"]
      },
      skills: ["Stroke Management", "Epilepsy Treatment", "Neuroimaging", "Clinical Neurology"]
    },
    {
      id: 3,
      name: "Nurse Sarah Wilson",
      specialty: "Critical Care Nursing",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      reviews: 89,
      availability: "Available This Week",
      shiftRate: "₹2,500/day",
      hourlyRate: "₹350/hour",
      monthlyRate: "₹60,000/month",
      experience: "8 years",
      image: null,
      verified: true,
      premium: false,
      availableNow: true,
      languages: ["English", "Kannada", "Hindi"],
      workTypes: ["Full-time", "Part-time", "Night shifts"],
      education: "BSc Nursing - Manipal University, Post Basic Critical Care Nursing",
      certifications: ["Critical Care Certified", "BLS Certified", "ACLS Certified"],
      workHistory: [
        { hospital: "Manipal Hospital", duration: "2020-2023", role: "ICU Nurse" },
        { hospital: "Narayana Health", duration: "2018-2020", role: "Staff Nurse" },
        { hospital: "Home Care Services", duration: "2023-Present", role: "Freelance Nurse" }
      ],
      availabilityCalendar: {
        thisWeek: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        nextWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      skills: ["ICU Care", "Ventilator Management", "Emergency Care", "Patient Monitoring"]
    },
    {
      id: 4,
      name: "Dr. Mike Davis",
      specialty: "Orthopedics",
      location: "Chennai, Tamil Nadu",
      rating: 4.6,
      reviews: 98,
      availability: "Available Next Week",
      shiftRate: "₹6,500/day",
      hourlyRate: "₹900/hour",
      monthlyRate: "₹1,40,000/month",
      experience: "10 years",
      image: null,
      verified: true,
      premium: true,
      availableNow: false,
      languages: ["English", "Tamil"],
      workTypes: ["Full-time", "Part-time", "Weekend coverage"],
      education: "MBBS - Madras Medical College, MS Orthopedics - CMC Vellore",
      certifications: ["Orthopedic Surgeon", "Sports Medicine", "Arthroscopy Specialist"],
      workHistory: [
        { hospital: "Apollo Hospital Chennai", duration: "2017-2022", role: "Senior Orthopedic Surgeon" },
        { hospital: "MIOT Hospital", duration: "2014-2017", role: "Consultant Orthopedic Surgeon" },
        { hospital: "Private Practice", duration: "2022-Present", role: "Independent Surgeon" }
      ],
      availabilityCalendar: {
        thisWeek: [],
        nextWeek: ["Mon", "Tue", "Wed", "Sat", "Sun"]
      },
      skills: ["Joint Replacement", "Arthroscopy", "Sports Injuries", "Trauma Surgery"]
    }
  ];

  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         freelancer.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         freelancer.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            freelancer.specialty.toLowerCase().includes(selectedSpecialty);
    
    const matchesLocation = selectedLocation === 'all' || 
                           freelancer.location.toLowerCase().includes(selectedLocation);
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  const HeroSection = () => (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-gray-900"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Hire Certified Doctors, Nurses &{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Healthcare Experts
          </span>{' '}
          On-Demand
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Verified professionals available for part-time, emergency, or full-time roles — anytime you need.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => setShowJobPostForm(true)}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25"
          >
            🏥 Post a Job Requirement
          </button>
          <button 
            onClick={() => setShowSignupForm(true)}
            className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold border border-gray-700 hover:border-purple-500"
          >
            👨‍⚕️ Join as a Professional
          </button>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'browse'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              🔍 Browse Professionals
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ml-2 ${
                activeTab === 'requirements'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              📑 Posted Requirements ({jobRequirements.length})
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const SearchAndFilters = () => (
    <section className="py-8 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, specialty, or city"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Specialty</label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              {specialties.map(specialty => (
                <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="all">All Locations</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Availability</label>
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="all">Any Time</option>
              <option value="today">Available Today</option>
              <option value="week">This Week</option>
              <option value="remote">Remote Only</option>
              <option value="onsite">Onsite Only</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Consultation Type</label>
            <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
              <option value="all">All Types</option>
              <option value="online">Online Only</option>
              <option value="inperson">In-Person Only</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );

  const FreelancerCard = ({ freelancer }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border transition-all duration-300 ${
        freelancer.premium 
          ? 'border-purple-500/40 shadow-lg shadow-purple-500/10' 
          : 'border-gray-700 hover:border-purple-500/30'
      }`}
    >
      {/* Badges */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-wrap gap-2">
          {freelancer.verified && (
            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-medium border border-green-500/30 flex items-center">
              <BadgeCheck className="h-3 w-3 mr-1" />
              ✅ Verified
            </span>
          )}
          {freelancer.premium && (
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center">
              <Flame className="h-3 w-3 mr-1" />
              🔥 Featured
            </span>
          )}
          {freelancer.availableNow && (
            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-medium border border-green-500/30">
              ⏱ Available Now
            </span>
          )}
        </div>
      </div>

      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
          <User className="h-8 w-8 text-purple-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{freelancer.name}</h3>
          <p className="text-purple-300 font-medium">{freelancer.specialty}</p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-1">
            <MapPin className="h-4 w-4" />
            <span>{freelancer.location}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-1">
            <Briefcase className="h-4 w-4" />
            <span>{freelancer.experience} experience</span>
          </div>
        </div>
      </div>

      {/* Rating and Availability */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-white font-medium">{freelancer.rating}</span>
          <span className="text-gray-400 text-sm">({freelancer.reviews})</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-green-400" />
          <span className="text-green-400 text-sm font-medium">{freelancer.availability}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-1 gap-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Day Rate:</span>
            <span className="text-white font-medium">{freelancer.shiftRate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Hourly:</span>
            <span className="text-white font-medium">{freelancer.hourlyRate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Monthly:</span>
            <span className="text-white font-medium">{freelancer.monthlyRate}</span>
          </div>
        </div>
      </div>

      {/* Work Types */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {freelancer.workTypes.map((type, index) => (
            <span key={index} className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-500/30">
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="flex flex-wrap gap-2 mb-4">
        {freelancer.languages.map((lang, index) => (
          <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full flex items-center">
            <Languages className="h-3 w-3 mr-1" />
            {lang}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <div className="flex space-x-2">
          <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 px-4 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-medium">
            Hire for Shift
          </button>
          <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium">
            Hire for Contract
          </button>
        </div>
        <button className="w-full bg-gray-800 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 font-medium border border-gray-600">
          View Full Profile
        </button>
      </div>
    </motion.div>
  );

  // Job Requirements Card Component
  const JobRequirementCard = ({ job }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
          <p className="text-purple-300 font-medium">{job.hospital}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            job.urgency === 'Immediate' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
            job.urgency === 'Within a week' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
            'bg-green-500/20 text-green-400 border border-green-500/30'
          }`}>
            {job.urgency}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-4 w-4 text-purple-400" />
          <span className="text-gray-300 text-sm">{job.specialty}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-gray-300 text-sm">{job.location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="h-4 w-4 text-blue-400" />
          <span className="text-gray-300 text-sm">{job.duration} • {job.type}</span>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-green-400" />
          <span className="text-gray-300 text-sm font-medium">{job.budget}</span>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{job.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-white mb-2">Requirements:</h4>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((req, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
              {req}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span>Posted: {job.postedDate}</span>
          <span>{job.applications} applications</span>
        </div>
        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
          Active
        </span>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-medium">
        Apply Now
      </button>
    </motion.div>
  );

  // Job Posting Form Component
  const JobPostingForm = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Post a Job Requirement</h2>
          <button
            onClick={() => setShowJobPostForm(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Job Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Cardiologist for Emergency Coverage"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Hospital/Organization</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Apollo Hospital Mumbai"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Specialty Required</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Select Specialty</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Nursing</option>
                <option>Emergency Medicine</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Mumbai, Maharashtra"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>1 day</option>
                <option>1 week</option>
                <option>1 month</option>
                <option>3 months</option>
                <option>6 months</option>
                <option>1 year</option>
                <option>Permanent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Work Type</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Emergency shift</option>
                <option>Weekend coverage</option>
                <option>Night shift</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Work Location</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Onsite</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Budget</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="₹50,000/week"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Urgency</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Immediate</option>
                <option>Within a week</option>
                <option>Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Job Description</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Describe the role, responsibilities, and any specific requirements..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Requirements (comma-separated)</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="MD Cardiology, 5+ years experience, Emergency procedures certified"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold"
            >
              Post Job Requirement
            </button>
            <button
              type="button"
              onClick={() => setShowJobPostForm(false)}
              className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );

  const FreelancerSignupForm = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Join as a Healthcare Professional</h2>
          <button
            onClick={() => setShowSignupForm(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Dr. John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Specialty</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Select Specialty</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Nursing</option>
                <option>Emergency Medicine</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Mumbai, Maharashtra"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Experience (Years)</label>
              <input
                type="number"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Education & Qualifications</label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="MBBS, MD - AIIMS Delhi"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Consultation Fee</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="₹2,000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Hourly Rate</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="₹2,500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Upload License/Certifications</label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
              <input type="file" multiple className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-gray-400 mb-2">
                  <Plus className="h-8 w-8 mx-auto mb-2" />
                  Click to upload files
                </div>
                <p className="text-sm text-gray-500">PDF, JPG, PNG up to 10MB</p>
              </label>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-semibold"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={() => setShowSignupForm(false)}
              className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      
      {/* Main Content Based on Active Tab */}
      {activeTab === 'browse' && (
        <>
          <SearchAndFilters />
          
          {/* Results Section */}
          <section className="py-12 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Available Healthcare Professionals ({filteredFreelancers.length})
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Sort by:</span>
                  <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
                    <option>Rating (High to Low)</option>
                    <option>Price (Low to High)</option>
                    <option>Experience</option>
                    <option>Availability</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFreelancers.map((freelancer) => (
                  <FreelancerCard key={freelancer.id} freelancer={freelancer} />
                ))}
              </div>

              {filteredFreelancers.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <User className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-xl">No healthcare professionals found</p>
                    <p className="text-sm">Try adjusting your search criteria</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Job Requirements Tab */}
      {activeTab === 'requirements' && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Posted Job Requirements</h2>
                <p className="text-gray-400">Browse open positions posted by hospitals and healthcare organizations</p>
              </div>
              <button
                onClick={() => setShowJobPostForm(true)}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-medium flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Post New Requirement</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobRequirements.map((job) => (
                <JobRequirementCard key={job.id} job={job} />
              ))}
            </div>

            {jobRequirements.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FileText className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl">No job requirements posted yet</p>
                  <p className="text-sm">Be the first to post a requirement</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Premium Features Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            {activeTab === 'browse' ? 'Premium Features for Healthcare Professionals' : 'Premium Hiring Tools for Hospitals'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeTab === 'browse' ? (
              <>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Featured Listings</h3>
                  <p className="text-gray-300">Get highlighted in search results and attract more clients</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Verified Badge</h3>
                  <p className="text-gray-300">Build trust with verified professional credentials</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Eye className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Priority Support</h3>
                  <p className="text-gray-300">Get dedicated support and faster response times</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Building className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Priority Listings</h3>
                  <p className="text-gray-300">Your job requirements appear at the top of search results</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <BadgeCheck className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Verified-Only Filter</h3>
                  <p className="text-gray-300">Access to verified professionals only for quality assurance</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Timer className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Instant Hire</h3>
                  <p className="text-gray-300">Skip the application process and hire professionals instantly</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Modals */}
      {showSignupForm && <FreelancerSignupForm />}
      {showJobPostForm && <JobPostingForm />}
    </div>
  );
};

export default HireDoctorsPage;
