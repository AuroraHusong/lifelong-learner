import React from 'react'
import '../style/Footer.css'

function  Footer() {
    return (
        <div className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-section">
              <div className="footer-heading">Company</div>
              <ul className="footer-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-section">
              <div className="footer-heading">Community</div>
              <ul className="footer-links">
                <li><a href="#">Team Plans</a></li>
                <li><a href="#">Refer a Friend</a></li>
                <li><a href="#">Limited Memberships</a></li>
                <li><a href="#">Free Classes</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-section">
              <div className="footer-heading">Teaching</div>
              <ul className="footer-links">
                <li><a href="#">Become a teacher</a></li>
                <li><a href="#">Teacher Help Center</a></li>
                <li><a href="#">Teacher Rules & Requirements</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            © Learn4, Inc. 2023
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#">Help</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <div className="footer-privacy-choices">
                Your Privacy Choices
                <img loading="lazy" srcSet="..." className="privacy-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Footer