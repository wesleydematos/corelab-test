import { ChangeEvent, useState } from 'react'
import { ICoreNoteResponse } from '../../types/CoreNote'
import { IoCloseOutline, IoSearch } from 'react-icons/io5'
import logo from '../../imgs/logo.png'
import './header.sass'

interface IHeaderProps {
  setRenderNotes: React.Dispatch<React.SetStateAction<never[]>>
  allNotes: never[]
}

function Header ({ setRenderNotes, allNotes }: IHeaderProps) {
  const [inputValue, setInputValue] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase()

    setInputValue(searchTerm)

    const newNotes = allNotes.filter((note: ICoreNoteResponse) => {
      const titleMatch = note.title.toLowerCase().includes(searchTerm)
      const descriptionMatch = note.description.toLowerCase().includes(searchTerm)

      return titleMatch || descriptionMatch
    })

    if(newNotes.length){
      setRenderNotes(newNotes)
    }else{
      setRenderNotes(allNotes)
    }
  }

  return (
    <header>
      <div>
        <div className='logo-content'>
          <img src={logo} alt='Logo' />
          <p>CoreNotes</p>
        </div>
        <label className='search' htmlFor='notes'>
          <input 
            onChange={handleChange}
            value={inputValue}
            type='text' 
            placeholder='Pesquisar notas' 
            name='notes' 
            id='notes'
          />
          <IoSearch />
        </label>
      </div>
      <IoCloseOutline 
        onClick={()=> {
          setRenderNotes(allNotes)
          setInputValue('')
        }}
      />
    </header>
  )
}

export default Header