import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStory } from '../../../model/user-story.model';
import { SprintService } from '../../sprint.service';

@Component({
  selector: 'app-user-story-edit',
  templateUrl: './user-story-edit.component.html',
  styleUrls: ['./user-story-edit.component.css']
})
export class UserStoryEditComponent implements OnInit {

  editMode = false;
  id: number;
  userStory: UserStory;
  constructor(private routes: ActivatedRoute, private sprintService: SprintService) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
    if (this.id != null) {
      this.userStory = this.sprintService.fetchUserStoryById(this.id);
    }


  }

}