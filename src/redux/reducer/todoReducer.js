import {ADD_TODO,TOGGLE_TODO,DELETE_TODO,CLEAR_TODOS,EDIT_TODO} from "../types/todoTypes";

const initialState = {
    counter:0,/* idler için oluşturduk */
    list:[
        {id:0,text:"Add todo",completed:false}
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return{
                ...state,
                counter:state.counter+1,
                list:[
                    ...state.list,
                    {id:state.counter+1,text:action.payload,completed:false}
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                list:state.list.map(todo=>{
                    if(todo.id===action.payload){
                        return{
                            ...todo,
                            completed:!todo.completed
                        }
                    }
                    return todo;
                })
                
            }
        case DELETE_TODO:
            return{
                ...state,
                list:state.list.filter((item)=>item.id!==action.payload)
            }
        case CLEAR_TODOS:
            return {...state,list:[]}
        case EDIT_TODO:
            return{
                ...state,
                list:state.list.map(todo=>{
                    if(todo.id===action.payload.id){
                        return{
                            ...todo,
                            text:action.payload.todo
                        }
                    }
                    return todo;
                })
            }
    
        default:
            return state
    }
}
export default todoReducer;