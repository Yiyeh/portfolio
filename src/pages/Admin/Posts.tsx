import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { SideBarAdmin } from "../../components/Admin/SideBarAdmin";
import { Post } from "../../entities/PostEntity";
import { LoadingComponent } from "../../components/Blog/LoadingComponent";



export const AdminPosts = () => {
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
                    uuid: doc.data().uuid,
                    slug: doc.data().slug,
                    title: doc.data().title,
                    content: doc.data().content,
                    author: doc.data().author,
                    createdAt: doc.data().createdAt?.toDate().toLocaleString(),
                    tags: doc.data().tags
                }));

                // Actualizar el estado con los posts ordenados
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error al obtener los posts:", error);
            }
        };

        fetchPosts();
    }, []);



    const handleDelete = async (id: string) => {
        // consultar si quieres eliminar

        const confirmDelete = window.confirm("¿Estás seguro de eliminar este post?");
        if (!confirmDelete) {
            return;
        }

        try {
            await deleteDoc(doc(db, "posts", id));
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); // Actualizar estado local
            console.log(`Post con ID ${id} eliminado`);
        } catch (error) {
            console.error("Error al eliminar el post:", error);
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
                <SideBarAdmin />

                <div className="flex flex-col w-full p-20 shadow-2xl gap-4">
                    {/* Header con Publicaciones y Agregar Post */}
                    <div className="flex items-center justify-between w-full h-16 bg-white/70 backdrop-blur-lg rounded-2xl px-6 shadow-md">
                        {/* Título centrado */}
                        <h1 className="text-2xl font-bold text-blue-400 mx-auto ">
                            Publicaciones
                        </h1>

                        {/* Botón "Agregar post" al extremo derecho */}
                        <a
                            href="/Admin/CreatePost"
                            className="bg-blue-500 text-white text-lg font-medium rounded-2xl px-6 py-2 hover:bg-blue-600 transition duration-300"
                        >
                            Agregar post
                        </a>
                    </div>

                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <PostContainer
                                key={post.id}
                                id={post.id}
                                uuid={post.uuid}
                                slug={post.slug}
                                title={post.title}
                                content={post.content}
                                author={post.author}
                                tags={post.tags}
                                createdAt={post.createdAt}
                                onDelete={handleDelete} // Pasar la función de eliminación
                            />
                        ))
                    ) : (
                        <div className="flex justify-center items-center h-full">
                            <LoadingComponent />
                        </div>
                    )}


                </div>
            </div>
        </div>
    );

};

interface PostProps extends Post {
    onDelete: (id: string) => void;
}

export const PostContainer = ({ id, title, slug, content, author, tags, createdAt, onDelete }: PostProps) => {
    return (
        <div className="w-full bg-white/70 backdrop-blur-lg py-4 px-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-blue-400 truncate">{title}</h1>
                <p className="text-sm text-gray-500">{author.name}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">{slug}</p>
            </div>

            <div className="mb-4">
                <p className="text-gray-600 text-sm line-clamp-3">{content}</p>
            </div>

            <div className="mb-4">
                <h2 className="text-sm font-semibold text-gray-700 mb-2">Etiquetas:</h2>
                {tags && tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-500 text-xs font-medium px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">Sin etiquetas</p>
                )}
            </div>

            <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">{createdAt.toLocaleString()}</p>
                <div className="flex gap-2">
                    <button
                        className="bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                        onClick={() => onDelete(id)} // Llamar a la función de eliminación
                    >
                        Eliminar
                    </button>
                    <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
                    onClick={() => (window.location.href = `/Admin/UpdatePost/${id}`)}
                    >
                        Editar
                    </button>
                    <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded"
                        onClick={() => (window.location.href = `/Blog/${slug}/${id}`)}
                    >
                        Ver
                    </button>
                </div>
            </div>
        </div>
    );
};
