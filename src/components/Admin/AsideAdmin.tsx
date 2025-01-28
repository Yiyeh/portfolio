export const AsideAdmin = () => {
    return (
        <aside className="flex flex-col items-start pl-10 bg-white/70 backdrop-blur-lg h-min-screen w-60">
            <a href="/">
                <h1 className="text-2xl mt-40 mb-20 text-blue-400 font-bold">YiyehDev</h1>
            </a>
            <ul className="flex flex-col items-start">
                <li className="mb-4 w-full bg-white/70 backdrop-blur-lg rounded-2xl px-4 py-2">
                    <a href="/Admin/Dashboard" className="text-blue-400 hover:text-blue-600 font-bold">
                        Inicio
                    </a>
                </li>
                <li className="mb-4 w-full bg-white/70 backdrop-blur-lg rounded-2xl px-4 py-2">
                    <a href="/Admin/Projects" className="text-blue-400 hover:text-blue-600 font-bold">
                        Posts
                    </a>
                </li>
                <li className="mb-4 w-full bg-white/70 backdrop-blur-lg rounded-2xl px-4 py-2">
                    <a href="/Admin/Contact" className="text-blue-400 hover:text-blue-600 font-bold">
                        Proyectos
                    </a>
                </li>
            </ul>
        </aside>
    )
}
