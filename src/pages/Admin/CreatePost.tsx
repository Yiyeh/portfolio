import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { AsideAdmin } from "../../components/Admin/SideBarAdmin";
import { PostService } from "../../services/PostService";
import { Bounce, ToastContainer, toast } from 'react-toastify';




export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("Debes iniciar sesión para publicar.");
      return;
    }

    // Convertimos las etiquetas de string a array
    const tagsArray = tags
      .split(",") // Separar por comas
      .map(tag => tag.trim()) // Eliminar espacios en blanco
      .filter(tag => tag !== ""); // Filtrar vacíos

    const notify = () => toast.success(("Entrada publicada con éxito"), {
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
      await PostService.createPost(title, content, {
        name: auth.currentUser.displayName || "Anónimo",
        uid: auth.currentUser.uid,
      }, tagsArray);

      notify();
      setTitle("");
      setContent("");
      setTags("");
    } catch (error) {
      console.error("Error al publicar el post:", error);
      alert("Hubo un error al publicar el post.");
    }
  };


  return (
    <>
      <div className="flex w-full min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <AsideAdmin />

        <div className="flex flex-col w-full p-8 lg:p-20 gap-6">

          {/* Contenedor del formulario */}
          <div className="flex flex-col items-center justify-center w-full bg-white/70 rounded-2xl shadow-md py-30 px-6">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg space-y-6"
            >
              <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">
                Crear nueva entrada
              </h1>

              {/* Campo de título */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-2">
                  Título
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Escribe un título..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>

              {/* Campo de contenido */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-600 mb-2">
                  Contenido
                </label>
                <textarea
                  id="content"
                  placeholder="Escribe el contenido aquí..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                ></textarea>
              </div>

              {/* Campo de etiquetas */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-600 mb-2">
                  Etiquetas
                </label>
                <input
                  id="tags"
                  type="text"
                  placeholder="Escribe las etiquetas separadas por comas..."
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
              </div>

              {/* Botón de publicar */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Publicar entrada
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer  />
    </>

  )
};



