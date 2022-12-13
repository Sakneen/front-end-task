import React, { Dispatch, SetStateAction, useState } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { HomeType } from '../types'

type Props = {
    homes: HomeType[]
    current: HomeType[]
    setPage: Dispatch<SetStateAction<String>>
    page: string
}

function Pagination({ homes, current, setPage, page }: Props) {

    return (
        <div className='flex justify-items-center place-content-center mt-4'>
            <button
                data-testid='left'
                className={`${page === '1' ? 'text-[#9E9E9E]' : ''}`}
                disabled={page === '1'}
                onClick={() => setPage((Number(page) - 1).toString())}
            >
                <ChevronLeftIcon className={`w-6 h-6 mr-[14px]`} />
            </button>
            {(Array.from(Array(homes.length / 5).keys())).map((home, i) =>
                <button
                    onClick={() => setPage((Number(i) + 1).toString())}
                    key={i}
                    className={`${i + 1 === (+page) ? 'bg-[#2419BE] text-white' : 'bg-[#E5E5E5] text-[#9E9E9E]'} w-6 md:w-8 h-6 md:h-[33px] shadow-md rounded-full flex place-content-center place-items-center mx-[6px]`}
                >
                    <span className={`text-xs md:text-base`}>{i + 1}</span>
                </button>
            )}

            <button
                data-testid='right'
                className={`${page === (homes.length / 5).toString() ? 'text-[#9E9E9E]' : ''}`}
                disabled={page === (homes.length / 5).toString()}
                onClick={() => setPage((Number(page) + 1).toString())}
            >
                <ChevronRightIcon className={`w-6 h-6 ml-[14px]`} />
            </button>
        </div>
    )
}

export default Pagination