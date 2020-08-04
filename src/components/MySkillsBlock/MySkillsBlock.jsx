import React from 'react';
import s from './MySkillsBlock.module.css'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import reactLogo from '../../Images/skills/reactLogo.png'
import Skill from "./Skill/Skill";
import BlockHeader from "../common/BlockHeader/BlockHeader";

function MySkillsBlock(props) {

    const reactSkillDescription = 'React is the ultimate library for front-end developers today. Simply put, you get better at development when you learn React, and many organizations view these skills as essential. React developers should be hungry to level-up or audit the skills essential to Facebook’s prominent JavaScript Library.'

    return (
        <div className={s.MySkillsBlock}>
            <div className={cs.Container}>
                <div className={s.MySkillsBlockContent}>
                    <BlockHeader blockHeader={'My skills'}/>
                    <div className={s.Skills}>
                        <Skill logo={reactLogo} skillTitle={'React'} skillDescription={reactSkillDescription}/>
                        <Skill logo={reactLogo} skillTitle={'React'} skillDescription={reactSkillDescription}/>
                        <Skill logo={reactLogo} skillTitle={'React'} skillDescription={reactSkillDescription}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MySkillsBlock;