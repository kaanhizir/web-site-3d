import { useState } from 'react'
import '../assets/styles/urunler.css'
import Photo111 from '../assets/images/urunler.jpg'
import { products, categories } from '../assets/db/db'

function Products() {
  // Seçili kategoriyi tutan state
  const [activeCategory, setActiveCategory] = useState("Hepsi");

  // Filtreleme mantığı
  const filteredProducts = activeCategory === "Hepsi" 
    ? products 
    : products.filter(item => item.category === activeCategory);

  return (
    <>
      <div className='main-urunler'>
        {/* Üst Kısım: Banner */}
        <div className='urunler-picture'>
          
          <div className='urunler-pict-pho'>
            <img src={Photo111} alt="Banner" />
          </div>
          
          <div className='aboutus-txt1'>ÜRÜNLERİMİZ</div>
          <div className='about-us-dlt-txt1'>Ürettiğimiz Ürünlerimizi Keşfedin</div>
          <div className='about-us-btn1'><a href='/hakkimizda'>Hakkımızda</a></div>
          
        </div>

        {/* Alt Kısım: Ürün Filtreleme ve Liste */}
        <div className='products-main'>
          <div className='products-container'>
            
            {/* Kategori Butonları */}
            <div className='category-filter'>
              {categories.map((cat) => (
                <button
                  key={cat}
                  // Dinamik class: Eğer aktifse 'active' class'ını ekler
                  className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Ürün Kartları Grid */}
            <div className='products-grid'>
              {filteredProducts.map((product) => (
                <div key={product.id} className='product-card'>
                  <div className='product-img-wrapper'>
                     <img src={product.image} alt={product.title} />
                  </div>
                  <div className='product-info'>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <button className='view-detail-btn'>Detayları Gör</button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Products