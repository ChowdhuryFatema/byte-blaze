import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
// import NotFoundImg from './../assets/404.jpg';
import { useState } from "react";
import Loader from "../components/Loader";
import { MdBookmarkAdd } from "react-icons/md";
import { saveToLocalStorage } from "../utils/localStorage";

const BlogDetails = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const navigation = useNavigation();

    const blog = useLoaderData();

    const {
        id,
        title,
        reading_time_minutes,
        public_reactions_count,
        comments_count, published_at
    } = blog;

    if(navigation.state === 'loading') return <Loader></Loader>

    const handleBookmark = () => {
        saveToLocalStorage(id)
    }

    return (
        <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
                        <p className="text-sm">{comments_count} comments • {public_reactions_count} views</p>
                    </div>
                </div>
                <div className="dark:text-gray-100">
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-800 dark:text-gray-100">


                        <Link onClick={() => setTabIndex(0)}
                            to=""
                            rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-400 dark:text-gray-50`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>

                        <Link onClick={() => setTabIndex(1)}
                            to={`author`}
                            rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-400 dark:text-gray-50`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                    <div onClick={() => handleBookmark(blog)} className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer">
                        <MdBookmarkAdd size={20} className="text-secondary"/>
                    </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </article>
        </div>
    );
};

export default BlogDetails;