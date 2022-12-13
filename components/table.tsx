import React, { useEffect, useState } from 'react'
import { HomeType, SortOptionType } from '../types'
import { CgSortAz } from 'react-icons/cg'
import SortMenu from './sortMenu'
import Pagination from './pagination'
import { getCurrentPageHomes, getHomeById } from '../lib/api'
import Modal from './modal'

type Props = {
    homes: HomeType[]
}

const data = [
    { name: 'Unit ID', value: 'unit_id' },
    { name: 'Unit type', value: 'unit_type' },
    { name: 'Price', value: 'total_price' },
    { name: 'Build up area', value: 'bua' },
    { name: 'For Sale', value: 'for_sale' },
    { name: 'Gallery', value: 'photos' }
]

const sortOptions = [
    { name: 'Unit ID', value: 'unit_id', current: false },
    { name: 'Unit type', value: 'unit_type', current: false },
    { name: 'Unit Price', value: 'total_price', current: false },
]

function Table({ homes }: Props) {
    const [page, setPage] = useState<string>('1')
    const [currentPageHomes, setCurrentPageHomes] = useState<HomeType[]>()
    const [current, setCurrent] = useState<SortOptionType>({ name: 'Unit ID', value: 'unit_id', current: true })
    const [open, setOpen] = useState(false)
    const [selectedHome, setSelectedHome] = useState<HomeType>()

    const setCurrentPage = async (pageNo: string, sortOption: string) => {
        const res = await getCurrentPageHomes(pageNo, sortOption)
        setCurrentPageHomes(res.data)
    }

    const searchById = async (name: string) => {
        const res = await getHomeById(name)
        if (res.data.length > 0)
            setCurrentPageHomes(res.data)
        else
            setCurrentPage(page, current.value)
    }

    useEffect(() => { setCurrentPage(page, current.value) }, [page, current])
    return (
        <div >
            <div className='flex justify-between '>
                <div className='mt-[25.5px] mb-[17.5px] flex'>
                    <p className='text-sm font-bold mr-4'>Filters by ID:</p>
                    <input
                        className='w-[123px] h-[21px] px-2 py-1 text-[10px] leading-[13px]'
                        type='text'
                        id='unitId'
                        placeholder='ex: 45785'
                        onChange={(e) => searchById(e.currentTarget.value)}
                    />
                </div>
                <div className='flex place-items-center'>
                    <CgSortAz className='text-[#9E9E9E] w-6 h-6' />
                    <p className='text-[11px] leading-[14.3px] mr-2'>Sort by:</p>
                    <SortMenu current={current} setCurrent={setCurrent} sortOptions={sortOptions} />
                </div>
            </div>
            <div className='hidden md:block'>
                <table className='w-full rounded shadow-lg'>
                    <thead>
                        <tr className='h-10 bg-white'>
                            {data.map((item, i) =>
                                <th key={i} className={`hidden md:table-cell text-left leading-5 text-[16px] font-[500]`}>
                                    <span className='mx-4 mb-2.5 mt-[18px]'>
                                        {item.name}
                                    </span>
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageHomes?.map((home, i) =>
                            <tr onClick={() => { setSelectedHome(home); setOpen(true) }}
                                key={i}
                                className={`h-14 cursor-pointer ${i !== 0 && i % 2 !== 0 ? 'bg-white' : ''}`}
                            >
                                {data.map((item, i) =>
                                    <td key={i} className={`block md:table-cell`}>
                                        <p className='mx-4'>
                                            {item.value === 'photos' ? <img className='h-10 w-10 text-xs' src={home.photos[0]} alt={`${home.unit_id}`} /> :
                                                item.value === 'total_price' ? (home[item.value] / 1000000).toFixed(1) + 'M EGP' :
                                                    item.value === 'bua' ? <span className='flex place-items-start '>{home[item.value]} m<span className='text-xs'>2</span></span> :
                                                        item.value === 'for_sale' ?
                                                            <span className={`text-white px-1 py-2 text-[9px] leading-3 rounded ${home[item.value] ? 'bg-[#2419BE]' : 'bg-[#616161]'} `}>{home[item.value] ? 'FOR SALE' : 'NOT FOR SALE'}</span> :
                                                            item.value === 'unit_type' ? home[item.value].slice(0, 1).toUpperCase() + home[item.value].slice(1) :
                                                                home[item.value]}
                                        </p>
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className='shadow-lg block md:hidden rounded'>
                {currentPageHomes?.map((home, i) =>
                    <div onClick={() => { setSelectedHome(home); setOpen(true) }}
                        key={i}
                        className={`cursor-pointer ${i === 0 || i % 2 === 0 ? 'bg-white' : ''}`}
                    >
                        {data.map((item, i) =>
                            <div key={i} className={`grid grid-cols-2`}>
                                <p className='mx-4 my-2 font-semibold'>
                                    {item.name}
                                </p>
                                <p className='my-2'>
                                    {item.value === 'photos' ? <img className='h-10 w-10 text-xs' src={home.photos[0]} alt={`${home.unit_id}`} /> :
                                        item.value === 'total_price' ? (home[item.value] / 1000000).toFixed(1) + 'M EGP' :
                                            item.value === 'bua' ? <span className='flex place-items-start '>{home[item.value]} m<span className='text-xs'>2</span></span> :
                                                item.value === 'for_sale' ?
                                                    <span className={`text-white px-1 py-2 text-[9px] leading-3 rounded ${home[item.value] ? 'bg-[#2419BE]' : 'bg-[#616161]'} `}>{home[item.value] ? 'FOR SALE' : 'NOT FOR SALE'}</span> :
                                                    item.value === 'unit_type' ? home[item.value].slice(0, 1).toUpperCase() + home[item.value].slice(1) :
                                                        home[item.value]}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Pagination homes={homes} current={currentPageHomes} setPage={setPage} page={page} />
            <Modal open={open} setOpen={setOpen} selectedHome={selectedHome} />
        </div>
    )
}

export default Table