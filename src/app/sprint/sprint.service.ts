import { Injectable } from '@angular/core';
import { ProductBacklog } from '../model/product-backlog.model';
import { UserStory } from '../model/user-story.model';
import { Subject } from 'rxjs';

@Injectable()
export class SprintService {

  productBacklog: ProductBacklog[] = [new ProductBacklog(
    'ING-Banking',
    [new UserStory('Recipe service', 'Its a recipe service', 'Gurusharan'),
    new UserStory('Model', 'Its a recipe service', 'Gurusharan'),
    new UserStory('Database creation', 'Its a recipe service', 'Gurusharan')],
    true)];

  userStories: UserStory[];
  constructor() { }

  fetchProductBacklogByProjectName(name: string) {
    for (const backlog of this.productBacklog) {
      if (backlog.projectName === name) {
        return backlog;
      }
    }
    return null;

  }
  fetchUserStories() {
    return this.userStories.slice();
  }

  fetchUserStoryById(index: number) {
    return this.userStories.slice()[index];
  }
  setUserStories(userStories: UserStory[]) {
    this.userStories = userStories;
  }
}