import React from 'react'

import '../../components/footer/Footer.css'

const Footer = () => {
  return (
    <footer>
                <div class="container">
                    <div class="social-media">
                        <a href="https://www.facebook.com/?locale=sv_SE" target="_blank" class="btn-social"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/?lang=sv" target="_blank" class="btn-social"><i class="fa-brands fa-square-x-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" class="btn-social"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/" target="_blank" class="btn-social"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    <p>&copy; 2024 Silicon. All rights reserved. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium reiciendis illum perspiciatis ab nisi dicta consectetur deleniti corrupti atque. Excepturi ad consequatur rerum ipsum sequi ab enim illum nesciunt dolores.</p>
                </div>
    </footer>
  )
}

export default Footer