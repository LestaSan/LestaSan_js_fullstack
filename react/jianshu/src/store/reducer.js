import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store/';

// 将每个部分的工程拆分成每个部分的小reducer
// 通过combineReducers整合成大reducer
const reducer = combineReducers({
    header: headerReducer
})

export default reducer;