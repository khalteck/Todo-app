import React from "react"
import sun from "../images/icon-sun.svg"
import check from "../images/icon-check.svg"

export default function Main() {

    const [checked, setChecked] = React.useState({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false
    });
    function handleCheckClick(event) {
        const {id} = event.target;
        setChecked(prevState => {
            return {
                ...prevState,
                [id]: !prevState[id]
            }
        })
    }

    
    return (
        <main>
            {/*top */}
            <div className="w-full h-[270px] bg-[url('../images/bg-desktop-dark.jpg')]">
                <div className="w-full h-full pt-[60px] flex justify-center bg-gradient-to-r from-[rgb(87, 221, 255)] to-[rgb(192, 88, 243)]">
                    <div className="w-[500px]">
                        <div className="w-full flex justify-between items-center mb-7">
                            <h1 className="text-[38px] font-[700] tracking-[10px] text-[#e4e5f1]">TODO</h1>
                            <img alt="" src={sun} className="w-[25px] h-[25px] cursor-pointer"/>
                        </div>
                        <div className="w-full bg-[#25273c] px-[20px] py-[18px] rounded-md flex items-center shadow-2xl shadow-black/50">
                            <div className="w-[24px] h-[22px] rounded-full border border-slate-600 mr-[25px] cursor-pointer"></div>
                            <input 
                                className="w-full bg-[#25273c] focus:outline-none"
                                placeholder="Create a new todo..."
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*top */}

            {/*bottom half */}
            <div className="w-full flex justify-center pb-[50px]">
                <div className="w-[500px] bg-[#25273c] rounded-md shadow-2xl shadow-black/50 relative top-[-40px]">
                    <div className="w-full bg-[#25273c] px-[20px] py-[18px] flex items-center border-b border-slate-700 rounded-t-md">
                        <div
                            className="w-[24px] h-[22px] rounded-full border border-slate-600 mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]"
                        >
                            {/*check circle overlay */}
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked1"
                            ></div>
                            {checked.checked1 && <img 
                                alt="" 
                                src={check} 
                                className="w-[8px] h-[8px]"
                            />}
                        </div>
                        <div className="w-full">Complete online Javascript course</div>
                    </div>
                    <div className="w-full bg-[#25273c] px-[20px] py-[18px] flex items-center border-b border-slate-700">
                        <div
                            className="w-[24px] h-[22px] rounded-full border border-slate-600 mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]"
                        >
                            {/*check circle overlay */}
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked2"
                            ></div>
                            {checked.checked2 && <img 
                                alt="" 
                                src={check} 
                                className="w-[8px] h-[8px]"
                            />}
                        </div>
                        <div className="w-full">Jog around the park 3x</div>
                    </div>
                    <div className="w-full bg-[#25273c] px-[20px] py-[18px] flex items-center border-b border-slate-700">
                        <div
                            className="w-[24px] h-[22px] rounded-full border border-slate-600 mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]"
                        >
                            {/*check circle overlay */}
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked3"
                            ></div>
                            {checked.checked3 && <img 
                                alt="" 
                                src={check} 
                                className="w-[8px] h-[8px]"
                            />}
                        </div>
                        <div className="w-full">10 minutes meditation</div>
                    </div>
                    <div className="w-full bg-[#25273c] px-[20px] py-[18px] flex items-center border-b border-slate-700">
                        <div
                            className="w-[24px] h-[22px] rounded-full border border-slate-600 mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]"
                        >
                            {/*check circle overlay */}
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked4"
                            ></div>
                            {checked.checked4 && <img 
                                alt="" 
                                src={check} 
                                className="w-[8px] h-[8px]"
                            />}
                        </div>
                        <div className="w-full">Read for 1 hour</div>
                    </div>
                    <div className="w-full bg-[#25273c] px-[20px] py-[18px] flex items-center border-b border-slate-700">
                        <div
                            className="w-[24px] h-[22px] rounded-full border border-slate-600 mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]"
                        >
                            {/*check circle overlay */}
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked5"
                            ></div>
                            {checked.checked5 && <img 
                                alt="" 
                                src={check} 
                                className="w-[8px] h-[8px]"
                            />}
                        </div>
                        <div className="w-full">Pick up groceries</div>
                    </div>
                    <div className="w-full bg-[#25273c] px-[20px] py-[18px] flex items-center border-b border-slate-700">
                        <div
                            className="w-[24px] h-[22px] rounded-full border border-slate-600 mr-[25px] relative flex justify-center items-center cursor-pointer hover:border-t-[#57ddff] hover:border-l-[#57ddff] hover:border-r-[#c058f3] hover:border-b-[#c058f3]"
                        >
                            {/*check circle overlay */}
                            <div 
                                className="w-full h-full absolute top-0 left-0 rounded-full"
                                onClick={handleCheckClick}
                                id="checked6"
                            ></div>
                            {checked.checked6 && <img 
                                alt="" 
                                src={check} 
                                className="w-[8px] h-[8px]"
                            />}
                        </div>
                        <div className="w-full">Complete Todo App on Frontend Mentor</div>
                    </div>
                    <div className="w-full bg-[#25273c] px-[20px] py-[18px] flex items-center justify-between text-[0.75rem] text-slate-500 rounded-b-md">
                        <p>5 tems left</p>
                        <ul className="flex gap-[20px]">
                            <li className="cursor-pointer hover:text-slate-300">All</li>
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