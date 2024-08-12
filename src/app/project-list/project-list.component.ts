import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectDetailComponent } from "../project-detail/project-detail.component";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule, ProjectDetailComponent],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
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

  filterProjects(): void {
    this.filteredProjects = this.projects.filter(project =>
      project.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
