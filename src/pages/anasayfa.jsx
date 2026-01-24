

import Logo from "../assets/images/banner-11.jpg";
import '../assets/styles/anasayfa.css'
import { IoSettingsOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { SiMaterialdesignicons } from "react-icons/si";
import Photo1 from "../assets/images/main-detail-photo.jpg"
import Photo2 from "../assets/images/main-detail-photo2.jpg"
import Photo3 from "../assets/images/main-detail-photo3.jpg"


function Anasayfa(){
    return(
        <>
        <div className="main">
            <div className="main-picture">
                <img src={Logo}></img>
            </div>
            <div className="main-txt">
                <div className="main-txt-1">GELECEĞİ ŞEKİLLENDİR</div>
                <div className="main-txt-2">Hassas 3D Baskı Çözümleri</div>
                <a href='main-detail' smooth={true} duration={500}><div className="main-txt-3">Daha Fazlasını Keşfet</div></a>
            </div>

            <div className="main-details">
                <div className="card1">
                    <div><IoSettingsOutline size="40" /></div>
                    <div className="dd">Hızlı Prototipleme</div>
                </div>
                <div className="card1">
                    <div><SiMaterialdesignicons size="40" /></div>
                    <div className="dd">Gelişmiş Malzemeler</div>
                </div>
                <div className="card1">
                    <div><BsBuildings size="40"/></div>
                    <div className="dd">Talep Üzerine Üretim</div>
                </div>
            </div>

            <div id="main-detail" className="main-details-2">
                <div className="card2">
                <div className="main-photo1"><img src={Photo1}></img></div>
                <div className="txt-main-1">Deneme</div>
                </div>

                <div className="card2">
                <div className="main-photo1"><img src={Photo2}></img></div>
                <div className="txt-main-1">Deneme</div>
                </div>

                <div className="card2">
                <div className="main-photo1"><img src={Photo3}></img></div>
                <div className="txt-main-1">Deneme</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Anasayfa;