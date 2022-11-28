import desktoppic from '../images/image-intro-desktop.jpg'
import mobilepic from '../images/image-intro-mobile.jpg'
import backgroundpatternright from '../images/bg-pattern-intro-right-desktop.svg'
import backgroundpatternleft from '../images/bg-pattern-intro-left-desktop.svg'
import snappy from '../images/icon-snappy-process.svg'
import people from '../images/icon-people-first.svg'
import affordable from '../images/icon-affordable-prices.svg'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'







function Main() {

    return (

        <div>
            <img src={desktoppic} alt="desktopintro" className="desktoppic"></img>
            <img src={mobilepic} alt="mobileintro" className="mobilepic"></img>


            <main>
            <section className='sectionone'>
                <img src={backgroundpatternright} alt="backgroundpatternright" className='backgroundpatternright'></img>
                <img src={backgroundpatternleft} alt="backgroundpatternleft" className='backgroundpatternleft'></img>

                <div className='textfield'>

                    <h1>Humanizing <p>your insurance.</p></h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise
                        and technology to help you find the plan that’s right for you. Ensure you
                        and your loved ones are protected.</p>
                    <div className='button firstbutton'> View plans</div>
                </div>




            </section>


            <section className='sectiontwo'>
                <h2>We're different</h2>
                <div className='columns'>
                    <div className='column'>
                        <img alt="snappyicon" src={snappy}></img>
                        <h3>Snappy Process</h3>
                        <p> Our application process can be completed in minutes, not hours. Don’t get
                            stuck filling in tedious forms.</p>
                    </div>
                    <div className='column'>
                        <img alt="affordable" src={affordable}></img>
                        <h3>Affordable Prices</h3>
                        <p>  We don’t want you worrying about high monthly costs. Our prices may be low,
                            but we still offer the best coverage possible.</p>
                    </div>
                    <div className='column'>
                        <img alt="people" src={people}></img>
                        <h3>People First</h3>
                        <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make
                            sure you’re covered when you need it.</p>
                    </div>

                </div>

            </section>

            <section className='sectionthree'>
                <h2><p>Find out more</p> about how we work</h2>
                <div className='button secondbutton'>HOW WE WORK</div>

            </section>


            <section className='sectionfour'>
                <div className="firstoffooter">
                    <img alt="logo" src={logo}></img>
                    <div>
                        <img alt="facebook" src={facebook}></img>
                        <img alt="twitter" src={twitter}></img>
                        <img alt="pinterest" src={pinterest}></img>
                        <img alt="insta" src={insta}></img>


                    </div>
                </div>

                <div className='secondoffooter'>
                    <ul><p>OUR COMPANY</p>
                        <li>WHY WE WORK</li>
                        <li>WHY INSURE</li>
                        <li>VIEW PLANS</li>
                        <li>REVIEWS</li>
                    </ul>

                    <ul><p>HELP ME</p>
                        <li>FAQ</li>
                        <li>TERMS OF USE</li>
                        <li>PRIVACY POLICY</li>
                        <li>COOKIES</li>

                    </ul>

                    <ul><p>CONTACT</p>
                        <li>SALES</li>
                        <li>SUPPORT</li>
                        <li>LIVE CHAT</li>

                    </ul>

                    <ul><p>OTHERS</p>
                        <li>CAREERS</li>
                        <li>PRESS</li>
                        <li>LICENSES</li>
                        
                    </ul>



                </div>

            </section>

            </main>

        </div>
    )
}

export default Main;