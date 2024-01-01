import React from 'react';
import { useState } from 'react';
import '../style/TextAds.css';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TextAd = () => {
  const [submitted, setSubmitted] = useState(false);
  
    const [input,setInputs]=useState({
        heading1: '',
        heading2: '',
        textarea: '',
        imgUrl1: '',
        imgUrl2: '',
        imgUrl3: '',
        VideoUrl: '',
        BusinessName: '',
        buttonLabel: '', 
        WebUrl: '',
    })

    const handleChange=(event)=>{
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
          ...prevInputs,
          [name]: value,
        }));
    }
    // const history = useHistory();
  const navigate = useNavigate();


 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
        console.log('Form submitted with inputs:', input);
        setSubmitted(true);
        
        setTimeout(() => {
          setSubmitted(false);
          // Navigate to the desired page after the delay
          navigate('/createAd');
          
        }, 1000);
       
      };
    
  return (
    <div className='mediaForm'>
        <form onSubmit={ handleSubmit } className='form1' >
        {submitted && <p className='submittedMessage'> Submitted</p>}
                <p className='ParaGraph'>Create Text and Media</p>
                <div className='FormData'> 
          <div className='heading-desc'>
          <div className='Heading-section'>
        <label>Heading 1</label>
        <input type="text"  name="heading1"  value={input.heading1  }  onChange={handleChange}  placeholder='Add a heading that would make user interested'></input><br></br>
       
        <label> Heading 2</label>
       <input type="text"  name="heading2"  value={input.heading2 }   onChange={handleChange}  placeholder='Add a heading that would make user interested'></input>
       </div>
       <div className='Description-section'>
         <label>Description 01</label>
          <textarea 
             id="textarea"
            value={input.textarea}
            onChange={handleChange}
          rows={4}
           cols={50} 
        placeholder='Add primary text to help user  understand more about your products ,services or offer'
      /></div>
      </div>

      <div className='businessSection'>
        <div className='Business-Name'>
       <label>Business Name</label>
        <input type='text' name='BusinessName'  value={input.BusinessName  }   onChange={handleChange}  placeholder='Add your business name'></input><br></br>
        </div>
        <div className='Button-label'>
       <label>Button Label</label>
       <input type='text' placeholder='select a label that best  suit your ad'></input><br></br>
       </div>
       </div>
       <div>
       <label>Website URL</label>
       <input type='text' name='WebUrl' value={input.WebUrl}    onChange={handleChange}  placeholder='Add the URL of landing page that you want to redirect user to'></input>
       </div>
       <div className='buttons'>
       <button type='button'  className='WhiteBtn' >Back</button>

       <button type='submit' className='BlueBtn'>Submit</button>
       </div>
        </div>
        </form>
    </div>
  )
}

export default TextAd;