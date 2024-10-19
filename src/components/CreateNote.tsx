import styled from "@emotion/styled"
import { Box, Button, InputBase } from "@mui/material"
import React, { useState } from "react"
import { NoteObject } from '../models/note'
import { v4 as uuid } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { TEXT_LIMIT, TITLE_LIMIT } from "../constants/constants"

const Container = styled(Box)`
    & > * {
        margin: 20px 20px 20px 0;
    }
    & > div > input[type = "text"]{
        border-bottom: 1px solid #111111;
        opacity:0.4;
        width: 300px;
        padding-right:25px;
    }
    & > div > input[type="color"]{
        width: 40px;
        height: 30px;
        position: relative;
        bottom: -10px
    }
    & > span {
        font-size: 10px;
        position: relative;
        right: 40px;
    }
`

const defaultObj = {
  id: 0,
  title:'',
  details:'',
  color: '',
  date: (new Date().toLocaleString()).toString(),
}

interface ICreateNoteProps{
  addNotes: (note: NoteObject) => void
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defaultObj)

  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  } 

  const onCreateNote = () => {
    if (!note.title && !note.details) {
      toast.error('All fields are mandatory!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    addNotes({ ...note, id: uuid() })
    setNote(defaultObj)
    toast.success('Note created successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Container>
      <InputBase
        placeholder="Title"
        onChange={onValueChange}
        name="title"
        value={note.title}
        inputProps={{
          maxLength: TITLE_LIMIT
      }}
      />
      <Box component="span">30</Box>
       <InputBase
        placeholder="Details"
        onChange={onValueChange}
        name="details"
        value={note.details}
        inputProps={{
          maxLength: TEXT_LIMIT
      }}
      />
      <Box component="span">50</Box>

      <InputBase
        type="color"
        defaultValue={'#F5F5F5'}
        onChange={onValueChange}
        name="color"
        value={note.color}
      />
      <Button 
        variant="contained"
        onClick={onCreateNote}
      >
          Create
      </Button>

      <ToastContainer />
    </Container>
  )
}

export default CreateNote

// import styled from "@emotion/styled"
// import { Box, Button, InputBase, Typography } from "@mui/material"
// import React, { useState } from "react"
// import { NoteObject } from '../models/note'
// import { v4 as uuid } from 'uuid'

// const Container = styled(Box)`
//     & > * {
//         margin: 20px 20px 20px 0;

//     }
//     & > div > input[type = "text"]{
//         border-bottom: 1px solid #111111;
//         opacity:0.4;
//         width: 300px;
//         padding-right:25px;
//     }
//     & > div > input[type="color"]{
//         width: 40px;
//         height: 30px;
//         position: relative;
//         bottom: -10px
//     }
//     & > span {
//         font-size: 10px;
//         position: relative;
//         right: 40px;
//     }
// `
// const Error = styled(Typography)`
//   background: red;
//   color: #fff;
//   padding: 10px;
//   width: 50%;
// `
// const defaultObj = {
//   id: 0,
//   title:'',
//   details:'',
//   color: '',
//   date: (new Date().toLocaleString()).toString(),
// }
// interface ICreateNoteProps{
//   addNotes: (note: NoteObject) => void
// }

// const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
//   const [note,setNote] = useState<NoteObject>(defaultObj)
//   const [error,setError] = useState<string>('')

//   const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
//     if(error){
//       setError('')
//     }
//     setNote({ ...note,[e.target.name]:e.target.value})
//   } 
//   const onCreateNote = () => {
//     if(!note.title && !note.details){
//       setError('All fields are mandatory!')
//     }
//     addNotes({ ...note,id: uuid()})
//     setNote(defaultObj)
//   }
//   return (
//     <Container>
//       <InputBase
//         placeholder="Title"
//         onChange={(e) => onValueChange(e)}
//         name="title"

//       />
//       <Box component="span">30</Box>
//        <InputBase
//         placeholder="Details"
//         onChange={(e) => onValueChange(e)}
//         name="details"
//       />
//       <Box component="span">50</Box>

//       <InputBase
//         type="color"
//         defaultValue={'#F5F5F5'}
//         placeholder="Choose color"
//         onChange={(e) => onValueChange(e)}
//         name="color"
//       />
//       <Button 
//         variant="contained"
//         onClick={() => onCreateNote()}
//       >
//           Create
//       </Button>
//       {error && <Error >
//         {error}
//       </Error>}
//     </Container>
//   )
// }

// export default CreateNote
