import {ColorConsumer} from '../contexts/colors';

const colors = ['red', 'orange', 'yellow', 'green', 'blue']
const SelectColors = () => {
    return(
        <div>
            <h2> 색상을 선택하세요 </h2>
            <ColorConsumer>
            {({actions}) => (
                <div 
                    style={{display:'flex'}}>{
                    colors.map(color => (
                        <div 
                            key = {color}
                            style = {{
                            background: color,
                            width:'24px',
                            height:'24px',
                            cursor:'pointer'
                        }}
                        onClick={() => actions.setColor(color)}
                        onContextMenu={e => {
                            e.preventDefault();
                            actions.setSubColor(color);
                        }}
                        />
                    ))}
                </div>
            )}
            </ColorConsumer>
            <hr />
        </div>
    );
};
export default SelectColors;