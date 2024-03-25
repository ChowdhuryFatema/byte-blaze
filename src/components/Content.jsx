import { useLoaderData } from "react-router-dom";
import NotFoundImg from './../assets/404.jpg';
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => { 
    const blog = useLoaderData();
    const {cover_image, title, tags, body_html, url} = blog;
    return (
        <div rel="noopener noreferrer" className='mx-auto p-2 border-2 border-opacity-30 group hover:no-underline focus:no-underline'>
        <img role="presentation" className="object-cover w-full rounded dark:bg-gray-500" src={cover_image || NotFoundImg} />
        <div className="p-6 space-y-2">
        <div>
                <div className="flex flex-wrap">
                    
                    {
                        tags.map((tag, idx) => <a key={idx} rel="noopener noreferrer" href="#" className="pr-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900">#{tag}
                        </a>)
                    }
                </div>
            </div>
            <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
           <div className="overflow-hidden">
           <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
           </div>
        </div>
    </div>
    );
};

export default Content;