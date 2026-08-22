import { Component, ElementRef, OnInit, OnDestroy, ViewChild, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  alphaChange: number;
  isStar: boolean;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #particleCanvas class="particle-canvas" aria-hidden="true"></canvas>
    <div class="festival-glow-top"></div>
    <div class="festival-glow-bottom"></div>
  `,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }

    .particle-canvas {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .festival-glow-top {
      position: absolute;
      top: -15vh;
      left: 50%;
      transform: translateX(-50%);
      width: 80vw;
      height: 45vh;
      background: radial-gradient(ellipse at center, rgba(122, 12, 24, 0.35) 0%, rgba(61, 19, 84, 0.2) 50%, transparent 70%);
      filter: blur(40px);
      pointer-events: none;
    }

    .festival-glow-bottom {
      position: absolute;
      bottom: -15vh;
      left: 50%;
      transform: translateX(-50%);
      width: 80vw;
      height: 40vh;
      background: radial-gradient(ellipse at center, rgba(245, 197, 66, 0.12) 0%, rgba(91, 33, 182, 0.15) 50%, transparent 70%);
      filter: blur(50px);
      pointer-events: none;
    }
  `]
})
export class ParticleBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ngZone = inject(NgZone);
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;
  private particles: Particle[] = [];
  private width = 0;
  private height = 0;
  private prefersReducedMotion = false;
  private resizeListener = () => this.onResize();

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.prefersReducedMotion = mediaQuery.matches;

      this.ctx = this.canvasRef.nativeElement.getContext('2d');
      this.onResize();
      window.addEventListener('resize', this.resizeListener);

      if (!this.prefersReducedMotion) {
        this.initParticles();
        this.ngZone.runOutsideAngular(() => {
          this.animate();
        });
      }
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeListener);
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }

  private onResize(): void {
    const canvas = this.canvasRef.nativeElement;
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;

    if (!this.prefersReducedMotion && this.particles.length === 0) {
      this.initParticles();
    }
  }

  private initParticles(): void {
    const count = Math.min(65, Math.floor((this.width * this.height) / 18000));
    this.particles = [];

    const goldHues = ['#ffe8a3', '#f5c542', '#ffc107', '#ff9800', '#ffd54f'];

    for (let i = 0; i < count; i++) {
      const isStar = Math.random() > 0.4;
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: isStar ? Math.random() * 2 + 1.2 : Math.random() * 1.5 + 0.8,
        color: goldHues[Math.floor(Math.random() * goldHues.length)],
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.45 + 0.15), // upward drift
        alpha: Math.random() * 0.7 + 0.2,
        alphaChange: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        isStar,
        size: Math.random() * 3 + 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }
  }

  private animate = (): void => {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += p.alphaChange;
      p.rotation += p.rotationSpeed;

      // Twinkle boundary
      if (p.alpha <= 0.15 || p.alpha >= 0.9) {
        p.alphaChange = -p.alphaChange;
      }

      // Wrap around canvas edges
      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = p.isStar ? 12 : 6;
      this.ctx.shadowColor = p.color;

      if (p.isStar) {
        // Draw 4-point golden star
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.beginPath();
        const s = p.size;
        this.ctx.moveTo(0, -s);
        this.ctx.quadraticCurveTo(0, 0, s, 0);
        this.ctx.quadraticCurveTo(0, 0, 0, s);
        this.ctx.quadraticCurveTo(0, 0, -s, 0);
        this.ctx.quadraticCurveTo(0, 0, 0, -s);
        this.ctx.closePath();
        this.ctx.fill();
      } else {
        // Soft round golden orb
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
