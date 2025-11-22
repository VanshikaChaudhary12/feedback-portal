import React, { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackItems, setFeedbackItems] = useState([
    {
      id: 1,
      title: 'Kingfisher Ultra tastes too bitter',
      description: 'The hop character is too strong for my taste. Would prefer a smoother, less bitter version.',
      author: 'Rajesh Kumar',
      date: '2024-01-15',
      category: 'Taste Feedback',
      status: 'In Progress',
      upvotes: 47,
      downvotes: 12,
      comments: 23,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Bira 91 White - Perfect summer beer',
      description: 'Love the citrus notes and light texture. Perfect for hot weather. Please keep this recipe unchanged.',
      author: 'Priya Sharma',
      date: '2024-01-14',
      category: 'Compliment',
      status: 'Completed',
      upvotes: 89,
      downvotes: 3,
      comments: 34,
      priority: 'low'
    },
    {
      id: 3,
      title: 'Simba Stout - Add more chocolate notes',
      description: 'The coffee flavor is great but would love stronger chocolate undertones. Maybe use chocolate malt?',
      author: 'Arjun Patel',
      date: '2024-01-13',
      category: 'Improvement',
      status: 'Planned',
      upvotes: 56,
      downvotes: 8,
      comments: 18,
      priority: 'medium'
    }
  ]);

  const addFeedback = (feedback) => {
    const newFeedback = {
      id: Date.now(),
      ...feedback,
      date: new Date().toISOString().split('T')[0],
      upvotes: 0,
      downvotes: 0,
      comments: 0,
      status: 'Planned',
      priority: 'medium'
    };
    setFeedbackItems(prev => [newFeedback, ...prev]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbackItems, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within FeedbackProvider');
  }
  return context;
};