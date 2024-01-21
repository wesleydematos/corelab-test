export interface ICoreNote {
  title: string
  description: string
  favorite: boolean
  color: string
}

export interface ICoreNoteResponse extends ICoreNote {
  id: number
  createdAt: Date
  updatedAt: Date
}