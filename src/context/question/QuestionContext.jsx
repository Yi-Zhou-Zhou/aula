import { createContext, useReducer } from "react";
import { QuestionReducer } from "./QuestionReducer";


const defaultQuestionState = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
}

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
    const [questions, dispatch] = useReducer(QuestionReducer, defaultQuestionState);

    const addUvaQuestions = (uva, questions) => {
        dispatch({
            type: "ADD_UVA_QUESTIONS",
            payload: {
                uva,
                questions
            }
        })
    };

    return (
        <QuestionContext.Provider value={{ 
            questions,
            addUvaQuestions,
        }}>
            {children}
        </QuestionContext.Provider>
    );
}

