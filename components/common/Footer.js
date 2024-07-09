import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='M G S' caption='7' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Saturday<br/> from 10 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+91-84848-75548</h3>
              <br />
              <button className='button-primary'>Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/projects'>Projects</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services#mining-and-civil-engg'>Mining & Civil Engineering Design</Link>
              </li>
              <li>
                <Link href='/services#mineral-resource-assessment'>Mineral Resource Assessment</Link>
              </li>
              <li>
                <Link href='/services#mine-safety-and-ventilation'>Mine Safety & Ventilation</Link>
              </li>
              <li>
                <Link href='/services#mining-education-and-training'>Mining Education & Training</Link>
              </li>
              <li>
                <Link href='/services#automation-solutions'>Automation Solutions</Link>
              </li>
              <li>
                <Link href='/services#geotechnical-expertise'>Geotechnical Expertise</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 MGS. ALL RIGHTS RESERVED.</span>
            </div>
             <div className='connect'>
              <span>Made with 💜</span>
              <span> &nbsp; | &nbsp; </span>
              <span>Team MGS Intern</span>
            </div> 
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
