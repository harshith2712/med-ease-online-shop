
import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { medicines } from '@/data/medicines';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm">
            <Link to="/" className="text-gray-500 hover:text-medBlue">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">All Products</span>
          </nav>
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">All Medicines</h1>
            
            <div className="flex gap-4">
              <div className="relative">
                <Button variant="outline" className="flex items-center gap-2">
                  Sort by <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" className="md:hidden flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters - Desktop */}
            <div className="hidden md:block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-20">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pain-relief" />
                        <label
                          htmlFor="pain-relief"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Pain Relief
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="antibiotics" />
                        <label
                          htmlFor="antibiotics"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Antibiotics
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="heart-health" />
                        <label
                          htmlFor="heart-health"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Heart Health
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="vitamins" />
                        <label
                          htmlFor="vitamins"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Vitamins & Supplements
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="allergy" />
                        <label
                          htmlFor="allergy"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Allergy & Sinus
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Prescription</h3>
                  <ul className="space-y-2">
                    <li>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rx-required" />
                        <label
                          htmlFor="rx-required"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Prescription Required
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="otc" />
                        <label
                          htmlFor="otc"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Over-the-Counter
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Price Range</h3>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <span>to</span>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                  <Button className="w-full mt-3">Apply</Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="col-span-1 md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {medicines.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-medBlue text-white hover:bg-medBlue-dark">1</Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
                  <span className="px-2">...</span>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">8</Button>
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="sr-only">Next</span>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
