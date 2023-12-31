import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user);

    const handleSignOut = () => {
          logOut()
           .then()
           .catch()
    }


    const handleGooglesSingIn = () => {
       signInWithPopup(auth, GoogleProvider )
       .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser)
       })
       .catch(error => 
        {            
            console.log('error', error.message);
        })}

    const navLinks = <>
           <li><NavLink to='/'>Home</NavLink></li>
           <li><NavLink to='/about'>About</NavLink></li>
           <li><NavLink to='/career'>Career</NavLink></li>
           <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div class="navbar bg-base-100">
          <div className="text-[30px] font-bold text-green-400">Builder</div>
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div class="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* <img src={userDefaultPic} /> */}
        </div>
      </label>
      {
        user ?  
        
      <>  
         <button onClick={handleSignOut} className=" flex">
         <p className="btn w-[100px] border bg-red-100">Sign Out</p></button>

         <div className="">
          {/* {user.email} */}
         <img style={{borderRadius:'50%',marginLeft:'40%', width:'40%'}} src= {user.photoURL} alt="" />
          <h2 className="">{user.displayName}</h2>
          </div>
      </> : 
       <Link to='/login' className="ml-3" class="btn bg-blue-200">Login</Link>
      }
  </div>
</div>
    );
};

export default Navbar;