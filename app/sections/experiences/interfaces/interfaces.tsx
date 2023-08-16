export interface Experience {
    title: string,
    company: string,
    'start_date': string,
    'last_date': string,
    'is_working': boolean,
    description: string | string[]
}

export interface ChildExperienceProp {
    experiencie: Experience
}