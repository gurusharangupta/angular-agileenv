import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Project } from '../model/project.model';
import { ProjectService } from '../projects/project.service';
import { ProjectRepository } from '../repository/project-repository.service';



@Injectable()
export class ProjectResolverService implements Resolve<Project[]>{

  constructor(private projectService: ProjectService, private projectRepository: ProjectRepository ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const projects: Project[] = this.projectService.fetchProject();

    if (projects.length === 0) {
    console.log(projects.length);
      return this.projectRepository.fetchProject();
    } else {
      return projects;
    }
  }

}