import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { TeamMember } from '../model/team-member.model';

@Injectable()
export class ProjectService {

  projects: Project[] = [
    new Project('ING-Banking', 'Banking realted to ING', 'Nickolas', new Date(),[new TeamMember('Gurusharan','Developer')]),
    new Project('ING-Payment', 'Payments related Banking', 'Gabriel', new Date(),[new TeamMember('Gurusharan','Developer')]),
    new Project('ING-Wire Transfer', 'Payments related Banking', 'Gabriel', new Date(),[new TeamMember('Gurusharan','Developer')]),
    new Project('ING-Debit', 'Payments related Banking', 'Gabriel', new Date(),[new TeamMember('Gurusharan','Developer')])
    ];
    
  constructor() { }

  public fetchProject() {
    return this.projects.slice();
  }

  public fetchProjectById(index: number){
    return this.projects.slice()[index];
  }
}