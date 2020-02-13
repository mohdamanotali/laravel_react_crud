import React, { Component, Fragment } from 'react';
import { readData, insertData, deleteData } from './Functions';

export default class Score extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            answeres: '',
            points: '',
            comments: '',
            editable: false,
            scores: [],
            prev_page: '',
            next_page: '',
            current_page: '',
            last_page: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }
   
    componentDidMount() {
        this.getData(this.state.next_page)
    }

    getData(page_url) {
        readData(page_url)
        .then(promise => {
            this.setState({
                id: '',
                name: '',
                answeres: '',
                points: '',
                comments: '',
                editable: false,
                scores: [...promise.data],
                prev_page: promise.prev_page_url,
                next_page: promise.next_page_url,
                current_page: promise.current_page,
                last_page: promise.last_page
            })
        })
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        let input_data = this.validateData(this.state)
        if(input_data) {
            input_data.id = this.state.id
            insertData(input_data, this.state.editable)
            .then(() => {
                this.setState({
                    id: '',
                    name: '',
                    answeres: '',
                    points: '',
                    comments: '',
                    editable: false,
                    scores: [],
                    prev_page: '',
                    next_page: '',
                    current_page: '',
                    last_page: ''
                })
                this.getData()
            })
        } else {
            alert("Validation error")
        }
    }

    onEdit(event, index) {
        event.preventDefault()
        let score = this.state.scores[index]
        this.setState({
            id: score.id,
            name: score.name,
            answeres: score.answeres,
            points: score.points,
            comments: score.comments,
            editable: true
        })
    }

    onCancel(event) {
        event.preventDefault()
        this.setState({
            id: '',
            name: '',
            answeres: '',
            points: '',
            comments: '',
            editable: false
        })
    }

    validateData(input) {
        let data = Object.assign({}, input)
        delete data.id
        delete data.editable
        delete data.scores
        delete data.prev_page
        delete data.next_page
        delete data.current_page
        delete data.last_page
        for(let i in data) {
            if(!data[i]) {
                return null
            }
        }
        return data
    }

    onDelete(event, index) {
        event.preventDefault()
        if(window.confirm('Are you sure to delete this record?')) {
            deleteData(index)
            .then(() => {
                this.setState({
                    id: '',
                    name: '',
                    answeres: '',
                    points: '',
                    comments: '',
                    editable: false,
                    scores: [],
                    prev_page: '',
                    next_page: '',
                    current_page: '',
                    last_page: ''
                })
                this.getData()
            })
        }
    }

    onPaginate(event, url) {
        event.preventDefault()
        let page_no = url.split('?page=')
        this.getData(page_no[1])
    }

    onlyNumber(event) {
        let key_code = event.which;
        if(key_code < 48 || key_code > 57) {
            event.preventDefault()
        }
        return
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" maxLength="255" placeholder="Name" value={this.state.name || ''} onChange={this.onChange} style={{marginBottom: "10px", padding: "5px", width: "calc(100% - 10px)"}} /><br/>
                    <input type="text" name="answeres" maxLength="11" placeholder="Answeres" value={this.state.answeres || ''} onChange={this.onChange} style={{marginBottom: "10px", padding: "5px", width: "calc(100% - 10px)"}} onKeyPress={(event) => this.onlyNumber(event)} /><br/>
                    <input type="text" name="points" maxLength="11" placeholder="Points" value={this.state.points || ''} onChange={this.onChange} style={{marginBottom: "10px", padding: "5px", width: "calc(100% - 10px)"}} onKeyPress={(event) => this.onlyNumber(event)} /><br/>
                    <textarea name="comments" maxLength="1023" placeholder="Comments" value={this.state.comments || ''} onChange={this.onChange} rows={10} style={{marginBottom: "10px", padding: "5px", width: "calc(100% - 10px)", resize: "none"}}></textarea><br/>
                    {this.state.editable ? (
                        <Fragment>
                            <input type="submit" name="update" value="Update" onClick={this.onSubmit} />
                            <input type="button" name="cancel" value="Cancel" onClick={this.onCancel} />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <input type="submit" name="save" value="Save" onClick={this.onSubmit} />
                            <input type="button" name="clear" value="Clear" onClick={this.onCancel} />
                        </Fragment>
                    )}
                </form>
            
                <table border="1" style={{margin: "25px 0 10px 0", width: "100%"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Answeres</th>
                            <th>Points</th>
                            <th>Comments</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.scores.map((score, index) => {
                            return <tr key={index}>
                                <td>{score.name}</td>
                                <td>{score.answeres}</td>
                                <td>{score.points}</td>
                                <td>{score.comments}</td>
                                <td>
                                    <input type="button" name="edit" value="Edit" onClick={(event) => this.onEdit(event, index)} style={{margin: "5px"}} />
                                    <input type="button" name="delete" value="Delete" onClick={(event) => this.onDelete(event, score.id)} style={{margin: "5px"}} />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <input type="button" value="Prev" onClick={(event) => this.onPaginate(event, this.state.prev_page)} disabled={!this.state.prev_page} />
                <label style={{margin: "0 10px"}}>Page {this.state.current_page} of {this.state.last_page}</label>
                <input type="button" value="Next" onClick={(event) => this.onPaginate(event, this.state.next_page)} disabled={!this.state.next_page} />
            </div>
        )
    }
}