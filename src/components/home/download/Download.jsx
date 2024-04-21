import React from 'react'
import '../download/Download.css'
import DownloadApp from './DownloadApp'
import mobil_img from '../../../assets/images/mobilimage.svg'
import rating_img from '../../../assets/images/rating.svg'
import store_img from '../../../assets/images/appstore.svg'

const Download = () => {
  return (
    <section class="download">
                    <div class="container">
                      <div class="container-mobil">
                        <div>
                            <img class="mobil" src={mobil_img} alt="mobil image"/>
                        </div>
                        
                        <div class="downloadstore">
                           
                            <h1>Download Our App for Any Devices:</h1>
                            <div class="downloadappar">
                                    
                                 <DownloadApp title= "App Store" img={rating_img} text="Editor's Choice" text2='rating 4.7, 187K+ reviews' img2={store_img}/>
                                 <DownloadApp title= "Google Play" img={rating_img} text="App of the Day" text2='rating 4.8, 30K+ reviews' img2={store_img}/>
                                   
                            </div>         
                        </div>
                      </div>
                    </div>
                  
    </section>
  )
}

export default Download