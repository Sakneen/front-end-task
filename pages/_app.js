import { useCallback, useEffect, useState } from 'react'
import '../styles/globals.css'
import { getListingsPage, getListingsPageSorted } from './api/listings'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '../components/pagination/pagination';
import MyModal from '../components/myModal/MyModal';
import Sorting from '../components/Sort/Sorting';
import Search from '../components/Search/Search';
import ShowUnits from '../components/ShowUnits/ShowUnits';
function MyApp() {

  console.log("MyApp rerender")

  const [test, setTest] = useState(0)


  //units data
  const [units, setUnits] = useState([])


  //modal
  const [show, setShow] = useState(false);
  const handleClose = useCallback(() => setShow(false), [])

  //receive images from card
  const [images, setImages] = useState(false);

  //currentPage
  const [currentPage, setCurrentPage] = useState(1)

  //sortingType
  const [sortingType, setSortingType] = useState('')

  //activatedPage
  const [activatedPage, setActivatedPage] = useState(1)



  //when the component 
  //first render get 
  //the first page
  useEffect(() => {
    GetDataByPage(1)
  }, [])


  //get listings with page number
  const GetDataByPage = useCallback(
    async (pageNumber) => {
      setActivatedPage(pageNumber)
      if (sortingType) {
        const data = await getListingsPageSorted(pageNumber, sortingType)
        setUnits(data)
      } else {
        const data = await getListingsPage(pageNumber)
        setUnits(data)
      }
      setCurrentPage(pageNumber)
    }
    , [sortingType])



  // get data sorted
  const GetDataByPageAndSort = useCallback(
    async (type) => {
      setActivatedPage(1)
      setSortingType(type)
      const data = await getListingsPageSorted(1, type)
      setUnits(data)
    }, [])




  return (
    <div >
      <div className='container py-5'>

        <div className='main row align-items-center justify-content-center mb-5'>
          <Search />
        </div>

        <div className='overlay'>
          <Sorting GetDataByPageAndSort={GetDataByPageAndSort} />
          <ShowUnits units={units} setImages={setImages} setShow={setShow} />
          <Pagination GetDataByPage={GetDataByPage} activatedPage={activatedPage} />
        </div>

        <MyModal show={show} handleClose={handleClose} images={images} />

      </div>
    </div>
  )
}

export default MyApp
