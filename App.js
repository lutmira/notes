import React from "react";
import Note from "./Note";
import NotesList from "./NotesList";

const cloneArray = (array) => {
    return [...array];
};

class Notes extends React.Component {
    state = {
        createNote: false,
        notes: [],
    };
    onToggleNote = () => {
        this.setState({
            createNote: !this.state.createNote,
        });
    };
    handleNoteCreate = (title, description) => {
        const values = cloneArray(this.state.notes);
        values.push({
            title: title,
            description: description
        });
        this.setState({
            notes: values
        });
    };

    editNote = (index,value) => {
        const updatedNotes = cloneArray(this.state.notes);
        updatedNotes[index] = value;
        this.setState({notes:updatedNotes})
    }

    deleteNote = (index) => {
        const updatedNotes = cloneArray(this.state.notes);
        updatedNotes.splice(index, 1);
        this.setState({notes: updatedNotes})
    };

    render() {
        const notes = this.state.notes;
        console.log(this.state.notes);
        const createNote = this.state.createNote;
        return (
            <div>
                <NotesList
                    notes={notes}
                    createNote={createNote}
                    editNote={this.editNote}
                    deleteNote={this.deleteNote}
                    updateState={this.setState}
                    onToggleNote={this.onToggleNote}
                />
                {this.state.createNote && <Note onCreate={this.handleNoteCreate} />}
            </div>
        );
    }
}
export default Notes;