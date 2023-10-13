import React, {useState,} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import '../style/Navbar.css'


function  NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    console.log("yayayayaya")
    if (searchInput.toLowerCase() === 'python') {
      navigate('/searchResult');
    }
  }
  

    return (
                
                  <div className="nav-header">
                    <Link to="/">
                    <img
                      loading="lazy"
                      src ='/images/misc/logo.png'
                      className="nav-image"
                      alt="Site Logo"
                    />
                    </Link>
                    <div className="nav-items">
                      <div className="nav-links">
                        <div className="nav-link-text">Browse</div>
                        <img
                          loading="lazy"
                          src ='/images/misc/dropdownArrow.png'
                          className="nav-link-icon"
                          alt="Image Description"
                        />
                      </div>
                      <div className="nav-search">
                      <div className="nav-search">
  <form onSubmit={handleSearch} role="search">
    <label htmlFor="search" className="label-hidden">
      Search for stuff
    </label>
    <input
      id="search"
      type="search"
      placeholder="Search..."
      autoFocus
      required
      value={searchInput}
      onChange={handleInputChange}
      className="nav-search-input"
    />
    <button type="submit" className="nav-search-button">
      
    </button>
  </form>
</div>

</div>
                    </div>
                    <div className="nav-icons">
                    
                    <Link to="/myCourses">
                      <img
                        loading="lazy"
                        src ='/images/misc/courses.png'
                        className='nav-image-icon'
                        alt="Image Description"
                      />
                      </Link>
                     
                 
                      <a href='https://clickup.com/?utm_source=friday-app&utm_medium=owned&utm_campaign=fri_owned_ar_nnc_pro_trial_all-devices_x_lp_x_all-departments_software-listicle&utm_term=x_x_x_x_x_x_x&utm_content=x_x_x_x_x_x_digital-planners'>
                      <img
                        loading="lazy"
                        src ='/images/misc/calender.png'
                        className="nav-image-icon"
                        alt="Image Description"
                      />
                      </a>
       
                      <img
                        loading="lazy"
                        src ='/images/misc/community.png'
                        className="nav-image-icon"
                        alt="Image Description"
                      />
   
                      
  <div className="notifications-container">
  <button onClick={toggleDropdown} className="notifications-icon">
    {  <img
                        loading="lazy"
                        src ='/images/misc/notifications.png'
                        className="nav-image-icon"
                        alt="Image Description"
                      />}
  </button>
  {isOpen && (
    <div className="dropdown-menu">
      <div className="notification">
        Vivian,
        <br/>Congratulations on finishing a course!<br/>
         You've earned a new badge!
      </div>
    </div>
  )}
</div>
                    </div>
                    <Link to="/profile">
                    <img
                      loading="lazy"
                      src="/images/misc/profilePhoto.jpg"
                      className="img-8"
                      alt="User Profile Picture"
                    />
                    </Link>
                  </div>
    )
}
    
    export default NavBar