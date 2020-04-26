import React from 'react';
import Footer from './footer';
import Heading from './heading';
import Note from './note';
import notes from '../notes';

function App(){
    return(
        <div>
            <Heading />
            <div>
                    {notes.map(note => (
                        <Note 
                            key = {note.id}
                            title = {note.title}
                            content = {note.content}
                        />
                    ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;