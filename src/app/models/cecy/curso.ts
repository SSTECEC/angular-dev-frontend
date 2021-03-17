import { Necesidad } from "./necesidad";

export class Curso {
    id?:number;
    cost:number;
    free?:boolean;
    capacity:number;
    course_type:string;
    modality:string;
    duration:number;
    participant_type:string;
    local_proposal:string;
    summary:string;
    necesidades:Necesidad[];
}