import { db } from "../firebaseConfig";
import { collection, getDocs, setDoc, doc, deleteDoc, updateDoc, query, orderBy} from "firebase/firestore";

import { ContactMessage } from "../entities/ContactMessageEntity";
import { v4 as uuidv4 } from "uuid";


export class ContactMessageService {

    static async createMessage( name:string, email:string, content:string ): Promise<void> {
        const id = uuidv4();
        const createdAt = new Date();
        try {
            await setDoc(doc(db, "contactMessages", id), { id, name, email, content, createdAt });
        } catch (error) {
            console.error("Error creando el mensaje:", error);
            throw error;
        }
    }

    static async getAllMessages(): Promise<ContactMessage[]> {
        try {
            const messagesQuery = query(collection(db, "contactMessages"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(messagesQuery);
    
            return querySnapshot.docs.map((doc) => ({
                
                id: doc.id,
                name: doc.data().name || "Anónimo",
                email: doc.data().email || "No especificado",
                content: doc.data().content || "Sin contenido",
                createdAt: doc.data().createdAt?.toDate().toLocaleDateString() || "Fecha desconocida",
            }));
        } catch (error) {
            console.error("Error obteniendo mensajes:", error);
            throw error;
        }
    }   

    static async updateMessage(messageId: string, updatedData: Partial<ContactMessage>): Promise<void> {
        try {
            await updateDoc(doc(db, "contactMessages", messageId), updatedData);
        } catch (error) {
            console.error("Error actualizando el mensaje:", error);
            throw error;
        }
    }   

    static async deleteMessage(messageId: string): Promise<void> {
        try {
            await deleteDoc(doc(db, "contactMessages", messageId));
        } catch (error) {
            console.error("Error eliminando el mensaje:", error);
            throw error;
        }
    }


}