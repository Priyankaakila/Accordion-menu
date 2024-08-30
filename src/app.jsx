import { useState } from "react";
import data from './data.js'
import SingleQuestion from "./single-question.jsx";
const App = ()=>{
    const [questions, setQuestions] = useState(data);
    
    return(
        <main className="bg-linen flex items-center justify-center h-screen">
            <div className="bg-gray-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl   font-serif w-3/5">
                <h3 className="font-semibold text-xl md:text-3xl md:text-center md:w-1/3 ">Frequently Asked Questions</h3>
                <section className="md:w-3/5">
                    {questions.map((question)=>{
                        return <SingleQuestion  key={question.id} {...question} 
                        
                        />
                    })}
                </section>
            </div>
        </main>
    );
    
};

export default App;