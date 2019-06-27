import { Component, OnInit } from '@angular/core';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})
export class SprintPlanningComponent implements OnInit {
  backlogEditMode: boolean = false;

  constructor(private sprintService: SprintService) { }

  ngOnInit() {
    this.sprintService.fetchProductBacklog();
  }
  editProductBacklog() {
    this.backlogEditMode = true;
  }
}