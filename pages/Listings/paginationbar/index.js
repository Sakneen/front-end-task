import React, { useCallback } from 'react'
import { Pagination, PaginationItem } from '@mui/material'
import styles from './Paginationbar.module.css'

const PaginationBar = (props) => {

    const {
        page,
        onChange
    } = props


    const renderPaginationItem = useCallback((item) => {


        return (
            <PaginationItem
                {...item}
                className={!item.selected && item.type == 'page' && styles.selectedPageNumer}
            />
        )
    }, [page])

    return (
        <Pagination
            count={10}
            renderItem={renderPaginationItem}
            onChange={(_, n) => { onChange && onChange(n) }}
            color='primary'
        />

    )
}

export default React.memo(props => <PaginationBar {...props} />)  