import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStory } from '../../../model/user-story.model';
import { SprintService } from '../../sprint.service';

@Component({
  selector: 'app-user-story-detail',
  templateUrl: './user-story-detail.component.html',
  styleUrls: ['./user-story-detail.component.css']
})
export class UserStoryDetailComponent implements OnInit {

  constructor(private routes: ActivatedRoute, private sprintService: SprintService) { }
  userStories: UserStory[];
  userStory: UserStory;
  ngOnInit() {

    this.routes.params.subscribe(
      (params) => {
        this.userStory = this.sprintService.fetchUserStoryById(+params['id']);
      }
    )
  }

}
