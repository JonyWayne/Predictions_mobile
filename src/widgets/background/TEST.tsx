/* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import Canvas from 'react-native-canvas';
import { Star } from './types';

// TODO возможно доработать или удалить ближе к релизу
export const Test = () => {
  const canvasRef = useRef<Canvas>(null);
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas dimensions to match screen size
      canvas.width = screenWidth;
      canvas.height = screenHeight;

      const stars: Star[] = [];

      // Create stars
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.2,
          brightness: Math.random(),
          brightnessDelta: (Math.random() - 0.5) * 0.02,
        });
      }

      const animate = () => {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          // Update star brightness
          star.brightness += star.brightnessDelta;
          if (star.brightness > 1 || star.brightness < 0.3) {
            star.brightnessDelta = -star.brightnessDelta;
          }

          // Draw star with current brightness
          ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          // Add glow effect
          const gradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 2
          );
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fill();

          // Move star
          star.y += star.speed;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [screenWidth, screenHeight]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Canvas
        style={{
          width: screenWidth,
          height: screenHeight,
        }}
        ref={canvasRef}
      />
    </SafeAreaView>
  );
};
