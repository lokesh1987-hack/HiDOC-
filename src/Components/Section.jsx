import React from 'react'
import Cards from './Cards'

function Section({ fetchData }) {

    const { news } = fetchData || {}


    const feature = [
        {
            title: "Quizzes",
            describe: "Play & win hidoc points",
            img: "bi bi-question-lg"
        },
        {
            title: "Surveys",
            describe: "Participate in surveys to earn extra points",
            img: "bi bi-card-checklist"
        },
        {
            title: "Medical Calculator",
            describe: "Tagline related calculator",
            img: "bi bi-calculator"
        }
    ]

    return (
        <div className="bg-light">
            <div className="container pt-4">
                <h1 className="text-center">News</h1>
                {news && <div className="row g-3 bg-light mt-4">
                    <div className="col-md-4">
                        <img src={news[0].urlToImage} alt="..." style={{ width: "-webkit-fill-available" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{news[0].title}</h5>
                            <p className="card-text">{news[0].description}.</p> 
                            <a href="#" style={{textDecoration:"none"}}><i>Read full News</i></a>
                        </div>
                    </div>
                </div>}
            </div>

            <Cards fetchData={fetchData} />
            <div className="container-fluid pt-3 " style={{ backgroundColor: "white" }}>
                <h1 className="text-center mt-4">What's more on Hidoc Dr.</h1>
                <div className="row g-2 row-cols-1 row-cols-md-3 mt-4 mx-4">
                    <div className="col col-md-8 ">
                        <div className="card mb-3 p-4 h-100 bg-light">
                            {news && <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">News</h5>
                                        <p className="card-text">{news[1].title}.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={news[1].urlToImage} className="img-fluid rounded-start " style={{ width: "-webkit-fill-available" }} alt="..." />
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                {feature.map((item,i) => {
                                    const { title, describe, img } = item
                                    return (
                                        <div className="d-flex align-items-center border-bottom pb-2 pt-2" key={i}>
                                            <div className="bg-light p-2 m-1 rounded-circle ">
                                                <i className={`${img} bg-light m-1`} ></i>
                                            </div>
                                            <p className="card-text ms-2"><b> {title} : </b> {describe}.</p>
                                            <hr />
                                        </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center flex-wrap mx-4 p-3 mb-5" style={{backgroundColor:"#dcf3f9"}}>
                        <h1>Social Network for doctors - A special feature on Hidoc Dr.</h1>
                        <h4 className=" rounded-pill p-2 px-3 ms-3" style={{backgroundColor:"#17b8d4"}}>Visit</h4>
                </div>
            </div>

        </div>
    )
}

export default Section