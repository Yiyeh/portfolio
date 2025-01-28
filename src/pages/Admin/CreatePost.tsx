import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { AsideAdmin } from "../../components/Admin/AsideAdmin";


export const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState(""); // Estado para manejar las etiquetas como cadena
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Convierte las etiquetas separadas por comas en una lista
      const tagsArray = tags
        .split(",") // Divide la cadena en partes
        .map((tag) => tag.trim()) // Elimina espacios en blanco
        .filter((tag) => tag !== ""); // Filtra etiquetas vacías
  
      if (!auth.currentUser ) {
        alert("Debes iniciar sesión para publicar.");
        return;
      }
  
      try {
        await addDoc(collection(db, "posts"), {
          title,
          content,
          tags: tagsArray, // Guarda las etiquetas como un array
          author: {
            name: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
          },
          createdAt: new Date(),
        });
        alert("Entrada publicada con éxito.");
        setTitle("");
        setContent("");
        setTags(""); // Reinicia las etiquetas
      } catch (error) {
        console.error("Error al publicar:", error);
      }
    };

    return (
       <>
  <div className="flex w-full min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
    <AsideAdmin />

    <div className="flex flex-col w-full p-8 lg:p-20 gap-6">
      {/* Encabezado */}
      <div className="w-full bg-white/70 backdrop-blur-lg flex justify-between items-center rounded-2xl p-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">Publicaciones</h1>
      </div>

      {/* Contenedor del formulario */}
      <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md py-12 px-6">
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
</>

    )
};



