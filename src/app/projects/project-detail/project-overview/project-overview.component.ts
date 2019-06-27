import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  constructor(private routes: ActivatedRoute, private projectService: ProjectService) { }
  phase: string;
  ngOnInit() {
    this.routes.params.subscribe(
      params => {
        this.phase = this.projectService.fetchProjectById(+params['id']).projectPhase;
      }
    )
  }

}