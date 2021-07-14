import upload from './upload.svg'
import not from './not.svg'
import PP from './profilepic'

let links = {
  linkArray :["Free desgins",'License','Articles','Contributors',"About"],

}

function link(link,key){
  return <a href={`../../pages/${link}`} key={`#${key}`}>{link}</a>
}

function Nav() {
  return (
      <nav className="nav">
        <img className="logo" src="https://www.uidesigndaily.com/public/img/uidesigndaily-logo.svg" alt="" />

       <div className="cont">
        <ul className="nav_links">

        { links.linkArray.map(function(object, key){
        return link(object,key);
         })}

        </ul>
        

        <div className="user_utils">
            <img className="notific" src={not} alt="" />
            <PP className='profile1' src ='https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/87797912_2455220481397176_1058887516398026752_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=mBk8GylC2XoAX9a9iw9&_nc_ht=scontent.fdac116-1.fna&oh=07b2d74eb42c2ca11f409211cb9709c1&oe=60F46814'/>
            <button className="upload"><img className="ul_img" src={upload} alt="" /> Upload</button>
        </div>
        </div>
      </nav>
  );
}

export default Nav;