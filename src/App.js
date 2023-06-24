import React from "react";
import { useState , useRef  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // const inputusername = useRef(null);
  // const buttonc = useRef(null);
  // // const [username, setusername] = useState("");
  // // const [error, seterror] = useState(false);
  // const changeHandler = async (e)=>{
   
  //   // await setusername(e.target.value)
  //   let i = inputusername.current;

  //   if(i.value.length < 5){
  //     i.style.outline = '1px solid red'
  //     i.style.border = '1px solid red'
  //     buttonc.current.disable = true
  //   }
  //   else{
  //     i.style.outline = 'initial'
  //     i.style.border = 'initial'
  //     buttonc.current.disable = false
  //   }
  //   // if(username.length < 4){
  //   //   seterror(true)
  //   // }
  //   // else{
  //   //   seterror(false)
  //   // }
  //   console.log(buttonc.current.disable)
  // }

  const sub = useRef(null);
  const title = useRef(null);
 const des =  useRef(null)
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("");


  const TitleHandler = (e)=>{
    console.log("enter");
    setTitle(e.target.value);
    if(title.current.value.length < 4){
      title.current.style.border = "1px solid red";
      title.current.style.outline = "1px solid red";
      sub.current.disabled = true
      return;
     }
     else{

      title.current.style.border = "initial"
      title.current.style.outline = "initial"
      sub.current.disabled = false
     }
     if(title.length > 3 && desc.length > 3){
       sub.current.disabled = false
       
      }
      else{
       sub.current.disabled = true
     }
  }

  const desHandler = (e)=>{
    console.log("enter");
    setdesc(e.target.value);
    if(des.current.value.length < 4){
      des.current.style.border = "1px solid red";
      des.current.style.outline = "1px solid red";
      sub.current.disabled = true
      return;
     }
     else{

      des.current.style.border = "initial"
      des.current.style.outline = "initial"
      sub.current.disabled = false
     }
  }

    const submitHandler = async (e)=>{
      e.preventDefault();
      if(Title.trim().length === 0  && desc.trim().length === 0){
        alert("field are empty");
        return;
      }
      console.log('hello')
      console.log(Title,desc);
    }
  return (
   <div>
    {/* <form className="container mt-5 pt-5">
      <input className="form-control w-50" type="text" placeholder="username" onChange={changeHandler} ref={inputusername}/>
      <br />
      <button ref={buttonc}  className="mt-3 btn btn-primary">Submit</button>
    </form> */}
    <form onSubmit={submitHandler} className="container mt-5 pt-5">
    <input className="form-control w-30 mt3" type="text" placeholder="Title" onChange={TitleHandler} value = {Title} ref ={title}/>
    <textarea  className="form-control w-30 mt-3" type="text" placeholder="description" onChange={desHandler} value = {desc} ref={des} ></textarea>
    <button ref={sub} className="btn btn-primary">Submit</button>
    </form>
   </div>
  );
}

export default App;

// const [Images, setImages] = useState(null)

// try{
//   const {data} = await.axios.get('https://picsum.photos/v2/list')
// }
// catch{
//     console.log(err)
// }
