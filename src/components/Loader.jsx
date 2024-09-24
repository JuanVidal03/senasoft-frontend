import { Spinner } from "flowbite-react";

const Loader = () => {
    return (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-bg-black-soft flex justify-center items-center backdrop-blur-xl">
            <Spinner color="info" className="w-20 h-20"/>
        </div>
    );
}

export default Loader;
