import { useState } from "react";
import { motion } from "framer-motion";

import Modal from "./Modal";

import {
  ArticlesTemplate,
  ProjectsTemplate,
} from "./ProjectsAndArticlesTemplates";

import { ModalArticleContent } from "./ModalArticleContent";

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className=' bg-gray-950  px-8 py-16 '>
      <div className='lg:flex  items-center'>
        <motion.div
          className='w-1/2 flex items-center'
          whileHover={{
            scale: 1.1,
            rotate: 80,
            bounce: 0.7,
          }}
        >
          <div className='text-5xl  text-gray-900 bg-purple-400 py-4 px-4 rounded-l-sm shadow-lg lg:flex items-center hidden'>
            <div
              aria-hidden='true'
              className='bg-gray-900 w-[20px] h-[20px] rounded-[50%] mr-2'
            />
            <span>Portfolio</span>
            <div
              aria-hidden='true'
              className='bg-gray-900 w-[20px] h-[20px] rounded-[50%] ml-2'
            />
          </div>
          <div className='arrow hidden lg:block' />
        </motion.div>
        <div className='lg:w-1/2  '>
          <div className=''>
            <nav className='border border-dotted border-purple-400 py-10 text text-white w-full rounded-sm  min-h-[700px]'>
              <div className='bloc-tabs'>
                <button
                  className={`${
                    toggleState === 1 ? "tabs active-tabs" : "tabs"
                  }  transition duration-1000`}
                  onClick={() => toggleTab(1)}
                >
                  Portfolio
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Projects
                </button>
              </div>

              <div className='cursor-pointer px-2'>
                <div className='content-tabs'>
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <div className="h-[42rem] overflow-y-auto" onClick={openModal}>
                      <ArticlesTemplate />
                      <ArticlesTemplate />
                    </div>
                  </div>
                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <div className='space-y-8 py-4 h-[42rem] overflow-y-scroll'>
                      <ProjectsTemplate />
                      <ProjectsTemplate />
                      <ProjectsTemplate />
                      <ProjectsTemplate />
                      <ProjectsTemplate />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalArticleContent />
      </Modal>
      {/* <Modal  /> */}
    </section>
  );
}
export default Portfolio;
