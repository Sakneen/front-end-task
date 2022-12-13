export type HomeType = {
    _id: string
    for_sale: boolean
    unit_id: string
    total_price: number
    uni_type: string
    bua: number
    photos: string[]
}

export type SortOptionType = {
    name: string
    value: string
    current: boolean
}