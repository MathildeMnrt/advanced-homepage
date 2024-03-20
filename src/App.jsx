import './index.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { creative_process_content } from './constants/constants'

function App() {

  return (
    <>
      <div className='sora'>

        <NavBar />

        {/* --------------------------- SECTION 1 --------------------------- */}
        <section className='flex flex-row mt-[96px] ml-10 max-w-7xl md:mx-auto'>

          {/* SECTION 1 - LEFT */}
          <div className='flex flex-col gap-[32px] md:w-1/2 mr-5 md:mx-10'>

            <div className='bg-violet-100 flex flex-row items-center p-1 pr-7 rounded-full gap-5 w-fit'>
              <img
                src='opacity.svg'
                className='bg-violet-200 rounded-full items-center h-8 w-8 p-2'
              />
              <p className='text-[12px] text-violet-200 font-medium text-nowrap'>version 4.0.1</p>
            </div>

            <h1 className='text-grey-300 leading-snug font-[600]'>Where data and creativity come together.</h1>

            <h3 className='subheading text-grey-200 font-light'>The fastest way to build and deploy websites with reusable components.</h3>
            <div className='flex flex-row gap-[36px] mt-[50px] mb-[124px]'>
              <button className='button-primary2 px-[16px] text-nowrap'>GET STARTED</button>
              <button className='button-secondary text-nowrap'>VIEW DEMO</button>
            </div>
          </div>

          {/* SECTION 1 - RIGHT */}
          <div className='w-1/2 hidden md:block'>
            <img src='hero-image-huffie.png' alt='hero' />
          </div>
        </section>


        {/* --------------------------- SECTION 2 --------------------------- */}

        <section className=' bg-violet-400 bg-bg-1'>
          <div className='relative flex flex-col items-center px-10 py-[96px] mx-10 max-w-7xl xl:mx-auto'>
            <h2 className='text-white text-center font-medium leading-snug '>This is a new creative <br /> process</h2>
            <p className='subheading text-grey-200 mt-[16px] text-center'>Quisque eleifend velit vel erat fringilla interdum</p>
            <div className='absolute top-10 hidden lg:block'>
              <svg className="md:w-full" height="740" viewBox="0 0 1280 740" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_523_985)">
                  <path d="M-155 395.5C-118 372.167 -9.7 325.1 127.5 323.5C299 321.5 365.5 395.5 509.5 395.5C653.5 395.5 718 323.5 834.5 323.5C951 323.5 1014 395.5 1185.5 395.5C1322.7 395.5 1415 333.833 1444 303" stroke="#F6F7FB" strokeDasharray="4 4" />
                </g>
                <defs>
                  <clipPath id="clip0_523_985">
                    <rect width="1280" height="740" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 z-10 mt-[72px]'>
              {creative_process_content.map((content, index) => {
                return (
                  <div key={index} className={`flex flex-col items-center text-center gap-[32px] p-5 text-white`}>
                    <div className={`flex items-center justify-center h-[120px] w-[120px] p-5 rounded-lg ${content.backgroundColor}`}>
                      <img width={50} height={50} src={content.icon} />
                    </div>
                    <p className='subheading text-white font-medium'>{content.title}</p>
                    <p className='text-[#C9D0DA] leading-relaxed font-light p-5'>{content.content}</p>
                  </div>
                )
              })
              }

            </div>

          </div>
        </section>

        {/* --------------------------- SECTION 3 --------------------------- */}
        <section className='py-[96px] px-10 flex flex-col gap-[72px] mx-10 max-w-7xl xl:mx-auto'>
          {creative_process_content.map((content, index) => {
            return (
              <div key={index} className="flex flex-col md:flex-row items-center gap-20">
                {content.show && <>
                  <div className='flex flex-col gap-[24px] text-white md:w-1/2 mr-10 md:mr-auto'>

                    {/* icon */}
                    <div className={`flex items-center justify-center h-[50px] w-[50px] rounded-full ${content.backgroundColor}`}>
                      <img width={25} height={25} src={content.icon} />
                    </div>

                    {/* content */}
                    <h2 className=' text-grey-300 font-medium'>{content.title}</h2>
                    <p className='text-grey-200 leading-relaxed font-light'>{content.description}</p>
                    {content.details.map((detail, index) => {
                      return (
                        <div key={index} className='flex flex-row items-center gap-[12px]'>
                          <img src='check_circle.svg' width={24} height={24} />
                          <p className='text-grey-200 small-text'>{detail}</p>
                        </div>
                      )
                    })}
                  </div>
                  <div className={`md:w-1/2 ${content.align === "left" ? "md:-order-1" : ""}`}>
                    <img src={content.image} alt='hero' />
                  </div>
                </>
                }
              </div>
            )
          })}

        </section >

        <Footer />
      </div>
    </>

  )
}

export default App
