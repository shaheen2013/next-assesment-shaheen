import Link from 'next/link';
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 sticky-top">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/"  className="text-2xl font-semibold">
          Home
        </Link>
        <div className="flex space-x-4">
          <Link href="/cart" className='flex items-center gap-2'>
            <FaCartPlus /> <span>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
