import React from 'react'
import './Comments.css'
import {Comment} from "../../components/comment/Comment";
import {apiResponse} from "../../api-mock/api";


let testArr = [<Comment name='frfr' text='help' key='0'/>, <Comment name='olrgk' text='Hi, me Oleg' key='1'/>];

export class Comments extends React.Component {
    render() {
        return <div className='comment-form'>
            {apiResponse.status === 200 ?
                apiResponse.result.map((elem, index) => <Comment name={elem.name} text={elem.text} key={index}/>)
            : 'При загрузке произошла ошибка'}
            {testArr}
        </div>
    }
}