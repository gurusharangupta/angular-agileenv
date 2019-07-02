import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserStory } from '../../../model/user-story.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SprintService } from '../../sprint.service';

@Component({
  selector: 'app-user-story-list',
  templateUrl: './user-story-list.component.html',
  styleUrls: ['./user-story-list.component.css']
})
export class UserStoryListComponent implements OnInit {

  userStories: UserStory[];

  constructor(private router: Router, private routes: ActivatedRoute, private sprintService: SprintService) { }

  ngOnInit() {
    this.userStories = this.sprintService.fetchUserStories();
 
  }

  closeProductBacklog() {
    this.router.navigate(['../'], { relativeTo: this.routes });
  }
}