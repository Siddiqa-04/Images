// import { useContext } from 'react'
// import { assets, plans } from '../assets/assets'
// import { AppContext } from '../context/AppContext'
// import { motion } from "motion/react"

// function BuyCredit() {

//   const { user } = useContext(AppContext)

//   return (
// 	<motion.div className="min-h[80vh] text-center pt-14 mb-10"
// 	initial={{opacity: 0.2, y: 100}}
// 	transition={{duration: 1}}
// 	whileInView={{opacity: 1, y: 0}}
// 	viewport={{once: true}}
// 	>
// 		<button className="border border-gray-400 px-10 py-2 rounded-full mb-6">Our Plans</button>
// 		<h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">Choose the plan</h1>
		   
// 		<div className='flex flex-wrap justify-center gap-6 text-left'>
// 			{plans.map((plan, index) => (
// 				<div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
// 					<img src={assets.logo} alt="" width={25} />
// 					<p className='mt-3 mb-1 font-semibold'>{plan.id}</p>
// 					<p className='text-sm'>{plan.desc}</p>
// 					<p className='mt-6'><span className='text-3xl font-medium'>$ {plan.price}</span> / {plan.credits} credits</p>
// 					<button className='bg-gray-800 text-white py-2.5 rounded-md w-full text-sm mt-8 min-w-52'>{user ? 'Purchase' : 'Get Started'}</button>
// 				</div>
// 			))}
// 		</div>
// 	</motion.div>
//   )
// }

// export default BuyCredit



import { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "framer-motion"

function BuyCredit() {
  const { user } = useContext(AppContext)

  return (
    <motion.div
      className="min-h-[80vh] text-center pt-20 pb-16 bg-gradient-to-b from-white to-blue-50"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button className="border border-gray-400 px-8 py-2 rounded-full mb-6 text-sm hover:bg-gray-100 transition">
        Our Plans
      </button>

      <h1 className="text-3xl font-semibold text-gray-800 mb-10">
        Choose the plan
      </h1>
			<h2>     hii </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow-md px-10 py-12 w-72 hover:scale-105 transition-transform duration-300"
          >
            <img src={assets.logo} alt="plan logo" width={30} className="mb-4" />
            <p className="text-lg font-semibold text-gray-800">{plan   }</p>
            <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>
            <p className="text-2xl font-bold text-gray-800 mb-1">
              ${plan.price}
            </p>
            <p className="text-sm text-gray-500 mb-6">{plan.credits} credits</p>

            <button className="bg-gray-900 hover:bg-gray-700 text-white py-2 w-full rounded-md text-sm">
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
