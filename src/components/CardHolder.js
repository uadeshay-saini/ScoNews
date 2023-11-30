import React from 'react'
import Card from './Card'
import LoadingGif from './LoadingGif';
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

const CardHolder = ({apiKey, country, category, setProgress}) =>{


const convertFirstLetterUpperCase = (string) =>{
    let letter = string.charAt(0).toUpperCase() + string.slice(1);
    return(letter)
}
document.title=`${convertFirstLetterUpperCase(category)}-SCo.-News`;

const [articles, setArticles] = useState([])
const [page, setPage] = useState(1)
const [totalResults, setTotalresults] = useState(40)
const [loading, setLoading] = useState(true)

useEffect(() => {
   (async () => {
    setProgress(0)
    setLoading(true)
    setProgress(30)
    let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=10`
    setProgress(50)
    let data = await fetch(url)
    let parsedData = await data.json()
    setProgress(70)
    setTimeout(() => { setLoading(false) }, 700);
    setArticles(parsedData.articles)
    setTotalresults(parsedData.totalResults)
    setProgress(100)
  })();
}, [])

  
  const handlePrevPage = async ()  =>{
    setProgress(0)
    setLoading(true)
    setProgress(30)
    let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page-1}&pageSize=10`
    setProgress(50)
    let data = await fetch(url)
    let parsedData = await data.json()
    setProgress(70)
    setTimeout(() => { setLoading(false) }, 700);
    setArticles(parsedData.articles)
    setPage(page - 1)
    setPage(page + 1)

    setProgress(100)
   }

  const handleNextPage = async ()  =>{
    if(page<Math.ceil(totalResults/10)){
      setProgress(0)
    setLoading(true)
    setProgress(30)
    let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=10`
    setProgress(50)
    let data = await fetch(url)
    let parsedData = await data.json()
    setProgress(70)
    setTimeout(() => { setLoading(false) }, 700);
    setArticles(parsedData.articles)
    setPage(page + 1)
    setProgress(100)
  }
  else{}
  }

    // {console.log(this.articles[0].url)}

    return (
    <>
    <h2 className="mx-6 my-5" style={{fontSize: 30,}}><strong>SCo.-News {convertFirstLetterUpperCase(category)}</strong></h2>
   {loading && <LoadingGif/>} 
   {!loading && <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 lg:space-y-0">       
      
     {articles.map((element, index)=>{return(
          <div key={element.url} >
          <Card title={element.title} author={element.author} description={element.description} imageUrl={element.urlToImage} publishedAt={element.publishedAt} url={element.url} />
           </div>
         ) //return vali bracket
       }   //map function ke ander arrow function ki bracket
      )    //mapfunction ki bracket
    /*this.state ko js me likhne ke lie curly brackets lgayi h*/ 
    }      
       </div>}
       <div class="flex justify-between mx-8 my-8">
         <button disabled={page===1} onClick={handlePrevPage} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
             Prev
         </button>
         <button disabled={page>Math.ceil(totalResults/10)} onClick={handleNextPage} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
             Next
         </button>
</div>
       </>
    )
  
}


// CardHolder.defaultProps={
//   country: 'in',
//   category: 'general'
// }
// CardHolder.propTypes={
//   country: PropTypes.string,
//   category: PropTypes.string
// }

export default CardHolder