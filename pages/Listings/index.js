import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { getListings } from '../../services/listings'
import ImageSliderModal from './imagesildermodal'
import Listinglist from './listinglist'
import styles from './Listings.module.css'
import PaginationBar from './paginationbar'
import SortMenu from './sortmenu'

//asc or desc

const sortOptions = [
  { id: 0, name: 'asc' },
  { id: 1, name: 'desc' },
]
const Listings = () => {

  const [page, setPage] = useState('1')
  const [sort, setSort] = useState('unit_id')
  const [filterById, setFiltredId] = useState('')
  // const [order, setOrder] = useState('')
  const [data, setData] = useState([])

  const [selectedRow, setSelectedRow] = useState(null)

  useEffect(() => {

    let querystring = ''
    if (page) {
      querystring += `&_page=${page}`
    }

    if (sort) {
      querystring += `&_sort=${sort}`
    }

    if (filterById) {
      querystring += `&unit_id=${filterById}`
    }

    getListings(querystring, data => { setData(data) })

  }, [page, sort, filterById])

  const onPageChanged = useCallback((pageNumber) => { setPage(pageNumber) }, [])

  const onWirteId = (e) => { setFiltredId(e.target.value) }

  const onSelectToSort = useCallback((item) => { setSort(item.value) }, [])

  const onSelectToOrder = useCallback(() => {

    // if (!order) {
    //   setOrder(sortOptions[0].name)
    // }


  }, [])

  return (

    <section className={styles.container} >


      <div className={`${styles.fiterSortContainer}`} >

        <div>
          Filters by ID: {'\t'}
          <input
            type='text'
            onChange={onWirteId}
          />
        </div>

        <SortMenu
          onPiked={onSelectToSort}
          onOrder={onSelectToOrder}
        />

      </div>

      <Listinglist
        data={data}
        onImagePress={index => setSelectedRow(index)}
      />

      <div className={styles.paginationBarContainer} >
        <PaginationBar
          page={page}
          onChange={onPageChanged}
        />
      </div>

      <ImageSliderModal
        images={data[selectedRow]?.photos}
        onClose={() => { setSelectedRow(null) }}
        isOpen={selectedRow != null}
      />

    </section>

  )
}

export default Listings