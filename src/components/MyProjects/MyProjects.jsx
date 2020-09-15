import React from 'react';
import s from './MyProjects.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from '../common/BlockHeader/BlockHeader';
import Project from './Project/Project';
import todoLogo from '../../assets/images/projects/to-do-list-app.png'
import socialNetworkLogo from '../../assets/images/projects/socialNetwork.png'

function MyProjects(props) {
    const socialNetworkBG = {
        backgroundImage: `url(${socialNetworkLogo})`,
    }
    const todolistBG = {
        backgroundImage: `url(${todoLogo})`,
    }

    const todoDescription = 'ToDoList is smart task list for everyday use.\n' +
        'It is truly usable with great user experience.\n' +
        'No matter who you are and what you do - you will be better organized!\n' +
        'At home, at work and in your free time - you will focus on really important things!\n' +
        'SplenDO is powerful in its simplicity and convenience of use.'

    return (
        <div className={s.MyProjectsBlock}>
            <div className={cs.Container}>
                <div className={s.MyProjectsBlockContent}>
                    <BlockHeader blockHeader={'My projects'}/>
                    <div className={s.Projects}>
                        <Project style={todolistBG} projectTitle={'ToDoList'} projectDescription={todoDescription}/>
                        <Project style={socialNetworkBG} projectTitle={'Social Network'} projectDescription={todoDescription}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyProjects;