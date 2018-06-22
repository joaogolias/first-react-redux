//State argument is not the application argument, 
//but is something this reduce must handle with

export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.activeBook || "oi"
    }

    return state
}