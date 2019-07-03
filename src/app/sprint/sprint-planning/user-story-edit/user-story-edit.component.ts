import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @ViewChild('f', { static: true }) userStoryForm: NgForm;

  constructor(private routes: ActivatedRoute, private sprintService: SprintService, private router: Router) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

      }
    );
    if (this.editMode) {
      ;
      const userStory: UserStory = this.sprintService.fetchUserStoryById(this.id);
      setTimeout(() => {
        this.userStoryForm.setValue({
          name: userStory.name,
          description: userStory.description,
          owner: userStory.owner

        }),
          1000
      });
    }


  }

  onSubmit(form: NgForm) {
    const valueConst = form.value;
    const newUserStory = new UserStory(valueConst.name, valueConst.description, valueConst.owner);
    if (this.editMode) {
      this.sprintService.updateUserStory(this.id, newUserStory);
    } else {
      this.sprintService.addUserStory(newUserStory);
    }

    form.reset();
    this.router.navigate(['../'],{relativeTo: this.routes});
  }

}