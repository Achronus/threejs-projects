import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from "../config/motion";
import { AIPicker, ColourPicker, FilePicker, Tab } from "../components/picker";

const Customizer = () => {
  return (
    <h1>Customizer</h1>
  )
}

export default Customizer;
