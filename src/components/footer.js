import React from 'react'
// import Link from 'gatsby-link'

const Footer = () => (
  <div id="footer">
    <div className="container medium">
      <header className="major last">
        <h2>Questions or comments?</h2>
      </header>

      <p>
        Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur
        tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus.
      </p>

      <form method="post" action="/">
        <div className="row">
          <div className="col-6 col-12-mobilep">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="col-6 col-12-mobilep">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea name="message" placeholder="Message" rows="6" />
          </div>
          <div className="col-12">
            <ul className="actions special">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
        </div>
      </form>

      <ul className="icons">
        <li>
          <a href="/" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="/" className="icon fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>

      <ul className="copyright">
        <li>&copy; FlowBJJ. All rights reserved.</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>
          Framework: <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
        </li>
        <li>
          Developer: <a href="https://couturecraig.com">Craig Couture</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
