import React from 'react'

function GenreFilter({genres}) {
  return (
    <div className='buttons-container'>
        {genres.map((item)=>(
            <button  key={item}  onClick={()=>{console.log(`Filtering By ${item}`)}} className='button'>{item}</button>
        ))}
    </div>
  )
}

export default GenreFilter