import React from "react"
import sun from "../images/icon-sun.svg"
import moon from "../images/icon-moon.svg"
import check from "../images/icon-check.svg"
import cross from "../images/icon-cross.svg"
import Todo from "./Todo"

export default function Main() {

    //to toggle dark mode on and off
    const [darkmode, setDarkmode] = React.useState(true)
    function handleDisplayMode() {
        setDarkmode(prevState => !prevState)
    }


    const [todos, setTodos] = React.useState([
        {
            text: "Complete online Javascript course",
            completed: false,
            hover: false
        },
        {
            text: "Jog around the park 3x",
            completed: false,
            hover: false
        },
        {
            text: "10 minutes meditation",
            completed: false,
            hover: false
        },
        {
            text: "Read for 1 hour",
            completed: false,
            hover: false
        },
        {
            text: "Pick up groceries",
            completed: false,
            hover: false
        },
        {
            text: "Complete Todo App on Frontend Mentor",
            completed: false,
            hover: false
        }
    ]);


    //to add new todo
    function addTodo(text) {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };


    //to mark todo as completed
    function markTodo(index) {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };


    //to delete todo
    function deleteTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    //to control the hover state of each todo
    function handleHover(index) {
        const newTodos = [...todos];
        newTodos[index].hover = true
        setTodos(newTodos);
    }
    function handleMouseOut(index) {
        const newTodos = [...todos];
        newTodos[index].hover = false
        setTodos(newTodos);
    }


    //to keep count of uncompleted todo
    const [count, setCount] = React.useState(6);

    //to control the state of each check circle
    const [checked, setChecked] = React.useState({
        "checked1": false,
        "checked2": false,
        "checked3": false,
        "checked4": false,
        "checked5": false,
        "checked6": false
    });
    function handleCheckClick(event) {
        const {id} = event.target;
        setChecked(prevState => {
            return {
                ...prevState,
                [id]: !prevState[id]
            }
        });
        setCount(prevState => {
            return prevState === 0 ? 0 : prevState - 1
        })
    }

    

    return (
        <main className={`w-full min-h-[100vh] ${darkmode ? "bg-[#181824]" : "bg-[#fafafa]"}`}>
            {/*top */}
            <div className={`w-full h-[270px] ${darkmode ? "bg-[url('../images/bg-desktop-dark.jpg')]" : "bg-[url('../images/bg-desktop-light.jpg')]"}`}>
                <div className="w-full h-full px-[20px] md:px-0 pt-[60px] flex justify-center bg-gradient-to-r from-[rgb(87, 221, 255)] to-[rgb(192, 88, 223)]">
                    <div className="w-[500px]">
                        <div className="w-full flex justify-between items-center mb-7">
                            <h1 className="text-[38px] font-[700] tracking-[10px] text-[#e4e5f1]">TODO</h1>
                            <img onClick={handleDisplayMode} alt="" src={darkmode ? sun : moon} className="w-[25px] h-[25px] cursor-pointer"/>
                        </div>
                        <div className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] rounded-md flex items-center shadow-2xl shadow-black/50`}>
                            <div className={`w-[25px] h-[22px] rounded-full border ${darkmode ? "border-slate-600" : "border-slate-300"} mr-[15px] md:mr-[25px] cursor-pointer`}></div>
                            <input 
                                className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} focus:outline-none`}
                                placeholder="Create a new todo..."
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*top */}

            {/*bottom half */}
            <div className={`w-full ${darkmode ? "bg-[#181824]" : "bg-[#fafafa]"} flex justify-center px-[20px] md:px-0 pb-[50px]`}>
                <div className={`w-[500px] ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} rounded-md pt-[5px] rounded-t-md shadow-2xl shadow-black/50 relative top-[-40px]`}>
                {todos?.map((item, index) => {
                        return (
                            <Todo
                                key={index}
                                index={index}
                                item={item}
                                markTodo={markTodo}
                                deleteTodo={deleteTodo}
                                handleHover={handleHover}
                                handleMouseOut={handleMouseOut}
                                darkmode={darkmode}
                                check={check}
                                cross={cross}
                                todos={todos}
                            />
                        )
                    })}
                    {/*<div id="hover1" onMouseOver={handleHover} onMouseOut={handleMouseOut} className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] cursor-pointer flex items-center border-b ${darkmode ? "border-slate-700" : "border-slate-300"} rounded-t-md`}>
                        <div
                            className={`w-[22px] h-[22px] rounded-full border ${checked.checked1 && "bg-gradient-to-r from-[#57ddff] to-[#c058f3]"} ${darkmode ? "border-slate-600" : "border-slate-300"} mr-[15px] md:mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]`}
                        >
                            {/*check circle overlay 
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked1"
                            ></div>
                            {checked.checked1 && <img 
                                alt="" 
                                src={check} 
                                className="w-[9px] h-[9px]"
                            />}
                        </div>
                        <div className={`w-[fit-content] mr-auto relative ${darkmode && checked.checked1 ? "text-slate-500" : !darkmode ? "text-slate-500" : "text-slate-300"}`}>
                            {checked.checked1 && <div className={`w-full h-[1px] bg-slate-600 absolute top-[12px]`}></div>}Complete online Javascript course
                        </div>
                        { hover.hover1 && <div className="cursor-pointer"><img alt="" src={cross}/></div>}
                            </div>*/}
                    {/*<div id="hover2" onMouseOver={handleHover} onMouseOut={handleMouseOut} className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] cursor-pointer flex items-center border-b ${darkmode ? "border-slate-700" : "border-slate-300"}`}>
                        <div
                            className={`w-[22px] h-[22px] rounded-full border ${checked.checked2 && "bg-gradient-to-r from-[#57ddff] to-[#c058f3]"} ${darkmode ? "border-slate-600" : "border-slate-300"} mr-[15px] md:mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]`}
                        >
                            {/*check circle overlay 
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked2"
                            ></div>
                            {checked.checked2 && <img 
                                alt="" 
                                src={check} 
                                className="w-[9px] h-[9px]"
                            />}
                        </div>
                        <div className={`w-[fit-content] mr-auto relative ${darkmode && checked.checked2 ? "text-slate-500" : !darkmode && !checked.checked2 ? "text-slate-500" : "text-slate-300"}`}>
                            {checked.checked2 && <div className={`w-full h-[1px] bg-slate-600 absolute top-[12px]`}></div>}Jog around the park 3x
                        </div>
                        { hover.hover2 && <div className="cursor-pointer"><img alt="" src={cross}/></div>}
                            </div>*/}
                    {/*<div id="hover3" onMouseOver={handleHover} onMouseOut={handleMouseOut} className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] cursor-pointer flex items-center border-b ${darkmode ? "border-slate-700" : "border-slate-300"}`}>
                        <div
                            className={`w-[22px] h-[22px] rounded-full border ${checked.checked3 && "bg-gradient-to-r from-[#57ddff] to-[#c058f3]"} ${darkmode ? "border-slate-600" : "border-slate-300"} mr-[15px] md:mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]`}
                        >
                            {/*check circle overlay 
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked3"
                            ></div>
                            {checked.checked3 && <img 
                                alt="" 
                                src={check} 
                                className="w-[9px] h-[9px]"
                            />}
                        </div>
                        <div className={`w-[fit-content] mr-auto relative ${darkmode && checked.checked3 ? "text-slate-500" : !darkmode ? "text-slate-500" : "text-slate-300"}`}>
                            {checked.checked3 && <div className={`w-full h-[1px] bg-slate-600 absolute top-[12px]`}></div>}10 minutes meditation
                        </div>
                        { hover.hover3 && <div className="cursor-pointer"><img alt="" src={cross}/></div>}
                            </div>*/}
                    {/*<div id="hover4" onMouseOver={handleHover} onMouseOut={handleMouseOut} className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] cursor-pointer flex items-center border-b ${darkmode ? "border-slate-700" : "border-slate-300"}`}>
                        <div
                            className={`w-[22px] h-[22px] rounded-full border ${checked.checked4 && "bg-gradient-to-r from-[#57ddff] to-[#c058f3]"} ${darkmode ? "border-slate-600" : "border-slate-300"} mr-[15px] md:mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]`}
                        >
                            {/*check circle overlay 
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked4"
                            ></div>
                            {checked.checked4 && <img 
                                alt="" 
                                src={check} 
                                className="w-[9px] h-[9px]"
                            />}
                        </div>
                        <div className={`w-[fit-content] mr-auto relative ${darkmode && checked.checked4 ? "text-slate-500" : !darkmode ? "text-slate-500" : "text-slate-300"}`}>
                            {checked.checked4 && <div className={`w-full h-[1px] bg-slate-600 absolute top-[12px]`}></div>}Read for 1 hour
                        </div>
                        { hover.hover4 && <div className="cursor-pointer"><img alt="" src={cross}/></div>}
                            </div>*/}
                    {/*<div id="hover5" onMouseOver={handleHover} onMouseOut={handleMouseOut} className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] cursor-pointer flex items-center border-b ${darkmode ? "border-slate-700" : "border-slate-300"}`}>
                        <div
                            className={`w-[22px] h-[22px] rounded-full border ${checked.checked5 && "bg-gradient-to-r from-[#57ddff] to-[#c058f3]"} ${darkmode ? "border-slate-600" : "border-slate-300"} mr-[15px] md:mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]`}
                        >
                            {/*check circle overlay 
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked5"
                            ></div>
                            {checked.checked5 && <img 
                                alt="" 
                                src={check} 
                                className="w-[9px] h-[9px]"
                            />}
                        </div>
                        <div className={`w-[fit-content] mr-auto relative ${darkmode && checked.checked5 ? "text-slate-500" : !darkmode ? "text-slate-500" : "text-slate-300"}`}>
                            {checked.checked5 && <div className={`w-full h-[1px] bg-slate-600 absolute top-[12px]`}></div>}Pick up groceries
                        </div>
                        { hover.hover5 && <div className="cursor-pointer"><img alt="" src={cross}/></div>}
                            </div>*/}
                    <div className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] flex items-center justify-between text-[0.7rem] md:text-[0.75rem] text-slate-500 rounded-b-md`}>
                        <p>{count} items left</p>
                        <ul className="flex gap-[10px] md:gap-[20px] font-[700]">
                            <li className="cursor-pointer text-[#438da0] hover:text-slate-300">All</li>
                            <li className="cursor-pointer hover:text-slate-300">Active</li>
                            <li className="cursor-pointer hover:text-slate-300">Completed</li>
                        </ul>
                        <p className=" cursor-pointer hover:text-slate-300">Clear Completed</p>
                    </div>
                </div>
            </div>
            {/*bottom half */}
        </main>
    )
}