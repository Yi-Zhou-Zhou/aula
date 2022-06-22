export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_ROL':
            return {
                ...state,
                rol: action.payload
            }
        default:
            return state;
    }
}