import React from 'react'
import newsplaceholder from '../Assets/news-placeholder.jpg'
const Newscard = ({title,author,url,src,desc,date}) => {
  return (
   <>
  <div className="card bg-dark text-light d-inline-block mx-3 my-3 " style={{maxWidth:"345px"}}>
  <img src={src?src:newsplaceholder} className="card-img-top px-2 py-2" alt="News Image"/>
  <div className="card-body mt-0 pt-0">
     <small class="card-subtitle mb-2 mt-0 ">{date.slice(0,10)}</small>
    <h6 className="card-title">{title}</h6>
    <p className="card-text ">{desc?desc.slice(0,40).concat("..."):"no description found !"}</p>
   
    <a href={url} className="btn py-0 px-3 btn-primary" target="_blank">Read</a>
   
  </div>
</div>
   </>
  )
}

export default Newscard
