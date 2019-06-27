import { UserStory } from './user-story.model';
export class ProductBacklog {

  constructor(public projectName: string, public userStory: UserStory[], editMode: boolean) { }
}