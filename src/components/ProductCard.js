import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, TrendingUp, Eye, Heart } from 'lucide-react';

const ProductCard = ({ product, index, onFeedbackClick, onViewDetails }) => {
  const [isLiked, setIsLiked] = useState(false);

  const statusColors = {
    'Active': 'bg-green-500',
    'Beta': 'bg-yellow-500',
    'Coming Soon': 'bg-blue-500',
    'Archived': 'bg-gray-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -16, 
        scale: 1.04,
        rotateY: 8,
        rotateX: 2
      }}
      className="group premium-card rounded-3xl p-6 cursor-pointer overflow-hidden relative transform-gpu perspective-1000 card-hover-lift magnetic-hover"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 aurora-bg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 to-orange-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating Orbs */}
      <div className="floating-orb w-16 h-16 -top-8 -right-8" />
      <div className="floating-orb w-12 h-12 -bottom-6 -left-6" style={{animationDelay: '2s'}} />
      
      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-all duration-700 filter group-hover:brightness-110 group-hover:contrast-110"
          whileHover={{ scale: 1.2, rotateZ: 3, rotateY: 5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Enhanced Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColors[product.status]} backdrop-blur-sm`}
          >
            {product.status}
          </motion.span>
        </div>

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 glass rounded-full"
        >
          <Heart 
            size={16} 
            className={`transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} 
          />
        </motion.button>

        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <motion.button
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium flex items-center space-x-2"
          >
            <Eye size={16} />
            <span>View Details</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-300">
          {product.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Star
                  size={16}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </motion.div>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {product.rating}
          </span>
          <span className="text-xs text-gray-500">
            ({product.reviewCount} reviews)
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400"
            >
              <MessageSquare size={14} />
              <span>{product.feedbackCount}</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400"
            >
              <TrendingUp size={14} />
              <span className="text-green-500">+{product.growth}%</span>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFeedbackClick(product)}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Give Feedback
          </motion.button>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

export default ProductCard;