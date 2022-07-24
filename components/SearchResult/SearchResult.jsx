import React from 'react'
import SearchItem from '../SearchItem/SearchItem'
import styles from './SearchResult.module.css'
import {GrClose} from "react-icons/gr"
function SearchResult({ searchResult ,setSearchResult,setSearchInput}) {
    const whenClick=()=>{
        setSearchResult([])
        setSearchInput("")
    }
    return (
        <div className={`${styles.searchResult} px-2`}>
            {
                searchResult.map((ele) => {
                    return <SearchItem {...ele} />
                })
            }
            <div onClick={whenClick} className={`${styles.myButton} ${searchResult.length==0 ? 'd-none' : 'd-flex'}`}><GrClose/></div>
        </div>
    )
}
export default React.memo(SearchResult);