import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component{
    
    render() {
        const book = this.props.book

        return(
            book ?
            <div>
                <h3>Details for: </h3>
                <div> {this.props.book.title} </div>
            </div>
            :
            <div>Select a book to see its details.</div>
        )
    }
}

function mapToStateProps(state){
    return {
      book: state.activeBook
    }
  }

export default connect(mapToStateProps)(BookDetail)
