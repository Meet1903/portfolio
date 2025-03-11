import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillItem from './SkillItem';
import { BiLogoPython, BiLogoAws, BiLogoGoogle, BiLogoJava, BiLogoJavascript, BiLogoTypescript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoNodejs, BiLogoDocker, BiLogoGit, BiLogoMongodb, BiLogoKubernetes, BiLogoFlask, BiLogoJquery, BiLogoPostgresql, BiLogoFigma } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { FaAngular } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMysql, SiTensorflow, SiPandas, SiPytorch, SiJenkins, SiOracle, SiElastic, SiTableau, SiKibana, SiGrafana, SiGoogledataproc } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Skills() {
    useEffect(() => {
        AOS.init();
    }, []);

    const icons = [
        { icon: <BiLogoJava />, label: "Java", color: "text-sky-500" },
        { icon: <BiLogoPython />, label: "Python", color: "text-sky-500" },
        { icon: <BiLogoJavascript />, label: "JavaScript", color: "text-orange-500" },
        { icon: <BiLogoTypescript />, label: "TypeScript", color: "text-sky-500" },
        { icon: <TbBrandCpp />, label: "C/C++", color: "text-blue-500" },
        { icon: <TbBrandCSharp />, label: "C#", color: "text-blue-500" },
        { icon: <FaGolang />, label: "Go", color: "text-blue-500" },
    
        { icon: <BiLogoHtml5 />, label: "HTML", color: "text-orange-500" },
        { icon: <BiLogoCss3 />, label: "CSS", color: "text-blue-500" },
        { icon: <FaAngular />, label: "Angular", color: "text-red-500" },
        { icon: <BiLogoReact />, label: "React", color: "text-cyan-500" },
    
        { icon: <BiLogoNodejs />, label: "Node.js", color: "text-green-500" },
        { icon: <BiLogoDocker />, label: "Docker", color: "text-blue-500" },
        { icon: <BiLogoFlask />, label: "Flask", color: "text-orange-500" },
        { icon: <BiLogoGit />, label: "Git", color: "text-[#F1502F]" },
        { icon: <SiJenkins />, label: "Jenkins", color: "text-yellow-500" },
        { icon: <BiLogoKubernetes />, label: "Kubernetes", color: "text-blue-500" },
    
        { icon: <BiLogoMongodb />, label: "MongoDB", color: "text-green-500" },
        { icon: <SiMysql />, label: "MySQL", color: "text-orange-500" },
        { icon: <BiLogoPostgresql />, label: "PostgreSQL", color: "text-blue-500" },
        { icon: <SiOracle />, label: "Oracle", color: "text-red-500" },
        { icon: <SiElastic />, label: "Elasticsearch", color: "text-blue-500" },
    
        { icon: <SiTensorflow />, label: "TensorFlow", color: "text-orange-500" },
        { icon: <SiPandas />, label: "Pandas", color: "text-blue-500" },
        { icon: <SiPytorch />, label: "PyTorch", color: "text-red-500" },
    
        { icon: <VscAzure />, label: "Azure", color: "text-sky-500" },
        { icon: <BiLogoAws />, label: "AWS", color: "text-blue-600" },
        { icon: <BiLogoGoogle />, label: "Google Cloud Platform", color: "text-blue-500" },
        { icon: <SiGoogledataproc />, label: "Dataproc", color: "text-blue-500" },
    
        { icon: <SiTableau />, label: "Tableau", color: "text-indigo-500" },
        { icon: <SiKibana />, label: "Kibana", color: "text-red-500" },
        { icon: <SiGrafana />, label: "Grafana", color: "text-orange-500" },
    
        { icon: <TbBrandPowershell />, label: "Shell", color: "text-green-500" },
        { icon: <BiLogoFigma />, label: "Figma", color: "text-pink-500" }
        
    ];
       

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10 p-5">
                    {icons.map(({ icon, label, color }, index) => (
                        <motion.div
                            key={index}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className={`cursor-pointer ${color} text-[60px] transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[100px]`}>
                                {icon}
                            </div>
                            <h3 className="text-center font-light text-black mt-2">{label}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
