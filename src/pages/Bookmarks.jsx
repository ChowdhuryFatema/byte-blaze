import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBlogs, removeToLocalStorage } from "../utils/localStorage"
import Blog from "./Blog";
import EmptyState from "../components/EmptyState";


const Bookmarks = () => {

    const blogs = useLoaderData();
    const [displayBlogs, setDisplayBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = getStoredBlogs();
        if(blogs.length){
            const blog = blogs.filter(b => storedBlogs.includes(b.id))
            setDisplayBlogs(blog);
        }

    }, [blogs]);

    const handleDelete = id => {

        const remainingCart = displayBlogs.filter(b => b.id !== id)
        setDisplayBlogs(remainingCart);

        // remove from localStorage 
        removeToLocalStorage(id)

    }

    if(displayBlogs.length < 1){
        return (
            <EmptyState 
            message={'No Bookmarks Available'}
            address={`/blogs`}
            label={'Browse Blogs'}></EmptyState>
        )
    }

    return (
        <div className={`max-w-6xl p-6 mx-auto grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${displayBlogs.length && 'my-10'}`}>

        {
         displayBlogs.map(blog => 
         <Blog handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}></Blog>
         )
        }
        
     </div>
    );
};

export default Bookmarks;