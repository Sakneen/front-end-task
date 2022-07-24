import React from 'react'
import Card from '../Card/Card';

function ShowUnits({units,setImages,setShow}) {
    return (
        <div className='row justify-content-around'>
            {units.map(unit => {
                return <Card setImages={setImages} setShow={setShow} {...unit} />
            })}
        </div>
    )
}

export default React.memo(ShowUnits);
