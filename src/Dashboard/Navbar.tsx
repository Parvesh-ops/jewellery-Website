import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-3 items-centre justify-between px-8 md:px-10 border-b border-gray-300/30'>
      <Link to="/">
        <h1 className="font-bold text-3xl">
          Bindo <span className='text-yellow-600'>Jwellers</span>
        </h1>
      </Link>
    </div>
  )
}

export default Navbar