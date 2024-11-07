import React from 'react'
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt="" />
                <p>A cozy Mediterranean restaurant serving fresh, flavorful dishes with vibrant spices and zesty flavors in a welcoming atmosphere.</p>
            </div>
            <div>
                <h3>Our Social Media Websites</h3>
                <ul>
                <li>
                        <a href='/'>Facebook</a>
                    </li>
                    <li>
                        <a href='/'>Instagram </a>
                    </li>
                    <li>
                        <a href='/'>Twitter</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Contact us</h3>
                <ul>
                    <li>Address: <br />2910 Mcnicoll Ave,Calgary,Canada</li>
                    <li>Phone: <br />+1 6470828402</li>
                    <li>Email: <br />Little.Lemon@gmail.com</li>
                </ul>
            </div>

        </section>
    </footer>
  )
}

export default Footer