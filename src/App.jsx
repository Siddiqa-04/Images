import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyCredit from "./pages/BuyCredit"
import Home from "./pages/Home"
import Result from "./pages/Result"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./components/Login"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"

const App = () => {
	
	const { showLogin } = useContext(AppContext)

	return (
	// <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-200 to-orange-200"> MAIN
//<div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white dark:from-gray-900 dark:to-black">
//<div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-darkPink">
//<div className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white">

//<div className="min-h-screen bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700 text-black">


	



<div
  className="min-h-screen bg-cover bg-center text-white"
  style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02gJJHxfc5CkAdiaHLSH24eWr5PqamHevzA&s')" }}
>
	<ToastContainer position="bottom-right" />
		<Navbar/>
		{showLogin && <Login/>}
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/result' element={<Result/>}/>
			<Route path='/buy' element={<BuyCredit/>}/>
		</Routes>
		<Footer/>


</div>





		// <ToastContainer position="bottom-right" />
		// <Navbar/>
		// {showLogin && <Login/>}
		// <Routes>
		// 	<Route path='/' element={<Home/>}/>
		// 	<Route path='/result' element={<Result/>}/>
		// 	<Route path='/buy' element={<BuyCredit/>}/>
		// </Routes>
		// <Footer/>
	//</div>
  )
}

export default App