import "../assets/styles/footer.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="foooter-main1">
        <div className="footer-txt">
          <p>PORTFOLIO</p>
        </div>
        <div className="footer-txt2">
          <div className="ftrr">
            <div className="ftr">
              <p>Anasayfa</p>
              <p>Hakkımızda</p>
              <p>Bizimle İletişime Geçin</p>
            </div>
            <div className="social-media">
              <div>
                <a href="https://www.instagram.com/ucboyutluatolye/"><IoLogoInstagram color="white" size="20px" /></a>
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
        <div className="ftr-end-txt">© 2026 HZR Design || All Rights Reserved</div>
      </div>
      </div>
    </>
  );
}

export default Footer;
