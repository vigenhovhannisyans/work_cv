export interface IProject {
    name: string;
    start_date: Date;
    end_date?: Date;
    customer: string;
    description: string;
    team_size: number;
    position: string;
    responsibility: string;
    technologies: string[];
}
