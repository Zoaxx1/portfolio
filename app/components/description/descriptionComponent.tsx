import { ChildDescriptionProp } from '@interfaces/description'

export default function DescriptionComponent ({description}: ChildDescriptionProp) {
    return (
        <div>
            <div className="flex justify-start items-center text-xl">
                <p className="text-cyan-500 mr-5">{description.title}</p>
                <p>{description.company}</p>
            </div>
            <p className="text-sm opacity-60 my-1">{`${description.start_date} - ${description.is_present ? 'Presente' : description.last_date}`}</p>
            {
                Array.isArray(description.description) ?
                description.description.map((des, i) => <p key={i}>{des}</p>) :
                description.is_description_url ?
                <a className='text-cyan-200 underline' href={description.description} target='_blank' >{description.description}</a> :
                <p>{description.description}</p>
            }
            <hr className="opacity-10 my-4"/>
        </div>
    )
}