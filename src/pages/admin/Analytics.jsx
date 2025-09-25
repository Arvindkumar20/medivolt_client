import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, TrendingDown, Users, Calendar, DollarSign, Clock,
  BarChart3, PieChart, Download, Filter, Star, Activity
} from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('week');

  // Sample analytics data
  const overviewStats = [
    { title: "Total Patients", value: "1,247", change: "+12%", trend: "up", icon: Users },
    { title: "Appointments", value: "856", change: "+8%", trend: "up", icon: Calendar },
    { title: "Revenue", value: "₹4,56,780", change: "+15%", trend: "up", icon: DollarSign },
    { title: "Avg Wait Time", value: "18 min", change: "-5%", trend: "down", icon: Clock }
  ];

  const topDoctors = [
    { name: "Dr. John Smith", specialty: "Cardiology", appointments: 45, rating: 4.9, revenue: "₹67,500" },
    { name: "Dr. Sarah Johnson", specialty: "Neurology", appointments: 38, rating: 4.8, revenue: "₹57,000" },
    { name: "Dr. Mike Davis", specialty: "Orthopedics", appointments: 32, rating: 4.7, revenue: "₹48,000" },
    { name: "Dr. Lisa Wilson", specialty: "Pediatrics", appointments: 29, rating: 4.9, revenue: "₹43,500" },
    { name: "Dr. James Brown", specialty: "Dermatology", appointments: 25, rating: 4.6, revenue: "₹37,500" }
  ];

  const appointmentTrends = [
    { day: "Mon", appointments: 45, revenue: 67500 },
    { day: "Tue", appointments: 52, revenue: 78000 },
    { day: "Wed", appointments: 38, revenue: 57000 },
    { day: "Thu", appointments: 61, revenue: 91500 },
    { day: "Fri", appointments: 48, revenue: 72000 },
    { day: "Sat", appointments: 35, revenue: 52500 },
    { day: "Sun", appointments: 28, revenue: 42000 }
  ];

  const specialtyDistribution = [
    { specialty: "Cardiology", percentage: 25, color: "bg-red-500" },
    { specialty: "Neurology", percentage: 20, color: "bg-purple-500" },
    { specialty: "Orthopedics", percentage: 18, color: "bg-blue-500" },
    { specialty: "Pediatrics", percentage: 15, color: "bg-green-500" },
    { specialty: "Dermatology", percentage: 12, color: "bg-yellow-500" },
    { specialty: "Others", percentage: 10, color: "bg-gray-500" }
  ];

  const StatCard = ({ stat, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          <div className="flex items-center mt-2">
            {stat.trend === 'up' ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last {timeRange}</span>
          </div>
        </div>
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <stat.icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </motion.div>
  );

  const AppointmentChart = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Appointment Trends</h3>
        <div className="flex items-center space-x-2">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {appointmentTrends.map((day, index) => (
          <div key={day.day} className="flex items-center space-x-4">
            <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Appointments: {day.appointments}</span>
                <span className="text-sm text-gray-600">Revenue: ₹{day.revenue.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(day.appointments / 70) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TopDoctorsTable = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Performing Doctors</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-sm font-medium text-gray-600">Doctor</th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">Appointments</th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">Rating</th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topDoctors.map((doctor, index) => (
              <tr key={doctor.name} className="border-b border-gray-100">
                <td className="py-3">
                  <div>
                    <p className="font-medium text-gray-900">{doctor.name}</p>
                    <p className="text-sm text-gray-600">{doctor.specialty}</p>
                  </div>
                </td>
                <td className="py-3">
                  <span className="font-medium text-gray-900">{doctor.appointments}</span>
                </td>
                <td className="py-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900">{doctor.rating}</span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="font-medium text-gray-900">{doctor.revenue}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const SpecialtyDistribution = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Appointments by Specialty</h3>
      
      <div className="space-y-4">
        {specialtyDistribution.map((item, index) => (
          <div key={item.specialty} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
              <span className="text-sm font-medium text-gray-900">{item.specialty}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-600 w-8">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const RevenueMetrics = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue Breakdown</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-2xl font-bold text-green-600">₹4,56,780</p>
          <p className="text-sm text-gray-600">Total Revenue</p>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">₹65,254</p>
          <p className="text-sm text-gray-600">Avg per Day</p>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <p className="text-2xl font-bold text-purple-600">₹533</p>
          <p className="text-sm text-gray-600">Avg per Patient</p>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <p className="text-2xl font-bold text-orange-600">18%</p>
          <p className="text-sm text-gray-600">Growth Rate</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <div className="flex items-center space-x-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <StatCard key={stat.title} stat={stat} index={index} />
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AppointmentChart />
        <SpecialtyDistribution />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopDoctorsTable />
        </div>
        <RevenueMetrics />
      </div>
    </div>
  );
};

export default Analytics;
