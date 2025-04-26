import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si"; // LeetCode icon imported

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/janardan-tripathi-6ba14b292" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/JanardanTripathi" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/JANARDANTRIPATHI/" Icon={SiLeetcode} />
    </div>
  );
};

export default ContactSocial;
