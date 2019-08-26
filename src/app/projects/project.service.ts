import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { TeamMember } from '../model/team-member.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthResponseData } from '../service/auth.service';
import { ProjectRepository } from '../repository/project-repository.service';

@Injectable()
export class ProjectService {

  projectChange = new Subject<Project[]>();

  projects: Project[] = [];

  constructor() { }

  public fetchProject() {
    return this.projects.slice();
  }

  public fetchProjectById(index: number) {
    return this.projects.slice()[index];
  }

  public updateProject(index: number, project: Project) {
    this.projects[index] = project;
    this.projectChange.next(this.projects.slice());
  }

  public addProject(project: Project) {
    this.projects.push(project);
    this.projectChange.next(this.projects.slice());
  }

  public setProjects(projects: Project[]) {
    this.projects = projects;
  }


}