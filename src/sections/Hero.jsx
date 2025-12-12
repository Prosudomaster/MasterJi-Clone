import TitleBadges from "../components/TitleBadges"


const Hero = () => {
  return (
    <section className='flex min-h-dvh flex-col bg-black'>
      <div className="mt-24 flex items-center justify-center px-8 max-xl:flex-col xl:mt-8 xl:px-24">
        <div className="flex-1 flex-col">
          <h1 className='class="font-montserrat text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-white'>
            Show your
            <span className='text-orange-500 dark:text-orange-400'>
              Work.
            </span>
              <br />
              Build for the Real World.
          </h1>
          <p className='text-white ml-1 mt-5 text-left text-default-500 md:text-xl'>
            Learning should be fun and rewarding. We're here to help you achieve.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-10">
            <a href="">
              <button className='text-white cursor-pointer z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 [&>svg]:max-w-8 transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground data-[hover=true]:opacity-hover rounded-lg bg-orange-500 hover:bg-orange-600 p-0 px-6 dark:bg-orange-400 md:ml-3 md:scale-110'>
                Start your journey
              </button>
            </a>
            <a href="">
              <button className='z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 text-small gap-2 [&>svg]:max-w-8 transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-700 data-[hover=true]:opacity-hover rounded-lg p-0 px-6 md:ml-3 md:scale-110'>
                Watch Demo
              </button>
            </a>
          </div>
        </div>

      <div className="relative shadow-black/5 shadow-none rounded-large">
        <img src='/images/hero.png' alt="" className='relative  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none duration-300! z-0 -mr-16 max-w-[850px] self-end rounded-xl pt-10 max-sm:scale-75' />
      </div>
   </div>

      <div className="mt-8 flex flex-wrap gap-12 px-8 max-xl:mx-auto max-sm:scale-90 xl:px-24 2xl:-mt-4 my-10">

   <TitleBadges/>
   <TitleBadges title="500+" tag="Projects Built"/>
   <TitleBadges title="15+" tag="Courses"/>
      </div>
    </section>
  )
}

export default Hero