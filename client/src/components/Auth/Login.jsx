import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
            {/* Google Sign-In Button (Integration required) */}
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-4">
            Sign in with Google
            </button>
            <p className="text-gray-600 mb-4 text-center">Or log in with your email</p>
            <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Email"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Password"
                required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Log In
            </button>
            </form>
        </div>
    </div>
  );
};

export default Login;
