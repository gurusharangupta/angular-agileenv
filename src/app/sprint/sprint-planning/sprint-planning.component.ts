import { Component, OnInit } from '@angular/core';
import { SprintService } from '../sprint.service';

@Component({
  selector: 'app-sprint-planning',
  templateUrl: './sprint-planning.component.html',
  styleUrls: ['./sprint-planning.component.css']
})
export class SprintPlanningComponent implements OnInit {
  editMode: boolean = false;
  constructor(private sprintService: SprintService) { }

  ngOnInit() {
    console.log('planning phase');
  }
  editProductBacklog() {
    this.editMode = true;
  }
}