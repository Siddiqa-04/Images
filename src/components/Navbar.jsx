import { Link, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext)
  const navigate = useNavigate();
  return (
	<div>
		<div className='flex items-center justify-between py-4'>
			<Link to={'/'}>
				<img src={assets.logo1} alt='' className='w-10 sm:w-12 lg:w-14'/>
			</Link>
			<div>
				{ user ? 
					<div className='flex items-center gap-2 sm:gap-3'>
						<button onClick={()=> navigate('/buy')} className='flex items-center gap-2 bg-blue-200 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
							<img className='w-5' src={assets.credit_star} alt="" />
							<p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left: {credit}</p>
						</button>
						<p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
						<div className='relative group'>
							<img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
							<div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounde pt-12'>
								<ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
									<li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>LogOut</li>
								</ul>
							</div>
						</div>
					</div>
					:
					<div className='flex items-center gap-2 sm:gap-5'>
						<p onClick={()=> navigate('/buy')} className='cursor-pointer'>Pricing</p>
						<button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full' onClick={() => setShowLogin(true)}>Login</button>
					</div>
				} 
				
				
			</div>
		</div>
	</div>
  )
}

export default Navbar