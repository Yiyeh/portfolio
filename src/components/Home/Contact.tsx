import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { ContactMessageService } from "../../services/ContactMessageService";


export const SendContact = () => {

    const { t } = useTranslation();

    const [name, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");    // Estado para manejar las etiquetas como cadena

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        const notify = () => toast.success(t("contact.successMessage"), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        try {
            await ContactMessageService.createMessage(
                name,
                email,
                content           
            )
            notify();
        } catch (error) {
            console.error("Error al publicar:", error);
        }

        //resetear los campos
        setTitle("");
        setContent("");
        setEmail("");
    };

    return (
        <>


            {/* Contenedor del formulario */}
            <div id="contact" className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-indigo-50 via-white to-sky-50 mt-10 rounded-2xl">
                <form
                    onSubmit={handleSubmit}
                    className="w-full p-8 rounded-lg shadow-lg space-y-6"
                >
                    <h1 className="text-3xl font-bold text-blue-400  mb-5">
                        {t("contact.title")}
                    </h1>

                    <p className="text-gray-600 text-md">{t("contact.content")}</p>

                    {/* Campo de título */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-blue-400 mb-2">
                            {t("contact.name")}
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder={t("contact.namePlaceholder")}
                            value={name}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-blue-400 placeholder:text-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    {/* Campo de contenido */}
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-blue-400 mb-2">
                            {t("contact.message")}
                        </label>
                        <textarea
                            id="content"
                            placeholder={t("contact.messagePlaceholder")}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            rows={6}
                            className="w-full px-4 py-2 border placeholder:text-blue-400 border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        ></textarea>
                    </div>

                    {/* Campo de correo */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-400 mb-2">
                            {t("contact.email")}
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder={t("contact.emailPlaceholder")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-blue-400 placeholder:text-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>


                    {/* Botón de publicar */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-100 text-blue-600 font-bold rounded-lg shadow-md hover:bg-blue-300 transition duration-300 "
                    >
                        {t("contact.send")}
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </>
    )
};



