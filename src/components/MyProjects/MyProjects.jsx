import React from 'react';
import s from './MyProjects.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from '../common/BlockHeader/BlockHeader';
import Project from './Project/Project';
import todoLogo from '../../assets/images/projects/to-do-list-app.png'
import socialNetworkLogo from '../../assets/images/projects/socialNetwork.png'
import Fade from "react-reveal/Fade";

function MyProjects(props) {
    const socialNetworkBG = {
        backgroundImage: `url(${socialNetworkLogo})`,
    }
    const todolistBG = {
        backgroundImage: `url(${todoLogo})`,
    }

    const todoDescription = 'ToDoList is smart task list for everyday use. It is truly usable with great user experience. No matter who you are and what you do - you will be better organized! STACK: ReactJS/Redux/TS/REST(Axios)/TDD/Jest/Css/MaterialUI/Formic'

    const socialNetworkDescription = 'A big project with aim to improve my skills with using stack: ReactJS/Redux/ReduxForm/TS/Css/Jest/TDD/REST(Axios)'

    return (
        <div className={s.MyProjectsBlock} id={'myProjects'}>
            <Fade bottom cascade>
                <div className={cs.Container}>
                    <div className={s.MyProjectsBlockContent}>
                        <BlockHeader blockHeader={'My projects'}/>
                        <div className={s.Projects}>
                            <Project style={todolistBG} projectTitle={'ToDoList'} projectDescription={todoDescription}/>
                            <Project style={socialNetworkBG} projectTitle={'Social Network'}
                                     projectDescription={socialNetworkDescription}/>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default MyProjects;