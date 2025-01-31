import { Navigate, Outlet } from "react-router-dom";
import { adminUID } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ adminOnly = false }) => {
    const { user, loading } = useAuth();

    console.log("🛑 Estado de usuario en ProtectedRoute:", { user, loading });

    if (loading) {
        return <>
            <div className="flex flex-col items-center justify-center h-64 mt-12 space-y-6">
                <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-150"></div>
                </div>
                <p className="text-center text-blue-400 text-2xl font-semibold animate-pulse">
                    Cargando contenido
                </p>
            </div>
        </> // 🔹 Mientras carga, muestra un mensaje
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && user.uid !== adminUID) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};
