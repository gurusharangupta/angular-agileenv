import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { TeamMember } from '../model/team-member.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertService } from '../service/alert.service';
import { AuthResponseData } from '../service/auth.service';
import { ProjectService } from '../projects/project.service';
import {tap } from 'rxjs/operators';

@Injectable()
export class ProjectRepository {

  constructor(private http: HttpClient, private projectService: ProjectService, private alertService: AlertService) { }


  public fetchProject() {
    return this.http.get<Project[]>('http://localhost:8080/projects/list').pipe(
            tap(projects => {
              this.projectService.projects = projects;
            }));

  }

  public addProjects(project: Project) {
    console.log(project);
    return this.http.post<AuthResponseData>('http://localhost:8080/projects/add',
      project).subscribe(
        resData => {
          console.log(resData)
          this.alertService.setSuccessAlert(resData.message);
        },
        error => {
          this.alertService.setErrorAlert(error);
        }
      );
    //this.projects.push(project);
    //this.projectChange.next(this.projects.slice());
  }


}