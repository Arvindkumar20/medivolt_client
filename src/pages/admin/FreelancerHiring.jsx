import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, Search, Filter, MapPin, Clock, DollarSign, Star, 
  User, Briefcase, Calendar, CheckCircle, XCircle, Eye,
  Heart, Brain, Bone, Baby, Stethoscope, Activity
} from 'lucide-react';

const FreelancerHiring = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [showPostForm, setShowPostForm] = useState(false);

  // Sample data for requirements
  const requirements = [
    {
      id: 1,
      title: "Cardiologist for Emergency Coverage",
      specialty: "Cardiology",
      duration: "1 week",
      type: "Full-time",
      budget: "₹50,000/week",
      location: "On-site",
      urgency: "high",
      description: "Need experienced cardiologist for emergency coverage during vacation period.",
      applications: 12,
      status: "active",
      postedDate: "2024-01-10"
    },
    {
      id: 2,
      title: "Online Nutrition Consultant",
      specialty: "Nutrition",
      duration: "3 months",
      type: "Part-time",
      budget: "₹25,000/month",
      location: "Remote",
      urgency: "medium",
      description: "Looking for certified nutritionist for online consultations and diet planning.",
      applications: 8,
      status: "active",
      postedDate: "2024-01-08"
    },
    {
      id: 3,
      title: "Physiotherapist for Rehabilitation",
      specialty: "Physiotherapy",
      duration: "2 months",
      type: "Full-time",
      budget: "₹40,000/month",
      location: "On-site",
      urgency: "low",
      description: "Required for post-surgery rehabilitation program.",
      applications: 15,
      status: "filled",
      postedDate: "2024-01-05"
    }
  ];

  // Sample data for freelancer applications
  const applications = [
    {
      id: 1,
      requirementId: 1,
      doctorName: "Dr. Rajesh Kumar",
      specialty: "Cardiology",
      experience: "15 years",
      rating: 4.8,
      location: "Mumbai",
      hourlyRate: "₹2,500/hour",
      availability: "Immediate",
      profileImage: null,
      bio: "Experienced cardiologist with expertise in emergency care and interventional procedures.",
      certifications: ["MD Cardiology", "MBBS", "Fellowship in Interventional Cardiology"],
      languages: ["English", "Hindi", "Marathi"],
      status: "pending"
    },
    {
      id: 2,
      requirementId: 1,
      doctorName: "Dr. Priya Sharma",
      specialty: "Cardiology",
      experience: "12 years",
      rating: 4.9,
      location: "Delhi",
      hourlyRate: "₹2,200/hour",
      availability: "From next week",
      profileImage: null,
      bio: "Senior cardiologist with focus on non-invasive cardiology and preventive care.",
      certifications: ["MD Cardiology", "MBBS", "Echo Certification"],
      languages: ["English", "Hindi"],
      status: "pending"
    }
  ];

  const specialties = [
    { name: "Cardiology", icon: Heart, color: "red" },
    { name: "Neurology", icon: Brain, color: "purple" },
    { name: "Orthopedics", icon: Bone, color: "blue" },
    { name: "Pediatrics", icon: Baby, color: "green" },
    { name: "General Medicine", icon: Stethoscope, color: "gray" },
    { name: "Emergency Medicine", icon: Activity, color: "orange" }
  ];

  const PostRequirementForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Post New Requirement</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Cardiologist for Emergency Coverage"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specialty Required</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Specialty</option>
              {specialties.map(specialty => (
                <option key={specialty.name} value={specialty.name}>{specialty.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Duration</option>
              <option>1 day</option>
              <option>1 week</option>
              <option>1 month</option>
              <option>3 months</option>
              <option>6 months</option>
              <option>1 year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Work Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>On-call</option>
              <option>Consultation only</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., ₹50,000/week"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Location</option>
              <option>On-site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe the role, responsibilities, and requirements..."
          ></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Post Requirement
          </button>
          <button
            type="button"
            onClick={() => setShowPostForm(false)}
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );

  const RequirementCard = ({ requirement }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{requirement.title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center space-x-1">
              <Briefcase className="h-4 w-4" />
              <span>{requirement.specialty}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{requirement.duration}</span>
            </span>
            <span className="flex items-center space-x-1">
              <DollarSign className="h-4 w-4" />
              <span>{requirement.budget}</span>
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{requirement.description}</p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            requirement.urgency === 'high' ? 'bg-red-100 text-red-800' :
            requirement.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {requirement.urgency} priority
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            requirement.status === 'active' ? 'bg-blue-100 text-blue-800' :
            requirement.status === 'filled' ? 'bg-green-100 text-green-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {requirement.status}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>{requirement.applications} applications</span>
          <span>Posted {requirement.postedDate}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View Applications
          </button>
          <button className="text-gray-600 hover:text-gray-700">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const ApplicationCard = ({ application }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{application.doctorName}</h3>
            <p className="text-sm text-gray-600 mb-2">{application.specialty} • {application.experience}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <span className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>{application.rating}</span>
              </span>
              <span className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{application.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4" />
                <span>{application.hourlyRate}</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{application.bio}</p>
            <div className="flex items-center space-x-2 mb-3">
              {application.certifications.map((cert, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span>Available: {application.availability}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
            <CheckCircle className="h-4 w-4 inline mr-1" />
            Hire
          </button>
          <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
            <XCircle className="h-4 w-4 inline mr-1" />
            Reject
          </button>
          <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Freelancer & Expert Hiring</h2>
        <button
          onClick={() => setShowPostForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Post Requirement</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('requirements')}
          className={`pb-2 px-1 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'requirements'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          My Requirements ({requirements.length})
        </button>
        <button
          onClick={() => setActiveTab('applications')}
          className={`pb-2 px-1 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'applications'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Applications ({applications.length})
        </button>
      </div>

      {/* Post Requirement Form */}
      {showPostForm && <PostRequirementForm />}

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'requirements' && (
          <div className="space-y-4">
            {requirements.map((requirement) => (
              <RequirementCard key={requirement.id} requirement={requirement} />
            ))}
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="space-y-4">
            {applications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelancerHiring;
