import React from 'react'

const TitleBadges = ({title="1000+", tag="Blogs Written"}) => {
  return (
    <div>
        <h2 className='text-white font-montserrat text-3xl font-semibold tracking-tight sm:text-4xl'>{title}</h2>
        <p className='text-white mt-2 text-default-500 sm:text-xl'>{tag}</p>
    </div>
  )
}

export default TitleBadges