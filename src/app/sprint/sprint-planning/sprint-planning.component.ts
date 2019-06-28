import { Component, OnInit, Input } from '@angular/core';
import { SprintService } from '../sprint.service';
import { Project } from '../../model/project.model';
import { ProductBacklog } from '../../model/product-backlog.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})
export class SprintPlanningComponent implements OnInit {
  backlogEditMode: boolean = false;

  @Input() project: Project;
  productBacklog: ProductBacklog;
  constructor(private sprintService: SprintService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.productBacklog = this.sprintService.fetchProductBacklogByProjectName(this.project.name);
    if (this.productBacklog) {
      console.log(this.productBacklog.userStory[0].name);
    }
    else {
      // 
    }
  }
  editProductBacklog() {
    this.backlogEditMode = !this.backlogEditMode;
    if (!this.productBacklog) {
      this.productBacklog = new ProductBacklog(this.project.name, [], false);
      this.router.navigate(['userstory'], { relativeTo: this.routes });
    } else {
      this.router.navigate(['userstory'], { relativeTo: this.routes });
    }

  }

  changeEditMode(mode: boolean) {
    this.backlogEditMode = mode;
  }
}