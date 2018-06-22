export default function(state, action) {
    console.log("action in reducer 1: ", action)
    return [
        { title: 'Harry Potter' },

        { title: 'Mobby Dick' },

        { title: 'The Dark Tower'},

        { title: 'Little Prince'}
    ]
}
