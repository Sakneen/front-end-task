import React, { useCallback, useState } from 'react'
import { searchListings } from '../../pages/api/listings'
import SearchResult from '../SearchResult/SearchResult'
import styles from "./search.module.css"
import { Form } from 'react-bootstrap'
import { IoSearchCircle } from "react-icons/io5"
function Search() {
    console.log("search rerender")
    const [error, setError] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [searchResult, setSearchResult] = useState([])


    const whenChange = (e) => {
        setSearchInput(e.target.value)
    }
    const whenSubmit = async () => {
        if (searchInput == "") {
            setError("you must write something")
            return;
        }
        setError("")
        const data = await searchListings(searchInput)
        setSearchResult(data)
    }
    return (
        <>
            <div className={`${styles.search} col-7`} style={{ marginRight: "1.5em", marginLeft: "5em" }} >
                <div class="input-group">
                    <Form className="d-flex justify-content-between w-100">
                        <Form.Control
                            onChange={whenChange}
                            type="search"
                            placeholder="Search"
                            className="col-2 shadow me-2"
                            aria-label="Search"
                            style={{ borderRadius: ".75em" }}
                            value={searchInput}
                        />
                        <div
                            style={{
                                lineHeight: "2",
                                cursor: "pointer"
                            }}
                        >
                            <IoSearchCircle style={{ color: "orange", fontSize: "2.4em" }} onClick={whenSubmit}></IoSearchCircle>
                        </div>
                    </Form>
                </div>
                <div><small className=' text-danger'>{error}</small></div>
                <SearchResult searchResult={searchResult} setSearchResult={setSearchResult} setSearchInput={setSearchInput} />
            </div>
        </>
    )
}
export default React.memo(Search);