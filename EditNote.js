import React, {Component} from 'react';

class EditNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            updatedNote: this.props.note
        }
    }

    onEdit = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    onUpdate = () => {
        const index=  this.props.index;
        const updatedNote = this.state.updatedNote;
        this.props.editNote(index,updatedNote)
        this.onEdit();
    }

    onEntityChange = (key) => (event) => {
        this.setState({
            updatedNote:{
                ...this.state.updatedNote,
                [key]:event.target.value
            }
        })
    }

    render() {const {note} = this.props;
        const {editMode, updatedNote} = this.state;
        return (
            <div className="card">
                {!editMode && <div>
                    <p>{note.title}</p>
                    <p>{note.description}</p>
                </div>}

                {editMode && <div>
                    <input onChange={this.onEntityChange("title")} value={updatedNote.title}/>
                    <input onChange={this.onEntityChange("description")} value={updatedNote.description}/>
                </div>}
                <button
                    className="btn btn-outline-info"
                    style={{padding: 5, width: '15%', marginLeft: 225, fontFamily: AbortSignal, color: "darkblue"}}
                    onClick={editMode ? this.onUpdate : this.onEdit}>
                    {editMode ? "Update" : "Edit"}
                </button>
                <button
                    onClick = {() => this.props.deleteNote(this.props.index)}
                    className="btn btn-outline-info"
                    style={{padding: 5, width: '15%', marginLeft: 225, fontFamily: AbortSignal, color: "darkblue"}}
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default EditNote;