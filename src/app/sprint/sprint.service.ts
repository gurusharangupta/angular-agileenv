import { Injectable } from '@angular/core';
import { ProductBacklog } from '../model/product-backlog.model';
import { UserStory } from '../model/user-story.model';

@Injectable()
export class SprintService {

  productBacklog: ProductBacklog[] = [new ProductBacklog(
    'ING-Banking',
    [new UserStory('Recipe service', 'Its a recipe service', 'Gurusharan')],
    true)];

  constructor() { }

  fetchProductBacklogByProjectName(name: string) {
    for (let backlog of this.productBacklog) {
      if (backlog.projectName === name) {
        return backlog;
      }
    }
    return null;

  }
}