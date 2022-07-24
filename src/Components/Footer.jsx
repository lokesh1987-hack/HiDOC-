import React from 'react'

function Footer() {

    const socialMedia = [
        {
            logo: "bi bi-facebook",
            url: "https://www.facebook.com/hidocdr"
        },
        {
            logo: "bi bi-instagram",
            url: "https://www.instagram.com/hidocdr/"
        },
        {
            logo: "bi bi-linkedin",
            url: "https://www.linkedin.com/company/infedis-infotech/"
        },
        {
            logo: "bi bi-youtube",
            url: "https://www.youtube.com/channel/UCjMVeETQ4fJzMfv3reoeIFw"
        }]

    const features = [
        {
            name: "Drug Database",
            logo: "bi bi-folder",
            boxColor:"#fde3ec",
            innerColor:"#ef4a80"
        },
        {
            name: "Social Network",
            logo: "bi bi-people-fill",
            boxColor:"#dcf3f9",
            innerColor:"#17b8d4"
        },
        {
            name: "Drug Interaction",
            logo: "bi bi-file-earmark-text",
            boxColor:"#feeedf",
            innerColor:"#f49020"
        },
        {
            name: "Medical Calculator",
            logo: "bi bi-calculator-fill",
            boxColor:"#75b743",
            innerColor:"#00582f"
        },
        {
            name: "Articles",
            logo: "bi bi-file-earmark-text",
            boxColor:"#fde3ec",
            innerColor:"#ef4a80"
        },
        {
            name: "Quizzes",
            logo: "bi bi-trophy",
            boxColor:"#75b743",
            innerColor:"#00582f"
        },
        {
            name: "Diseases Database",
            logo: "bi bi-file-earmark-text",
            boxColor:"#fde3ec",
            innerColor:"#ef4a80"
        },
        {
            name: "Surveys",
            logo: "bi bi-card-checklist",
            boxColor:"#dcf3f9",
            innerColor:"#17b8d4"
        }
    ]
    return (
        <div className="container-fluid">

            <div className="row gy-2 pt-3 text-light" style={{backgroundColor:"#091634"}} >

                <div className="col-lg-4 col-ms-4 pt-2 ">
                    <div className="container">
                        <img src="https://hidoc.co/assets/img/logo/logo-desktop.png" alt="Check you network" />
                        <p className="p text-start">Fastest Growing Medical platform for Doctors</p>
                        {socialMedia.map((item,i) => {
                            return (<a href={item.url} target="_blank" key={i}><i className={`${item.logo} mx-2 p-2 rounded-circle border border-2`}></i></a>)
                        })}
                    </div>

                </div>
                <div className="col-lg-4 col-ms-4 text-start ">
                    <div className="container mt-2">
                        <h3>Reach Us</h3>
                        <p>please contact below detailes for any other information</p>
                        <p>Email : varun@hidoc.co</p>
                        <p>Adress :
                            Hidoc Dr.Inc, 2055 Limestone Rd, STE 200-C Wilmington, DE, 19808, United States </p>
                    </div>
                </div>
                <div className="col-lg-4 col-ms-4 text-start">
                    <h3 className="ms-2">HIDOC DR. FEATURES</h3>
                    <div className="container">
                        <div className="row row-cols-3 row-cols-md-4 mb-2">
                            {features.map((item,i)=>{
                                return(
                                    <div className="col border text-center pt-3" style={{backgroundColor:item.boxColor}} key={i} >
                                        <i className={`${item.logo} p-2  rounded-circle border border-2 `} style={{backgroundColor:item.innerColor}}></i>
                                        <p className="mt-2 text-dark">{item.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer