import Link from 'next/link';
import Users from './Users';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-2 fixed w-full rounded-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white text-xl font-bold cursor-pointer">Mi Sitio</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Users</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Contacto</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
