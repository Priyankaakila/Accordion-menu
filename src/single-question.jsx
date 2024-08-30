import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";
import { useState } from "react";
const SingleQuestion = ({id,title,info}) => {
    const [showAnswer , setShowAnswer] = useState(false);
    const clickHandler = ()=>{
        setShowAnswer((showAnswer)=> !showAnswer);
    };
    return ( <article className="border-2 m-4 shadow-md p-4 rounded-md">
        <header className="flex items-center justify-between ">
            <h4 className="text-md font-semibold">{title}</h4>
            <button className="border-2 min-w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full text-gray-700 cursor-pointer ml-4" onClick={clickHandler}>
                {showAnswer ? <FaCircleMinus /> : <FaCirclePlus />  }
            </button>
        </header>
        {showAnswer && <p className="text-gray-600 w-auto56 mt-2">{info}</p> }
    </article> );
}

export default SingleQuestion;





















