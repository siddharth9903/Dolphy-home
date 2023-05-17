import Difficulties from "@/containers/Difficulties";
import Feasibility from "@/containers/Feasibility";
import Req from "@/containers/Requirements";
import Shoutout from "@/containers/Shoutout";
import Subscription from "@/containers/Subscription";
import SuccessStory from "@/containers/SuccessStory";
import Support from "@/containers/Support";
import Testimonial from "@/containers/Testimonial";
import UnlockEngagement from "@/containers/UnlockEngagement";
import Users from "@/containers/Users";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <UnlockEngagement />
      <Difficulties />
      <Users />
      <Feasibility />
      <Subscription />
      <Shoutout />
      <Testimonial />
      <SuccessStory />
      <Req/>
      <Support/>
    </>
  );
}
