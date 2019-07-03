import { Injectable } from '@angular/core';
import { ProductBacklog } from '../model/product-backlog.model';
import { UserStory } from '../model/user-story.model';
import { Subject } from 'rxjs';

@Injectable()
export class SprintService {

  productBacklogList: ProductBacklog[] = [new ProductBacklog(
    'ING-Banking',
    [new UserStory('Recipe service', 'Its a recipe service', 'Gurusharan'),
    new UserStory('Model', 'Its a recipe service', 'Gurusharan'),
    new UserStory('Database creation', 'Its a recipe service', 'Gurusharan')],
    true)];

  productBacklog: ProductBacklog;

  userStoryChanged = new Subject<UserStory[]>();
  constructor() { }

  fetchProductBacklogByProjectName(name: string) {
    for (const backlog of this.productBacklogList) {
      if (backlog.projectName === name) {
        return backlog;
      }
    }
    return null;

  }
  fetchUserStories() {
    return this.productBacklog.userStories.slice();
  }

  fetchUserStoryById(index: number) {
    return this.productBacklog.userStories.slice()[index];
  }

  setProductBacklog(projectName: string, userStories: UserStory[], editMode: boolean) {
    this.productBacklog = new ProductBacklog(projectName, userStories, editMode);

  }

  updateUserStory(index: number, userStory: UserStory) {
    this.productBacklog.userStories[index] = userStory;
    this.userStoryChanged.next(this.productBacklog.userStories.slice());
  }

  addUserStory(userStory: UserStory) {
    this.productBacklog.userStories.push(userStory);
    this.userStoryChanged.next(this.productBacklog.userStories.slice());
  }
}