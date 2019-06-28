import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProjectService } from '../../project.service';
import { Project } from '../../../model/project.model';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  constructor(private routes: ActivatedRoute, private projectService: ProjectService) { }
  project: Project;
  ngOnInit() {
    this.routes.params.subscribe(
      params => {
        this.project = this.projectService.fetchProjectById(+params['id']);
      }
    )
  }

}