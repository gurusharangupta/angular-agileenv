import { UserStory } from './user-story.model';
export class ProductBacklog {

  constructor(public projectName: string, public userStories: UserStory[], editMode: boolean) { }
}