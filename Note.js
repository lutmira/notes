import React from "react";

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
        };
    }

    resetNote = () => {
        this.setState({
            title: "",
            description: "",
        });
    };

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.onCreateNote();
    };
    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    };
    onDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    };
    onCreateNote = () => {
        const {title, description} = this.state;
        //Add the note to the notes list
        this.props.onCreate(title, description);
        //Reset the state after populating notes
        this.resetNote();
    };

    render() {
        return (
            <div className="App">
                <div
                    className="container"
                    style={{
                        width: 400,
                        marginTop: 20,
                        color: "blue",
                        backgroundColor: "lightblue",
                        padding: "10px",
                        fontFamily: "Arial",
                    }}
                >
                    <form onSubmit={this.mySubmitHandler}>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="exTitle" style={{color: "darkblue", marginLeft: 2, padding: 5}}>
                                    Create your note here!
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.onTitleChange}
                                    style={{padding: 5, marginLeft: 2}}
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows="6"
                                        name="description"
                                        placeholder="Description"
                                        value={this.state.description}
                                        onChange={this.onDescriptionChange}
                                        style={{padding: 5, marginLeft: 2}}
                                    />
                            </div>
                            <br/>
                            <button
                                value="Submit"
                                className="btn btn-outline-info"
                                style={{padding: 5, marginLeft: 155, fontFamily: AbortSignal, color: "darkblue"}}
                            >
                                Save
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default Note;