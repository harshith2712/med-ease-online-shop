
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-medBlue text-white flex items-center justify-center font-bold">M</div>
              <span className="text-xl font-bold text-medBlue">MedEase</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Your trusted online pharmacy for safe and convenient medication delivery.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-medBlue">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-medBlue">Products</Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-600 hover:text-medBlue">Categories</Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-gray-600 hover:text-medBlue">Cart</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-medBlue">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-medBlue">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-600 hover:text-medBlue">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-gray-600 hover:text-medBlue">Return Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Contact Info</h3>
            <p className="text-sm text-gray-600 mb-2">Email: support@medease.com</p>
            <p className="text-sm text-gray-600 mb-2">Phone: +1 (555) 123-4567</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-medBlue">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-medBlue">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-medBlue">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-xs text-center text-gray-500">
            © {new Date().getFullYear()} MedEase. All rights reserved. This is a demo project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
