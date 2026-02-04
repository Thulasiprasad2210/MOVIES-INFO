import React from 'react'

const ComingSoon = () => {
  return (
    <>
        <div className='work'>
          <h1>Browse Our Work</h1>
          <p>Browse Our Work to explore movies, cast details, ratings, and trailers.<br/>
             Find information on both classic and latest releases.
             Everything is <br/>organized for easy discovery.
             Enjoy exploring <br/>the world of cinema. 🎬</p>
        </div>

         <h1 className='movie'>COMING SOON 🎦</h1>
      <div className='coming'>
        <div className='soon'>
          <img src='https://upload.wikimedia.org/wikipedia/en/2/20/Varanasi_%282027_film%29_poster.jpg' alt=''/>
          <p>Varanasi | 2027</p>
          <p>Varanasi is one of the oldest living cities in the world, known for its rich spiritual and cultural heritage.
             Situated on the banks of the Ganges River, it is a major center of pilgrimage, rituals, and traditions.</p>
           </div>
           <div className='soon'>  
          <img src='https://upload.wikimedia.org/wikipedia/en/9/90/The_Odyssey_%282026_film%29_poster.jpg' alt=''/>
          <p>The Odyssey | 2026</p>
          <p>The Odyssey is an adventure movie about Odysseus, a Greek hero who struggles to return home after the Trojan War. Along the way, he faces monsters, gods, and many challenges that test his intelligence and determination.</p>
            </div>
            <div className='soon'> 
          <img src='https://i.redd.it/icfg9fuw231g1.jpeg' alt=''/>
          <p>Dune part 3 | 2026</p>
          <p>Dune: Part Three continues Paul Atreides’ story as he deals with the consequences of his rise to power across the universe. The film focuses on destiny, sacrifice, and the cost of leadership as the conflict over Arrakis reaches a critical point.</p>
            </div>
             <div className='soon'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JZNPhxE_zXPLswFgOOuulso3czoVv7wYgM3JldE5I6TeTc-f_nCe5z4_F3jZyOW-phZK&s=10' alt=''/>
          <p>Spider-Man: Brand New Day | 2026</p>
          <p>Spider-Man: Brand New Day follows Peter Parker starting over after the world forgets he is Spider-Man. As he rebuilds his life, he faces new villains and challenges while trying to balance being a hero and a normal person.</p>
            </div>
             <div className='soon'>
          <img src='https://pbs.twimg.com/media/G4Ce-fpWUAARb-C.jpg' alt=''/>
          <p>Spirit | 2026</p>
          <p>*Spirit* is an upcoming action drama starring Prabhas as a tough and intense police officer. The movie focuses on crime, justice, and the psychological struggles of a man pushed to his limits.</p>
            </div>
             <div className='soon'>
          <img src='https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg' alt=''/>
          <p>Batman 2 | 2027</p>
          <p>*The Batman Part II* continues Bruce Wayne’s journey as he faces darker threats in Gotham City. The movie explores crime, corruption, and Batman’s struggle to balance justice with his own inner demons.</p>
            </div>
             <div className='soon'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO76u9xvtqEP3l0FC3A0GEY6d2Cg-226l0ZFaP0LsSN1_K0CoUqrm8aPp5IdOkPE1gZS8_A&s=10' alt=''/>
          <p>Avengers: Doomsday | 2026</p>
          <p>Avengers: Doomsday brings Earth’s heroes together to face a universe-level threat that could destroy everything they know. The movie focuses on teamwork, sacrifice, and the fight to stop total annihilation before time runs out.</p>
             </div>
             <div className='soon'>
          <img src='https://upload.wikimedia.org/wikipedia/en/3/37/Michael_%282026_film_poster%29.png' alt=''/>
          <p>Michael | 2026</p>
          <p>The Michael Jackson biopic tells the story of the King of Pop’s life, from his childhood with the Jackson 5 to becoming a global music icon. The film explores his talent, struggles, and lasting impact on music and culture.</p>
             </div>
             <div className='soon'>
          <img src='https://m.media-amazon.com/images/M/MV5BYTIxMTYxY2YtMGMxNi00Y2U0LWE5OWYtMDNjZDYzODIwOGU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' alt=''/>
          <p>Scream 7 | 2026</p>
          <p>Scream 7 sees Sidney Prescott confronting a new Ghostface who targets her daughter.
            The movie combines classic characters with new faces, delivering suspense, scares, and shocking twists.</p>
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

export default ComingSoon
