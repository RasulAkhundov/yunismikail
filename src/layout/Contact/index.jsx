"use client"
const Contact = () => {
   return (
      <div id="contact" data-scroll-section>
         <div className="contact-area row">
            <div className=" col-lg-12 contact-box">
               <h2>Want to work together?</h2>
               <p style={{ fontFamily: "Gilroy-Medium" }}>Feel free to reach out for collaborations or just a friendly
                  hello. <br />
                  yunismikail@gmail.com</p>
               <div className="contact-me">
                  {/* <a  className="">Contact via Email</a> */}

                  <a href="mailto:yunismikail@gmail.com" className="animated-button__cover c-button">
                     <span className="animated-button__text">Contact via Email</span>
                     <span className="animated-button__text">Let's talk</span>
                  </a>

                  <ul>
                     {/* <!-- <li className="insta"><a href="" ><i className="fa-brands fa-instagram"></i></a></li>
                     <li className="linkedin"><a href="" ><i className="fa-brands fa-linkedin-in"></i></a></li>
                     <li className="medium"><a href="" ><i className="fa-brands fa-medium"></i></a></li> --> */}

                     <a target="_blank" href="https://www.instagram.com/yunismikayilov/" className="insta"><i
                        className="fa-brands fa-instagram"></i></a>
                     <a target="_blank" href="https://az.linkedin.com/in/yunismikayilov" className="linkedin"><i
                        className="fa-brands fa-linkedin-in"></i></a>
                     <a target="_blank" href="https://yunismikayilov.medium.com" className="medium"><i
                        className="fa-brands fa-medium"></i></a>
                  </ul>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Contact