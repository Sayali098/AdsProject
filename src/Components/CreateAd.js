import React from 'react';

import textImg from '../images/textImage.jpg';
import MediaImg from '../images/mediaImg.jpg';
import '../style/CreateAd.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const CreateAd = () => {
  const navigate=useNavigate();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);


  const handleCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setIsChecked1(!isChecked1);
      setIsChecked2(false);
    } else if (checkboxNumber === 2) {
      setIsChecked1(false);
      setIsChecked2(!isChecked2);
    }
  };


  const handleNextClick = () => {
    if (isChecked1) {
      navigate('/form1');
    } else if (isChecked2) {
     navigate('/form2');
    }
   
  };

 
  return (
    <div className='main-div'>
    <div className='createAds'>
      <div >
      <p className='HeadingAd'>Create Ads</p>
      </div>
    <div className='createAdSection'>
    <div  className='TextAd'>
        <div className='CheckboxSection' >
    <input       checked={isChecked1}
   onChange={() => handleCheckboxChange(1)} className='checkbox' type="checkbox"></input>
</div>
<div className='imgSection'>

  <img  className='textImg' src={textImg} ></img>
</div>
<div className='LastSection'>
  <p>Create</p>
  <h2>Text Ad</h2>
</div>
    </div>

<div  className='TextAd'>
<div className='CheckboxSection'> 
<input type="checkbox"   className='checkbox'    checked={isChecked2}
                onChange={() => handleCheckboxChange(2)}></input>
</div>
<div className='imgSection'>
  <img  className='textImg' src={MediaImg} ></img>
</div>
<div className='LastSection'>
  <p>Create</p>
  <h2>Media Ad</h2>
</div>
    </div>

 </div>

<div>
      <button className='BlueBtn'  onClick={handleNextClick}>Next</button>
    </div>
    </div>
    </div>
  )
}

export default CreateAd;