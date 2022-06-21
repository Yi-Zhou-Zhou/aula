export const QuestionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            return [...state, action.payload];
        case 'REMOVE_QUESTION':
            return state.filter(question => question.id !== action.payload);
        case 'UPDATE_QUESTIONS':
            return action.payload;
        default:
            return state;
    }
}