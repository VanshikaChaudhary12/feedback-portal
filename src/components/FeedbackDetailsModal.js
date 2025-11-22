import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ThumbsUp, ThumbsDown, MessageSquare, Calendar, User, Tag, Clock } from 'lucide-react';

const FeedbackDetailsModal = ({ feedback, isOpen, onClose }) => {
  if (!feedback) return null;

  const statusColors = {
    'Planned': 'bg-blue-500',
    'In Progress': 'bg-yellow-500',
    'Completed': 'bg-green-500',
    'Rejected': 'bg-red-500'
  };

  const priorityColors = {
    'high': 'text-red-500 bg-red-50 dark:bg-red-900/20',
    'medium': 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
    'low': 'text-green-500 bg-green-50 dark:bg-green-900/20'
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
            className="relative w-full max-w-3xl premium-card rounded-3xl p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColors[feedback.status]}`}>
                    {feedback.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors[feedback.priority]}`}>
                    {feedback.priority} priority
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {feedback.title}
                </h2>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              >
                <User size={16} />
                <span className="text-sm font-medium">{feedback.author}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              >
                <Calendar size={16} />
                <span className="text-sm">{feedback.date}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              >
                <Tag size={16} />
                <span className="text-sm">{feedback.category}</span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Feedback Details
              </h3>
              <div className="glass rounded-2xl p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {feedback.description}
                </p>
              </div>
            </motion.div>

            {/* Engagement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              <div className="text-center glass rounded-2xl p-4">
                <ThumbsUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {feedback.upvotes || 0}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Upvotes</div>
              </div>
              
              <div className="text-center glass rounded-2xl p-4">
                <ThumbsDown className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {feedback.downvotes || 0}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Downvotes</div>
              </div>
              
              <div className="text-center glass rounded-2xl p-4">
                <MessageSquare className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {feedback.comments || 0}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Comments</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl font-semibold flex items-center justify-center space-x-2"
              >
                <ThumbsUp size={20} />
                <span>Upvote</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold flex items-center justify-center space-x-2"
              >
                <MessageSquare size={20} />
                <span>Add Comment</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 py-3 glass border border-gray-200 dark:border-gray-700 rounded-2xl font-semibold"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackDetailsModal;