import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { FooterComponent } from "../footer/footer.component";
import { TestComponent } from "../test/test.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [FooterComponent, TestComponent, NavbarComponent],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component implements OnInit, AfterViewInit {
  projects: any[] = [];
  filteredProjects: any[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.projects = data;
      this.filteredProjects = data;
    });

  }

  ngAfterViewInit(): void {
    this.initCanvasAnimation();
  }

  filterProjects(): void {
    this.filteredProjects = this.projects.filter(project =>
      project.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  initCanvasAnimation(): void {
    const canvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray: any[] = [];
    const numberOfParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx!.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.closePath();
        ctx!.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }
}

