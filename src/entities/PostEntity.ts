export interface Post {
    id: string;
    uuid: string;
    slug: string;
    title: string;
    content: string;
    author: {
        name: string;
        uid: string;
    };
    tags: string[];
    createdAt: Date;
}