import {  Component } from '@angular/core';
import { ProjectListComponent } from "../project-list/project-list.component";
import { TestComponent } from "../test/test.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectListComponent, TestComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

}
