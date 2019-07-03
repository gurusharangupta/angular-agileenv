import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStory } from '../../../model/user-story.model';
import { SprintService } from '../../sprint.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-story-edit',
  templateUrl: './user-story-edit.component.html',
  styleUrls: ['./user-story-edit.component.css']
})
export class UserStoryEditComponent implements OnInit {

  editMode = false;
  id: number;
  userStory: UserStory;
  @ViewChild('f', { static: true }) userStoryForm: NgForm;

  constructor(private routes: ActivatedRoute, private sprintService: SprintService) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

      }
    );
    if (this.editMode) {
      this.userStory = this.sprintService.fetchUserStoryById(this.id);
      setTimeout(() => {
        this.userStoryForm.setValue({
          name: this.userStory.name,
          description: this.userStory.description,
          owner: this.userStory.owner

        }),
          1000
      });
    }


  }

  onSubmit(form: NgForm) {

  }

}