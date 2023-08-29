interface ChildTitleComponentProp {
    title: string
}

export default function TitleComponent ({title}: ChildTitleComponentProp) {
    return (
        <p className="text-4xl text-cyan-500 mb-5">{ title }</p>
    )
}