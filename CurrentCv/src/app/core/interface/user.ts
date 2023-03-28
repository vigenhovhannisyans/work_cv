import { IEducation } from "./education";
import { IExperience } from "./experience";
import { ILanguage } from "./language";
import { IProject } from "./project";
import { ISkill } from "./skill";

export interface IUser {
    name: string;
    surname: string;
    headline: string;
    date_of_birth: string;
    image: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    summary: string;
    experiences: IExperience[];
    projects: IProject[];
    educations: IEducation[];
    skills: ISkill[];
    languages: ILanguage[];
}
