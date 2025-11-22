import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MessageSquare, TrendingUp, Calendar, Award } from 'lucide-react';

const ProductDetailsModal = ({ product, isOpen, onClose, onFeedbackClick }) => {
  if (!product) return null;

  const statusColors = {
    'Available': 'bg-green-500',
    'Limited Edition': 'bg-yellow-500',
    'Coming Soon': 'bg-blue-500',
    'Archived': 'bg-gray-500'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 glass rounded-full text-white"
              >
                <X size={24} />
              </motion.button>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-white">{product.name}</h1>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColors[product.status]}`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-gray-200 text-lg">{product.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center glass rounded-2xl p-4"
                >
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{product.rating}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center glass rounded-2xl p-4"
                >
                  <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{product.reviewCount}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Reviews</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center glass rounded-2xl p-4"
                >
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">+{product.growth}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Growth</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center glass rounded-2xl p-4"
                >
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{product.category}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Type</div>
                </motion.div>
              </div>

              {/* Beer Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-2xl p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Beer Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tasting Notes</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {product.category === 'IPA' && 'Bold hoppy flavor with citrus notes and a balanced malty backbone.'}
                      {product.category === 'Wheat Beer' && 'Light and refreshing with a smooth wheat character and subtle spice.'}
                      {product.category === 'Stout' && 'Rich and creamy with notes of chocolate, coffee, and roasted malt.'}
                      {product.category === 'Lager' && 'Clean and crisp with a light body and refreshing finish.'}
                      {product.category === 'Pilsner' && 'Light golden color with a delicate hop aroma and clean taste.'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Brewing Info</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">ABV:</span>
                        <span className="font-medium">
                          {product.category === 'IPA' ? '6.2%' : 
                           product.category === 'Stout' ? '7.1%' : 
                           product.category === 'Wheat Beer' ? '4.8%' : '5.2%'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">IBU:</span>
                        <span className="font-medium">
                          {product.category === 'IPA' ? '65' : 
                           product.category === 'Stout' ? '35' : 
                           product.category === 'Wheat Beer' ? '15' : '25'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Serving Temp:</span>
                        <span className="font-medium">6-8°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onFeedbackClick}
                  className="flex-1 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-semibold text-lg neon-glow"
                >
                  Share Your Experience
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 glass border border-gray-200 dark:border-gray-700 rounded-2xl font-semibold text-lg"
                >
                  Find in Stores
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailsModal;