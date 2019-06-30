import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-story-edit',
  templateUrl: './user-story-edit.component.html',
  styleUrls: ['./user-story-edit.component.css']
})
export class UserStoryEditComponent implements OnInit {

  editMode = false;
  id: number;
  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
  }

}