import toast from "react-hot-toast";

const getStoredBlogs = () => {
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        return JSON.parse(storedBlogs);
    }
    return [];
}

const saveToLocalStorage = id => {
    const blogs = getStoredBlogs();

    const exists = blogs.find(blogId => blogId === id)
    if(!exists){
        blogs.push(id)
        localStorage.setItem('blogs', JSON.stringify(blogs))
        
        toast.success('Blog Bookmarked Successfully!')
    }
    else{
        toast.error('Already Bookmarked!')
    }
}

const removeToLocalStorage = id => {
    const blogs = getStoredBlogs();
    const remaining = blogs.filter(blogId => blogId !== id);

    localStorage.setItem('blogs', JSON.stringify(remaining));
}

export {getStoredBlogs, saveToLocalStorage, removeToLocalStorage}