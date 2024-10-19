import React from 'react'

export const GifItem = (  {id, title, url} ) => {

    // console.log(image)

  return (
    <div className='card'>
        <img src={ url } alt={ title }  />
        <p> { title } </p>
    </div>
  )
}
