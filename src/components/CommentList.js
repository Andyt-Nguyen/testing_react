import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProps)(
    class CommentList extends React.Component {

        renderComments() {
            return this.props.comments.map( a => <li key={a}>{a}</li>)
        }

        render() {
            return (
                <div>
                    <h3>Comment List</h3>
                    <ul>
                        {this.renderComments()}
                    </ul>
                </div>
            )
        }
})