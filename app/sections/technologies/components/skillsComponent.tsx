import { ReactNode } from 'react';
import { ChildPropsTechnologies } from '../interfaces/interfaces';

export default function SkillsComponent ({technology} : ChildPropsTechnologies):ReactNode {

    const setStars = (level: number) : string => {
        let n = 1;
        let stars = ''
        while(n < 6){
            let star = n > level ? '☆' : '★';
            stars = `${stars} ${star}`
            n++;
        }
        return stars
    }

    return (
        <div>
            <div className='grid grid-cols-2 mb-2 px-4'>
                <p className="text-xl">{`${technology.skill} `}</p>
                <p className='text-xl text-center text-cyan-500'>{setStars(technology.level)}</p>
            </div>
            <hr className='opacity-10'/>
        </div>
        )
}