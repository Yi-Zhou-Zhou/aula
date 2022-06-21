import { createContext, useReducer } from "react";
import { QuestionReducer } from "./QuestionReducer";


const defaultQuestionState = [];

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [questions, dispatch] = useReducer(QuestionReducer, defaultQuestionState);

    const updateQuestions = (questions) => {
        dispatch({ type: 'UPDATE_QUESTIONS', payload: questions });
    }

    const addQuestion = question => {
        dispatch({ type: 'ADD_QUESTION', payload: question });
    }

    const removeQuestion = id => {
        dispatch({ type: 'REMOVE_QUESTION', payload: id });
    }

    return (
        <QuestionContext.Provider value={{ 
            questions,
            updateQuestions,
            addQuestion,
            removeQuestion
        }}>
            {children}
        </QuestionContext.Provider>
    );
}

