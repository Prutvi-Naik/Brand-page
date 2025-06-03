const Header = () =>{
    return(
        <div className="flex justify-around items-center mb-20 mt-6">
              <div>
                <img className="w-[200px]" src="https://in.puma.com/_next/static/assets/icons/puma-logo.svg#icon" alt="Logo-img" />
              </div>
              <div className="flex">
                <ul className="flex font-bold text-2xl">
                    <li className="mx-4">Menu</li>
                    <li className="mx-4">Location</li>
                    <li className="mx-4">About</li>
                    <li className="mx-4">Contact</li>
                </ul>
              </div>
              <div>
                <button className="bg-red-500 text-amber-50 text-3xl px-4 py-2 rounded-md font-medium ">Login</button>
              </div>
        </div>
    )
}
export default Header;