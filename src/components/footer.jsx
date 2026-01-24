import "../assets/styles/footer.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Logo1122 from "..//assets/images/dolap-icon.png"

function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="foooter-main1">
        <div className="footer-txt">
          <p>Hızlı Menü</p>
        </div>
        <div className="footer-txt2">
          <div className="ftrr">
            <div className="ftr">
              <p><a className="footer-link" href="/">Anasayfa</a></p>
              <p><a className="footer-link" href="/hakkimizda">Hakkımızda</a></p>
              <p><a className="footer-link" href="/iletisim">Bizimle İletişime Geçin</a></p>
            </div>
            <div className="social-media">
              <div>
                <a href="https://www.instagram.com/ucboyutluatolye/"><IoLogoInstagram color="white" size="20px" /></a>
              </div>
              <div>
                <a href="https://link.dolap.com/mq8bi7"><img className="logo1122" src={Logo1122}></img></a>
              </div>
              <div>
                <FaXTwitter color="white" size="20px" />
              </div>
              <div>
                <FaWhatsapp color="white" size="20px" />
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="ftr-end-txt">© 2026 Kaan HIZIR Design || All Rights Reserved</div>
      </div>
      </div>
    </>
  );
}

export default Footer;
