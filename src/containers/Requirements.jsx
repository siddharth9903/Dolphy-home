import React from "react";

const Req = () => {
    return (
        <div className="px-5 lg:px-40 py-10 md:py-20 flex flex-col items-center gap-10">
            <h3>Not meeting your requirements?</h3>
            <div className="flex justify-center gap-5">
            <button className="text-white bg-[#04045c] p-2 px-5 rounded-full">Monthly</button>
            <button className="bg-slate-200 p-2 px-5 rounded-full">Yearly</button>
            </div>
            <div className="shadow-2xl rounded-3xl flex flex-col items-center gap-5 pb-5">
                <p className="bg-[#04045c] text-white px-16 py-10 rounded-3xl">$ <span className="text-5xl">10</span> /month</p>
                <p>200 Replies</p>
                <button className="bg-black text-white pl-2 pr-7 py-1 rounded-full">Pay</button>
                <p className="bg-slate-200 p-2 rounded-full">Pay Using</p>
            </div>
        </div>
    )
}

export default Req;