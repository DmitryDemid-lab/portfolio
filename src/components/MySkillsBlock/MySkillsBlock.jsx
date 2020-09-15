import React from 'react';
import s from './MySkillsBlock.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import Skill from "./Skill/Skill";
import BlockHeader from "../common/BlockHeader/BlockHeader";
import reduxIcon from '@iconify/icons-simple-icons/redux';
import typescriptIcon from '@iconify/icons-cib/typescript';
import {faJs, faReact, faHtml5, faCss3, faMicrosoft} from '@fortawesome/free-brands-svg-icons'


function MySkillsBlock(props) {

    const reactSkillDescription = 'React is the ultimate library for front-end developers today. Simply put, you get better at development when you learn React, and many organizations view these skills as essential. React developers should be hungry to level-up or audit the skills essential to Facebook’s prominent JavaScript Library.'

    return (
        <div className={s.MySkillsBlock}>
            <div className={cs.Container}>
                <div className={s.MySkillsBlockContent}>
                    <BlockHeader blockHeader={'My skills'}/>
                    <div className={s.Skills}>
                        <Skill icon={faJs} skillTitle={'Js'} skillDescription={reactSkillDescription} iconType={'fa'}/>
                        <Skill icon={faReact} skillTitle={'React'} skillDescription={reactSkillDescription} iconType={'fa'}/>
                        <Skill icon={typescriptIcon} skillTitle={'Typescript'} skillDescription={reactSkillDescription} iconType={'icon'}/>
                        <Skill icon={reduxIcon} skillTitle={'Redux'} skillDescription={reactSkillDescription} iconType={'icon'}/>
                        <Skill icon={faHtml5} skillTitle={'Html'} skillDescription={reactSkillDescription} iconType={'fa'}/>
                        <Skill icon={faCss3} skillTitle={'Css'} skillDescription={reactSkillDescription} iconType={'fa'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MySkillsBlock;