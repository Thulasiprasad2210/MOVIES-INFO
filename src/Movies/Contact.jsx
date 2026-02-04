import React from 'react'

const Contact = () => {
  return (
    <>
     <div className='contact'>
      <p>Contact Us</p>
      <h1>MOVIE INFO.</h1>
      <h1>OFFICES</h1>
     </div> 
     <div className='contact-container'>
     <div className='contact1'>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, magni dignissimos est necessitatibus provident recusandae ex, nam animi veniam quis assumenda voluptate ullam eum possimus quibusdam ad rem, quidem illum.</p>
      </div>
      <div className='contact1'>
      <h4>Office 01</h4>
      <p>500 Terry Francine Street
         San Francisco, CA 94158
         movieinfo@mysite.com
         Tel: 123-456-7890</p>
      </div>
      <div className='contact1'>
      <h4>Office 02</h4>
      <p>500 Terry Francine Street
         San Francisco, CA 94158
         movieinfo@mysite.com
         Tel: 123-456-7890</p>
      </div>
      </div>
        <div className='end'>
        <div className='footer'>
            <p>Movies Info.</p>
            <h1>See it First</h1>
            <label for="" className='label'>Enter your email here*</label> <br/>
            <input className='input' type="email" placeholder='Type Here....'/> <br/>
            <label className='check'><input type="checkbox" />Yes, Subscribe me to Newsletter. *</label>
            <button className='btn'>SUBSCRIBE</button>
        </div>
      </div>
        <hr/>
        <div>
          <footer className='copy'>
            <p>&copy; Reserved by MOVIES INFO. 2025</p>
            <button>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target='blank'><img src='https://cdn-icons-png.flaticon.com/128/1384/1384015.png' alt=''/></a>
            </button>
            <button>
            <a href="https://x.com/" target='blank'><img src='https://cdn-icons-png.flaticon.com/128/739/739257.png' alt=''/></a>  
            </button>
            <button>
            <a href="https://www.google.com/?zx=1766555920036&no_sw_cr=1" target='blank'><img src='https://cdn-icons-png.flaticon.com/128/6244/6244710.png' alt=''/> </a>
            </button>
            <button>
            <a href="https://www.facebook.com/login/" target='blank'><img src='https://cdn-icons-png.flaticon.com/128/2168/2168281.png' alt=''/> </a>
            </button>
          </footer>
          </div>
    </>
  )
}

export default Contact
