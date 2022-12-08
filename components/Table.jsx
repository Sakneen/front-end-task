import React, { useState } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.malton@example.com",
    role: "Member",
  },
  // More people...
];

const Table = () => {
  const [showImagesModal, setShowImagesModal] = useState(false);
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Unit ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Unit Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Build up area
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    For Sale
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Gallery
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person, idx) => (
                  <tr
                    key={person.email}
                    className={idx % 2 === 0 ? "bg-[#F5F5F5]" : ""}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <img
                        src={
                          "https://img.freepik.com/premium-photo/cabinet-shelves-wall-design-room-with-decoration-lamp-plants-carpet-sofa-3d-rendering_43151-7292.jpg?w=2000"
                        }
                        className="h-10 w-10 cursor-pointer"
                        onClick={() => setShowImagesModal(true)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showImagesModal && (
        <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-40">
          <ChevronLeftIcon className="w-10 text-white" />
          <div
            className="h-96 w-[80%] max-w-[600px] bg-white bg-cover bg-center m-10 relative"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/cabinet-shelves-wall-design-room-with-decoration-lamp-plants-carpet-sofa-3d-rendering_43151-7292.jpg?w=2000)",
            }}
          >
            <XMarkIcon
              className="absolute top-5 right-5 h-7 w-7 p-1.5 bg-white text-[#0E1024] rounded-full cursor-pointer"
              onClick={() => setShowImagesModal(false)}
            />
          </div>
          <ChevronRightIcon className="w-10 text-white" />
        </div>
      )}
    </div>
  );
};

export default Table;
