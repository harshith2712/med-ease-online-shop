
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  prescription: boolean;
};

const ProductCard = ({ id, name, description, price, image, category, prescription }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      <Link to={`/product/${id}`}>
        <div className="h-40 overflow-hidden relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain p-4"
          />
          {prescription && (
            <div className="absolute top-2 left-2 bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
              Rx
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-1">
          <span className="text-xs text-gray-500">{category}</span>
        </div>
        <Link to={`/product/${id}`} className="mb-2 block">
          <h3 className="font-medium text-gray-900 line-clamp-1">{name}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-medBlue-dark">${price.toFixed(2)}</span>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-medBlue h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="rounded-full h-8 w-8 p-0 flex items-center justify-center border-medBlue">
              <ShoppingCart className="h-4 w-4 text-medBlue" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
