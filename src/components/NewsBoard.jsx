import React, { useEffect, useState } from 'react'
import Newscard from './Newscard';

const NewsBoard = ({genre}) => {
    const [articles ,setArticles]=useState([]);
    useEffect(()=>{
        const url= `https://newsapi.org/v2/top-headlines?country=in&category=${genre}&apiKey=0de3e447f73944edbf9162fa9a6ca3bc`;
        fetch(url).then((Response) => Response.json()).then((data) => setArticles(data.articles))
    },genre)
    
  return (
    <>
      <h3 className='m-3 mb-0'><span className='badge text-bg-warning'>Latest News</span></h3>
      {articles.map((news,index)=>{
        return <Newscard key={index}
        title={news.title}
        author={news.author}
        url={news.url}
        src={news.urlToImage}
        desc={news.description}
        date={news.publishedAt}/>
      })}
    </>
  )
}

export default NewsBoard
