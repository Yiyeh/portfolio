import { useTranslation } from "react-i18next";

export const HomeHeader = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col bg-white/70 rounded-2xl p-6 sm:p-10 shadow-xl mx-auto">
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
                    <div className="flex flex-col mt-4  text-center text-gray-600 gap-2 ">
                        <a href="https://x.com/_Yiyeh" className=" text-gray-600 hover:text-gray-600 transition-transform transform hover:-rotate-z-2 hover:scale-105 hover:cursor-pointer">
                            <p className="flex text-sm items-center justify-center gap-2 bg-blue-100 px-4 py-2 rounded-2xl shadow hover:shadow-xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
                                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                </svg>
                                _Yiyeh
                            </p>
                        </a>
                        <a href="https://github.com/Yiyeh" className=" text-gray-600 hover:text-gray-700 transition-transform transform hover:-rotate-z-2 hover:scale-105 hover:cursor-pointer">
                            <p className="flex text-sm items-center justify-center gap-2 bg-gray-200 px-4 py-2 rounded-2xl shadow hover:shadow-xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
                                    <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
                                </svg>
                                Yiyeh
                            </p>
                        </a>
                        <a href="mailto:Yiyehdev@gmail.com" className=" text-yellow-600 hover:text-yellow-700 transition-transform transform hover:-rotate-z-2 hover:scale-105 hover:cursor-pointer">
                            <p className="flex text-sm items-center justify-center gap-2 bg-yellow-100 px-4 py-2 rounded-2xl shadow hover:shadow-xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">    <path d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 7.7324219 L 3 8.359375 L 4 8.9863281 L 12 14 L 20 9.0195312 L 21 8.3964844 L 22 7.7753906 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 4 6 L 20 6 L 20 6.7695312 L 12 11.748047 L 4 6.734375 L 4 6 z M 2 10.091797 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 10.130859 L 20 11.375 L 20 18 L 4 18 L 4 11.345703 L 2 10.091797 z" /></svg>
                                Yiyehdev@gmail.com
                            </p>
                        </a>
                        <a href="https://buymeacoffee.com/yiyeh" className=" text-red-600 hover:text-red-700 transition-transform transform hover:-rotate-z-2 hover:scale-105 hover:cursor-pointer">
                            <p className="flex text-sm items-center justify-center gap-2 bg-red-100 px-4 py-2 rounded-2xl shadow hover:shadow-xl ">
                                
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="18px" height="18px"><path d="M 6.8125 7 C 6.335938 7.089844 5.992188 7.511719 6 8 C 6 19.152344 11.382813 34.644531 12.59375 38 L 3 38 C 2.96875 38 2.9375 38 2.90625 38 C 2.511719 38.027344 2.167969 38.285156 2.035156 38.65625 C 1.898438 39.027344 1.996094 39.445313 2.28125 39.71875 L 4.5625 41.96875 C 6.496094 43.902344 9.136719 45 11.875 45 L 33.125 45 C 35.863281 45 38.503906 43.902344 40.4375 41.96875 L 42.71875 39.71875 C 43.015625 39.433594 43.105469 38.992188 42.945313 38.613281 C 42.789063 38.234375 42.410156 37.992188 42 38 L 32.40625 38 C 32.753906 37.023438 33.246094 35.628906 34.09375 32.90625 C 34.769531 32.777344 37.65625 32.179688 40.71875 30.8125 C 42.457031 30.035156 44.242188 29.042969 45.625 27.6875 C 47.007813 26.332031 48 24.5625 48 22.46875 C 48 18.910156 45.089844 16 41.53125 16 C 40.300781 16 39.109375 16.34375 38.09375 16.9375 C 38.640625 13.820313 39 10.746094 39 8 C 39 7.449219 38.550781 7 38 7 L 7 7 C 6.96875 7 6.9375 7 6.90625 7 C 6.875 7 6.84375 7 6.8125 7 Z M 8.125 9 L 36.875 9 C 36.710938 14.652344 35.179688 21.820313 33.53125 27.71875 C 31.898438 33.5625 30.472656 37.476563 30.28125 38 L 14.71875 38 C 14.335938 36.945313 8.453125 20.402344 8.125 9 Z M 41.53125 18 C 44.011719 18 46 19.988281 46 22.46875 C 46 23.9375 45.339844 25.148438 44.21875 26.25 C 43.097656 27.351563 41.507813 28.285156 39.90625 29 C 37.894531 29.898438 35.976563 30.449219 34.75 30.75 C 34.996094 29.921875 35.21875 29.148438 35.46875 28.25 C 36.148438 25.824219 36.828125 23.160156 37.40625 20.46875 C 37.410156 20.445313 37.433594 20.429688 37.4375 20.40625 C 38.167969 19.015625 39.800781 18 41.53125 18 Z M 5.40625 40 L 39.59375 40 L 39.03125 40.5625 C 37.472656 42.121094 35.332031 43 33.125 43 L 11.875 43 C 9.667969 43 7.527344 42.121094 5.96875 40.5625 Z"/></svg>
                                Buy me a coffee
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
                        {t("homeHeader.description")} <span className="font-semibold text-blue-400">{t("homeHeader.roles.fullStackDeveloper")} </span> {t("homeHeader.description2")}
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
                    href="#contact"
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-purple-100 text-purple-700 font-semibold text-base sm:text-lg rounded-lg shadow-md hover:-rotate-z-2 hover:bg-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                    {t("homeHeader.buttons.contactMe")}
                </a>
            </div>
        </div>
    );
};
