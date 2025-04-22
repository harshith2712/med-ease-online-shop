
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock cart items
const cartItems = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    image: "/placeholder.svg",
    price: 5.99,
    quantity: 2,
    prescription: false
  },
  {
    id: 4,
    name: "Vitamin D3 1000 IU",
    image: "/placeholder.svg",
    price: 9.99,
    quantity: 1,
    prescription: false
  }
];

const Cart = () => {
  const [items, setItems] = useState(cartItems);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };
  
  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Shopping Cart</h1>
          
          {items.length === 0 ? (
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Looks like you haven't added any medicines to your cart yet.</p>
              <Link to="/products">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Subtotal
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img className="h-10 w-10 object-contain" src={item.image} alt={item.name} />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                  {item.prescription && (
                                    <div className="text-xs text-amber-600 mt-1">Prescription required</div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                                  className="p-1 rounded-full text-gray-600 hover:bg-gray-100"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <span className="mx-2 w-8 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                                  className="p-1 rounded-full text-gray-600 hover:bg-gray-100"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button 
                                onClick={() => removeItem(item.id)} 
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Link to="/products">
                    <Button variant="outline" className="flex items-center space-x-2">
                      <ChevronLeft className="h-4 w-4" />
                      <span>Continue Shopping</span>
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={() => setItems([])}>Clear Cart</Button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-lg font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Total</span>
                        <span className="font-bold text-lg">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-medBlue hover:bg-medBlue-dark">
                    Proceed to Checkout
                  </Button>
                  
                  {items.some(item => item.prescription) && (
                    <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-sm">
                      <p className="font-medium text-amber-800 mb-1">Prescription Required</p>
                      <p className="text-amber-700">
                        One or more items in your cart require a valid prescription. You'll be prompted to upload it during checkout.
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">We Accept</h3>
                    <div className="flex space-x-2">
                      <div className="p-2 bg-gray-100 rounded">
                        <span className="text-xs">VISA</span>
                      </div>
                      <div className="p-2 bg-gray-100 rounded">
                        <span className="text-xs">MASTERCARD</span>
                      </div>
                      <div className="p-2 bg-gray-100 rounded">
                        <span className="text-xs">PAYPAL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
