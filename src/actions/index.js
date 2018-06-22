export function selectBook(book) {
    return{
        type: 'BOOK_SELECTED',
        selectedBook: book
    }
}