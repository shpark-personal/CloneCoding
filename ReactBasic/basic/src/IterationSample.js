const IterationSample = () =>{
    // map함수 사용
    var words = ['눈사람', '얼음', '눈', '바람'];
    var nameList = words.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>
    // return(
    //     // 반복적으로 li생성
    //     <ul>
    //         <li>눈사람</li>
    //         <li>얼음</li>
    //         <li>눈</li>
    //         <li>바람</li>
    //     </ul>
    // )
}

export default IterationSample;