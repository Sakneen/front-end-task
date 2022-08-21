import React from 'react'

const ImageArrow = (props) => {

    const {
        right,
        onClick
    } = props

    return (
        <div onClick={onClick}>

            <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg" >
                {right ?
                    <path d="M19.9013 17L3.87199 0.973331L0.101318 4.744L12.368 17.0107L0.101318 29.2587L3.87199 33.0293L19.9013 17Z" fill="white" />
                    :
                    <path d="M0.101318 17L16.128 33.0267L19.8987 29.256L7.63198 16.9893L19.8987 4.72267L16.128 0.973331L0.101318 17Z" fill="white" />
                }
            </svg>

        </div>

    )
}

export default ImageArrow