import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Plus } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FeedbackForm from '../components/FeedbackForm';
import ProductDetailsModal from '../components/ProductDetailsModal';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const categories = ['all', 'IPA', 'Lager', 'Stout', 'Wheat Beer', 'Pilsner'];

  const products = [
    {
      id: 1,
      name: 'Kingfisher Ultra',
      description: 'Premium lager with 4.8% alcohol content. Smooth, crisp taste with balanced hop character.',
      image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop',
      rating: 4.2,
      reviewCount: 1247,
      feedbackCount: 342,
      growth: 8,
      status: 'Available',
      category: 'Lager'
    },
    {
      id: 2,
      name: 'Bira 91 White',
      description: 'Belgian-style wheat beer with coriander and orange peel. Light, refreshing with citrus notes.',
      image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop',
      rating: 4.5,
      reviewCount: 892,
      feedbackCount: 234,
      growth: 15,
      status: 'Available',
      category: 'Wheat Beer'
    },
    {
      id: 3,
      name: 'Simba Stout',
      description: 'Rich, dark stout with roasted malt flavors. Notes of chocolate and coffee with creamy texture.',
      image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=300&fit=crop',
      rating: 4.6,
      reviewCount: 567,
      feedbackCount: 178,
      growth: 12,
      status: 'Available',
      category: 'Stout'
    },
    {
      id: 4,
      name: 'Haywards 5000',
      description: 'Strong beer with 7% alcohol content. Full-bodied with robust malt character and hoppy finish.',
      image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=300&fit=crop',
      rating: 4.1,
      reviewCount: 1834,
      feedbackCount: 456,
      growth: 6,
      status: 'Available',
      category: 'Lager'
    },
    {
      id: 5,
      name: 'Toit Basmati Blonde Ale',
      description: 'Craft blonde ale brewed with basmati rice. Light, smooth with subtle grain sweetness.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      rating: 4.7,
      reviewCount: 423,
      feedbackCount: 134,
      growth: 22,
      status: 'Limited Edition',
      category: 'IPA'
    },
    {
      id: 6,
      name: 'Godfather Super 8',
      description: 'Premium strong beer with 8% alcohol. Complex malt profile with balanced bitterness.',
      image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400&h=300&fit=crop',
      rating: 4.3,
      reviewCount: 678,
      feedbackCount: 189,
      growth: 10,
      status: 'Available',
      category: 'Lager'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="our-beers" className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            Our Beer Collection
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover Vairagi Breweries' craft beers and share your tasting experience
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-8 space-x-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-8 mb-12"
        >
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search beers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-5 glass rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 transition-all shadow-lg text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-5 glass rounded-2xl border border-gray-200 dark:border-gray-700 focus:border-amber-500 transition-all shadow-lg text-lg"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-3 glass rounded-2xl p-3 shadow-lg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-amber-900/20'
              }`}
            >
              <Grid size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-amber-900/20'
              }`}
            >
              <List size={20} />
            </motion.button>
          </div>

          {/* Add Product Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-semibold flex items-center space-x-3 neon-glow shadow-xl text-lg"
          >
            <Plus size={20} />
            <span>Add Beer</span>
          </motion.button>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              onFeedbackClick={(product) => {
                setSelectedProduct(product);
                setShowFeedbackForm(true);
              }}
              onViewDetails={(product) => {
                setSelectedProduct(product);
                setShowProductDetails(true);
              }}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No beers found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}

        {/* Floating Feedback Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowFeedbackForm(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center neon-glow z-40"
        >
          <Plus size={24} />
        </motion.button>
      </div>

      {/* Feedback Form Modal */}
      <FeedbackForm
        isOpen={showFeedbackForm}
        onClose={() => {
          setShowFeedbackForm(false);
          setSelectedProduct(null);
        }}
        productName={selectedProduct ? selectedProduct.name : "Beer Tasting Experience"}
      />

      {/* Product Details Modal */}
      {showProductDetails && selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={showProductDetails}
          onClose={() => {
            setShowProductDetails(false);
            setSelectedProduct(null);
          }}
          onFeedbackClick={() => {
            setShowProductDetails(false);
            setShowFeedbackForm(true);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;