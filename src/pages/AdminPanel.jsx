import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Users, UserPlus, Search, Edit, Trash2, Shield, AlertCircle } from 'lucide-react';

export default function AdminPanel() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'user',
    status: 'active'
  });
  const [editUser, setEditUser] = useState({
    name: '',
    email: '',
    role: '',
    status: ''
  });

  // Redirect if not authenticated or not admin
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (user?.role !== 'admin') {
      navigate('/dashboard');
    }
  }, [isAuthenticated, user, navigate]);

  // Fetch users data
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        // This would be an API call in a real application
        // For now, we'll use mock data
        const mockUsers = [
          { id: 1, name: 'Admin User', email: 'admin@medivolt.com', role: 'admin', status: 'active', lastLogin: '2023-06-15T10:30:00', createdAt: '2023-01-01T00:00:00' },
          { id: 2, name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active', lastLogin: '2023-06-14T08:45:00', createdAt: '2023-02-15T00:00:00' },
          { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', lastLogin: '2023-06-10T14:20:00', createdAt: '2023-03-20T00:00:00' },
          { id: 4, name: 'Robert Johnson', email: 'robert@example.com', role: 'user', status: 'inactive', lastLogin: '2023-05-28T11:15:00', createdAt: '2023-04-05T00:00:00' },
          { id: 5, name: 'Emily Davis', email: 'emily@example.com', role: 'moderator', status: 'active', lastLogin: '2023-06-13T16:30:00', createdAt: '2023-04-10T00:00:00' },
          { id: 6, name: 'Michael Wilson', email: 'michael@example.com', role: 'user', status: 'active', lastLogin: '2023-06-12T09:45:00', createdAt: '2023-04-15T00:00:00' },
          { id: 7, name: 'Sarah Brown', email: 'sarah@example.com', role: 'user', status: 'pending', lastLogin: null, createdAt: '2023-06-01T00:00:00' },
          { id: 8, name: 'David Miller', email: 'david@example.com', role: 'user', status: 'active', lastLogin: '2023-06-11T13:20:00', createdAt: '2023-05-05T00:00:00' },
          { id: 9, name: 'Lisa Taylor', email: 'lisa@example.com', role: 'user', status: 'active', lastLogin: '2023-06-09T10:10:00', createdAt: '2023-05-12T00:00:00' },
          { id: 10, name: 'James Anderson', email: 'james@example.com', role: 'user', status: 'blocked', lastLogin: '2023-05-20T15:45:00', createdAt: '2023-05-15T00:00:00' },
        ];
        setUsers(mockUsers);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Handle user edit
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditUser({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });
    setIsEditModalOpen(true);
  };

  // Handle user delete
  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  // Save edited user
  const saveEditedUser = () => {
    // In a real app, this would be an API call
    const updatedUsers = users.map(u => {
      if (u.id === selectedUser.id) {
        return { ...u, ...editUser };
      }
      return u;
    });
    setUsers(updatedUsers);
    setIsEditModalOpen(false);
  };

  // Confirm user deletion
  const confirmDeleteUser = () => {
    // In a real app, this would be an API call
    const updatedUsers = users.filter(u => u.id !== selectedUser.id);
    setUsers(updatedUsers);
    setIsDeleteModalOpen(false);
  };

  // Add new user
  const addNewUser = () => {
    // In a real app, this would be an API call
    const newUserId = Math.max(...users.map(u => u.id)) + 1;
    const userToAdd = {
      id: newUserId,
      ...newUser,
      lastLogin: null,
      createdAt: new Date().toISOString()
    };
    setUsers([...users, userToAdd]);
    setNewUser({
      name: '',
      email: '',
      role: 'user',
      status: 'active'
    });
    setIsAddUserModalOpen(false);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'inactive':
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30';
      case 'blocked':
        return 'bg-red-500/20 text-red-300 border border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  // Get role badge class
  const getRoleBadgeClass = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
      case 'moderator':
        return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
      case 'user':
        return 'bg-primary-500/20 text-primary-300 border border-primary-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  if (!isAuthenticated || user?.role !== 'admin') {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-primary-900/10 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-b border-gray-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              MediVolt Admin
            </h1>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm text-gray-400">Logged in as</div>
                <div className="font-semibold text-white">{user?.name}</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-primary-400" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-white">{users.length}</div>
                <div className="text-gray-400 text-sm">Total Users</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-white">{users.filter(u => u.status === 'active').length}</div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-accent-400" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-white">{users.filter(u => u.role === 'admin').length}</div>
                <div className="text-gray-400 text-sm">Admins</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-white">{users.filter(u => u.status === 'pending').length}</div>
                <div className="text-gray-400 text-sm">Pending</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-700/50 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`${activeTab === 'users' ? 'border-primary-500 text-primary-400' : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base transition-colors`}
              onClick={() => setActiveTab('users')}
            >
              <Users className="inline-block h-5 w-5 mr-2" />
              Users Management
            </button>
            {/* Additional tabs can be added here */}
          </nav>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'users' && (
            <div>
              {/* Header with search and add user */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
                <div className="relative w-full md:w-80">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-12 pr-4 py-3 border border-gray-600 rounded-xl leading-5 bg-gray-800/50 backdrop-blur-sm placeholder-gray-400 text-white focus:outline-none focus:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setIsAddUserModalOpen(true)}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 w-full md:w-auto hover:scale-105"
                >
                  <UserPlus className="h-5 w-5" />
                  Add New User
                </button>
              </div>

              {/* Error message */}
              {error && (
                <div className="rounded-xl bg-red-900/20 border border-red-500/30 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-300">{error}</h3>
                    </div>
                  </div>
                </div>
              )}

              {/* Users table */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 overflow-hidden rounded-2xl">
                {isLoading ? (
                  <div className="p-12 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
                    <p className="mt-4 text-gray-300">Loading users...</p>
                  </div>
                ) : filteredUsers.length === 0 ? (
                  <div className="p-12 text-center">
                    <p className="text-gray-400">No users found matching your search criteria.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700/50">
                      <thead className="bg-gray-800/50">
                        <tr>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            User
                          </th>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Role
                          </th>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Last Login
                          </th>
                          <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Created At
                          </th>
                          <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-900/20 divide-y divide-gray-700/30">
                        {filteredUsers.map((user) => (
                          <tr key={user.id} className="hover:bg-gray-800/30 transition-colors">
                            <td className="px-6 py-5 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-semibold text-white">{user.name}</div>
                                  <div className="text-sm text-gray-400">{user.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap">
                              <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeClass(user.role)}`}>
                                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap">
                              <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(user.status)}`}>
                                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-300">
                              {formatDate(user.lastLogin)}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-300">
                              {formatDate(user.createdAt)}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleEditUser(user)}
                                className="text-primary-400 hover:text-primary-300 mr-4 p-2 rounded-lg hover:bg-primary-500/10 transition-all"
                              >
                                <Edit className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => handleDeleteUser(user)}
                                className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/10 transition-all"
                                disabled={user.role === 'admin'}
                              >
                                <Trash2 className={`h-5 w-5 ${user.role === 'admin' ? 'opacity-30 cursor-not-allowed' : ''}`} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit User Modal */}
      {isEditModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Edit User
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editUser.name}
                          onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editUser.email}
                          onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                          id="role"
                          name="role"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editUser.role}
                          onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
                          disabled={selectedUser?.role === 'admin'}
                        >
                          <option value="user">User</option>
                          <option value="moderator">Moderator</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                          id="status"
                          name="status"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={editUser.status}
                          onChange={(e) => setEditUser({ ...editUser, status: e.target.value })}
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="pending">Pending</option>
                          <option value="blocked">Blocked</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={saveEditedUser}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete User Modal */}
      {isDeleteModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Delete User
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete the user <span className="font-medium">{selectedUser?.name}</span>? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={confirmDeleteUser}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      {isAddUserModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Add New User
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="new-name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          name="new-name"
                          id="new-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={newUser.name}
                          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="new-email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="new-email"
                          id="new-email"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={newUser.email}
                          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="new-role" className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                          id="new-role"
                          name="new-role"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={newUser.role}
                          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                        >
                          <option value="user">User</option>
                          <option value="moderator">Moderator</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="new-status" className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                          id="new-status"
                          name="new-status"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={newUser.status}
                          onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="pending">Pending</option>
                          <option value="blocked">Blocked</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={addNewUser}
                >
                  Add User
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsAddUserModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}