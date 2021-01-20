import './App.css';
import React, { Component } from 'react'
import UserGreeting from './components/UserGreeting';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ClassClick from './components/ClassClick';
import Greet from '../src/components/Greet'
import Welcome from '../src/components/Welcome'
import Hello from '../src/components/Hello'
import Message from '../src/components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

class App extends Component {
  render() {
    return(
      <div className="App">
        <LifecycleA/>
      {/*
        <Form/>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline/>
        <Stylesheet primary={true}/>
        <NameList/>
        <UserGreeting/>
        <ParentComponent />
        <EventBind/>
        <FunctionClick/>
        <ClassClick/>
        <Counter />
        <Welcome />
        <Hello />
        <Greet name="Lucas" heroName="Batman">
        <p>This is children props</p>
        </Greet>
        <Greet name="Otávio" heroName="Joker">
          <button>Action</button>
        </Greet>
        <Welcome name="Lucas" heroName="Batman"/>
        <Welcome name="Otávio" heroName="Joker"/>
        <Message />
      */}
      </div>
    )
  }
}

export default App;
