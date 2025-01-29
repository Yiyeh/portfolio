import { useTranslation } from "react-i18next";

export const HomeHeader = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col bg-white/70 backdrop-blur-lg rounded-2xl p-6 sm:p-10 shadow-xl mx-auto">
            {/* Contenedor principal */}
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center sm:gap-2 lg:gap-15">
                {/* Imagen y descripción corta */}
                <div className="flex flex-col items-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/11049338?v=4"
                        alt="Freddy Vilches (Yiyeh)"
                        className="w-32 h-32 lg:w-48 lg:h-48 md:w-32 md:h-32 rounded-full mb-4 shadow-2xl ring-4 ring-blue-300 hover:ring-blue-400 transition-all duration-300"
                    />
                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-600 mb-2">
                        Yiyeh
                    </p>
                    <p className="text-sm text-center text-gray-600 flex items-center justify-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-red-500"
                        >
                            <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                        </svg>
                        <span>{t("homeHeader.location")}</span>
                        <img
                            src="https://flagcdn.com/w40/cl.png"
                            alt="Chile Flag"
                            className="w-5 h-3 rounded-sm shadow"
                        />
                    </p>
                    <div className="flex flex-col mt-4  text-center text-gray-600 gap-4 ">
                        <a href="https://twitter.com/_Yiyeh" className="shadow text-blue-600 hover:text-blue-600 transition-transform transform hover:-rotate-z-2 hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                            <p className="flex items-center justify-center gap-2 bg-blue-100 px-4 py-2 rounded font-bold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-blue-500"
                                >
                                    <path d="M23.643 4.937a9.59 9.59 0 01-2.828.797A4.917 4.917 0 0023 3.14c-.94.555-1.98.959-3.084 1.184A4.916 4.916 0 0016.616 3c-2.718 0-4.92 2.201-4.92 4.917 0 .386.044.762.127 1.124A13.94 13.94 0 011.671 3.15a4.882 4.882 0 00-.666 2.473 4.917 4.917 0 002.187 4.1 4.902 4.902 0 01-2.228-.616v.062c0 2.28 1.618 4.182 3.77 4.612a4.946 4.946 0 01-2.224.084 4.925 4.925 0 004.6 3.419A9.868 9.868 0 010 20.93a13.9 13.9 0 007.548 2.212c9.051 0 14-7.496 14-13.986 0-.212-.005-.425-.014-.637A10.012 10.012 0 0024 4.59a9.64 9.64 0 01-2.357.646z" />
                                </svg>
                                _Yiyeh
                            </p>
                        </a>
                        <a href="https://github.com/Yiyeh" className="shadow text-gray-600 hover:text-gray-700 transition-transform transform hover:-rotate-z-2 hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                            <p className="flex items-center justify-center gap-2 bg-gray-200 px-4 py-2 rounded font-bold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-gray-500"
                                >
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.623-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.015 2.896-.015 3.287 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                                </svg>
                                Yiyeh
                            </p>
                        </a>
                        <a href="mailto:Yiyehdev@gmail.com" className="shadow text-yellow-600 hover:text-yellow-700 transition-transform transform hover:-rotate-z-2 hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                            <p className="flex items-center justify-center gap-2 bg-yellow-100 px-4 py-2 rounded font-bold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-yellow-600"
                                >
                                    <path d="M12 13.065L0 6.194V6c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v.194l-12 6.871zm11-2.07V18c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2v-7.005l11 6.327 11-6.327z" />
                                </svg>

                                Yiyehdev@gmail.com
                            </p>
                        </a>
                    </div>
                </div>

                {/* Texto de bienvenida */}
                <div className="max-w-2xl text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-600 mb-4 leading-tight">
                        {t("homeHeader.greeting")} <span className="text-blue-400">Freddy Vilches</span>
                    </h1>
                    <p className="text-base sm:text-md text-gray-700 mb-6 text-justify">
                        {t("homeHeader.description")} <span className="font-semibold text-blue-400">{t("homeHeader.roles.fullStackDeveloper")}</span>
                    </p>
                    <ul className="space-y-2 mb-8 text-center ">
                        <li className="bg-yellow-100 text-yellow-600 font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
                            {t("homeHeader.skills.webDevelopment")}
                        </li>
                        <li className="bg-blue-100 text-blue-600 font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
                            {t("homeHeader.skills.gameDevelopment")}
                        </li>
                        <li className="bg-green-100 text-green-600 font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
                            {t("homeHeader.skills.mobileDevelopment")}
                        </li>
                        <li className="bg-purple-100 text-purple-600 font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
                            {t("homeHeader.skills.constantLearning")}
                        </li>
                        <li className="bg-red-100 text-red-600 font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
                            {t("homeHeader.skills.programmingPassion")}
                        </li>
                        <li className="bg-teal-100 text-teal-600 font-medium text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
                            {t("homeHeader.skills.qualityFocus")}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-center md:justify-end gap-4 mt-6 items-center">
                <a
                    href="/blog"
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-green-100 text-green-600 font-semibold text-base sm:text-lg rounded-lg shadow-md hover:-rotate-z-2 hover:bg-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                    {t("homeHeader.buttons.visitBlog")}
                </a>
                <a
                    href="#projects"
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-100 text-blue-600 font-semibold text-base sm:text-lg rounded-lg shadow-md hover:-rotate-z-2 hover:bg-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                    {t("homeHeader.buttons.viewProjects")}
                </a>
                <a
                    href="#"
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-purple-100 text-purple-700 font-semibold text-base sm:text-lg rounded-lg shadow-md hover:-rotate-z-2 hover:bg-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                    {t("homeHeader.buttons.contactMe")}
                </a>
            </div>
        </div>
    );
};
