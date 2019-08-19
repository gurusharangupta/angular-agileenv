import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { TeamMember } from '../model/team-member.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertService } from '../service/alert.service';
import { AuthResponseData } from '../service/auth.service';
import { ProjectService } from '../projects/project.service';
import {tap,map } from 'rxjs/operators';


@Injectable()
export class ProjectRepository {

/*  projects: Project[] = [
  new Project('ING-Banking', 'Banking realted to ING', 'Nickolas', new Date(), 'sprint-planning', [new TeamMember('Gurusharan', 'Developer')]),
  new Project('ING-Payment', 'Payments related Banking', 'Gabriel', new Date(), 'sprint-planning', [new TeamMember('Gurusharan', 'Developer')]),
  new Project('ING-Wire Transfer', 'Payments related Banking', 'Gabriel', new Date(), 'sprint-planning', [new TeamMember('Gurusharan', 'Developer')]),
  new Project('ING-Debit', 'Payments related Banking', 'Gabriel', new Date(), 'sprint-planning', [new TeamMember('Gurusharan', 'Developer')])
]; */

  constructor(private http: HttpClient, private projectService: ProjectService, private alertService: AlertService) {}



  public fetchProject() {
    return this.http.get<Project[]>('http://localhost:8080/projects/list').pipe(
        tap(projects => {
        this.projectService.projects = projects;
        }));
 

  }

  public addProjects(project: Project) {
    return this.http.post<AuthResponseData>('http://localhost:8080/projects/add',
      project).subscribe(
        resData => {
          this.projectService.addProject(resData.response.body);
          this.alertService.setSuccessAlert(resData.message);
        },
        error => {
          this.alertService.setErrorAlert(error);
        }
      );

  }

    public addTeamMembers(project: Project) {
    return this.http.post<AuthResponseData>('http://localhost:8080/projects/teammembers/add',
      project).subscribe(
        resData => {
       this.projectService.setProject(resData.response.body);
          this.alertService.setSuccessAlert(resData.message);
        },
        error => {
          this.alertService.setErrorAlert(error);
        }
      );

  }


}