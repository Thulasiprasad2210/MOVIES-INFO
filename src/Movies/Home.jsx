import React from 'react'

const Home = () => {
  return (
    <>
    <div className='mainhead'>
      <div className='head'>
        <h2>WELLCOME to Movie Info.</h2>
        <p>“Discover the latest movies from around the world.<br/>
            Explore detailed information about your favorite films.<br/>
            Find ratings, cast details, and upcoming releases in one place.”
        </p>
      </div>
      </div>
      <div className='latest'>
        <h2>Latest Updates</h2>
        <marquee behavior="scroll" direction="left">
         <img src='https://resizing.flixster.com/qZ1TbrcS76N2GnFka6GgzDLeE-Y=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdiN2RhY2VlLTMwN2UtNGY2Yi1iN2EzLTQ4ODc0YmViMDg3ZS5qcGc=' alt=''/>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuY484VNuH6DQea0DwgHsAYgZCbR0a-jxmLbciys8zoHjd1JJZut8oRSdcQE0lQnAyckwew&s=10' alt=''/>
         <img src='https://upload.wikimedia.org/wikipedia/en/3/38/F1_%282025_film%29.png' alt=''/>
         <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Jailer_2_poster.jpg/250px-Jailer_2_poster.jpg' alt=''/>
         <img src='https://assets-in.bmscdn.com/discovery-catalog/events/et00457060-xhzhxgxzeh-landscape.jpg' alt=''/>
         <img src='https://i.ytimg.com/vi/R9VhmEn1UAs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXMj0bVyVt6QaZe24Y-HrHgP7MAg' alt=''/>
         <img src='https://m.media-amazon.com/images/M/MV5BYzRmNjdiOWQtODY0MC00NTE4LWE2MjEtNjVkNDJkNjYwOTI1XkEyXkFqcGc@._V1_.jpg' alt=''/>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Y_qswxB6YaAgvN_luolTGKH1j6T4yTTsVQ&s' alt=''/>
         <img src='https://m.media-amazon.com/images/M/MV5BODJkYzMxNGUtNmU4OS00NTFmLTg0NWMtMDM0YTI0YmU4MGQzXkEyXkFqcGc@._V1_.jpg' alt=''/>
        </marquee>
      </div>

      <div className='head1'>
        <h1>ABOUT MOVIE INFO.</h1>
        <p>For the Love of Movies.<br/>
            Join a community of cinephiles sharing insights,ratings, and deep dives into the films <br/> that matter
            Find your next favorite film, read honest reviews,<br/> and dive into the world of cinema.
        </p>
      </div>

      <div className='head2'>
        <button className='click'><a href="https://youtu.be/DMD2uthghWE" target='blank'><img src='https://img.freepik.com/premium-vector/play-button-vector-icon-play-button-circle-logo-design_610482-224.jpg?w=360' alt='play'/></a></button>
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

export default Home
