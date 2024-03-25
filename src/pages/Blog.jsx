import PropTypes from 'prop-types';
import NotFoundImg from './../assets/404.jpg';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';

const Blog = ({blog, deletable, handleDelete}) => {
    const {id, cover_image, description, title, published_at} = blog;
    
    return (
       <div className='relative border-2 p-2 border-opacity-30 border-primary hover:border-secondary'>
         <Link to={`/blog/${id}`} rel="noopener noreferrer" className='max-w-sm mx-auto group hover:no-underline focus:no-underline'>
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || NotFoundImg} />
            <div className="p-2 space-y-2 my-5">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
        {
            deletable && (
                <div onClick={() => handleDelete(id)} className="absolute -top-5 -right-5 bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-50 cursor-pointer">
                    <MdDeleteForever size={20} className='text-secondary'/>
                </div>
            )
        }
       </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    deletable: PropTypes.bool,
    handleDelete: PropTypes.func
}
export default Blog;