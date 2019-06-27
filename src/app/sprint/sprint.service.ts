import { Injectable } from '@angular/core';
import { ProductBacklog } from '../model/product-backlog.model';
import { UserStory } from '../model/user-story.model';

@Injectable()
export class SprintService {

  productBacklog: ProductBacklog = new ProductBacklog('ING-BANKING', [
    new UserStory('Recipe service', 'Its a recipe service', 'Gurusharan')
  ], true);
  constructor() { }

  fetchProductBacklog() {
    return this.productBacklog.slice();
  }
}