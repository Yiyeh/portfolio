import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Post } from "../../entities/PostEntity";
import { LoadingComponent } from "../../components/Blog/LoadingComponent";
import { NavBarBlog } from "../../components/Shared/NavBarBlog";
import { FooterBlog } from "../../components/Shared/FooterBlog";
import ReactMarkdown from "react-markdown"; 

export const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);

            try {
                let postData;

                if (id?.length === 20) { 
                    const docRef = doc(db, "posts", id);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        postData = { id: docSnap.id, ...docSnap.data() } as Post;
                    }
                } else { 
                    const q = query(collection(db, "posts"), where("uuid", "==", id));
                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        const docSnap = querySnapshot.docs[0];
                        postData = {
                            id: docSnap.id,
                            uuid: docSnap.data().uuid,
                            slug: docSnap.data().slug,
                            title: docSnap.data().title,
                            content: docSnap.data().content,
                            author: docSnap.data().author,
                            tags: docSnap.data().tags,
                            createdAt: docSnap.data().createdAt?.toDate(),
                        } as Post;
                    }
                }
                setPost(postData);

            } catch (error) {
                console.error("Error al obtener el post:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchPost();
    }, [id]);

    if (loading) return (
        <>
            <NavBarBlog />
            <div className="flex flex-col min-h-screen bg-blue-100 bg-opacity-50 items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative items-center justify-center">
                    <LoadingComponent />
                </div>
            </div>
            <FooterBlog />
        </>
    );
    
    if (!post) return <p>Post no encontrado</p>;

    return (
        <>
            <NavBarBlog />
            <div className="flex flex-col min-h-screen bg-blue-100 bg-opacity-50 items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
                    <p className="text-xl top-4 left-4 text-blue-400 font-bold cursor-pointer mb-4 underline" onClick={() => window.history.back()}>Volver atrás</p>
                    <h2 className="text-2xl font-bold text-blue-400 mb-4 capitalize">{post.title}</h2>

                    {/* 📌 Renderizamos el contenido como Markdown */}
                    <ReactMarkdown className="prose prose-blue mb-10">{post.content}</ReactMarkdown>

                    {post.tags && post.tags.length > 0 ? (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={`${tag}-${index}`}
                                    className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-100 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 italic text-sm">Sin etiquetas</p>
                    )}

                    <div className="text-gray-500 text-sm text-end">
                        <span>Por: {post.author.name}</span> ·{" "}
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
            <FooterBlog />
        </>
    );
};
