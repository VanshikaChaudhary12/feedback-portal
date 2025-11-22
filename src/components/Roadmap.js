import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, Circle, AlertCircle } from 'lucide-react';

const Roadmap = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('Q1 2024');

  const roadmapData = {
    'Q1 2024': [
      {
        id: 1,
        title: 'Mango IPA Launch',
        description: 'New seasonal IPA with fresh mango flavors and tropical hop profile',
        status: 'completed',
        priority: 'high',
        votes: 287,
        estimatedCompletion: '2024-02-15',
        team: 'Brewing'
      },
      {
        id: 2,
        title: 'Reduce Kingfisher Bitterness',
        description: 'Adjust hop schedule to create smoother, more balanced flavor profile',
        status: 'in-progress',
        priority: 'high',
        votes: 156,
        estimatedCompletion: '2024-03-30',
        team: 'R&D'
      },
      {
        id: 3,
        title: 'Chocolate Stout Recipe',
        description: 'Enhance Simba Stout with premium chocolate malt and cocoa nibs',
        status: 'planned',
        priority: 'medium',
        votes: 89,
        estimatedCompletion: '2024-03-15',
        team: 'Brewing'
      }
    ],
    'Q2 2024': [
      {
        id: 4,
        title: 'Low-Alcohol Wheat Beer',
        description: 'Develop 2.5% ABV wheat beer for health-conscious consumers',
        status: 'planned',
        priority: 'high',
        votes: 234,
        estimatedCompletion: '2024-05-20',
        team: 'Innovation'
      },
      {
        id: 5,
        title: 'Craft Beer Taproom',
        description: 'Open exclusive taproom featuring limited edition brews',
        status: 'planned',
        priority: 'medium',
        votes: 345,
        estimatedCompletion: '2024-06-10',
        team: 'Operations'
      }
    ]
  };

  const statusConfig = {
    completed: {
      icon: CheckCircle,
      color: 'text-green-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      label: 'Completed'
    },
    'in-progress': {
      icon: Clock,
      color: 'text-yellow-500',
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      label: 'In Progress'
    },
    planned: {
      icon: Circle,
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      label: 'Planned'
    }
  };

  const priorityColors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6 text-glow">
          Brewing Roadmap
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          See what new beers we're brewing next. Your feedback shapes our recipes.
        </p>
      </motion.div>

      {/* Quarter Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="flex space-x-3 glass-ultra rounded-3xl p-4 shadow-2xl">
          {Object.keys(roadmapData).map((quarter) => (
            <motion.button
              key={quarter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedQuarter(quarter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedQuarter === quarter
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {quarter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Roadmap Items */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedQuarter}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {roadmapData[selectedQuarter]?.map((item, index) => {
            const statusInfo = statusConfig[item.status];
            const StatusIcon = statusInfo.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass-ultra rounded-3xl p-8 border-2 ${statusInfo.border} ${statusInfo.bg} cursor-pointer group relative overflow-hidden card-hover-lift magnetic-hover`}
              >
                {/* Priority Indicator */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${priorityColors[item.priority]}`} />
                </div>

                {/* Status */}
                <div className="flex items-center space-x-2 mb-4">
                  <StatusIcon size={20} className={statusInfo.color} />
                  <span className={`text-sm font-medium ${statusInfo.color}`}>
                    {statusInfo.label}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users size={14} />
                      <span>{item.votes} votes</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Calendar size={14} />
                      <span>{item.estimatedCompletion}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                      {item.team}
                    </span>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Vote
                    </motion.button>
                  </div>
                </div>

                {/* Progress Bar for In Progress Items */}
                {item.status === 'in-progress' && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-4"
                  >
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '65%' }} />
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block">65% Complete</span>
                  </motion.div>
                )}

                {/* Floating Animation */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex justify-center"
      >
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Status Legend
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {Object.entries(statusConfig).map(([status, config]) => {
              const Icon = config.icon;
              return (
                <div key={status} className="flex items-center space-x-2">
                  <Icon size={16} className={config.color} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {config.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Roadmap;