
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-medBlue text-white flex items-center justify-center font-bold">M</div>
              <span className="text-xl font-bold text-medBlue">MedEase</span>
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 px-8 max-w-xl mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <Input 
                type="search"
                placeholder="Search medicines..."
                className="w-full pl-10"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/categories" className="hidden md:block text-gray-600 hover:text-medBlue">
              Categories
            </Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-medBlue">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-medGreen text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/account">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-medBlue">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="md:hidden mt-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <Input 
              type="search"
              placeholder="Search medicines..."
              className="w-full pl-10"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
