import React from 'react'

function NavigationBar() {

    let pages = ["Social Network", "Drug Database", "Medical Calculator", "Articles", "News", "Quizzes", "Surveys", "Drug Interaction", "Diseases Database"]

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="#">
                            <img src="https://hidoc.co/assets/img/logo/logo-desktop.png" alt="Image not found" style={{ width: "100px" }} />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "50px" }} >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            {pages.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index} >
                                        <a className="nav-link active " aria-current="page" href="#">{item}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar