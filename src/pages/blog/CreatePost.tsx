import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

function CreatePost() {
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

    if (!auth.currentUser && (auth.currentUser.uid != "WUPVs75DIjacSpW8QXZ0VAbOqi32")) {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-700 text-center">
          Crear nueva entrada
        </h1>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-1">
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
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-600 mb-1">
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
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-600 mb-1">
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
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Publicar entrada
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
