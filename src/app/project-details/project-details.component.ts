import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getData().subscribe(data => {
      this.project = data.find((p: any) => p.id === id);
    });
  }
}
