import React from "react";
import Image from "next/image";
import Email from '../../public/email-icon.png'
import Slack from '../../public/slack-icon.png'
import Whatsapp from '../../public/whatsapp-icon.png'

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
        <div className="px-40 py-20 flex flex-col items-center gap-10">
            <h3>Support</h3>
            <p>How can we help?</p>

            <div className="md:flex justify-evenly w-full">
            <div className="shadow-slate-700 shadow-2xl px-12 py-5 rounded-3xl flex flex-col items-center gap-2">
            <Image src={Email}/>
            <p>Email us at</p>
            <a href="#" className="text-[#04045c] text-xl font-bold">Support@dolphy.io</a>
            </div>

            <div className="shadow-slate-700 shadow-2xl px-12 py-5 rounded-3xl flex flex-col items-center gap-2">
            <Image src={Slack}/>
            <p>Ask the community!</p>
            <a href="#" className="text-[#04045c] text-xl font-bold">Join Slack</a>
            </div>

            <div className="shadow-slate-700 shadow-2xl px-12 py-5 rounded-3xl flex flex-col items-center gap-2">
            <Image src={Whatsapp}/>
            <p>Join the group!</p>
            <a href="#" className="text-[#04045c] text-xl font-bold">Whatsapp</a>
            </div>
            </div>

        </div>
    )
}

export default Support;