import React from 'react'
import './Main-content.css'
import {ApiPerson} from "./ApiPerson";
import {apiResponse} from "../../Api/main-content-api";


export class MainContent extends React.Component {
    render() {
        return <div className='maincontent'>
            <div className="table-div table-div_vertical-margin">
                <table id="table" border="2px">
                    <caption>Star Wars table</caption>
                    <thead>
                    <tr>
                        <td>name</td>
                        <td>height</td>
                        <td>mass</td>
                        <td>gender</td>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    {apiResponse.results.map((elem, index) =>
                        <ApiPerson name={elem.name} height={elem.height} mass={elem.mass} gender={elem.gender} key={index}/>
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td id="last">last</td>
                        <td id="next">next</td>
                    </tr>
                    <tr>
                        <td id="sort1">sort</td>
                        <td id="sort2">sort</td>
                        <td id="sort3">sort</td>
                        <td id="sort4">sort</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    }
}

