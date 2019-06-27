import { TeamMember } from './teammember.model';
export class Project {

  constructor(public name: string, public description: string, public owner: string, public creationDate: Date, public teamMembers: TeamMember[]) { }
}