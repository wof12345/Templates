import './nav.css';
import upload from './upload.svg'
import not from './not.svg'

function Nav() {
  return (
      <nav className="nav">
        <img className="logo" src="https://www.uidesigndaily.com/public/img/uidesigndaily-logo.svg" alt="" />

        <ul className="nav_links">
         <a href="/">Free designs</a>
         <a href="/">License</a>
         <a href="/">Articles</a>
         <a href="/">Contributors</a>
         <a href="/">About</a>
        </ul>

        <div className="user_utils">
            <img className="notific" src={not} alt="" />
            <img className="profile" src="https://www.vhv.rs/dpng/d/428-4287793_male-profile-round-circle-users-svg-png-icon.png" alt="" />
            <button className="upload"><img className="ul_img" src={upload} alt="" /> Upload</button>
        </div>
      </nav>
  );
}

export default Nav;