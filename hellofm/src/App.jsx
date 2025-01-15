import React from 'react'
import { motion } from 'framer-motion'
import './style.css'

function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#dddbd1] flex justify-center items-center gap-4">
        {/* <button >
  <motion.div id="heart" 
  animate={{
    scale:0.3
  }}
  transition={{
    // delay:2,
    repeat: Infinity,
    repeatDelay:0.5,
    ease:"easeIn",
    repeatType: "reverse",
    // type: "spring",
    // bounce: 400 ,
    // damping: 10,
    // mass:3,
    // stiffness: 30,
    // velocity:10
  }}></motion.div>
  
  <motion.div className='box mt-32 bg-slate-400 h-28 w-28' 
  animate={{
    scale:[1,2,2,1,1],
    rotate: [0,0,180,0,0],
    borderRadius:["0%", "0%", "50%", "50%", "0%", "0%"]
  }}
  transition={{
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay:0.3,
    duration:2
  }}
  ></motion.div>
</button> */}

        {/* <motion.button className='bg-blue-500 py-3 px-5 rounded-full text-white font-semibold text-lg' 
    whileHover={{
      scale:2
    }}
    whileTap={{
      scale:1.7
    }}
    whileFocus={{
      scale: 2.2
    }}>
      Hover Me for Magic !
    </motion.button> */}

        <div className="w-[180px] h-[370px] overflow-hidden rounded-[24px] border border-white-opaque flex flex-col justify-end p-4 bg-[#826649]">
          <div className="h-full fadeout">
            <motion.div className="text-[90px] opacity-75 mb-3 break-words font-mono origin-top-left tracking-wide !leading-[75px] text-white "
              animate={{
                opacity: [0, 1, 1, 1, 1, 1, 0],
                scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
                scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 9]
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 1,
                duration: 10,
              }}
            >50% Offf</motion.div>
          </div>
          <p class="mt-auto text-white font-semibold">Our Mega 50% Sale is Live. <span className='font-bold underline uppercase'>Shop Now</span> for Exciting Offers !!</p>
        </div>

        <div className="w-[380px] h-[370px] overflow-hidden rounded-[24px] border border-white-opaque flex flex-col px-4 py-2 bg-[#fffcfc]">
          <p class="mb-auto text-[#16404D] font-bold">Get 50% -90% Off on accessories, beauty products & more @Myntra | Coming Soon. <span className='underline font-semibold'>Get the best deals on top brands.</span> End of Reason Sale here !!</p>
          <div className='flex items-start justify-center gap-2 mt-4 overflow-hidden'>
            <img className='w-[50%] rounded-lg' src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/6pTF9NYS_d2e67c96f7a348a4a672acc95b49b517.jpg" alt="" />
            <motion.p className='h-full text-[80px] break-words font-mono origin-top-left !leading-[75px] text-zinc-700' animate={{
              opacity: [0, 1, 1, 1, 1, 1, 0],
              scaleX: [1, 1, 1, 1.5, 1.5, 1, 1],
              scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 9]
            }}
              transition={{
                repeat: Infinity,
                repeatDelay: 1,
                duration: 10,
              }}>BUY1 GET1 FREE FREE</motion.p>
          </div>
        </div>


      </main>
    </>

  )
}

export default App