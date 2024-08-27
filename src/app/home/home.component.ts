import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TestComponent } from "../test/test.component";
import { Test2Component } from "../test2/test2.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule, NavbarComponent, FooterComponent, TestComponent, Test2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
