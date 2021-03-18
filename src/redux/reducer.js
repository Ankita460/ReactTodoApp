import ActionType from './type';
const initalState = {
  todoList: [],
  
};
export default function counterReducer(state = initalState, action) {
  switch (action.type) {
    

    case ActionType.ADD:
        const {obj} = action.payload;
        return{
            ...state,
            todoList:[...state.todoList , obj]

            
            
        };

    case ActionType.UPDATE:
        const {updateIndex , TaskName ,updateDescription} = action.payload;
        let newData = state.todoList
        newData[updateIndex].TaskName = TaskName
        newData[updateIndex].Description = updateDescription
        return{
            ...state,todoList:[...newData]

        }

        case ActionType.DELETE:
            let newDeleteData = state.todoList
            const{id} =action.payload;
            const final= newDeleteData.filter((item)=>item.id !=id);
            console.log(final)
            return{
                ...state,todoList:[...final]

            }
        
    

    default:
      return state;
  }
}
