import {useState, useMemo, useCallback} from 'react';

const getAverage = numbers =>{
    console.log('평균값 계산중');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [li, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(e =>{
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        const nextList = li.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, li])

    const avg = useMemo(() => getAverage(li), [li]);

    return (
        <div>
            <div>
                <input value = {number} onChange = {onChange}/>
                <button onClick = {onInsert}>등록</button>
                <ul>{li.map((value, index) => (
                    <li key={index}> {value} </li> ))}
                </ul> 
            </div>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>
    );
};


export default Average;