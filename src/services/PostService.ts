import { db } from "../firebaseConfig";
import { collection, getDocs, setDoc, doc, deleteDoc, updateDoc, query, orderBy,  where } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";
import { Post } from "../entities/PostEntity";

export class PostService {
    static async createPost(title: string, content: string, author: { name: string; uid: string }, tags: string[]): Promise<void> {
        const uuid = uuidv4();
        const slug = slugify(title, { lower: true, strict: true });
        const createdAt = new Date();

        try {
            await setDoc(doc(db, "posts", uuid), { uuid, slug, title, content, author, tags, createdAt });
        } catch (error) {
            console.error("Error creando el post:", error);
            throw error;
        }
    }

    static async getPostById(uuid: string): Promise<Post | null> {
        try {
            // Crear una consulta para buscar el post por UUID
            const q = query(collection(db, "posts"), where("uuid", "==", uuid));

            // Ejecutar la consulta
            const querySnapshot = await getDocs(q);

            // Verificar si se encontró algún documento
            if (!querySnapshot.empty) {
                const docSnap = querySnapshot.docs[0];

                // Crear el objeto Post con los datos del documento
                const postData = {
                    id: docSnap.id,
                    uuid: docSnap.data().uuid,
                    slug: docSnap.data().slug,
                    title: docSnap.data().title,
                    content: docSnap.data().content,
                    author: docSnap.data().author,
                    tags: docSnap.data().tags,
                    createdAt: docSnap.data().createdAt?.toDate(),
                } as Post;

                return postData;
            } else {
                // Si no se encuentra ningún documento, devolver null
                return null;
            }
        } catch (error) {
            console.error("Error obteniendo el post:", error);
            throw error;
        }
    }
    static async getAllPosts(): Promise<Post[]> {
        try {
            const postsQuery = query(collection(db, "posts"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(postsQuery);
            return querySnapshot.docs.map((doc) => ({
                ...(doc.data() as Post),
                createdAt: doc.data().createdAt.toDate(), // Convertimos a Date
            }));
        } catch (error) {
            console.error("Error obteniendo posts:", error);
            throw error;
        }
    }


    static async deletePost(postId: string): Promise<void> {
        try {
            await deleteDoc(doc(db, "posts", postId));
        } catch (error) {
            console.error("Error eliminando el post:", error);
            throw error;
        }
    }

    static async updatePost(postId: string, updatedData: Partial<Post>): Promise<void> {
        try {
            await updateDoc(doc(db, "posts", postId), updatedData);
        } catch (error) {
            console.error("Error actualizando el post:", error);
            throw error;
        }
    }
}
