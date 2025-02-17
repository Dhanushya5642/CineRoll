import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-800">
        <div className="p-4 flex justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2040 <Link to="/" className="hover:underline">CineRoll™</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/dhanushya-t-1586aa329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://search.app/95dgSXgLFgY6xTxD6" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Github</a>
        </li>
       
    </ul>
        </div>
    </footer>
  )
}
