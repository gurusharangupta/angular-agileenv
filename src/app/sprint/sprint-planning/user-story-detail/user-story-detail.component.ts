import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStory } from '../../../model/user-story.model';
import { SprintService } from '../../sprint.service';

@Component({
  selector: 'app-user-story-detail',
  templateUrl: './user-story-detail.component.html',
  styleUrls: ['./user-story-detail.component.css']
})
export class UserStoryDetailComponent implements OnInit {

  constructor(private routes: ActivatedRoute, private sprintService: SprintService, private router: Router) { }
  userStories: UserStory[];
  userStory: UserStory;
  ngOnInit() {

    this.routes.params.subscribe(
      (params) => {
        this.userStory = this.sprintService.fetchUserStoryById(+params['id']);
      }
    )
  }

  editStory() {
    this.sprintService.userStoryChange.next(this.userStory);
    this.router.navigate(['edit'], { relativeTo: this.routes });
  }

}
