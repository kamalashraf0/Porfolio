import {  Component, HostListener, OnInit } from '@angular/core';
import { ProjectListComponent } from "../project-list/project-list.component";
import { TestComponent } from "../test/test.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgClass } from '@angular/common';
import * as AOS from 'aos';
import { Test2Component } from "../test2/test2.component";


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectListComponent, TestComponent, FooterComponent, NavbarComponent, NgClass, Test2Component],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
  showScrollToTopButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollToTopButton = scrollPosition > 100;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
