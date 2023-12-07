import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import Logo from '/threejs.png';
import state from '../store';
import { CustomButton } from '../components';

import { 
  headContainerAnimation, 
  headContentAnimation, 
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);  // A single snapshot of the state

  return (
    <AnimatePresence>
      {/* Check if on homepage */}
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img src={Logo} alt="Logo" className='w-8 h-8 object-contain' />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className='xl:block hidden' /> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton type="filled" title="Customize It" 
              handleClick={() => state.intro = false} 
              customStyles="core-btn-styles" 
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home;
