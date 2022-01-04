/* const FirstComponent = () =>{
    return <div> component </div>
} */

const FirstComponent = props =>{
    return <div> new component for {props.name} <br/> 
    children : {props.children}
    </div>
}

FirstComponent.defaultProps = {
    name : '기본 이름'
}

export default FirstComponent;