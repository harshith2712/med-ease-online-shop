
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Heart, Star, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { medicines } from '@/data/medicines';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = medicines.find(med => med.id === Number(id));
  
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-medium">Product not found</h2>
            <p className="mt-2 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/products" className="mt-4 inline-block text-medBlue hover:underline">
              Browse all products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm">
            <Link to="/" className="text-gray-500 hover:text-medBlue">Home</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link to="/products" className="text-gray-500 hover:text-medBlue">Products</Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link to={`/category/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-medBlue">
              {product.category}
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Product Image */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-80 object-contain"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">128 reviews</span>
              </div>
              
              <div className="text-2xl font-bold text-medBlue mb-6">${product.price.toFixed(2)}</div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {product.prescription && (
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6 flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-800">Prescription Required</h4>
                    <p className="text-sm text-amber-700">
                      This medicine requires a valid prescription. You can upload your prescription during checkout.
                    </p>
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Quantity</div>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity} 
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <div className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                    {quantity}
                  </div>
                  <button 
                    onClick={increaseQuantity} 
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-medBlue hover:bg-medBlue-dark">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" className="flex-1 border-medBlue text-medBlue hover:bg-medBlue/10">
                  <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs defaultValue="details" className="mb-12">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto py-0">
              <TabsTrigger 
                value="details" 
                className="py-2 px-4 rounded-none border-b-2 border-transparent data-[state=active]:border-b-medBlue data-[state=active]:shadow-none data-[state=active]:bg-transparent"
              >
                Details
              </TabsTrigger>
              <TabsTrigger 
                value="usage" 
                className="py-2 px-4 rounded-none border-b-2 border-transparent data-[state=active]:border-b-medBlue data-[state=active]:shadow-none data-[state=active]:bg-transparent"
              >
                Usage & Dosage
              </TabsTrigger>
              <TabsTrigger 
                value="sideeffects" 
                className="py-2 px-4 rounded-none border-b-2 border-transparent data-[state=active]:border-b-medBlue data-[state=active]:shadow-none data-[state=active]:bg-transparent"
              >
                Side Effects
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="py-2 px-4 rounded-none border-b-2 border-transparent data-[state=active]:border-b-medBlue data-[state=active]:shadow-none data-[state=active]:bg-transparent"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-6">
              <div className="prose max-w-none">
                <p>
                  {product.name} is used to treat various medical conditions. It works by targeting specific mechanisms in your body to alleviate symptoms and provide relief.
                </p>
                <p>
                  This medication belongs to a class of drugs known as {product.category.toLowerCase()}. It's available in tablet form and should be stored at room temperature away from moisture and heat.
                </p>
                <h3>Key Benefits</h3>
                <ul>
                  <li>Effective symptom relief</li>
                  <li>Clinically proven results</li>
                  <li>Convenient dosing schedule</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="usage" className="pt-6">
              <div className="prose max-w-none">
                <p>
                  Take {product.name} exactly as prescribed by your doctor. Follow all directions on your prescription label. Your doctor may occasionally change your dose.
                </p>
                <h3>Standard Dosage</h3>
                <p>
                  Adults: 1-2 tablets every 4-6 hours as needed, not exceeding 6 tablets in 24 hours.
                </p>
                <p>
                  Children: Dosage must be determined by a doctor based on age and weight.
                </p>
                <h3>Important Instructions</h3>
                <ul>
                  <li>Take with a full glass of water</li>
                  <li>May be taken with or without food</li>
                  <li>Do not crush or chew extended-release tablets</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="sideeffects" className="pt-6">
              <div className="prose max-w-none">
                <p>
                  As with all medications, {product.name} may cause side effects in some patients, although not everyone experiences them.
                </p>
                <h3>Common Side Effects</h3>
                <ul>
                  <li>Headache</li>
                  <li>Nausea</li>
                  <li>Drowsiness</li>
                  <li>Dry mouth</li>
                </ul>
                <h3>Serious Side Effects</h3>
                <p>
                  Seek immediate medical attention if you experience any of the following:
                </p>
                <ul>
                  <li>Allergic reactions (rash, itching, swelling)</li>
                  <li>Difficulty breathing</li>
                  <li>Severe dizziness</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      J
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">John D.</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">2 months ago</p>
                    <p className="mt-2">
                      This medication worked exactly as described. Fast shipping and great quality product!
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      S
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="flex text-amber-400">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="ml-2 text-sm font-medium">Sarah M.</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">1 month ago</p>
                    <p className="mt-2">
                      Good product, but took a bit longer than expected to ship. The medicine itself is effective though.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
