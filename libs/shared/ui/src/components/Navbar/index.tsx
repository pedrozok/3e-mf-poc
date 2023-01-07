import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  routes: { name: string; route: string }[];
  children?: React.ReactNode;
}

export function Navbar({ routes, children }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center  text-white mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 43"
          style={{ height: '40px' }}
        >
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="m38.274 31.841-6.693-4.038-4.193-2.544a23.844 23.844 0 0 0 2.885-11.347V.546h-14.31v10.7l-8.808-5.37L0 18.88l8.809 5.33L0 29.58l7.155 13.004 8.808-5.33 2.193-1.333c3.308-1.979 6.04-4.846 7.924-8.319l2.5 1.494 8.386 5.088 1.308-2.342ZM55.276 21.06v-5.613h6.885v-4.724h-6.885V5.31h7.578V.546H50.352v25.44H63.2v-4.927h-7.924ZM46.467 3.332l-4.039 7.39c2.962.363 4.578 3.432 4.616 6.542v1.01c0 5.29-1.846 8.075-6.693 8.075-4.27 0-6.54-2.705-6.732-7.43h4.616c.154 1.737.654 2.625 2.04 2.625 1.692 0 2.076-1.05 2.076-3.392v-1.05c0-2.423-.846-3.23-2.462-3.23h-2.154v-3.15l3-5.411h-6.308V.546h12.04v2.786Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {routes.map(({ name, route }) => (
            <Link
              to={route}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
