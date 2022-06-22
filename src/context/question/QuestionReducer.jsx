export const QuestionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_UVA_QUESTIONS':
            return {
                ...state,
                [action.payload.uva]: action.payload.questions
            }
        default:
            return state;
    }
}