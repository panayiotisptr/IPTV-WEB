import React from 'react';
import { Category } from '../types';

interface CategoryListProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold text-white">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => onCategoryChange('all')}
        >
          All Channels
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;