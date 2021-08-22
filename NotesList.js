import React from "react";
import EditNote from "./EditNote";

class NotesList extends React.Component {
    render() {
        const { notes, onToggleNote, createNote, editNote, deleteNote} = this.props;
        return (
            <div className="container-notes">
                <div
                    className="notes-list"
                    style={{
                        width: 600,
                        marginTop: 20,
                        color: "darkblue",
                        backgroundColor: "LightBlue",
                        padding: "10px",
                        fontFamily: "Arial"}}
                >
                    {notes.length === 0 && "There are no available notes"}
                    <br />
                    {notes.map((note,index) => {

                        return (
                            <EditNote
                                index={index}
                                note={note}
                                editNote={editNote}
                                deleteNote={deleteNote}
                            />
                        );

                    })}

                </div>

                <button onClick={onToggleNote}
                        className="btn btn-outline-info"
                        style={{
                            padding: 5,
                            marginLeft: 10,
                            fontFamily: AbortSignal,
                            color: "darkblue"}}
                >
                    {createNote ? "Close Note" : "Create New Note"}
                </button>
            </div>
        );
    }
}
export default NotesList;