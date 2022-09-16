import Category from "./Category";

interface PostModel{
    id: number;
    title: string;
    description: string;
    category: Category|null
}

export default PostModel;