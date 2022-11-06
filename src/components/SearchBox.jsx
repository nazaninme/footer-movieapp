import React from 'react'

export default function SearchBox() {
  return (
    <section className=' mt-16 text-slate-600'>
        <div className='relative'>
        <input type="text" className='w-full p-2 bg-slate-200 text-xl border-neutral-900 rounded-xl outline-none placeholder:text-base' placeholder='search for a movie, TV show or celebrity that you are looking for...'/>
        <svg className='absolute right-4 top-1/2 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </div>
       
      
    </section>
  )
}
