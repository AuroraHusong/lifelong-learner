import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);



  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
      navigate('/searchResults/' + searchInput);
  };

  const handleCategoryClick = (newCategory) => {
    navigate(`/ClassList/${newCategory}`);
  };
  

  return (
    <div className="nav-header">
      <Link to="/">
        <img
          loading="lazy"
          src="/images/misc/logo.png"
          className="nav-image"
          alt="Site Logo"
        />
      </Link>
      <div className="nav-items">
        <div className="nav-links dropdown">
          <div className="nav-link-text">Browse</div>
          <img
            loading="lazy"
            src="/images/misc/dropdownArrow.png"
            className="nav-link-icon"
            alt="Image Description"
          />
          <div className="dropdown-content">
            <a onClick={() => handleCategoryClick('Programming')}>Programming</a>
            <a onClick={() => handleCategoryClick('Design')}>Design</a>
            <a onClick={() => handleCategoryClick('Business & Management')}>Business & Management</a>
            <a onClick={() => handleCategoryClick('Fashion Design')}>Fashion Design</a>
            <a onClick={() => handleCategoryClick('Physical & Mental Health')}>Physical & Mental Health</a>
            <a onClick={() => handleCategoryClick('History & Religion')}>History & Religion</a>
            <a onClick={() => handleCategoryClick('Lifestyle & Personal Development')}>Personal Development</a>
            <a onClick={() => handleCategoryClick('Politics & Law')}>Politics & Law</a>
          </div>
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
                    
                    <Link to="#">
                      <img
                        loading="lazy"
                        src ='/images/misc/courses.png'
                        className='nav-image-icon-1'
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
    
    export default Navbar