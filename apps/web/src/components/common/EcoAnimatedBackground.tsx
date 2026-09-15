import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export const EcoAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create 24 organic floating leaf particles
    const particles: Particle[] = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: Math.sin(Math.random() * Math.PI) * 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.35 + 0.15
    }));

    const drawLeaf = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      c.save();
      c.translate(x, y);
      c.rotate((rotation * Math.PI) / 180);
      c.beginPath();
      // Draw organic petal / leaf silhouette
      c.moveTo(0, -size);
      c.quadraticCurveTo(size * 0.9, -size * 0.2, 0, size);
      c.quadraticCurveTo(-size * 0.9, -size * 0.2, 0, -size);
      c.fillStyle = `rgba(18, 107, 79, ${opacity})`;
      c.fill();
      // Center vein
      c.beginPath();
      c.moveTo(0, -size * 0.8);
      c.lineTo(0, size * 0.8);
      c.strokeStyle = `rgba(46, 139, 87, ${opacity * 1.2})`;
      c.lineWidth = 1;
      c.stroke();
      c.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background ambient radial glows in forest green and warm cream
      const gradient = ctx.createRadialGradient(
        width * 0.85,
        height * 0.15,
        50,
        width * 0.85,
        height * 0.15,
        width * 0.5
      );
      gradient.addColorStop(0, 'rgba(232, 245, 238, 0.45)');
      gradient.addColorStop(1, 'rgba(247, 245, 239, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Animate and render leaves
      for (const p of particles) {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.4;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        drawLeaf(ctx, p.x, p.y, p.size, p.rotation, p.opacity);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};
