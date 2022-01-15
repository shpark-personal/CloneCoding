import {Component} from 'react'

class EventPractice extends Component{
    
    state = {
        message : 'gogo'
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        // 입력받은 내용으로 state를 변경
        this.setState({
            message : e.target.value
        })
    }

    handleClick(){
        // click 시 state를 출력 후 state값 초기화
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }
    
    render(){
        return (
            <div>
                <h1> 이벤트 연습</h1>
                <input
                type = "text"
                name = "message"
                placeholder = '아무거나 입력하세요'
                value = {this.state.message}
                onChange = {this.handleChange}/>
                <button onClick={this.state.handleClick}>확인</button>
            </div>
        )
    }
}
export default EventPractice;