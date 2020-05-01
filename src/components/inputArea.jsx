import React, {useState} from 'react';

function InputArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleClick(event) {
        props.onAdd(note)
        event.preventDefault();
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange}
                          value={note.content}/>
                <button onClick={handleClick}>+</button>
            </form>
        </div>
    );
}

export default InputArea;