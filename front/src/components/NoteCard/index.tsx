import { useState } from 'react'
import { ICoreNoteResponse } from '../../types/CoreNote'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import { SlPencil } from 'react-icons/sl'
import { api } from '../../lib/api'
import { toast } from 'react-toastify'
import star from '../../imgs/star.png'
import yellowStar from '../../imgs/yellowstar.png'
import ink from '../../imgs/ink.png'
import './NoteCard.sass'

interface INoteCardProps {
  note: ICoreNoteResponse
  setIsModified: React.Dispatch<React.SetStateAction<boolean>>
  isModified: boolean
}

function NoteCard({ note, setIsModified, isModified }: INoteCardProps) {
  const { id, color, description, title, favorite } = note

  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFavotite, setIsFavorite] = useState(favorite)
  const [inputTitle, setInputTitle] = useState(title)
  const [content, setContent] = useState(description)

  async function deleteNote(){
    try {
      await api.delete(`/${id}`)
      setIsModified(!isModified)
      toast.success('Note has been deleted')
    } catch (error) {
      console.log(error)
      alert('não deletou')
    }
  }

  return (
    <li style={{backgroundColor: color}}>
      <form>
        <div className='title'>
          <input
            type='text'
            placeholder='Título'
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <img 
            src={isFavotite ? yellowStar : star} 
            alt='star' 
            onClick={()=>setIsFavorite(!isFavotite)}
          />
        </div>

        <textarea
          placeholder='Edite a nota...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className='editing'>
          <div>
            { isEditing ? <FaCheck /> : <SlPencil />}
            <div style={{backgroundColor: isEditing ? '#ffe8ac' : '#ffffff'}}>
              <img src={ink} alt='ink' />
            </div>
          </div>
          {isDeleting ? 
            <div>
              <FaCheck 
                onClick={()=> {
                  setIsDeleting(false)
                  deleteNote()
                }}
              /> 
              <VscChromeClose onClick={()=> {setIsDeleting(false);}}/>
            </div>
            : 
            <FaTrashAlt onClick={()=> setIsDeleting(true)} />
          }
        </div>
      </form>
    </li>
  )
}

export default NoteCard