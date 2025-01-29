import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { AsideAdmin } from "../../components/Admin/AsideAdmin";

interface Message {
  id: string;
  name: string;
  email: string;
  content: string;
  createdAt: string;
}

export const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesQuery = query(collection(db, "contactMessages"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(messagesQuery);

        const fetchedMessages: Message[] = querySnapshot.docs.map((doc) => {
            const data = doc.data(); // Obtener los datos del documento
            return {
              id: doc.id,
              name: data.name || "Anónimo", // Manejar valores faltantes
              email: data.email || "No especificado",
              content: data.content || "Sin contenido",
              createdAt: data.createdAt?.toDate().toLocaleDateString() || "Fecha desconocida",
            };
          });

        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error al obtener los mensajes:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "contactMessages", id)); // Nombre de la colección corregido
      setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
      console.log(`Mensaje con ID ${id} eliminado`);
    } catch (error) {
      console.error("Error al eliminar el mensaje:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <AsideAdmin />

      <div className="flex flex-col w-full p-10 shadow-2xl gap-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full h-16 bg-white/70 backdrop-blur-lg rounded-2xl px-6 shadow-md">
          <h1 className="text-2xl font-bold text-blue-400 mx-auto">Mensajes</h1>
        </div>

        {/* Lista de mensajes */}
        <div className="space-y-4">
          {messages.length > 0 ? (
            messages.map((message) => (
              <Message key={message.id} {...message} onDelete={handleDelete} />
            ))
          ) : (
            <p className="text-center text-gray-600">No hay mensajes aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente Message corregido
interface MessageProps extends Message {
  onDelete: (id: string) => void;
}

const Message = ({ id, name, email, content, createdAt, onDelete }: MessageProps) => {
  return (
    <div className="w-full bg-white/70 backdrop-blur-lg py-4 px-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-blue-400">{name}</h2>
        <p className="text-sm text-gray-500">{email}</p>
      </div>

      <p className="text-gray-600 text-sm mb-3">{content}</p>

      <div className="flex justify-between items-center text-gray-500 text-sm">
        <p>{createdAt}</p>
        <button
          className="bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
          onClick={() => onDelete(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
