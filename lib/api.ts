import axios from 'axios'

const baseURL = axios.create({ baseURL: 'http://localhost:3005' })

export const getAllHomes = async () => {
    const res = await baseURL.get('/listings')
    return res
}

export const getCurrentPageHomes = async (num: string, option: string) => {
    const res = await baseURL.get(`/listings?_sort=${option}&_page=${num}&_limit=5`)
    return res
}

export const getHomeById = async (name: string) => {
    const res = await baseURL.get(`/listings?unit_id=${name}`)
    return res
}