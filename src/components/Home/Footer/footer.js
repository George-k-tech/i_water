import './footer.css'
function Footer() {
    return (
        <footer>
            <div className="row primary">
                <div className='column about'>
                    <h3>I_Water Website</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                        voluptatem corporis error non,</p>

                    <div className='social'>
                        <i className='fa fa-facebook-square'></i>
                        <i className='fa fa-instagram'></i>
                        <i className='fa fa-twitter-square'></i>
                        <i className='fa fa-youtube-square'></i>
                        <i className='fa fa-whatsapp'></i>
                    </div>
                </div>

                <div className='column links'>
                    <h3> Some LInks</h3>
                    <ul>
                        <li a href="#faq"> F.A.Q</li>
                        <li a href="#cookies">Cookies</li>
                        <li a href="#terms of service">Terms Of Service</li>
                        <li a href="#support">Support</li>
                    </ul>
                </div>

                <div className='column links'>
                    <h3> Some LInks</h3>
                    <ul>
                        <li a href="#faq"> F.A.Q</li>
                        <li a href="#cookies">Cookies</li>
                        <li a href="#terms of service">Terms Of Service</li>
                        <li a href="#support">Support</li>
                    </ul>
                </div>

                <div className='column subscribe'>
                    <h3>Newsletter</h3>
                    <div>
                        <input placeholder='Input your email ' />
                        <button className='btnfooter'> subscribe</button>
                    </div>
                </div>
            </div>
            <div className='row copyright'>
                <div className='footer-menu'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                    <a href="#">Blog</a>
                    <a href="#">Social</a>
                </div>
                <p>Copyright &copy; 2023 I_Website</p>
            </div>
        </footer>
    );
}

export { Footer }