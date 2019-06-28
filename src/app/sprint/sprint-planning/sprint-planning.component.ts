import { Component, OnInit, Input } from '@angular/core';
import { SprintService } from '../sprint.service';
import { Project } from '../../model/project.model';
import { ProductBacklog } from '../../model/product-backlog.model';

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})
export class SprintPlanningComponent implements OnInit {
  backlogEditMode: boolean = false;

  @Input() project: Project;
  productBacklog: ProductBacklog;
  constructor(private sprintService: SprintService) { }

  ngOnInit() {
    this.productBacklog = this.sprintService.fetchProductBacklogByProjectName(this.project.name);
    if (this.productBacklog) {
      console.log(this.productBacklog.userStory[0].name);
    }
  }
  editProductBacklog() {
    this.backlogEditMode = true;
  }
}