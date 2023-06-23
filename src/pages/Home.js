import { motion, AnimatePresence } from 'framer-motion';

import s from './home.module.css';

export default function Home() {
  return (
    <div className={s.wrapper}>
      <AnimatePresence>
        <motion.h1
          className={s.title}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
        >
          Welcome 👋
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence>
        <motion.p
          className={s.text}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
        >
          Now you will exactly not forget your contacts!
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
