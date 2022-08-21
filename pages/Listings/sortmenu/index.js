import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import ArrowDwon from '../../../assets/svgicons/ArrowDown'
import SortIcon from '../../../assets/svgicons/Sort'
import styles from './SortMenu.module.css'

const MenuItems = [
    {
        name: "Unit ID",
        value: "unit_id"
    },
    {
        name: "Unit Type",
        value: "unit_type"
    },
    {
        name: "Unit Price",
        value: "total_price"
    }
]

const SortMenu = (props) => {


    const {
        onPiked,
        onOrder
    } = props

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        setAnchorEl(null);

        onPiked && onPiked(MenuItems[index])
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>

            <div className={styles.labelcontainer}   >

                {/* <SortIcon
                    onClick={() => { onOrder && onOrder() }}
                    className={styles.sortIon}
                /> */}

                <h6 onClick={handleClickListItem} >
                    Sort By : {MenuItems[selectedIndex].name}
                </h6>

                <ArrowDwon
                    className={styles.downIcon}
                    onClick={handleClickListItem}
                />

            </div>

            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {MenuItems.map(({ name }, index) => (
                    <MenuItem
                        key={name}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(index)}
                    >
                        {name}
                    </MenuItem>
                ))}

            </Menu>
        </>
    )
}

export default SortMenu
