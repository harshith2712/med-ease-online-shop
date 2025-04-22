
import React from 'react';
import { Link } from 'react-router-dom';

type CategoryCardProps = {
  name: string;
  icon: string;
  count: number;
};

const CategoryCard = ({ name, icon, count }: CategoryCardProps) => {
  return (
    <Link to={`/category/${name.toLowerCase()}`}>
      <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
        <div className="w-12 h-12 mb-2 flex items-center justify-center">
          <img src={icon} alt={name} className="w-10 h-10" />
        </div>
        <h3 className="text-sm font-medium text-center">{name}</h3>
        <span className="text-xs text-gray-500">{count} items</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
