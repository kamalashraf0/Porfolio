import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TestComponent } from "../test/test.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule, NavbarComponent, FooterComponent, TestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
