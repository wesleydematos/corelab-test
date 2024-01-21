import { useEffect, useState } from 'react'
import { CreateNote, Header, NoteCard } from './components'
import { ICoreNoteResponse } from './types/CoreNote'
import { api } from './lib/api'
import './styles/app.sass'

function App() {
  const [allNotes, setAllNotes] = useState([])
  const [renderNotes, setRenderNotes] = useState([])
  const [isModified, setIsModified] = useState(false)

  async function getNotes() {
    try {
      const response = await api.get('')

      setAllNotes(response.data.data)
      setRenderNotes(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getNotes()
  }, [isModified])

  return (
    <main>
      <Header />
      <CreateNote setIsModified={setIsModified} isModified={isModified} />
      {
        renderNotes.length ? 
        <section className='notes'>
          <h2>Favoritas</h2>
          <ul>
            {renderNotes.map((note: ICoreNoteResponse)=>{
              if(!!note.favorite) return <NoteCard key={note.id} note={note} setIsModified={setIsModified} isModified={isModified}/> 
            })}
          </ul> 
          <h2>Outras</h2>
          <ul>
            {renderNotes.map((note: ICoreNoteResponse)=>{
              if(!note.favorite) return <NoteCard key={note.id} note={note} setIsModified={setIsModified} isModified={isModified}/> 
            })}
          </ul> 
        </section>
        : 
        <div style={{alignSelf: 'center', fontWeight: 'bold', fontSize: '20px'}}>Nenhuma nota foi encontrada! :(</div>
      }
    </main>
  )
}

export default App
