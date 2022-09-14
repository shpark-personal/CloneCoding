import ColorBox from './components/colorBox';
import {ColorProvider} from './contexts/colors';


const App = () =>{
  return(
    <ColorProvider>
    <div>
      <ColorBox />
    </div>
    </ColorProvider>
  )
}

export default App;
