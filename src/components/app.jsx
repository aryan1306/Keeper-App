import React, {useState} from 'react';
import Footer from './footer';
import Heading from './heading';
import Note from './note';
import InputArea from './inputArea';

function App() {
    const [newNotes, setNewNotes] = useState([]);

    function addNote(newNote) {
        setNewNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNewNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Heading/>
            <InputArea
                onAdd={addNote}/>
            {newNotes.map((noteItem, index) => {
                return <Note key={index} id={index} title={noteItem.title} content={noteItem.content}
                             onDelete={deleteNote}/>
            })
            }
            <Footer/>
        </div>
    );
}

export default App;