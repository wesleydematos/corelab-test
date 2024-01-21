import { useState, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { IoIosSend } from 'react-icons/io'
import { ICoreNote } from '../../types/CoreNote'
import { api } from '../../lib/api'
import yellowStar from '../../imgs/yellowstar.png'
import star from '../../imgs/star.png'
import './createNote.sass'

interface ICreateNoteProps {
  isModified: boolean
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateNote({ isModified, setIsModified }: ICreateNoteProps) {
  const [isFavotite, setIsFavorite] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data: ICoreNote = {
      favorite: isFavotite,
      title: title,
      description: content,
      color: '#ffffff'
    }

    try {
      await api.post('', data)
      toast.success("Nota criada com sucesso!")
      setIsModified(!isModified)
    } catch (error) {
      console.log(error)
      toast.error('Erro ao criar nota!')
    }

    setIsFavorite(false)
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='divider'>
        <input
          type='text'
          placeholder='Título'
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <img 
          src={isFavotite ? yellowStar : star} 
          alt='star' 
          onClick={()=> setIsFavorite(!isFavotite)}
        />
      </div>
      <div className='submiting'>
        <input
          type='text'
          placeholder='Criar nota...'
          value={content}
          onChange={(e)=> setContent(e.target.value)}
        />
        <button type='submit'>
          <IoIosSend />
        </button>
      </div>
    </form>
  )
}

export default CreateNote
