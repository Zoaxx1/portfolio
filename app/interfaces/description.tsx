export interface Description {
    title: string,
    company: string,
    'startDate': string,
    'lastDate'?: string,
    'isPresent'?: boolean,
    'isDescriptionUrl'?: boolean,
    description?: string | string[]
}

export interface ChildDescriptionProp {
    description: Description
}