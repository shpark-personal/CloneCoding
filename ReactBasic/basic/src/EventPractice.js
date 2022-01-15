import {Component} from 'react'

class EventPractice extends Component{
    
    state = {
        username : '사용자명',
        message : 'gogo'
    }

    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        // 입력받은 내용으로 state를 변경
        this.setState({
            // 객체 안에서 key를 []로 감싸면
            // 그 안에 넣은 ref가 가리키는 실제 값이 key값으로 사용됨
            [e.target.name] : e.target.value
        })
    }

    handleClick = () => {
        // click 시 state를 출력 후 state값 초기화
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username : '사용자명',
            message : ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    
    render(){
        return (
            <div>
                <h1> 이벤트 연습</h1>
                <input
                type = "text"
                name = "username"
                placeholder = '사용자명'
                value = {this.state.username}
                onChange = {this.handleChange}/>
                <input
                type = "text"
                name = "message"
                placeholder = '아무거나 입력하세요'
                value = {this.state.message}
                onChange = {this.handleChange}
                onKeyPress = {this.handleKeyPress}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}
export default EventPractice;