import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, AlertTriangle, Clock, CheckCircle, XCircle, 
  User, Calendar, Stethoscope, Settings, Filter,
  MoreVertical, Eye, Trash2, Volume2, VolumeX
} from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'emergency',
      title: 'Emergency SOS Alert',
      message: 'Patient John Doe has triggered emergency SOS. Location: Main Street, Mumbai.',
      time: '2 minutes ago',
      read: false,
      priority: 'high',
      actionRequired: true
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Dr. Smith has an appointment with Sarah Wilson in 15 minutes.',
      time: '13 minutes ago',
      read: false,
      priority: 'medium',
      actionRequired: false
    },
    {
      id: 3,
      type: 'doctor_application',
      title: 'New Doctor Application',
      message: 'Dr. Rajesh Kumar has applied for the Cardiology position.',
      time: '1 hour ago',
      read: true,
      priority: 'medium',
      actionRequired: true
    },
    {
      id: 4,
      type: 'system',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will begin at 2:00 AM tonight.',
      time: '3 hours ago',
      read: true,
      priority: 'low',
      actionRequired: false
    },
    {
      id: 5,
      type: 'emergency',
      title: 'Critical Patient Alert',
      message: 'Patient in ICU Room 205 requires immediate attention.',
      time: '5 hours ago',
      read: true,
      priority: 'high',
      actionRequired: true
    }
  ]);

  const [settings, setSettings] = useState({
    emergencyAlerts: true,
    appointmentReminders: true,
    doctorApplications: true,
    systemNotifications: false,
    emailNotifications: true,
    smsNotifications: false,
    soundEnabled: true
  });

  const filterOptions = [
    { value: 'all', label: 'All Notifications' },
    { value: 'unread', label: 'Unread' },
    { value: 'emergency', label: 'Emergency' },
    { value: 'appointment', label: 'Appointments' },
    { value: 'doctor_application', label: 'Doctor Applications' },
    { value: 'system', label: 'System' }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'emergency':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'appointment':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case 'doctor_application':
        return <Stethoscope className="h-5 w-5 text-green-500" />;
      case 'system':
        return <Settings className="h-5 w-5 text-gray-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const NotificationCard = ({ notification }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border-l-4 rounded-lg p-4 mb-4 ${getPriorityColor(notification.priority)} ${
        !notification.read ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <div className="mt-1">
            {getNotificationIcon(notification.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                {notification.title}
              </h4>
              {!notification.read && (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
              {notification.actionRequired && (
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">
                  Action Required
                </span>
              )}
            </div>
            <p className={`text-sm ${!notification.read ? 'text-gray-700' : 'text-gray-600'} mb-2`}>
              {notification.message}
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{notification.time}</span>
              </span>
              <span className={`px-2 py-1 rounded-full ${
                notification.priority === 'high' ? 'bg-red-100 text-red-700' :
                notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {notification.priority} priority
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          {!notification.read && (
            <button
              onClick={() => markAsRead(notification.id)}
              className="text-blue-600 hover:text-blue-700 p-1"
              title="Mark as read"
            >
              <CheckCircle className="h-4 w-4" />
            </button>
          )}
          <button
            className="text-gray-600 hover:text-gray-700 p-1"
            title="View details"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={() => deleteNotification(notification.id)}
            className="text-red-600 hover:text-red-700 p-1"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const NotificationSettings = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Emergency Alerts</p>
            <p className="text-sm text-gray-600">Get notified about emergency SOS triggers</p>
          </div>
          <button
            onClick={() => setSettings(prev => ({ ...prev, emergencyAlerts: !prev.emergencyAlerts }))}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.emergencyAlerts ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.emergencyAlerts ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Appointment Reminders</p>
            <p className="text-sm text-gray-600">Reminders for upcoming appointments</p>
          </div>
          <button
            onClick={() => setSettings(prev => ({ ...prev, appointmentReminders: !prev.appointmentReminders }))}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.appointmentReminders ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.appointmentReminders ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Doctor Applications</p>
            <p className="text-sm text-gray-600">New doctor and expert applications</p>
          </div>
          <button
            onClick={() => setSettings(prev => ({ ...prev, doctorApplications: !prev.doctorApplications }))}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.doctorApplications ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.doctorApplications ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Sound Notifications</p>
            <p className="text-sm text-gray-600">Play sound for notifications</p>
          </div>
          <button
            onClick={() => setSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.soundEnabled ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>
      </div>
    </div>
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Notifications & Alerts</h2>
          {unreadCount > 0 && (
            <p className="text-sm text-gray-600 mt-1">{unreadCount} unread notifications</p>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
            className={`p-2 rounded-lg transition-colors ${
              settings.soundEnabled 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-gray-100 text-gray-600'
            }`}
            title={settings.soundEnabled ? 'Mute notifications' : 'Enable sound'}
          >
            {settings.soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Mark All as Read
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Notifications List */}
        <div className="lg:col-span-3 space-y-6">
          {/* Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto">
            <Filter className="h-4 w-4 text-gray-500 flex-shrink-0" />
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === option.value
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {option.label}
                {option.value === 'unread' && unreadCount > 0 && (
                  <span className="ml-1 bg-blue-500 text-white text-xs rounded-full px-1">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Notifications */}
          <div>
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))
            ) : (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No notifications found</p>
              </div>
            )}
          </div>
        </div>

        {/* Settings Sidebar */}
        <div className="lg:col-span-1">
          <NotificationSettings />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
