import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, MessageSquare, Calendar, User, Tag, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useFeedback } from '../context/FeedbackContext';
import FeedbackDetailsModal from './FeedbackDetailsModal';

const FeedbackList = () => {
  const { feedbackItems } = useFeedback();
  const [sortBy, setSortBy] = useState('newest');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const statusColors = {
    'Planned': 'bg-blue-500',
    'In Progress': 'bg-yellow-500',
    'Completed': 'bg-green-500',
    'Rejected': 'bg-red-500'
  };

  const priorityColors = {
    'high': 'border-l-red-500',
    'medium': 'border-l-yellow-500',
    'low': 'border-l-green-500'
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6 text-glow">
          Beer Reviews & Feedback
        </h2>
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-3 glass-ultra rounded-2xl border border-gray-200 dark:border-gray-700 magnetic-hover"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
            <option value="comments">Most Discussed</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 glass rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <option value="all">All Status</option>
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </motion.div>

      {/* Feedback Items */}
      <div className="space-y-6">
        <AnimatePresence>
          {feedbackItems
            .filter(item => filterStatus === 'all' || item.status === filterStatus)
            .map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-ultra rounded-3xl p-8 border-l-4 ${priorityColors[item.priority]} cursor-pointer group card-hover-lift magnetic-hover`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                </div>

                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColors[item.status]}`}
                >
                  {item.status}
                </motion.span>
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag size={14} />
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Upvote */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors group"
                  >
                    <ThumbsUp size={16} className="text-green-600 group-hover:text-green-700" />
                    <span className="text-green-600 font-medium">{item.upvotes}</span>
                  </motion.button>

                  {/* Downvote */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group"
                  >
                    <ThumbsDown size={16} className="text-red-600 group-hover:text-red-700" />
                    <span className="text-red-600 font-medium">{item.downvotes}</span>
                  </motion.button>

                  {/* Comments */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                  >
                    <MessageSquare size={16} className="text-blue-600 group-hover:text-blue-700" />
                    <span className="text-blue-600 font-medium">{item.comments}</span>
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedFeedback(item);
                    setShowDetailsModal(true);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Feedback Details Modal */}
      {showDetailsModal && selectedFeedback && (
        <FeedbackDetailsModal
          feedback={selectedFeedback}
          isOpen={showDetailsModal}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedFeedback(null);
          }}
        />
      )}
    </div>
  );
};

export default FeedbackList;