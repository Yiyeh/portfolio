import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { NavBarBlog } from "../../assets/components/shared/NavBarBlog";
import { FooterBlog } from "../../assets/components/shared/FooterBlog";


// Define el tipo para un post
interface Post {
    id: string;
    title: string;
    content: string;
    author: {
        name: string;
        uid: string;
    };
    tags: string[];
    createdAt: Date;
}

export default function BlogHome() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "posts"));
                const fetchedPosts: Post[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Post, "id">),
                }));
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Error al obtener los posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const openModal = (post: Post) => setSelectedPost(post);
    const closeModal = () => setSelectedPost(null);

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
            <NavBarBlog />
            <div className="flex-grow">

            <div className="max-w-5xl mx-auto py-20 px-4 mt-10">
                <h1 className="bg-white shadow-lg px-8 py-6 text-3xl sm:text-4xl md:text-4xl font-extrabold text-center text-blue-400 rounded-xl mb-8">
                    YiyehDev - Blog ( En Constuccion )
                </h1>
                {posts.length === 0 ? (
                    <>
                      <p className="text-center text-blue-400 text-6xl mt-12">Cargando...</p>
                    </>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <BlogPostPreview key={post.id} post={post} openModal={openModal} />
                        ))}
                    </div>
                )}
                </div>
            </div>

            {selectedPost && <Modal post={selectedPost} onClose={closeModal} />}
            <FooterBlog />
        </div>
    );
}

interface BlogPostPreviewProps {
    post: Post;
    openModal: (post: Post) => void;
}

export const BlogPostPreview = ({ post, openModal }: BlogPostPreviewProps) => {
    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col h-full p-6">
                <div className="flex-1">
                    <h2
                        className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 capitalize cursor-pointer hover:underline"
                        onClick={() => openModal(post)}
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

interface ModalProps {
    post: Post;
    onClose: () => void;
}

const Modal = ({ post, onClose }: ModalProps) => {
    return (
        <div className="fixed inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="bg-blue-300 hover:bg-blue-400 rounded-2xl py-2 px-4 text-white hover:text-white absolute top-4 right-4"
                >
                    cerrar ✕
                </button>
                <h2 className="text-2xl font-bold text-blue-400 mb-4 capitalize">{post.title}</h2>
                <p className="text-gray-700 mb-6">{post.content}</p>

                {post.tags && post.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                            <span
                                key={`${tag}-${index}`}
                                className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-300 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400 italic text-sm">Sin etiquetas</p>
                )}

                <div className="text-gray-500 text-sm">
                    <span>Por: {post.author.name}</span> ·{" "}
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

