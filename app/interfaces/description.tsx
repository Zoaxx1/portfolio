export interface Description {
    title: string,
    company: string,
    'start_date': string,
    'last_date'?: string,
    'is_present'?: boolean,
    'is_description_url'?: boolean,
    description?: string | string[]
}

export interface ChildDescriptionProp {
    description: Description
}