
let links = {
  linkArray :["Public profile",'Account settings','Notifications','PRO Account'],

}

function link(link,key){
  return <a href={`../../pages/${link}`} key={`#${key}`}>{link}</a>
}

function Side() {
  return (
       <div className="cont1">
       <h1>Settings</h1>
        <ul className="nav_links side">

            { links.linkArray.map(function(object, key){
             return link(object,key);
            })}

        </ul>
        
        </div>

  );
}

export default Side;