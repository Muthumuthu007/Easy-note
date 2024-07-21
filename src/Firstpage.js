import React  from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Firstpage() {
    const navigate = useNavigate();
    return (
      <div className="App">
        <header className="App-header align">
          <div className="image ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaMEXaW-S--76fGnw2xkFiBa7fuRDOXOpJQ&s"></img>
          </div>
          <button className= "post"type='button' onClick={() => navigate('/Notepd')}>Post</button><br></br>
          <button className='get' type='butoon ' onClick={()=> navigate('/codepage')}>Get</button>
        </header>
      </div>
    );
  }
  
  export default Firstpage;