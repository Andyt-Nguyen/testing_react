import React from 'react'
import { connect } from 'react-redux'
import { saveComment, fetchComments } from '../actions'

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
} 

export default connect(mapStateToProps, { saveComment, fetchComments })(
    class CommentBox extends React.Component {
    
        state = {
            comment: ''
        }

        onHandleText = (e) => {
            this.setState({comment:e.target.value})
        }

        handleSubmit = (e) => {
            e.preventDefault()
            this.props.saveComment(this.state.comment)
            this.setState({comment: ''})
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h3>Add a comment</h3>
                    <textarea onChange={this.onHandleText} value={this.state.comment} />
                    <div>
                        <button>Submit comment</button>
                    </div>
                    <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
                </form>
            )
        }
})