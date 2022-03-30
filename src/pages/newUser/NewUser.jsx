import "./newUser.css"

export default function newUser() {
  return (
    <div className="newUser"><h1 className="newUserTitle">New user</h1>
    <form  className="newUserForn">
        <div className="newUserItem">
            <label>Username </label>
            <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
            <label>Full Name </label>
            <input type="text" placeholder="Kee Sii" />
        </div>
        <div className="newUserItem">
            <label>Email </label>
            <input type="text" placeholder="kee@gmail.com" />
        </div>
        <div className="newUserItem">
            <label>Password </label>
            <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
            <label>Phone </label>
            <input type="text" placeholder="+601245777" />
        </div>
        <div className="newUserItem">
            <label>Address </label>
            <input type="text" placeholder="Kelena jaya , PJ" />
        </div>
        <div className="newUserItem">
            <label>Gender </label>
            <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male"/>
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female"/>
                <label for="female">Female</label>
                <input type="radio" name="gender" id="Other" value="Other"/>
                <label for="other">Other</label>
            </div>

        </div>
        <div className="newUserItem">
            <label>Active </label>
            <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value= "no">No</option>
            </select>
            
        </div>
        <button className="newUserButton"> Create User</button>

    </form>

      
    </div>
  )
}
