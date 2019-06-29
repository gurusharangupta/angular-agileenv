import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStory } from 'src/app/model/user-story.model';

@Component({
  selector: 'app-user-story-detail',
  templateUrl: './user-story-detail.component.html',
  styleUrls: ['./user-story-detail.component.css']
})
export class UserStoryDetailComponent implements OnInit {

  constructor(private routes: ActivatedRoute) { }
  userStories: UserStory[];
  userStory: UserStory;
  ngOnInit() {
    this.userStories = this.routes.parent.snapshot.data['userStory'];
    this.routes.params.subscribe(
      (params) => {
        this.userStory = this.userStories[+params['id']];
      }
    )
  }

}
