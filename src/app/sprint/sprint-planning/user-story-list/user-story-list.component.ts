import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserStory } from '../../../model/user-story.model';

@Component({
  selector: 'app-user-story-list',
  templateUrl: './user-story-list.component.html',
  styleUrls: ['./user-story-list.component.css']
})
export class UserStoryListComponent implements OnInit {

  @Input() userStories: UserStory[];
  @Input() backlogEditMode: boolean;
  @Output() editChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  editProductBacklog() {
    console.log(this.backlogEditMode);
    this.backlogEditMode = !this.backlogEditMode;
    this.editChange.emit(this.backlogEditMode);
  }
}