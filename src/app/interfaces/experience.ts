export interface Experience {
        company: string;
        freelance:boolean;
        start_date :string;
        end_date :string;
        current: boolean;
        job_position: string;
        task_detail:string[]; 
        skills : string;
        knowledge:string;
        contacts: [{
                name:string;
                cel:string;
                linkedin:string;
                
        }]
        
}
