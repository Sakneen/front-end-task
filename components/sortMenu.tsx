import { Menu, Transition } from '@headlessui/react'
import React, { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { classNames } from '../lib/functions'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { SortOptionType } from '../types'

type Props = {
    current: SortOptionType
    setCurrent: Dispatch<SetStateAction<SortOptionType>>
    sortOptions: SortOptionType[]
}

function SortMenu({ current, setCurrent, sortOptions }: Props) {
    return (
        <div>
            <div className="col-start-1 row-start-1 py-4">
                <div className="mx-auto flex max-w-7xl justify-end">
                    <Menu as="div" className="relative inline-block">
                        <div className="flex">
                            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 my-auto">
                                {current.name}
                                <ChevronDownIcon
                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute -right-8 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <Menu.Item key={option.name}>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => setCurrent(option)}
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm w-full text-left text-gray-900 font-medium'
                                                    )}
                                                >
                                                    {option.name}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default SortMenu