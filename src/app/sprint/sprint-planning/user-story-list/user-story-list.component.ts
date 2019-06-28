import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserStory } from '../../../model/user-story.model';

@Component({
  selector: 'app-user-story-list',
  templateUrl: './user-story-list.component.html',
  styleUrls: ['./user-story-list.component.css']
})
export class UserStoryListComponent implements OnInit {

  @Input() userStories: UserStory[];
  editMode: boolean;
  @Output() editChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  editProductBacklog() {
    console.log(this.editMode);
    this.editMode = !this.editMode;
  }

@Input()
  get backlogEditMode(){
    console.log(this.editMode);
    return this.editMode;
  }
  
  set backlogEditMode(editMode: boolean){
    this.editMode = editMode;
    this.editChange.emit(this.editMode)
  }
}