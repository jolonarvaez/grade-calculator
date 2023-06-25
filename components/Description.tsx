import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Description() {
  return (
    <div className="font-sans space-y-4 py-4 px-6 md:w-3/5 mx-auto transition">
      <div className="text-center text-4xl underline underline-offset-4">
        Grade Calculator
      </div>
      <p className="text-justify text-sm">
        This grade calculator app is tailored to the specific grading systems of
        three major Philippine universities: De La Salle University (DLSU),
        University of the Philippines (UP), and the Ateneo de Manila University
        (ADMU). This app serves as a convenient tool for students to calculate
        and monitor their academic performance across these institutions. It
        accommodates the 1-5 grade point scale of UP, the 0-4 scale system of
        DLSU, and the A-F letter grading of ADMU. Here you can enter the name of
        the course, number of units, and respective grade. Once you fill out the
        table, click on the Calculate button to see your average!
      </p>
      <div className="flex md:flex-row flex-col justify-between text-xs gap-4">
        <div className="lg:w-3/5 w-full text-sm">
          <div className="font-bold">Instructions:</div>
          <ol className="list-decimal">
            <li>Choose your desired school</li>
            <li>Press the plus icon to add a course</li>
            <li>Fill in the course name (optional), units, and grade</li>
            <li>Add or remove courses until you reach the desired number</li>
            <li>Press Calculate to see your grade average</li>
          </ol>
        </div>
        <div className="text-center">
          <div>👨‍💻 Developed by Jolo Narvaez | © 2023 All rights reserved.</div>
          <div className="flex justify-evenly text-sm">
            <div className="flex space-x-1">
              <BsGithub className="my-auto" />
              <a
                className="hover:underline hover:text-gray-400"
                href="https://github.com/jolonarvaez/grade-calculator"
              >
                Github Repo
              </a>
            </div>
            <div className="flex space-x-1">
              <BsLinkedin className="my-auto" />
              <a
                className="hover:underline hover:text-gray-400"
                href="https://www.linkedin.com/in/jose-wilfredo-narvaez-8692aa21a/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
