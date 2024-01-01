import React, { useState } from 'react';
import '../style/MediaAds.css';
import { useNavigate } from 'react-router-dom';

const MediaAd = () => {
  const [submitted, setSubmitted] = useState(false);
  const [input, setInputs] = useState({
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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
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
      
    }, 600);
  
  };

  return (
    <div className='mediaForm'>
      <form onSubmit={handleSubmit} className='form1'>
      {submitted && <p className='submittedMessage'> Submitted</p>}
          <p className='ParaGraph'>Create Text and Media</p>
          <div className='FormData'> 
          <div className='heading-desc'>
          <div className='Heading-section'>
          <label>Heading 1</label>
          <input
            type="text"
            name="heading1"
            value={input.heading1}
            onChange={handleChange}
            placeholder="Add a heading that would make the user interested"
          /><br />

          <label>Heading 2</label>
          <input
            type="text"
            name="heading2"
            value={input.heading2}
            onChange={handleChange}
            placeholder="Add a heading that would make the user interested"
          /><br />
           </div>
         <div className='Description-section'>
          <label>Description 01</label>
          <textarea
            name="textarea"
            value={input.textarea}
            onChange={handleChange}
            rows={4}
            cols={50}
            placeholder="Add primary text to help the user understand more about your products, services, or offer"
          /><br />
         </div>
         </div>






         
    <div className='imageSection'>
      <div className='LandscapeImage'>
          <label>Landscape Marketing image</label>
        <input type='text' name='imgUrl1' value={input.imgUrl1  }  onChange={handleChange}  placeholder='Add the URL of an image  that you want to use for ad'></input>
        </div>
         <div className='portrait_image'><label >Portrait Marketing image</label>
         <input type='text'  name='imgUrl2' value={input.imgUrl2  } onChange={handleChange}   placeholder='Add the URL of an image  that you want to use for ad'></input>
         </div>

        <div className='sqaure-image'><label>Square Marketing image</label>
        <input type='text'  name='imgUrl3' value={input.imgUrl3 } onChange={handleChange}    placeholder='Add the URL of an image  that you want to use for ad'></input>
        </div>
        </div>
        <br></br> 



        <div className='VideoUrlSection'>
           <label>Video URL</label>
       <input type='text' name='VideoUrl' value={input.VideoUrl  }  onChange={handleChange}  placeholder='Add the URL of an image  that you want to use for ad'></input>
      
       </div>
      
      <div className='businessSection'>
        <div className='Business-Name'>
        <label>Business Name</label>
          <input type='text' name='BusinessName' value={input.BusinessName } onChange={handleChange}  placeholder='Add your business name'></input><br></br>
          </div>
          <div className='Button-label'>
          <label>Button Label</label>
          <input
            type="text"
            name="buttonLabel"
            value={input.buttonLabel}
            onChange={handleChange}
            placeholder="Select a label that best suits your ad"
          /><br />
          </div>
          </div>

          <div>
          <label>Website URL</label>
          <input type='text'  name='WebUrl' value={input.WebUrl } onChange={handleChange} placeholder='Add the URL of landing page that you want to redirect user to'></input>
          </div>
          <div className='buttons'>
          <button className='WhiteBtn' type="button" >Back</button>
          <button className='BlueBtn' type="submit">Submit</button>
          </div>
          </div>
      </form>
    </div>
  );
};

export default MediaAd;
