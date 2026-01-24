import {  } from 'react'
import "..//assets/styles/hakkimizda.css"
import Photo from "..//assets/images/about-us-photo1.jpg"
import Photo1 from "..//assets/images/pp-png.png"


function Info() {
  

  return (
    <>
      <div className='about-us-main'>
        <div className='about-us-photo'>
          <div className='about-us-photo-dtl'>
            <img src={Photo}></img>
          </div>
          <div className='aboutus-txt'>HAKKIMIZDA</div>
          <div className='about-us-dlt-txt'>Hassas 3D Baskı Çözümleri</div>
          <div className='about-us-btn'><a href='/'>Ürünlerimizi Keşfedin</a></div>
        </div>

        <div className='about-us-split'>
          <div className='about-txt'>
            <div className='au-baslik'> Biz Kimiz?</div>
            <div className='au-txt'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo unde esse. Aliquam aspernatur obcaecati quia quas inventore. Eius quos ipsum voluptatem? Minima quis repellendus amet reiciendis, incidunt aperiam odio rerum at excepturi fugiat libero vel exercitationem quae recusandae commodi architecto. Rem, quos facere sunt quis quidem minima nam expedita dicta numquam, alias placeat vitae maxime possimus? Dolorum quam temporibus odit quibusdam autem doloremque dignissimos? Repellat porro incidunt eum corporis nisi repudiandae quo? At recusandae officia, consequuntur ullam ipsam ut perferendis quas aliquid aut, odio, corporis distinctio maiores? Amet debitis excepturi ut esse, placeat odit velit nulla sed perferendis nihil?</div>
          </div>
          <div className='owners'>
            <div className='au-baslik'> Ekibimiz</div>
            <div className='members'>
              <div className='mem-1'>
              <div className='profile'><img src={Photo1}></img></div>
              <div className='mem-name'>Umutcan Hızır</div>
              <div className='mem-info'>Maraba</div>
              </div>
              <div className='mem-2'>
                <div className='profile'><img src={Photo1}></img></div>
              <div className='mem-name'>Onur Aslan</div>
              <div className='mem-info'>Maraba</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
