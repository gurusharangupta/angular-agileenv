import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../model/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  constructor(private routes: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.routes.params.subscribe(
      params => {
          this.project = this.projectService.fetchProjectById(+params['id']);
      }
    )
  }

}