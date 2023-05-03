import { FaFacebookSquare} from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs"

export default function Description() {
  return (
    <div className="font-sans text-material-black space-y-4 p-4 w-4/5 md:w-3/5 mx-auto">
      <div className="text-center text-4xl underline underline-offset-4">
        Grade Calculator
      </div>
      <p className="text-justify text-sm">
        This grade calculator app is tailored to the specific grading systems of
        three major Philippine universities: De La Salle University (DLSU),
        University of the Philippines (UP), and Ateneo de Manila University
        (ADMU). This app serves as a convenient tool for students to calculate
        and monitor their academic performance across these institutions. It
        accommodates the 1-5 grade point scale of UP, the 0-4 scale system of
        DLSU, and the A-F letter grading of ADMU. Here you can enter the name of
        the course, number of units, and respective grade. Once you fill out the
        table, click on the Calculate button to see your average!
      </p>
      <div className="flex justify-end text-xs text-mono">
        <div>
          <div>👨‍💻 Developed by Jolo Narvaez | © 2023 All rights reserved.</div>
          <div className="flex justify-between text-sm">
            <div className="flex space-x-1">
              <BsGithub className="my-auto"/>
              <a
                className="hover:underline hover:text-gray-400"
                href="https://github.com/jolonarvaez/grade-calculator"
              >
                Github Repo
              </a>
            </div>
            <div className="flex space-x-1">
              <BsLinkedin className="my-auto"/>
              <a
                className="hover:underline hover:text-gray-400"
                href="https://www.linkedin.com/in/jose-wilfredo-narvaez-8692aa21a/"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex space-x-1">
              <FaFacebookSquare className="my-auto space-x-1"/>
              <a
                className="hover:underline hover:text-gray-400"
                href="https://www.facebook.com/jolo.narvaez.5/"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
