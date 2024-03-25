import { PropagateLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-116px)]">
            <PropagateLoader color="#36d7b7" />
        </div>
    );
};

export default Loader;