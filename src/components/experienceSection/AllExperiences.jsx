import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Frontend Developer Intern",
    company: "Pinnacle Labs Pvt Ltd",
    date: "Nov 2024 - Dec 2024",
    responsibilities: [
      "Developing and optimizing modern web applications using React and JavaScript.",
      "Working closely with UI/UX teams to enhance user experience and design.",
    ],
  },
  // {
  //   job: "Frontend Developer",
  //   company: "Freelance",
  //   date: "2023 - Present",
  //   responsibilities: [
  //     "Building responsive and interactive web applications using React, HTML, and CSS.",
  //     "Optimizing performance for better user experience and faster load times.",
  //     "Integrating third-party APIs and services.",
  //   ],
  // },
  {
    job: "Researcher & Writer",
    company: "Self-Employed",
    date: "2023 - Present",
    responsibilities: [
      "Writing research papers on topics like Cybersecurity, Nanotechnology, and Smart Healthcare Systems.",
      "Contributing to IEEE papers and other journals.",
    ],
  },
  {
    job: "Cybersecurity Enthusiast & Pentathon Participant",
    company: "Pentathon 2025",
    date: "2025 - Present",
    responsibilities: [
      "Participating in cybersecurity challenges and CTF events to improve cryptanalysis skills.",
      "Applying advanced techniques in data decryption and key brute-forcing.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
