import React from 'react'
const Arrow = (props) => {

    const {
        pressable = false,
        left = true
    } = props


    const arrowColor = React.useMemo(() => {
        return !pressable ? "#9E9E9E" : "#0E1024"
    }, [])

    return (
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            {left ?
                <path
                    d="M0.287994 6.09094L6.29799 12.1009L7.71199 10.6869L3.11199 6.08694L7.71199 1.48694L6.29799 0.0809402L0.287994 6.09094Z"
                    fill={arrowColor}
                />
                :
                <path d="M7.71299 6.09094L1.70199 0.0809402L0.287994 1.49494L4.88799 6.09494L0.287994 10.6879L1.70199 12.1019L7.71299 6.09094Z"
                    fill={arrowColor}
                />
            }
        </svg>
    )
}


export default Arrow