import logo from '../../imgs/logo.png'
import { IoCloseOutline, IoSearch } from 'react-icons/io5'
import './header.sass'

function Header () {
  return (
    <header>
      <div>
        <div className='logo-content'>
          <img src={logo} alt='Logo' />
          <p>CoreNotes</p>
        </div>
        <label className='search' htmlFor='notes'>
          <input type='text' placeholder='Pesquisar notas' name='notes' id='notes'/>
          <IoSearch />
        </label>
      </div>
      <IoCloseOutline />
    </header>
  )
}

export default Header