import React, { Component } from 'react';
import './Dashboard.scss'
import FormField from '../Widgets/FormFields/FormFields'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import { firebaseTeams } from '../../firebase'


class Dashboard extends Component {

    state = {
        editorState: EditorState.createEmpty(),
        postError: '',
        loading: false,
        formData: {
            author:{
                element:'input',
                value: '',
                config:{
                    name:'author_input',
                    type:'text',
                    placeholder:'Enter your Name'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched: false,
                validationMessage:''
            },
            title:{
                element:'input',
                value: '',
                config:{
                    name:'title_input',
                    type:'text',
                    placeholder:'Enter the Title'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched: false,
                validationMessage:''
            },
            body:{
                element:'textEditor',
                value: '',
                valid: true
            },
            teams:{
                element:'select',
                value: '',
                config:{
                    name:'teams_input',
                    options: []
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }

    updateForm = (element, content = '') => {
        const newFormData = {
            ...this.state.formData
        }

        const newElement = {
            ...newFormData[element.id]
        }

        if(content === ''){
            newElement.value = element.event.target.value
        } else {
            newElement.value = content
        }

        if(element.blur){
            let validData = this.validate(newElement)
            newElement.valid = validData[0]
            newElement.validationMessage = validData[1]
        }

        newElement.touched = element.blur
        newFormData[element.id] = newElement

        this.setState({
            formData: newFormData
        })
    }

    validate = (element) => {
        let error = [true, '']

        if(element.validation.required){
            const valid = element.value.trim() !== ''
            const message = `${!valid ? 'This field is required!' : ''}`
            error = !valid ? [valid, message] : error
        }
        return error
    }

    submitForm = (event) => {
        event.preventDefault()

        let dataToSubmit = {}
        let formIsValid = true

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
        }

        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid
        }

        console.log(dataToSubmit)

        if(formIsValid){
            console.log('Submit Post')
        } else {
            this.setState({
                postError: 'Something went wrong'
            })
        }
    }

    submitButton = () => (
        this.state.loading ? 
            'Loading...' 
        : 
            <div>
                <button type="submit">Add Post</button>
            </div>
    )

    showError = () => (
        this.state.postError !== '' ?
            <div className="error">
                {this.state.postError}
            </div>
        : 
            ''
    )

    onEditorStateChange = (editorState) => {

        let contentState = editorState.getCurrentContent()
        let html = stateToHTML(contentState)

        this.updateForm({id: 'body'}, html)

        this.setState({
            editorState
        })
    }

    loadTeams = () => {
        firebaseTeams.once('value')
        .then((snap) => {
            let teams = []

            snap.forEach((childSnap) => {
                teams.push({
                    id: childSnap.val().teamId,
                    name: childSnap.val().city
                })
            })

            const newFormData = {...this.state.formData}
            const newElement = {...newFormData['teams']}

            newElement.config.options = teams
            newFormData['teams'] = newElement

            this.setState({
                formData: newFormData
            })
        })
    }

    componentDidMount(){
        this.loadTeams()
    }

    render() {
        return (
            <div className="postContainer">
                <form onSubmit={this.submitForm}>
                    <h2>Add Post</h2>
                    <FormField 
                        id={'author'}
                        formData={this.state.formData.author}
                        change={(element)=>this.updateForm(element)}
                    />

                    <FormField 
                        id={'title'}
                        formData={this.state.formData.title}
                        change={(element)=>this.updateForm(element)}
                    />

                    <Editor 
                        editorState={this.state.editorState}
                        wrapperClassName="myEditor-Wrapper"
                        editorClassName="myEditor-Editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />

                    <FormField 
                        id={'teams'}
                        formData={this.state.formData.teams}
                        change={(element)=>this.updateForm(element)}
                    />

                    { this.submitButton() }
                    { this.showError() }
                </form>
            </div>
        );
    }
}

export default Dashboard;