import React from 'react';
import s from './MyProjects.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from '../common/BlockHeader/BlockHeader';
import Project from './Project/Project';
import todoLogo from '../../assets/images/projects/to-do-list-app.png'
import onlineStoreLogo from '../../assets/images/projects/ONLINE-STORE.jpg'
import socialNetworkLogo from '../../assets/images/projects/socialNetwork.png'
import Fade from "react-reveal/Fade";

function MyProjects(props) {
    const socialNetworkBG = {
        backgroundImage: `url(${socialNetworkLogo})`
    }
    const todolistBG = {
        backgroundImage: `url(${todoLogo})`
    }
    const onlineStoreBG = {
        backgroundImage: `url(${onlineStoreLogo})`
    }

    const todoDescription = 'TodoList is smart task list for everyday use. No matter who you are and what you do - you will be better organized! Features: authorization (login, logout), creating, deleting todolists and tasks for it, updating titles of todolists and tasks (by double clicking on the title). Task status might be changed, there is filtration on tasks statuses.\n ' + 'STACK: ReactJs, Redux, TS, REST (axios), TDD, Jest, Css, MaterialUI, Formic'

    const socialNetworkDescription = 'A big project with aim to improve my skills. Features: Authorization (login, logout), uploading new user’s avatar. possibility of changing user information (by pen button) and status (by double clicking on the status). Also you can see all users in this social network (users tabpage in the menu), by clicking on any user you will see his profile and ability to add him into your friends list (follow) and deleting from friends list (unfollow)\n' + 'STACK: ReactJS, Redux, ReduxForm, TS, Css, Jest, TDD, REST (axios)'

    const onlineStoreDescription = 'A small online store with such features as: Adding items to cart, deleting items from cart, increasing count of items in cart, calculating finally price. Also you are able to place your order (forming JSON with information about customer and items from his order)\n' +
        'STACK: ReactJs, Redux Toolkit, TypeScript, Firebase, REST (axios), Formic, TDD, Jest, Storybook, MaterialUI, SASS\n'

    return (
        <div className={s.MyProjectsBlock} id={'myProjects'}>
            <Fade bottom cascade>
                <div className={cs.Container}>
                    <div className={s.MyProjectsBlockContent}>
                        <BlockHeader blockHeader={'My projects'}/>
                        <div className={s.Projects}>
                            <Project style={todolistBG} projectTitle={'TodoList'}
                                     projectDescription={todoDescription}
                                     projectUrl={'https://dmitrydemid-lab.github.io/todolist-ts/#/'}
                            />
                            <Project style={socialNetworkBG} projectTitle={'Social Network'}
                                     projectDescription={socialNetworkDescription}
                                     projectUrl={'https://dmitrydemid-lab.github.io/Social_Network/#/'}
                            />
                            <Project style={onlineStoreBG} projectTitle={'Online Sore'}
                                     projectDescription={onlineStoreDescription}
                                     projectUrl={'https://online-store-1600b.web.app/'}
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default MyProjects;