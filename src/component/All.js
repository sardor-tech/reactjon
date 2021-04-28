import React from 'react';
import Video1a from "./video/pexels-tima-miroshnichenko-5805060.mp4"
import "./video/main.css"
import Rasm from './img/172407999_149000247148001_4141694971133230545_n.jpg'
import Typical from 'react-typical'
import Mp from "./mp/mp.mp3"
import Swing from 'react-reveal/Swing';


const All = () => {
    function play() {

    }

    return (

        <div className="container-fluid">

            <div className="container mt-5">
                <div>
                    <video autoPlay loop className="for-video" muted>
                        <source src={Video1a} type="video/mp4"/>
                    </video>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-3  ">

                    </div>
                    <div className="col-6 "><h1><i> Tug'ilgan kuningiz bilan.</i></h1></div>
                </div>


                <div className="box py-5 px-4 col-12 border border-dark">


                    <h3 className="text-left text-dark"><b><Typical
                        loop={Infinity}
                        wrap="b"
                        steps={[
                            ' Khujaev Sardor sizni Tug‘ilgan kuningiz bilan ' +
                            'tabriklaydi! Ajoyib baxt, abadiy yoshlik va go‘zallik, cheksiz quvonch, mexr-' +
                            'oqibat, ko‘tarinki kayfiyat xamrox bo‘lsin! Sog‘lik-salomatlik, doimiy faollik va izchi' +
                            'llik, o‘z qadrini biladigan va misli ko‘rilmagan ijobiy natijalarga erishish baxti nasib etsi' +
                            'n! Siz qo‘l urgan barcha xayrli ishlar muvaffaqqiyat cho‘qqilarini zabt etsin, yaxshi kayfiyat xe' +
                            'ch qachon Sizni tark etmasin!', 1000000,

                        ]}/></b></h3>
                </div>

                <div className="row mt-6">
                    <div className="col-6">

                    </div>
                    <div className=" col-4">
                        <h6>&#169;. Khujaev Sardor | 15.04.2021</h6>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default All;