import { useState, useEffect } from "react";
//we set our external url as variable
const data = "https://api.github.com/users";
console.log(data);
//INPORTED A USESTATE AND DATA LINK
// SET A FUNCTION
const Github = () => {
  // WE SET A USE STATE we use angle bracket
  const [myuse, setMyuse] = useState([]);
  //WE SET A USE EFFECT
  useEffect(() => {
    //WE SET TRY AND CATCH WHICH IS A FUNCTION in the try
    const myFetch = async () => {
      try {
        const response = await fetch(data);
        const myData = await response.json();
        setMyuse(myData);
        console.log(myData);
      } catch (error) {
        console.log(error);
      }
    };
    myFetch();
  }, []);
  // we want to set the function so we list the item by mapping over it

  return (
    <div className="myimg">
      {myuse.map((myDatas) => {
        const { id, login, avatar_url, html_url } = myDatas;
        //we set ul for listing
        return (
          <div key={id} className="myReturn">
            <div>
              <div className="ourimage">
                <img src={avatar_url} alt="login" />
              </div>
              <ul>
                <li>
                  <a href={html_url}>Follow</a> {login}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Github;
