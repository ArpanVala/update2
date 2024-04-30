import React from 'react'
import newsplaceholder from '../Assets/news-placeholder.jpg'
const Newscard = ({title,author,url,src,desc,date}) => {
  return (
   <>
  <div className="card bg-dark text-light d-inline-block mx-3 my-3 " style={{maxWidth:"345px"}}>
  <img src={src?src:newsplaceholder} className="card-img-top px-2 py-2" alt="News Image"/>
  <div className="card-body mt-0">
     <h6 class="card-subtitle mb-2">{date.slice(0,10)}</h6>
    <h5 className="card-title">{title}</h5>
    <p className="card-text ">{desc?desc.slice(0,40).concat("..."):"no description found !"}</p>
    <div className="card-footer">

    <a href={url} className="btn btn-primary">Read</a>
    </div>
  </div>
</div>
   </>
  )
}

export default Newscard
