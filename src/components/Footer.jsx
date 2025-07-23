import { assets } from "../assets/assets"

const Footer = () => {
  return (
	<div className="flex gap-4 py-3 mt-20 items-center justify-between">
		<img src={assets.logo1} alt="" width={35} />
		<p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">SiddiqaPathan </p>
		<div className="flex gap-2.5">
			 <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"></a>
			<img src={assets.facebook_icon} alt="" width={35} />

			<a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"></a>
			<img src={assets.twitter_icon} alt="" width={35}/>

			 <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"></a>
			<img src={assets.instagram_icon} alt="" width={35}/>
		</div>
	</div>
  )
}

export default Footer