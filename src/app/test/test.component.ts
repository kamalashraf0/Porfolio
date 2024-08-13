import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TweenLite, Circ } from 'gsap';
import { ProjectListComponent } from "../project-list/project-list.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ProjectListComponent],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {
  private canvas!: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;
  private points: any[] = [];
  private target: { x: number, y: number } = { x: 0, y: 0 };
  private animateHeader = true;

  ngOnInit(): void {
    this.target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }

  ngAfterViewInit(): void {
    this.canvas = document.getElementById('web-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    if (this.ctx) {
      this.initHeader();
      this.initAnimation();
      this.addListeners();
    } else {
      console.error('Failed to get canvas context');
    }
  }

  private initHeader(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.backgroundColor = '#070F26';
    this.points = this.createPoints(window.innerWidth, window.innerHeight);
    this.assignClosestPoints(this.points);
    this.assignCircles(this.points);
  }


  private createPoints(width: number, height: number): any[] {
    const points = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * width / 20;
        const py = y + Math.random() * height / 20;
        points.push({ x: px, originX: px, y: py, originY: py });
      }
    }
    return points;
  }

  private assignClosestPoints(points: any[]): void {
    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const closest = points
        .filter(p2 => p1 !== p2)
        .sort((p2, p3) => this.getDistance(p1, p2) - this.getDistance(p1, p3))
        .slice(0, 5);
      p1.closest = closest;
    }
  }

  private assignCircles(points: any[]): void {
    points.forEach(p => {
      p.circle = new Circle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
    });
  }

  private addListeners(): void {
    window.addEventListener('mousemove', this.mouseMove.bind(this));
    window.addEventListener('scroll', this.scrollCheck.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }

  private mouseMove(e: MouseEvent): void {
    this.target = { x: e.pageX, y: e.pageY };
  }

  private scrollCheck(): void {
    this.animateHeader = document.body.scrollTop <= window.innerHeight;
  }

  private resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initAnimation(): void {
    if (this.ctx) {
      this.animate();
      this.points.forEach(this.shiftPoint.bind(this));
    }
  }

  private animate(): void {
    if (this.animateHeader && this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.points.forEach(p => {
        if (Math.abs(this.getDistance(this.target, p)) < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (Math.abs(this.getDistance(this.target, p)) < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (Math.abs(this.getDistance(this.target, p)) < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }
        this.drawLines(p);
        p.circle.draw(this.ctx);
      });
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  private shiftPoint(p: any): void {
    TweenLite.to(p, 1 + Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: () => this.shiftPoint(p)
    });
  }

  private drawLines(p: any): void {
    if (this.ctx && p.active) {
      p.closest.forEach((closestPoint: any) => {
        this.ctx!.beginPath();
        this.ctx!.moveTo(p.x, p.y);
        this.ctx!.lineTo(closestPoint.x, closestPoint.y);
        this.ctx!.strokeStyle = `rgba(156,217,249,${p.active})`;
        this.ctx!.stroke();
      });
    }
  }
  private getDistance(p1: any, p2: any): number {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
}

class Circle {
  pos: any;
  radius: number;
  color: string;
  active: number;

  constructor(pos: any, rad: number, color: string) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
    this.active = 0;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.active) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(156,217,249,${this.active})`;
    ctx.fill();
  }
}
