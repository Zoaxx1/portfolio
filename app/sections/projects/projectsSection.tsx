import TitleComponent from "@components/title/titleComponent"

export default function ProjectSection () {
    return (
        <div>
            <TitleComponent title={'Proyectos'}></TitleComponent>

            <div className="grid grid-cols-4 gap-6">
                <div className="border border-cyan-900 border-2 p-3 roundend rounded-md">
                    <div className="grid grid-cols-2 gap-7">
                        <p className="text-xl">BankAppMe</p>
                        <div className="text-xl">git</div>
                    </div>
                    <hr className="opacity-10 my-3"/>
                    <p >Esto es una descripcion muy muy largaaaaaaaaaaaaaaaa</p>
                </div>
                <div className="border border-cyan-900 border-2 p-3">
                    <div className="grid grid-cols-2 gap-7">
                        <p className="text-xl">BankAppMe</p>
                        <div className="text-xl">git</div>
                    </div>
                    <hr className="opacity-10 my-3"/>
                    <p >Esto es una descripcion muy muy largaaaaaaaaaaaaaaaa</p>
                </div>
                <div className="border border-cyan-900 border-2 p-3">
                    <div className="grid grid-cols-2 gap-7">
                        <p className="text-xl">BankAppMe</p>
                        <div className="text-xl">git</div>
                    </div>
                    <hr className="opacity-10 my-3"/>
                    <p >Esto es una descripcion muy muy largaaaaaaaaaaaaaaaa</p>
                </div>
                <div className="border border-cyan-900 border-2 p-3">
                    <div className="grid grid-cols-2 gap-7">
                        <p className="text-xl">BankAppMe</p>
                        <div className="text-xl">git</div>
                    </div>
                    <hr className="opacity-10 my-3"/>
                    <p >Esto es una descripcion muy muy largaaaaaaaaaaaaaaaa</p>
                </div>
                <div className="border border-cyan-900 border-2 p-3">
                    <div className="grid grid-cols-2 gap-7">
                        <p className="text-xl">BankAppMe</p>
                        <div className="text-xl">git</div>
                    </div>
                    <hr className="opacity-10 my-3"/>
                    <p >Esto es una descripcion muy muy largaaaaaaaaaaaaaaaa</p>
                </div>
            </div>
        </div>
    )
}