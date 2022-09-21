import { connect } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

const mapStateToProps = state => ({
    number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
    increase:() => {
        console.log('increase');
    },
    decrease:() => {
        console.log('decrease');
    },
});
// connect( store안의 상태를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수,
//          action생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수 )( 연동할 component )
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);