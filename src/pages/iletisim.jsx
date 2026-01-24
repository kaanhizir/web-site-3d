import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import CPicture from "..//assets/images/about-us-photo1.jpg";
import "..//assets/styles/iletisim.css";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Contact() {
  const position = [40.97832395750039, 40.61446954009466];

  return (
    <>
      <div className="contact-main">
        <div className="contact-pic">
          <div className="contact-picture">
            <img src={CPicture}></img>
          </div>
          <div className="contact-txt">BİZİMLE İLETİŞİME GEÇİN</div>
          <div className="contact-txt1">Geleceği Birlikte İnşa Edelim</div>
        </div>
        <div className="cntc-main">
          <div className="left-side">
            <div className="cnct-Info">
              <div className="contactInfo">İletişim Formu</div>
              <div className="contact-form">
                <form className="input-style">
                  <input className="acs" type="text" placeholder="İsim"></input>
                  <input className="acs" type="text" placeholder="E-Mail"></input>
                  <input className="acs" type="text" placeholder="Telefon Numarası"></input>
                  <input className="asc" type="text" placeholder="Mesaj"></input>
                  <button className="form-btn" type="submit">Gönder</button>
                </form>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="cnct-Info">
              <div className="contactInfo">İletişim Bilgileri</div>
              <div className="adress aaa">
                <span className="bbb">Adres: </span>Güneysu / Rize
              </div>
              <div className="email aaa">
                <span className="bbb">E-Mail: </span>email@email.com
              </div>
              <div className="phone-num aaa">
                <span className="bbb">Telefon Numarası: </span>0535 000 00 00
              </div>
              <div style={{ height: "400px", width: "635px" }}>
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  {/* Harita görünümünü sağlayan katman (OpenStreetMap) */}
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Adres işaretleyici */}
                  <Marker position={position}>
                    <Popup>
                      Burası İstanbul! <br /> İstediğiniz açıklamayı buraya
                      yazabilirsiniz.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
