import { Component } from '@angular/core';
import { ProjectListComponent } from "../project-list/project-list.component";
import { ProjectDetailComponent } from "../project-detail/project-detail.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectListComponent, ProjectDetailComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent { }
