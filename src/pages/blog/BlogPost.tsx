import { Post } from "../../entities/PostEntity"
    

export const BlogPost = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col bg-blue-100 bg-opacity-50 items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
                
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
  )
}
