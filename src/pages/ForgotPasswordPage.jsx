import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    // Basic validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setLoading(true);

    try {
      // This would normally call an API endpoint
      // await authAPI.forgotPassword(email);
      
      // For demo purposes, we'll just simulate a successful request
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1500);
    } catch (error) {
      setError('Failed to send password reset email. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4">
          <h2 className="text-2xl font-bold text-white text-center">MediVolt</h2>
        </div>
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Reset Password</h2>
            <p className="text-gray-600 mt-2">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}

          {success ? (
            <div className="text-center">
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Password reset link sent!
              </div>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to <strong>{email}</strong>. Please check your email and follow the instructions to reset your password.
              </p>
              <Link 
                to="/login" 
                className="inline-flex items-center text-blue-600 hover:text-blue-500"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </Button>
              </div>

              <div className="text-center mt-4">
                <Link 
                  to="/login" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-500"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}