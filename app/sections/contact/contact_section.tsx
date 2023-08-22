import TitleComponent from '@components/title/title_component';

interface Contact {
    title: string,
    content: string,
    isUrl?: boolean
}

export default function ContactSection () {
    const contacts:Contact[] = [{
        title: 'Celular',
        content: '+54 223-669 6559'
    },
    {
        title: 'Email',
        content: 'sosafuch@gmail.com'
    },
    {
        title: 'LinkedIn',
        content: 'https://www.linkedin.com/in/sosafuch',
        isUrl: true
    },
    {
        title: 'GitHub',
        content: 'https://github.com/Zoaxx1',
        isUrl: true
    }
    ]

    return(
        <div id='contact'>
            <TitleComponent title={'Contacto'}></TitleComponent>
            <div className='grid grid-cols-2 gap-4'>
                {
                    contacts.map((c, i) => (
                        <div key={i + c.title}>
                            <div className='grid grid-cols-3'>
                                <p>{c.title}</p>
                                {c.isUrl ? 
                                <a target='_blank' href={c.content} className='underline text-cyan-200'>link</a> : 
                                <p className='text-cyan-500'>{c.content}</p>}
                            </div>
                            <hr className='opacity-20 my-4'/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}