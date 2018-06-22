export default function(state, action){
    console.log("action in reducer 2: ", action)
    return {
        selectedBook: {title: 'Harry Potter'}
    }
}