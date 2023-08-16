import { OVERVIEW } from './translates/es.json';

export default function OverviewComponent () {

    return (
        <div className='grid grid-rows-auto gap-6 text-gray-200 text-md'>
            <p>{OVERVIEW.PARAGRAPH.FIRST}</p>
            <p>{OVERVIEW.PARAGRAPH.SECOND}</p>
            <p>{OVERVIEW.PARAGRAPH.THIRD}</p>
            <p>{OVERVIEW.PARAGRAPH.FOURTH}</p>
            <p>{OVERVIEW.PARAGRAPH.FIFTH}</p>
            <p className='text-cyan-500'>{OVERVIEW.GREETINGS}</p>
        </div>
    )
}