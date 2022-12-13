import React from 'react'

type Props = {}

function Dashboard({ }: Props) {
    return (
        <div data-testid='dashboard' className='mt-[64px]'>
            <p className='text-2xl font-normal mb-2'>Dashboard</p>
            <div className='h-[32px] bg-white flex'>
                <svg className='m-2.5' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.459872 11.9696C0.540914 12.0472 0.650817 12.0909 0.765421 12.0909H4.72869C4.72338 12.0649 4.72066 12.0382 4.72066 12.0114V8.69802C4.72066 8.20444 4.9252 7.73108 5.28938 7.38208C5.65349 7.03309 6.14735 6.83697 6.6623 6.83697C7.17725 6.83697 7.67112 7.03309 8.03523 7.38208C8.39934 7.73108 8.60388 8.20444 8.60388 8.69802V12.0114C8.60388 12.0382 8.60116 12.0649 8.59585 12.0909H12.5591C12.6173 12.092 12.6752 12.0818 12.7292 12.061C12.7832 12.0402 12.8322 12.0091 12.8734 11.9696C12.9146 11.9302 12.947 11.8832 12.9687 11.8314C12.9905 11.7797 13.0011 11.7242 12.9999 11.6684V4.71033C12.9972 4.64654 12.9792 4.58416 12.9472 4.52807C12.9153 4.47204 12.8701 4.42385 12.8155 4.3873L6.92153 0.173774C6.84673 0.120005 6.75574 0.0909424 6.6623 0.0909424C6.5688 0.0909424 6.4778 0.120005 6.40301 0.173774L0.509035 4.379C0.454844 4.41729 0.41073 4.46716 0.38022 4.52472C0.34971 4.58222 0.333648 4.6458 0.333313 4.71033V11.6767C0.333313 11.7866 0.378837 11.8919 0.459872 11.9696ZM7.73969 12.0114C7.73969 12.0382 7.74242 12.0649 7.74772 12.0909H5.57688C5.58219 12.0649 5.58491 12.0382 5.58491 12.0114V8.69802C5.58491 8.42412 5.69839 8.16147 5.90042 7.96783C6.10252 7.77412 6.37655 7.66535 6.6623 7.66535C6.94799 7.66535 7.22209 7.77412 7.42412 7.96783C7.62614 8.16147 7.73969 8.42412 7.73969 8.69802V12.0114Z" fill="#9E9E9E" />
                </svg>
                <p className='underline text-[11px] text-[#616161] my-2'>Home</p>
                <svg className='my-3 mx-2.5' width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.67999 0.0909424L0.73999 1.03094L3.79332 4.09094L0.73999 7.15094L1.67999 8.09094L5.67999 4.09094L1.67999 0.0909424Z" fill="#9E9E9E" />
                </svg>
                <p className='text-[11px] text-[#9E9E9E] my-2'>Dashboard</p>
            </div>
        </div>
    )
}

export default Dashboard