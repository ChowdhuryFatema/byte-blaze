import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Blog from "./Blog";
import Loader from "../components/Loader";


const Blogs = () => {

    const navigation = useNavigation();
    const blogs = useLoaderData();

   if(navigation.state === 'loading') return <Loader></Loader>
    
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link to={`/blog/${blogs[0].id}`} rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                        <span className="text-xs dark:text-gray-400">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                   {
                    blogs.slice(1, 19).map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                   }
                   
                </div>
                {/* <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                </div> */}
            </div>
        </section>
    );
};

export default Blogs;