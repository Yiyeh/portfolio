
export const LoadingComponent = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center  h-150">
            <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-6"></div>
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-400">
                Cargando...
            </h1>
            <p className="text-blue-500 mt-2">Por favor, espera un momento.</p>
        </div>
    );
};
