import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, MessageSquare, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [stats, setStats] = useState({ products: 0, feedback: 0, users: 0, rating: 0 });

  useEffect(() => {
    const animateStats = () => {
      const targets = { products: 25, feedback: 3247, users: 12800, rating: 4.4 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setStats({
          products: Math.floor(targets.products * easeOut),
          feedback: Math.floor(targets.feedback * easeOut),
          users: Math.floor(targets.users * easeOut),
          rating: (targets.rating * easeOut).toFixed(1)
        });

        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="dashboard" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 morphing-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 2 === 0 
                ? 'bg-gradient-to-br from-amber-400/20 to-orange-400/20' 
                : 'bg-gradient-to-br from-orange-400/15 to-red-400/15'
            }`}
            animate={{
              x: [0, 150 + i * 20, -100, 0],
              y: [0, -120 - i * 15, 80, 0],
              scale: [1, 1.4, 0.6, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: `${200 + i * 40}px`,
              height: `${200 + i * 40}px`,
              left: `${15 + i * 12}%`,
              top: `${5 + i * 8}%`,
            }}
          />
        ))}
        
        {/* Additional floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-amber-300/40 rounded-full"
            animate={{
              y: [-20, -100, -20],
              x: [0, 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.span
              className="text-glow"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(245, 158, 11, 0.5)',
                  '0 0 40px rgba(245, 158, 11, 0.8)',
                  '0 0 20px rgba(245, 158, 11, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Craft Beer.
            </motion.span>{' '}
            <motion.span
              className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Your Taste.
            </motion.span>{' '}
            <span className="text-glow">Perfected.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Share your thoughts on Vairagi Breweries' craft beers and help us brew 
            the perfect experience for every beer lover.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('our-beers');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-semibold text-lg flex items-center justify-center space-x-2 neon-glow"
            >
              <span>Try Our Beers</span>
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://maps.google.com', '_blank')}
              className="px-8 py-4 glass text-white rounded-2xl font-semibold text-lg border border-white/20"
            >
              Visit Brewery
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-ultra rounded-3xl p-10 max-w-5xl mx-auto card-hover-lift"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            {[
              { icon: Star, label: 'Beer Varieties', value: stats.products, suffix: '+' },
              { icon: MessageSquare, label: 'Reviews', value: stats.feedback, suffix: '+' },
              { icon: Users, label: 'Beer Lovers', value: stats.users, suffix: '+' },
              { icon: TrendingUp, label: 'Avg Rating', value: stats.rating, suffix: '/5' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl mb-4 shadow-2xl magnetic-hover"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  style={{
                    boxShadow: '0 0 30px rgba(245, 158, 11, 0.4), 0 10px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <stat.icon size={24} className="text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-200 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;