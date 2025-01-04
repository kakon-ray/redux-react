import { Link } from "react-router-dom";
import { ModeToggle } from "../node-toggle";

const Navbar = () => {
    return (
        <div>
           <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-xl font-bold">MyWebsite</a>
                <div className="flex space-x-6">
                    <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    <Link to="/users" className="text-white hover:text-gray-200">Users</Link>
        
                </div>
                </div>
                <div>
                    <ModeToggle/>
                </div>
         </nav>
        </div>
    );
};

export default Navbar;