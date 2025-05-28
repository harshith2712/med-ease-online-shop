
import React from "react";
import { User, Package, Heart, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Account = () => {
  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout clicked");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 p-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
            <p className="text-gray-600">Manage your profile and orders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center">
                  <div className="h-20 w-20 bg-medBlue/10 text-medBlue rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
                  <p className="text-gray-600">john.doe@example.com</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3"
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Orders */}
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-medBlue/10 text-medBlue rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Orders</h3>
                      <p className="text-gray-600">View order history</p>
                    </div>
                  </div>
                </div>

                {/* Wishlist */}
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Wishlist</h3>
                      <p className="text-gray-600">Saved products</p>
                    </div>
                  </div>
                </div>

                {/* Settings */}
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                      <p className="text-gray-600">Account preferences</p>
                    </div>
                  </div>
                </div>

                {/* Logout */}
                <div 
                  className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={handleLogout}
                >
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                      <LogOut className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Logout</h3>
                      <p className="text-gray-600">Sign out of account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
              </div>
              <div className="p-6">
                <div className="text-center text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No orders found</p>
                  <p className="text-sm">Your order history will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
