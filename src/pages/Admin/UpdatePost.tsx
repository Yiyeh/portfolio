import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el ID del post desde la URL
import { auth } from "../../firebaseConfig";
import { SideBarAdmin } from "../../components/Admin/SideBarAdmin";
import { PostService } from "../../services/PostService";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';

export const UpdatePost = () => {
  const { postId } = useParams(); // Obtener el ID del post desde la URL
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  // Cargar el post existente cuando el componente se monta
  useEffect(() => {
    console.log("intentando obtener el post con ID:" + postId);
    const fetchPost = async () => {
      if (postId) {
        console.log("intentando obtener el post con ID:" + postId);
        const post = await PostService.getPostById(postId);
        if (post) {
          setTitle(post.title);
          setContent(post.content);
          setTags(post.tags.join(", ")); // Convertir el array de tags a un string separado por comas
        }
      }
    };

    fetchPost();
  }, [postId]);

  // Función para manejar cambios en el editor
  const handleEditorChange = ({ text }: { text: string }) => {
    setContent(text);
  };

  // Función para renderizar Markdown como HTML
  const renderHTML = (text: string) => {
    return <ReactMarkdown>{text}</ReactMarkdown>;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!auth.currentUser || !postId) {
      alert("Debes iniciar sesión y proporcionar un ID de post válido.");
      return;
    }

    const tagsArray = tags
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag !== "");

    const notify = () => toast.success(("Entrada actualizada con éxito"), {
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
      await PostService.updatePost(postId, {
        title,
        content,
        tags: tagsArray,
      });

      notify();
      window.location.href = "/admin/posts";
    } catch (error) {
      console.error("Error al actualizar el post:", error);
      alert("Hubo un error al actualizar el post.");
    }
  };

  return (
    <>
      <div className="flex w-full min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <SideBarAdmin />

        <div className="flex flex-col w-full p-8 lg:p-20 gap-6">
          <div className="flex flex-col items-center justify-center w-full bg-white/70 rounded-2xl shadow-md py-30 px-6">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg space-y-6"
            >
              <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">
                Actualizar entrada
              </h1>

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

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-600 mb-2">
                  Contenido
                </label>
                <MdEditor
                  value={content}
                  onChange={handleEditorChange}
                  renderHTML={renderHTML} // Aquí pasamos la función renderHTML
                  style={{ height: "300px" }}
                />
              </div>

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

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Actualizar entrada
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};