import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { NavBarBlog } from "../../components/Shared/NavBarBlog";
import { FooterBlog } from "../../components/Shared/FooterBlog";
import { Post } from "../../entities/PostEntity";
//import { NavLink } from "react-router-dom";


// Define el tipo para un post


export default function BlogHome() {
    const [posts, setPosts] = useState<Post[]>([]);
    

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Crear una consulta ordenando por el campo "createdAt" en orden descendente
                const postsQuery = query(collection(db, "posts"), orderBy("createdAt", "desc"));

                // Obtener los documentos de la colección
                const querySnapshot = await getDocs(postsQuery);

                // Mapear los documentos para estructurar los datos
                const fetchedPosts: Post[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Post, "id">),
                }));

                // Actualizar el estado con los posts ordenados
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error al obtener los posts:", error);
            }
        };

        fetchPosts();
    }, []);

   
 

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
            <NavBarBlog />
            <div className="flex-grow">

                <div className="max-w-5xl mx-auto py-20 px-4 mt-5">
                    {/* Cabecera del blog con imagen y mensaje de bienvenida */}
                    <div className="flex flex-col items-center text-center bg-white/70 shadow-lg px-8 py-10 rounded-2xl mb-5">
                        <img
                            src="https://avatars.githubusercontent.com/u/11049338?v=4"
                            alt="Freddy Vilches (Yiyeh)"
                            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-2xl ring-4 ring-blue-300 hover:ring-blue-400 transition-all duration-300 mb-6"
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
                            Bienvenidos a mi Blog
                        </h1>
                        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mb-4">
                            ¡Hola! Soy Freddy Vilches (<span className="font-semibold text-blue-400">Yiyeh</span>), técnico nivel superior en informática y
                            desarrollador apasionado por la programación. En este espacio comparto mis proyectos, aprendizajes y reflexiones
                            sobre <span className="font-semibold text-blue-400">desarrollo web</span>, videojuegos y mucho más.
                        </p>

                        <p className="text-gray-700 text-sm max-w-2xl mb-4">
                            * Esta parte del sitio está construido con React para el frontend y Firebase con Google Authentication
                            para el backend. *
                        </p>

                        <p className="bg-yellow-100 rounded-2xl py-2 px-4 text-yellow-800 text-lg sm:text-xl max-w-2xl mb-4">
                            ⚠️ Blog en construcción ⚠️
                        </p>
                        <p className="text-gray-600 text-sm italic">
                            "El aprendizaje constante y la pasión son las claves para construir grandes cosas."
                        </p>
                    </div>


                    {/* Contenido del blog */}
                    {posts.length === 0 ? (
                        <>
                            <div className="flex flex-col items-center justify-center h-64 mt-12 space-y-6">
                                <div className="flex space-x-2">
                                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-150"></div>
                                </div>
                                <p className="text-center text-blue-400 text-2xl font-semibold animate-pulse">
                                    Cargando publicaciones, por favor espera...
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                            {posts.map((post) => (
                                <BlogPostPreview key={post.id} post={post}  />
                            ))}
                        </div>
                    )}
                </div>
            </div>

         
            <FooterBlog />
        </div>
    );
}

interface BlogPostPreviewProps {
    post: Post;
  
}

export const BlogPostPreview = ({ post }: BlogPostPreviewProps) => {
    return (
        <div className="bg-white/70 shadow-md rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col h-full p-6">
                <div className="flex-1">
                    <h2
                        className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 capitalize cursor-pointer hover:underline"
                        onClick={() =>
                            window.location.href = `/blog/${post.slug}`
                        }
                    >
                        {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                        {post.content}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags && post.tags.length > 0 ? (
                        post.tags.map((tag, index) => (
                            <span
                                key={`${tag}-${index}`}
                                className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-100 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm italic">Sin etiquetas</p>
                    )}
                </div>
                <div className="flex justify-between items-center text-gray-500 text-xs mt-auto">
                    <span>Por: {post.author.name}</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};



