import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from '../model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.fetchProject();
  }


}