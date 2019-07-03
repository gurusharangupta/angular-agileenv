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

  userStories: UserStory[];
  productBacklog: ProductBacklog;
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
  setUserStories(userStories: UserStory[]) {
    this.userStories = userStories;
  }

  setProductBacklog(projectName: string, userStories: UserStory[], editMode: boolean) {
    this.productBacklog = new ProductBacklog(projectName, userStories, editMode);

  }
}