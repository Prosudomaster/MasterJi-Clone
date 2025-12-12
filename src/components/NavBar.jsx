
const NavBar = () => {
  return (
    <section id='nav' className='sticky top-0 z-50 flex flex-col bg-black/10 backdrop-blur-md backdrop-saturate-150'>
        <header className='relative z-40 '>
            <nav className=' flex w-full h-auto items-center justify-center data-[menu-open=true]:border-none top-0 inset-x-0 backdrop-blur-md backdrop-saturate-150 mx-auto max-w-[1440px] border-default-200 bg-transparent pb-2 '>
            <header className='z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-(--navbar-height) max-w-full'>
                        <ul className='flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:grow  data-[justify=end]:basis-0'>
                <div className="">
                    <a className='mt-[15px] flex items-center gap-1.5 text-[24px] lg:px-[9px] undefined' href="/">
                        <img className='size-6' src="/images/masterji-mascot-white.svg" alt="" />
                            <p className='font-montserrat font-semibold text-white'>
                    Master
                    <span className='font-bold text-orange-500 dark:text-orange-400'>
                        J
                        <span className='font-palanquin'>i</span>
                    </span>
                       </p>
                   </a>
                   </div>
            
                
               </ul>
               <div className="flex h-full flex-row flex-nowrap data-[justify=start]:justify-start data-[justify=start]:grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:grow data-[justify=end]:basis-0 mt-4 items-center gap-5">
                <button >
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 30 30" class=" cursor-pointer size-6 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M14.8,24.51h0.19
	c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.21-2.15s1.61-1.97,2.15-3.21s0.8-2.54,0.8-3.91c0-1.36-0.27-2.66-0.8-3.9
	s-1.25-2.31-2.15-3.21s-1.97-1.61-3.21-2.15s-2.54-0.8-3.91-0.8H14.8V24.51z"></path>
    </svg>
                </button>
                    <a href="">
                        <button type='button' className='cursor-pointer rounded-md text-white z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-16 h-8 text-tiny gap-2 rounded-small [&>svg]:max-w-8 transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground data-[hover=true]:opacity-hover hover:bg-amber-600 bg-orange-500 p-0 px-4 dark:bg-orange-400 '>
                            Get Started
                        </button>
                    </a>
               </div>
            </header>
        </nav>
        </header>
        
    </section>
  )
}

export default NavBar