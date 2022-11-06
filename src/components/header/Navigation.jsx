import React from 'react'

export default function Navigation() {
  return (
  <nav className='flex mt-10 items-center'>
    <div className='flex items-center'>
<h1 className='text-3xl mr-12 text-rose-600'><span className='text-5xl font-bold'>s</span> streamit</h1>
<ul className='flex gap-6 uppercase'>
    <li><a href="#">Home</a></li>
    <li><a href="#">series</a></li>
    <li><a href="#">movies</a></li>
    <li><a href="#">pages</a></li>
    <li><a href="#">pricing</a></li>
    <li><a href="#">contact</a></li>
</ul>
    </div>
    <div className='ml-auto '>
    <ul className='flex gap-8'>

    <li>
      <a href="">
      <svg className='bi bi-search absolute right-4 top-1/2 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </a>
    </li>
    <li><a href='#'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-bell-fill" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg>
          </a></li>
          <li>
            <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </a>
          </li>
        <li><a className='bg-rose-600 px-6 py-2 rounded-xl hover:text-rose-900' href="#" >Subscribe Now</a></li>
        
     
    </ul>
    </div>
    
    <div>

    </div>
  </nav>
  )
}
