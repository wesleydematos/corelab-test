export interface ICoreNote {
  name: string;
  description: string;
  favorite: boolean;
  year: number;
  color: string;
}

export interface ICoreNoteResponse extends ICoreNote {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}