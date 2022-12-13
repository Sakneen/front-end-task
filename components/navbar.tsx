import React from 'react'

type Props = {}

function Navbar({ }: Props) {
    return (
        <div data-testid='navbarDiv' className='h-[61px] w-full bg-blue-700 flex'>
            <svg className='my-auto ml-6' width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.150012 12.6643L0 12.7834V29.0841H7.13233V16.2021L16.0034 9.11982L24.8677 16.2089V29.0909H32V12.7834L15.9761 0L0.150012 12.6643Z" fill="white" />
            </svg>
        </div>
    )
}

export default Navbar