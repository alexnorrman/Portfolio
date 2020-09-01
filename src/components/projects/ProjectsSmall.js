import React from 'react';
import Item from "./Item";

import fjallstugan from '../../assets/images/fjallstugan/Fjallstugan.png';
import idaginatt from '../../assets/images/idag-inatt/IdagInatt.png';
import eatable from '../../assets/images/eatable/Eatable.png';
import whereisthestore from '../../assets/images/where-is-the-store/WhereIsTheStore.png';
import komitid from '../../assets/images/kom-i-tid/KomITid.png';
import diremake from '../../assets/images/di-redesign/DIRework.png';
import personalobject from '../../assets/images/personal-object/PersonalObject.png';
import actreact from '../../assets/images/act-react/ActReact.png';
import mt from '../../assets/images/master-thesis/mt.png';


const ProjectsSmall = (props) => {

    const projects = [
        {id: "fjallstugan", name: "Fjällstugan", img: fjallstugan, role: "Android Development"},
        {id: "idag-och-inatt", name: "Idag & Inatt", img: idaginatt, role: "Front-End Development"},
        {id: "master-thesis", name: "Master Thesis", img: mt, role: "UX Research"},
        {id: "di-redesign", name: "DI.se Redesign", img: diremake, role: "UI/UX Design"},
        {id: "eatable", name: "Eatable", img: eatable, role: "UI/UX Design"},
        {id: "where-is-the-store", name: "Where Is The Store", img: whereisthestore, role: "UI/UX Design"},
        {id: "a-personal-object", name: "A Personal Object", img: personalobject, role: "3D Modeling"},
        {id: "action-and-reaction", name: "Action & Reaction", img: actreact, role: "3D Animation"},
        {id: "kom-i-tid", name: "Kom i Tid", img: komitid, role: "UI/UX Design"},
    ];

    const filteredProjects = projects.filter(item => item.id !== props.id);

    return (

        <section id="otherProjects">
            <div className="contentWidth">
                <h1>Other Projects</h1>
                <div className="projectItems" >
                    {filteredProjects.map((filteredProjects) => (
                        <Item key={filteredProjects.id} id={filteredProjects.id} name={filteredProjects.name} img={filteredProjects.img} role={filteredProjects.role}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSmall;