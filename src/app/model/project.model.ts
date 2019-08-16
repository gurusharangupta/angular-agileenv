import { TeamMember } from './team-member.model';
export class Project {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public owner: string,
    public creationDate: Date,
    public projectPhase: string,
    public teamMembers: TeamMember[]){ }
}