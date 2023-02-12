import { createStore, combineReducers} from 'redux'

const searchResults = (state = [], action) => {
switch (action.type) {
case 'UPDATE_SEARCH_RESULTS':
return action.searchResults
default:
return state
}
}

const rootReducer = combineReducers({
searchResults,
})

const store = createStore(rootReducer)

export default store
