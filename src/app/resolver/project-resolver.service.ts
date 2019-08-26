import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Project } from '../model/project.model';
import { ProjectService } from '../projects/project.service';
import { ProjectRepository } from '../repository/project-repository.service';
import { tap } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';



@Injectable()
export class ProjectResolverService implements Resolve<Project[]>{

  constructor(private projectService: ProjectService, private projectRepository: ProjectRepository, private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const projects: Project[] = this.projectService.fetchProject();

    if (projects.length === 0) {
      return this.projectRepository.fetchProject().pipe(tap(null, error => {
        this.authService.logout();
      }));
    } else {
      return projects;
    }
  }

}