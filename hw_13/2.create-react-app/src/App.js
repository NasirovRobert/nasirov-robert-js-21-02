import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Comments} from "./forms/comments/Comments";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className='body'>
                    <div className='sidebar-container'>
                        <Sidebar/>
                    </div>
                    <div className='content'>
                        <Comments/>
                    </div>
                </div>
                {/*{[<Comment name='Leha' text="Pidor Leha"*/}
                {/*/>,*/}
                {/*    < Comment name='Sashsa' text="Pidor Sasha"*/}
                {/*    />,*/}
                {/*    < Comment*/}
                {/*        name='Vadim'*/}
                {/*        text="Pidor Vadya"*/}
                {/*    />,*/}
                {/*    'anyelement']}*/}
                {/*{apiResponse.map((elem, index )=> <Comment name = {elem.name} text = {elem.text} key={index}/>)}*/}
            </div>
        )
    }
}

export default App;
