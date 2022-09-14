import Category from "./Category";

interface Post{
    id: number;
    title: string;
    description: string;
    category: Category|null
}

export default Post;