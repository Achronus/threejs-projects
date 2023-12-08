import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../../store";

const ColourPicker = () => {
  const snap = useSnapshot(state);
  
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.colour} 
        disableAlpha 
        onChange={(color) => state.colour = color.hex }
      />
    </div>
  )
}

export default ColourPicker;