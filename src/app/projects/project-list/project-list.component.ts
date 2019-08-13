import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  constructor(private projectService: ProjectService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.projectService.fetchProject();
    this.projectService.projectChange.subscribe(projects => {
      this.projects = projects;
    });

  }

  newProject() {
    this.router.navigate(['/projects/new']);
  }
  
  toProject(index: number) {
    this.router.navigate([index], { relativeTo: this.routes });
  }
}