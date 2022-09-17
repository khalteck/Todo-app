import React from "react"
import sun from "../images/icon-sun.svg"

export default function Main() {
    return (
        <main>
            {/*top */}
            <div className="w-full h-[270px] bg-[url('../images/bg-desktop-dark.jpg')]">
                <div className="w-full h-full pt-[60px] flex justify-center bg-gradient-to-r from-[rgb(87, 221, 255)] to-[rgb(192, 88, 243)] text-white">
                    <div className="w-[500px]">
                        <div className="w-full flex justify-between items-center mb-6">
                            <h1 className="text-[38px] font-[700] tracking-[10px]">TODO</h1>
                            <img alt="" src={sun} className="w-[25px] h-[25px] cursor-pointer"/>
                        </div>
                        <div className="w-full bg-[#25273c] px-[20px] py-[18px] rounded-md flex items-center">
                            <div className="w-[24px] h-[22px] rounded-full border border-slate-600 mr-[30px] cursor-pointer"></div>
                            <input 
                                className="w-full bg-[#25273c] focus:outline-none"
                                placeholder="Create a new todo..."
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*top */}
        </main>
    )
}