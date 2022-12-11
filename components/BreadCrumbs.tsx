import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const BreadCrumbs = () => {
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
        <nav className="flex bg-white rounded p-2 mt-3" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex items-center">
                <Image
                  src={"/home.png"}
                  width={15}
                  height={15}
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumbs;
