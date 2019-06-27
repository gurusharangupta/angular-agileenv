import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { TeamMember } from '../model/team-member.model';
import { Subject } from 'rxjs';
@Injectable()
export class ProjectService {

  projectChange = new Subject<Project[]>();

  projects: Project[] = [
    new Project('ING-Banking', 'Banking realted to ING', 'Nickolas', new Date(),'sprint-planning', [new TeamMember('Gurusharan', 'Developer')]),
    new Project('ING-Payment', 'Payments related Banking', 'Gabriel', new Date(),'sprint-planning', [new TeamMember('Gurusharan', 'Developer')]),
    new Project('ING-Wire Transfer', 'Payments related Banking', 'Gabriel', new Date(),'sprint-planning', [new TeamMember('Gurusharan', 'Developer')]),
    new Project('ING-Debit', 'Payments related Banking', 'Gabriel', new Date(),'sprint-planning', [new TeamMember('Gurusharan', 'Developer')])
  ];

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
}