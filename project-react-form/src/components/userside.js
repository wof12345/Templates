import PP from './profilepic'
import Input from './inputfield'
 
 function Userside(props) {
    return (
        <div className="user">
            <div className="inner_user">
                <h2 >Public profile </h2>

                <div className="user_info">
                <PP container='bigger' className='profile2' src ='https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/87797912_2455220481397176_1058887516398026752_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=mBk8GylC2XoAX9a9iw9&_nc_ht=scontent.fdac116-1.fna&oh=07b2d74eb42c2ca11f409211cb9709c1&oe=60F46814'/>

                <div className="user_util-btns">
                   <button className="change_profile-pic">Change picture</button> 
                   <button className="delete_profile-pic">Delete picture</button>
                </div>
                </div>

                <div className="form">

                    <div className="double_cont">
                    <Input label='First Name' input='firstname' type='text' placeholder="First name"/>
                    <Input label='Last Name' input='lastname' type='text' placeholder="Last name"/>
                    </div>  

                    <Input label='Location' input='location' type='text' placeholder="Location"/>
                    <Input label='Profession' input='profession' type='text' placeholder="Profession"/>
                    <Input label='Bio' input='bio' type='text' placeholder="Bio"/>
                    
                </div>
             </div>
        </div>
    );
 }
  
  export default Userside;