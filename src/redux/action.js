import ActionType from "./type"


export const add = (obj)=>({
    type:ActionType.ADD,
    payload:{obj}
    
})

export const Update =(updateIndex , TaskName ,updateDescription)=>({
    type:ActionType.UPDATE,
    payload:{updateIndex:updateIndex, TaskName:TaskName ,updateDescription:updateDescription}
})


export const Delete = (id)=>({
    type:ActionType.DELETE,
    payload:{id:id}
})