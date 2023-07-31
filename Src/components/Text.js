import React, {useState} from 'react'



export default function Text(props) {

  const handlechange=(event)=>{
    console.log("on change ");
    setText(event.target.value)// now we can write on the txt area and saath mai he nyi value set ho jaa rhi hai txt mai onchnage fucn k run hone k saath saath
    
  }
  const Clickhere= ()=>{
  console.log("hey upper case was clicked"+ txt);
  let newtxt= txt.toUpperCase();
  setText(newtxt);
  //alert("you click");
  }
  const Handle = () => {

    const firstLetter = txt.charAt(1).toUpperCase(); // Capitalize the first letter
    const restOfWord = txt.slice(1).toLowerCase(); // Make all other letters lowercase
    const newtxt= firstLetter + restOfWord;
    setText(newtxt);
  };

  const Clear = () =>{
    console.log("clear text was clicked");
    let newtxt= ''
    setText(newtxt);
  }
  
  const Clicknow= ()=>{
    console.log("hey upper case was clicked"+ txt);
    let newtxt= txt.toLowerCase();
    setText(newtxt);
  }
  const [txt, setText ] = useState(' '); //here setText is a fucntion for updating the state of the txt and txt is a state
   //setText("hey ragini! wassup?");  //the value can be chnage only by using settext function
   //txt="hey!"; //wrong way fo chnaging value
  return (
    <>
      <div className='container'>
      <h2>{ props.heading}</h2>
    <div className="mb-3">
                           {/* <label htmlFor="my box" className="form-label">{props.heading1}</label>*/}
      <textarea className="form-control" value={txt}  onChange={handlechange} id="my box" rows="3"> </textarea>
         {/*here using value to set the value to the txt inside text area and also  onchnage ki vjh se hm uspr kuch change nhi kr sakte hai
      as settext fucntin hai joki chnage krha hai text area ki value ko toh hm lohbg bhi kr skate kucu iske liye event object pass krenge */}
   </div>
    <button className="btn btn-primary mx-1" onClick={Clickhere}>Convert to Uppercase</button> { /*click here fuction*/}
    <button className="btn btn-primary mx-1" onClick={Clicknow}>Convert to lowercase</button> { /*clicknow fuction*/}
    <button className="btn btn-primary mx-1" onClick={Handle}>Convert to Sentence case</button> { /*handle fuction*/}
    <button className="btn btn-primary mx-1" onClick={Clear}>Clear the text</button> { /*click here fuction*/}

  </div>
   <div className="container my-3">
    <h2>Details:</h2>
    <p>characters:{txt.length} words:{txt.split(" ").length}</p>
    <p>minutes to read the words: {0.008* txt.split(" ").length} </p>
    <h3>preview: </h3>
    <p>{txt}</p>
   </div>
    </>
  )
}
