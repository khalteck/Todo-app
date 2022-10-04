import React from "react"

export default function Todo(props) {
    return (
        <div 
            onMouseOver={() => props.handleHover(props.index)} 
            onMouseOut={() => props.handleMouseOut(props.index)} 
            className={`w-full ${props.darkmode ? "bg-[#25273c]" : "bg-[#fafafa]"} px-[20px] py-[18px] cursor-pointer flex items-center border-b ${props.darkmode ? "border-slate-700" : "border-slate-300"}`}
        >
            <div
                className={`w-[22px] h-[22px] rounded-full border ${props.item.completed && "bg-gradient-to-r from-[#57ddff] to-[#c058f3]"} ${props.darkmode ? "border-slate-600" : "border-slate-300"} mr-[15px] md:mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]`}
            >
                {/*check circle overlay */}
                <div 
                    className="w-full h-full absolute top-0 left-0 rounded-full"
                    onClick={() => props.markTodo(props.index)}
                    id="checked6"
                ></div>
                {props.item.completed && <img 
                    alt="" 
                    src={props.check} 
                    className="w-[9px] h-[9px]"
                />}
            </div>
            {
                props.darkmode && 
                <div className={`w-[fit-content] mr-auto relative ${ !props.todos[props.index].completed ? "text-slate-300" : "text-slate-500"}`}>
                    {props.item.completed && <div className={`w-full h-[1px] bg-slate-600 absolute top-[12px]`}></div>}
                    {props.item.text}
                </div>
            }
            {
                !props.darkmode && 
                <div className={`w-[fit-content] mr-auto relative ${ !props.todos[props.index].completed ? "text-slate-600" : "text-slate-400"}`}>
                    {props.item.completed && <div className={`w-full h-[1px] bg-slate-600 absolute top-[12px]`}></div>}
                    {props.item.text}
                </div>
            }
            <div onClick={() => props.deleteTodo(props.index)} className="block sm:hidden cursor-pointer">
                <img alt="" src={props.cross}/>
            </div>
            { 
                props.todos[props.index].hover && 
                <div onClick={() => props.deleteTodo(props.index)} className="hidden sm:block cursor-pointer">
                    <img alt="" src={props.cross}/>
                </div>
            }
        </div>
    )
}