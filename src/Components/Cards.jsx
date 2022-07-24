import React from 'react'

function Cards({ fetchData }) {
  // console.log("lll", fetchData)

  return (
    <div className="container-fluid">
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-3 p-5">
        {fetchData && Object.entries(fetchData).map(([key, value]) => {
          return (
            <>
              {(key === "latestArticle" || key === "trandingArticle" || key === "exploreArticle") &&
                <div className="col" key={key}>
                  <div className={`card  bg-light ${(key === "exploreArticle" )? "h-75":"h-100"}`}>
                    <div className="card-body">
                      <h3 className="card-title text-center">{(key === "latestArticle")?"Latest Article":(key === "trandingArticle")?"Tranding Article":"Explore more in Article"}</h3>
                      {value.map(item => {
                        return (
                          <>
                            <hr />
                            {(key === "trandingArticle") && <img src={item.articleImg} alt="Please check your network" style={{ width: "-webkit-fill-available" }} />}
                            <a className="text-dark" style={{ textDecoration: "none" }} key={item.id} href={item.redirectLink} target="_blank">{item.articleTitle}</a>
                          </>
                        )
                      })}
                    </div>
                  </div>
                  {(key === "exploreArticle") && <button type="button" className="btn w-100 mt-3 text-dark" style={{backgroundColor:"#17b8d4"}}><h5>Explore Hidoc Dr.</h5></button>}
                </div>}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Cards