const defaultState = {
    inputValue: '123',
    list: [1,2]
};

// reducers 的限制 可以接收state  但是绝不能修改state  
// 所以要拷贝一个新的state出来
export default (state = defaultState, action) => {
    // action是传过来的话
    // console.log(state, action);
    if(action.type === 'change_inut_value') {
        // 先对之前的store做一个深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}