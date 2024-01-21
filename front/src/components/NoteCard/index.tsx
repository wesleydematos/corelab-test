import { FormEvent, useState } from 'react'
import { ICoreNote, ICoreNoteResponse } from '../../types/CoreNote'
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
  const colors = [
    '#BAE2FF',
    '#B9FFDD',
    '#FFE8AC',
    '#FFCAB9',
    '#F99494',
    '#9DD6FF',
    '#ECA1FF',
    '#DAFF8B',
    '#FFA285',
    '#CDCDCD',
    '#979797',
    '#A99A7C'
  ]

  const [isEditing, setIsEditing] = useState(false)
  const [isChangeColor, setIsChangeColor] = useState(false)
  const [noteColor, setNoteColor] = useState(color)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFavotite, setIsFavorite] = useState(favorite)
  const [inputTitle, setInputTitle] = useState(title)
  const [content, setContent] = useState(description)

  async function deleteNote(){
    try {
      await api.delete(`/${id}`)
      setIsModified(!isModified)
      toast.success('Nota deletada!')
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível deletar!')
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data: ICoreNote  = {
      color: noteColor,
      description: content,
      title: inputTitle,
      favorite: isFavotite
    }

    try {
      await api.put(`${id}`, data)
      setIsEditing(false)
      setIsModified(!isModified)
      toast.success('Nota editada com sucesso!')
    } catch (error) {
      console.log(error)
      setIsEditing(false)
      setIsChangeColor(false)
      setNoteColor(color)
      setIsFavorite(favorite)
      setInputTitle(title)
      setContent(description)
      toast.error('Não foi possível editar a nota!')
    }
  }

  return (
    <li style={{backgroundColor: noteColor}}>
      <form onSubmit={handleSubmit}>
        <div className='title'>
          <input
            onFocus={()=> setIsEditing(true)}
            style={{backgroundColor: noteColor}}
            type='text'
            placeholder='Título'
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <img 
            src={isFavotite ? yellowStar : star} 
            alt='star' 
            onClick={()=>{
              if(isFavotite == favorite){ 
                setIsEditing(true)
              } 
              setIsFavorite(!isFavotite)
            }}
          />
        </div>

        <textarea
          onFocus={()=> setIsEditing(true)}
          style={{backgroundColor: noteColor}}
          placeholder='Edite a nota...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className='editing'>
          <div>
            { 
              isEditing ? 
              <>
                <button type='submit'><FaCheck /></button>
                <VscChromeClose 
                  onClick={()=> {
                    setIsEditing(false)
                    setIsChangeColor(false)
                    setNoteColor(color)
                    setIsFavorite(favorite)
                    setInputTitle(title)
                    setContent(description)
                  }}
                />
              </>
              : 
              <SlPencil onClick={()=>setIsEditing(true)}/>
            }
            <div 
              onClick={()=> {
                setIsChangeColor(!isChangeColor) 
                setIsEditing(true)
              }}
            >
              <img src={ink} alt='ink'/>
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
      {
        isChangeColor && 
        <div className='changeColor'>
          {colors.map((item)=> {
            return <div 
              key={item} 
              style={{backgroundColor: item}}
              onClick={()=> {setNoteColor(item); setIsChangeColor(false)}}
            />
          })}
        </div>
      }
    </li>
  )
}

export default NoteCard