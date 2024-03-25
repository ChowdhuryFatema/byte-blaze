import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const EmptyState = ({ message, address, label }) => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center gap-5 pb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">{message}</h3>
            <Link to={address} className="relative inline-block py-1 px-2 md:px-4 md:py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white text-sm md:text-lg">{label}</span>
            </Link>
        </div>
    );
};

EmptyState.propTypes = {
    message: PropTypes.string,
    address: PropTypes.string,
    label: PropTypes.string,
}
export default EmptyState;