import { GET } from "../../utils/network"

export const getListings = (query, onSucess, onFauiler) => {
    GET(`listings?_limit=5${query ?? ''}`)
        .then((data) => onSucess && onSucess(data))
        .catch(err => onFauiler && onFauiler(err))
}