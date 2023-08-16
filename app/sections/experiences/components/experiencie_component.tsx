import { ChildExperienceProp } from '../interfaces/interfaces'

export default function ExperiencieComponent ({experiencie}: ChildExperienceProp) {
    return (
        <div>
            <div className="flex justify-start items-center text-xl">
                <p className="text-cyan-500">{experiencie.title}</p>
                <p className="mx-2">|</p>
                <p>{experiencie.company}</p>
            </div>
            <p className="text-sm opacity-60 my-1">{`${experiencie.start_date} - ${experiencie.last_date}`}</p>
            {
                Array.isArray(experiencie.description) ? experiencie.description.map((des) => <p>{des}</p>) : <p>{experiencie.description}</p>
            }
            <hr className="opacity-10 my-4"/>
        </div>
    )
}