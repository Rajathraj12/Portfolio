import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* 3D Holographic Sphere */}
        <motion.div
          className="relative w-48 h-48"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/30 via-purple-500/30 to-blue-500/30 blur-xl" />
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-yellow-400/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border-2 border-purple-500/50"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="absolute inset-12 rounded-full border-2 border-blue-500/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 bg-yellow-400/50 rounded-full blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            Welcome to
          </h1>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Rajath.exe
          </h2>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-yellow-400/20">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-yellow-400/60 text-sm text-center mt-3 font-mono">
            {progress}% LOADED
          </p>
        </motion.div>
      </div>
    </div>
  );
}
