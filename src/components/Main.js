import React from "react"
import sun from "../images/icon-sun.svg"
import moon from "../images/icon-moon.svg"
import check from "../images/icon-check.svg"
import cross from "../images/icon-cross.svg"
import Todo from "./Todo"

export default function Main() {

    //to toggle dark mode on and off
    const [darkmode, setDarkmode] = React.useState(JSON.parse(localStorage.getItem("mode")) || true)
    React.useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(darkmode))
    } , [darkmode])
    function handleDisplayMode() {
        setDarkmode(prevState => !prevState)
    }


    const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("savedTodo")) || [
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


    //to control input
    const [newTodo, setNewTodo] = React.useState("")
    function handleChange(event) {
        const {value} = event.target
        setNewTodo(value)
    }
    

    //to add new todo
    function addTodo(text) {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };


    //to create new todo
    function handleCreate(event) {
        event.preventDefault();
        if (!newTodo) {
            return;
        }
        addTodo(newTodo);
        //setNewTodo("");
    };


    //to save created todo to local storage
    React.useEffect(() => {
        localStorage.setItem("savedTodo", JSON.stringify(todos))
    }, [todos])

    
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
                                name="new"
                                value={newTodo.new}
                                onChange={handleChange}
                            />
                            <div onClick={handleCreate} className={`cursor-pointer hover:text-sky-500 font-[700] text-[0.7rem] ${darkmode ? "text-slate-300" : "text-slate-600"}`}>Add</div>
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
                    <div className={`w-full ${darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] flex items-center justify-between text-[0.7rem] md:text-[0.75rem] text-slate-500 rounded-b-md`}>
                        <p>{todos.length} items left</p>
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