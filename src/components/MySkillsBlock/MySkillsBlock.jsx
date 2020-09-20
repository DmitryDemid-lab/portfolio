import React from 'react';
import s from './MySkillsBlock.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import Skill from "./Skill/Skill";
import BlockHeader from "../common/BlockHeader/BlockHeader";
import reduxIcon from '@iconify/icons-simple-icons/redux';
import typescriptIcon from '@iconify/icons-cib/typescript';
import {faCss3, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';


function MySkillsBlock(props) {

    const reactSkillDescription = 'Professional usage of React library. Class components, including life-cycles and local state managing, HOCs, container components, MSTP & MDTP. Functional components and Hooks (useState, useEffect, useReducer, etc). State management using React-Redux library (useSelector and useDispatch).'

    const htmlSkills = 'Deep knowledge of HTML 5 structure and semantic tags. Correct block names usage to create corresponding page layout. Familiarity with W3C standards'

    const jsSkills ='Good knowledge of JavaScript. Daily practicing with codewars-like web-sites. Understanding of objects, function expression and function declaration, promises. Deep object and array copying. Familiar with ES6 syntax, arrow functions etc.'

    const cssSkills ='Knowledge of all main CSS 3 features, including: shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts. Deep understanding of flex-based design. Knowledge of SASS/SCSS modules.'

    const TypeScriptSkills ='Experience usage typescript with react, redux and REST. Knowledges about Basic Types, FunctionsClasses, Enums, Generics etc.'

    const ReduxSkills ='FLUX workflow, state management, Middlewares, Redux Thunk knowledge, Actions and Action creators, reducers, createStore, dispatch, immutable state changing. Deep understanding of UI => BLL => DAL workflow'

    return (
        <div className={s.MySkillsBlock} id={'mySkillsBlock'}>
            <Fade bottom>
                <div className={cs.Container}>
                    <div className={s.MySkillsBlockContent}>
                        <BlockHeader blockHeader={'My skills'}/>
                        <div className={s.Skills}>
                            <Skill icon={faJs} skillTitle={'Js'} skillDescription={jsSkills}
                                   iconType={'fa'}/>
                            <Skill icon={faReact} skillTitle={'React'} skillDescription={reactSkillDescription}
                                   iconType={'fa'}/>
                            <Skill icon={typescriptIcon} skillTitle={'Typescript'}
                                   skillDescription={TypeScriptSkills} iconType={'icon'}/>
                            <Skill icon={reduxIcon} skillTitle={'Redux'} skillDescription={ReduxSkills}
                                   iconType={'icon'}/>
                            <Skill icon={faHtml5} skillTitle={'Html'} skillDescription={htmlSkills}
                                   iconType={'fa'}/>
                            <Skill icon={faCss3} skillTitle={'Css'} skillDescription={cssSkills}
                                   iconType={'fa'}/>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default MySkillsBlock;