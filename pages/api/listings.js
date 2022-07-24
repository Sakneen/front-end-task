const base="http://localhost:3005"
import { getWithCache } from '../../helpers/cacher'

export const getListings=()=>{
    return getWithCache(`${base}/listings`)
}

export const getListingsPage=(page)=>{
    return getWithCache(`${base}/listings?_page=${page}&_limit=6`)
}


export const getListingsPageSorted=(page,sortType)=>{
    return getWithCache(`${base}/listings?_sort=total_price&_order=${sortType}&_page=${page}&_limit=6`)
}


export const searchListings=(unit_id)=>{
    return getWithCache(`${base}/listings?unit_id=${unit_id}`)
}