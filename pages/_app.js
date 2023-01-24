import "../styles/globals.css";

import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Layout>
        <motion.div
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  );
}
