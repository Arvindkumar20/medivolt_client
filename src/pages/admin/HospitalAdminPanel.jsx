import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Calendar, Users, UserPlus, Bell, BarChart3, Shield, 
  Menu, X, User, Stethoscope, Activity, DollarSign, Clock, AlertTriangle,
  CheckCircle, XCircle, RefreshCw, Plus, Filter, Eye, Edit, Trash2, Star,
  Phone, Mail, TrendingUp
} from 'lucide-react';

// Import additional components
import FreelancerHiring from './FreelancerHiring';
import Analytics from './Analytics';
import Notifications from './Notifications';

// Dashboard Overview Component
const DashboardOverview = () => {
  const [stats, setStats] = useState([
    { title: "Today's Appointments", value: 24, icon: Calendar, color: "purple", trend: "+12%" },
    { title: "Doctors On-Duty", value: 12, icon: Stethoscope, color: "purple", trend: "+5%" },
    { title: "Pending Requests", value: 8, icon: Clock, color: "purple", trend: "-3%" },
    { title: "Emergency Cases", value: 2, icon: AlertTriangle, color: "red", trend: "+1%" },
    { title: "Today's Revenue", value: 45600, icon: DollarSign, color: "purple", trend: "+18%" }
  ]);

  const [realTimeData, setRealTimeData] = useState({
    newAppointments: 0,
    activeEmergencies: 2,
    onlineDoctors: 12
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => {
        if (stat.title === "Today's Appointments") {
          const newValue = stat.value + Math.floor(Math.random() * 3);
          return { ...stat, value: newValue };
        }
        return stat;
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const [appointments, setAppointments] = useState([
    { id: 1, patient: "John Doe", doctor: "Dr. Smith", time: "09:00 AM", status: "confirmed", phone: "+91 98765 43210" },
    { id: 2, patient: "Jane Wilson", doctor: "Dr. Johnson", time: "10:30 AM", status: "pending", phone: "+91 98765 43211" },
    { id: 3, patient: "Mike Brown", doctor: "Dr. Davis", time: "11:00 AM", status: "completed", phone: "+91 98765 43212" },
    { id: 4, patient: "Sarah Lee", doctor: "Dr. Wilson", time: "02:00 PM", status: "confirmed", phone: "+91 98765 43213" },
    { id: 5, patient: "Alex Kumar", doctor: "Dr. Patel", time: "03:30 PM", status: "pending", phone: "+91 98765 43214" }
  ]);

  const handleAppointmentAction = (id, action) => {
    setAppointments(prev => prev.map(apt => 
      apt.id === id ? { ...apt, status: action } : apt
    ));
    
    // Show success notification
    alert(`Appointment ${action} successfully!`);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">{stat.title}</p>
                <p className="text-2xl font-bold text-white">
                  {stat.title.includes('Revenue') ? `₹${stat.value.toLocaleString()}` : stat.value}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp className={`h-4 w-4 mr-1 ${
                    stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`} />
                  <span className={`text-sm font-medium ${
                    stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.trend}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">vs yesterday</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.color === 'red' ? 'bg-red-500/20' : 'bg-purple-500/20'
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.color === 'red' ? 'text-red-400' : 'text-purple-400'
                }`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Today's Appointments */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-purple-500/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Today's Appointments</h3>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            View All ({appointments.length})
          </button>
        </div>
        <div className="space-y-4">
          {appointments.slice(0, 4).map((appointment) => (
            <motion.div 
              key={appointment.id} 
              className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{appointment.patient}</p>
                  <p className="text-sm text-gray-300">{appointment.doctor} • {appointment.time}</p>
                  <p className="text-xs text-gray-400">{appointment.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  appointment.status === 'confirmed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  appointment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}>
                  {appointment.status}
                </span>
                {appointment.status === 'pending' && (
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleAppointmentAction(appointment.id, 'confirmed')}
                      className="p-1 text-green-400 hover:text-green-300 transition-colors"
                      title="Confirm"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleAppointmentAction(appointment.id, 'cancelled')}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      title="Cancel"
                    >
                      <XCircle className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Appointment Management Component
const AppointmentManagement = () => {
  const [filter, setFilter] = useState('all');
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "John Doe", doctor: "Dr. Smith", date: "2024-01-15", time: "09:00 AM", status: "confirmed", type: "Cardiology", phone: "+91 98765 43210" },
    { id: 2, patient: "Jane Wilson", doctor: "Dr. Johnson", date: "2024-01-15", time: "10:30 AM", status: "pending", type: "Neurology", phone: "+91 98765 43211" },
    { id: 3, patient: "Mike Brown", doctor: "Dr. Davis", date: "2024-01-16", time: "11:00 AM", status: "completed", type: "Orthopedics", phone: "+91 98765 43212" },
    { id: 4, patient: "Sarah Lee", doctor: "Dr. Wilson", date: "2024-01-16", time: "02:00 PM", status: "cancelled", type: "Pediatrics", phone: "+91 98765 43213" },
    { id: 5, patient: "Alex Kumar", doctor: "Dr. Patel", date: "2024-01-17", time: "03:30 PM", status: "pending", type: "Dermatology", phone: "+91 98765 43214" }
  ]);

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true;
    return apt.status === filter;
  });

  const handleAction = (id, action) => {
    setAppointments(prev => prev.map(apt => 
      apt.id === id ? { ...apt, status: action } : apt
    ));
    alert(`Appointment ${action} successfully!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Appointment Management</h2>
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 shadow-lg">
          <Plus className="h-4 w-4" />
          <span>New Appointment</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <Filter className="h-4 w-4 text-gray-400" />
        {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === status 
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                : 'bg-gray-800 text-gray-300 hover:bg-purple-500/20 hover:text-white border border-gray-700'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            {status !== 'all' && (
              <span className="ml-1 text-xs">
                ({appointments.filter(apt => apt.status === status).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Appointments Table */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg border border-purple-500/20 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800/50 border-b border-purple-500/20">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {filteredAppointments.map((appointment) => (
              <motion.tr 
                key={appointment.id} 
                className="hover:bg-purple-500/10 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.01 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{appointment.patient}</div>
                      <div className="text-xs text-gray-400">{appointment.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{appointment.doctor}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{appointment.date} • {appointment.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{appointment.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    appointment.status === 'confirmed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    appointment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                    appointment.status === 'completed' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                    'bg-red-500/20 text-red-400 border-red-500/30'
                  }`}>
                    {appointment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    {appointment.status === 'pending' && (
                      <>
                        <button 
                          onClick={() => handleAction(appointment.id, 'confirmed')}
                          className="text-green-400 hover:text-green-300 transition-colors p-1 rounded hover:bg-green-500/20" 
                          title="Approve"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleAction(appointment.id, 'cancelled')}
                          className="text-red-400 hover:text-red-300 transition-colors p-1 rounded hover:bg-red-500/20" 
                          title="Cancel"
                        >
                          <XCircle className="h-4 w-4" />
                        </button>
                      </>
                    )}
                    <button className="text-purple-400 hover:text-purple-300 transition-colors p-1 rounded hover:bg-purple-500/20" title="Reschedule">
                      <RefreshCw className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-300 transition-colors p-1 rounded hover:bg-gray-500/20" title="View Details">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Doctor Management Component
const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([
    { 
      id: 1, 
      name: "Dr. John Smith", 
      specialty: "Cardiology", 
      rating: 4.8, 
      patients: 156, 
      status: "active",
      experience: "15 years",
      phone: "+91 98765 43210",
      email: "dr.smith@medivolt.com",
      shift: "9:00 AM - 5:00 PM"
    },
    { 
      id: 2, 
      name: "Dr. Sarah Johnson", 
      specialty: "Neurology", 
      rating: 4.9, 
      patients: 134, 
      status: "active",
      experience: "12 years",
      phone: "+91 98765 43211",
      email: "dr.johnson@medivolt.com",
      shift: "10:00 AM - 6:00 PM"
    },
    { 
      id: 3, 
      name: "Dr. Mike Davis", 
      specialty: "Orthopedics", 
      rating: 4.7, 
      patients: 98, 
      status: "inactive",
      experience: "8 years",
      phone: "+91 98765 43212",
      email: "dr.davis@medivolt.com",
      shift: "2:00 PM - 10:00 PM"
    }
  ]);

  const handleStatusToggle = (id) => {
    setDoctors(prev => prev.map(doctor => 
      doctor.id === id 
        ? { ...doctor, status: doctor.status === 'active' ? 'inactive' : 'active' }
        : doctor
    ));
    alert('Doctor status updated successfully!');
  };

  const handleDeleteDoctor = (id) => {
    if (window.confirm('Are you sure you want to remove this doctor?')) {
      setDoctors(prev => prev.filter(doctor => doctor.id !== id));
      alert('Doctor removed successfully!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Doctor Management</h2>
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 shadow-lg">
          <Plus className="h-4 w-4" />
          <span>Add Doctor</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <motion.div 
            key={doctor.id} 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-purple-400" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                doctor.status === 'active' 
                  ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border-red-500/30'
              }`}>
                {doctor.status}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-1">{doctor.name}</h3>
            <p className="text-sm text-gray-300 mb-2">{doctor.specialty}</p>
            <p className="text-xs text-gray-400 mb-4">{doctor.experience} experience</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Rating:</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{doctor.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Patients:</span>
                <span className="text-white font-medium">{doctor.patients}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Shift:</span>
                <span className="text-white font-medium">{doctor.shift}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">{doctor.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">{doctor.email}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleStatusToggle(doctor.id)}
                className={`flex-1 py-2 px-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                  doctor.status === 'active'
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30'
                    : 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
                }`}
              >
                {doctor.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
              <button className="flex-1 bg-purple-500/20 text-purple-400 py-2 px-3 rounded-lg hover:bg-purple-500/30 transition-all duration-300 text-sm font-medium border border-purple-500/30">
                <Edit className="h-4 w-4 inline mr-1" />
                Edit
              </button>
              <button 
                onClick={() => handleDeleteDoctor(doctor.id)}
                className="flex-1 bg-red-500/20 text-red-400 py-2 px-3 rounded-lg hover:bg-red-500/30 transition-all duration-300 text-sm font-medium border border-red-500/30"
              >
                <Trash2 className="h-4 w-4 inline mr-1" />
                Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Main Hospital Admin Panel Component
const HospitalAdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'doctors', name: 'Doctors', icon: Users },
    { id: 'freelancers', name: 'Hire Experts', icon: UserPlus },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'security', name: 'Security', icon: Shield },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardOverview />;
      case 'appointments': return <AppointmentManagement />;
      case 'doctors': return <DoctorManagement />;
      case 'freelancers': return <FreelancerHiring />;
      case 'notifications': return <Notifications />;
      case 'analytics': return <Analytics />;
      case 'security': return <div className="text-center py-12"><p className="text-gray-500">Security & Access Control - Coming Soon</p></div>;
      default: return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-gradient-to-b from-gray-900 to-black shadow-2xl transition-all duration-300 flex flex-col border-r border-purple-500/20`}>
        <div className="p-4 border-b border-purple-500/20">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">MediVolt Admin</span>
              </div>
            )}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="p-1 rounded-lg hover:bg-purple-500/20 text-gray-400 hover:text-white transition-colors"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                    : 'text-gray-400 hover:bg-purple-500/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="h-5 w-5" />
                {sidebarOpen && <span className="font-medium">{item.name}</span>}
              </motion.button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-purple-500/20">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-400">admin@medivolt.com</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default HospitalAdminPanel;
