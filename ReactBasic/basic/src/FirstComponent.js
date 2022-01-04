import PropTypes from 'prop-types'
/* const FirstComponent = () =>{
    return <div> component </div>
} */

/* const FirstComponent = props =>{
    return <div> new component for {props.name} <br/> 
    children : {props.children}
    </div>
}

FirstComponent.defaultProps = {
    name : '기본 이름'
} */

const FirstComponent = props =>{
    const {name, children} = props;
    return <div> new component for {name} <br/>
                children : {children}
    </div>
}

export default FirstComponent;

FirstComponent.propTypes = {
    name : PropTypes.string.isRequired
}
