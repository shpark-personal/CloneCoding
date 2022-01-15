import {Component} from 'react'

class EventPractice extends Component{
    render(){
        return (
            <div>
                <h1> 이벤트 연습</h1>
                <input
                type = "text"
                name = "message"
                placeholder = '아무거나 입력하세요'
                onChange = {
                    (e) =>{
                        console.log(e);
                        // 입력되는 과정이 실시간으로 기록됨
                        //console.log(e.target.value);
                    }
                }/>
            </div>
        )
    }
}
export default EventPractice;