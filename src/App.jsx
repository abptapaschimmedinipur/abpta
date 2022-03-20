import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Modal from 'react-modal';
import "./App.css";


let flag = true


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const [password, setPassword] = useState('');
  const [flagState, setFlag] = useState(flag);

  const handlePasswordChange=(e)=> {
    setPassword(e.target.value)   
 }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(password)
    if (password === 'abpta'){
      setFlag(false)
      flag = false
    }
    // console.log(name, email, message)
    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       clearState()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }
  return (
    <div>
      <Modal
        isOpen={flagState}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Please Enter the Passord to Enable Public Access</h2>
        <form name='sentMessage'  validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='password'
                        id='password'
                        name='password'
                        className='form-control'
                        placeholder='Enter Password here'
                        onChange={handlePasswordChange}
                        required
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  </div>
                <button type='submit' className='btn btn-custom btn-lg justify-content-center'>
                  Enable
                </button>
              </form>
      </Modal>
      <Navigation />
      <About data={landingPageData.About} />
      {/* <Header data={landingPageData.Header} /> */}
      <Features data={landingPageData.About} />
      
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
