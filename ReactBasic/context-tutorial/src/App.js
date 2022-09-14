import ColorBox from './components/colorBox';
import {ColorProvider} from './contexts/colors';
import SelectColors from './components/selectColors';

const App = () =>{
  return(
    <ColorProvider>
    <div>
      <SelectColors />
      <ColorBox />
    </div>
    </ColorProvider>
  )
}

export default App;
