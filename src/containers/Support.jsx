import React from "react";
import Image from "next/image";
import Email from '../../public/images/38.png'
import Slack from '../../public/images/39.png'
import Whatsapp from '../../public/images/40.png'

// const data = [
//     {
//       id: 1,
//       icon: <Email/>,
//       title: "Email us at",
//       desc: "Support@dolphy.io",
//     },
//     {
//       id: 2,
//       icon: <Slack/>,
//       title: "Ask the community!",
//       desc: "Join Slack",
//     },
//     {
//       id: 3,
//       icon: <Whatsapp/>,
//       title: "Join the group!",
//       desc: "Whatsapp",
//     },
//   ];

const Support = () => {
    return(
        <div className="px-5 py-10 md:py-20 flex flex-col items-center gap-10">
            <h3>Support</h3>
            <p className="text-slate-400">How can we help?</p>

            <div className="flex flex-col md:flex-row gap-32">
            <div className="shadow-slate-700 shadow-2xl text-xl px-10 py-12 rounded-3xl flex flex-col items-center gap-2">
            <Image src={Email} width={140} height={140} />
            <p>Email us at</p>
            <a href="#" className="text-[#04045c] text-xl font-bold">Support@dolphy.io</a>
            </div>

            <div className="shadow-slate-700 shadow-2xl text-xl p-12 rounded-3xl flex flex-col items-center gap-2">
            <Image src={Slack} width={120} height={120} />
            <p>Ask the community!</p>
            <a href="#" className="text-[#04045c] text-xl font-bold">Join Slack</a>
            </div>

            <div className="shadow-slate-700 shadow-2xl text-xl px-16 py-12 rounded-3xl flex flex-col items-center gap-2">
            <Image src={Whatsapp} width={100} height={100} />
            <p>Join the group!</p>
            <a href="#" className="text-[#04045c] text-xl font-bold">Whatsapp</a>
            </div>
            </div>

        </div>
    )
}

export default Support;