import React, { Component } from 'react'

const Card  =(props) => {
    const {title, description, imageUrl, publishedAt, url, author }= props;
    return (
      <div>
    <div className="bg-gray-100" >
    <a href={url} target='_blank'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src={imageUrl===null?"https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : imageUrl} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center"/>
              </div>
              <h3 className="mt-6 text-sm text-gray-500" style={{textAlign: "right"}}>
                  <span className="absolute inset-0"></span>
                  <p className="flex justify-between"><span>{author}</span><span>{new Date(publishedAt).toGMTString() }</span></p>
                  
              </h3>
              <p className="text-base font-semibold text-gray-900">{description}</p>
            </div>
            <br/>
          <div className="absolute inset-0mt-6 text-sm text-gray-500">Click anywhere to read more</div>
        </div>
      </div>
      </a>
    </div>
    </div>
    )
  
}

export default Card