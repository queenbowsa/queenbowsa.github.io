import { FaGraduationCap } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import wdlogo from "../../../assets/workdaylogo.png";
import polyworld from "../../../assets/polyworld.png";
import reactfolio from "../../../assets/reactfolio.png";
import { FaCode, FaDatabase, FaWrench, FaServer } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";


export const imageMap = {
  backend: <FaServer className="h-5 w-5 text-primary" />,
  databases: <FaDatabase className="h-5 w-5 text-primary" />,
  frontend: <MdMonitor className="h-5 w-5 text-primary" />,
  grad: <FaGraduationCap className="w-7 h-7 text-primary" />,
  languages: <FaCode className="h-5 w-5 text-primary" />,
  tools: <FaWrench className="h-5 w-5 text-primary" />,
  visa: <SiVisa className="w-10 h-10 text-blue-600" />,
  workday: wdlogo,
  polyworld,
  reactfolio,
  
};
