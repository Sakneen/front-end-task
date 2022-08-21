import React from "react";

const CloseButton = (props) => {

    return (
        <div {...props} >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                <rect width="32" height="32" rx="16" fill="white" />
                <path d="M19.59 11L16 14.59L12.41 11L11 12.41L14.59 16L11 19.59L12.41 21L16 17.41L19.59 21L21 19.59L17.41 16L21 12.41L19.59 11Z" fill="#0E1024" />
            </svg>

        </div>

    )
}

export default CloseButton