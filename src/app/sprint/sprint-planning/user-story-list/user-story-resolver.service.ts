import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserStory } from '../../../model/user-story.model';
import { SprintService } from '../../sprint.service';
import { Injectable } from '@angular/core';
import { ProjectService } from '../../../projects/project.service';
import { Project } from '../../../model/project.model';
import { ProductBacklog } from '../../../model/product-backlog.model';

@Injectable()
export class UserStoryResolverService implements Resolve<UserStory[]> {
  userStory: UserStory[];
  id: number;
  project: Project;
  productBacklog: ProductBacklog;

  constructor(private sprintService: SprintService, private projectService: ProjectService) { }
  resolve(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) {

    this.id = +route.parent.params['id'];
    this.project = this.projectService.fetchProjectById(this.id);
    this.productBacklog = this.sprintService.fetchProductBacklogByProjectName(this.project.name);
    if (!this.productBacklog) {
      this.sprintService.setUserStories([]);
      return null;
    } else {
      this.sprintService.setUserStories(this.productBacklog.userStories);
      return this.productBacklog.userStories;
    }

  }
}