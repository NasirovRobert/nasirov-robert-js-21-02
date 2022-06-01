import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {MainContent} from "./components/main-content/Main-content";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='body'>
                <Sidebar/>
                <MainContent/>
            </div>
        </div>
    );
}

export default App;
