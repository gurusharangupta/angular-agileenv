import { Component, OnInit, Input } from '@angular/core';
import { SprintService } from '../../service/sprint.service';
import { Project } from '../../model/project.model';
import { ProductBacklog } from '../../model/product-backlog.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})
export class SprintPlanningComponent implements OnInit {

  @Input() project: Project;
  productBacklog: ProductBacklog;
  constructor(private sprintService: SprintService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.productBacklog = this.sprintService.fetchProductBacklogByProjectName(this.project.name);
  }
  editProductBacklog() {
    if (!this.productBacklog) {
      //this.productBacklog = new ProductBacklog(this.project.name, [], false);
      this.router.navigate(['userstory'], { relativeTo: this.routes });
    } else {
      this.router.navigate(['userstory'], { relativeTo: this.routes });
    }

  }
}