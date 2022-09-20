import Category from "./Category";
import User from "./User";

interface PostModel{
    id: number;
    title: string;
    description: string;
    creator?: User | null;
    category?: Category | null;
}

export default PostModel;