import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TituloStyled = styled(motion.div)`
width:35vw;
@media (max-aspect-ratio: 1/1) {
    /* Pantallas en orientación vertical */
    width:100%;
  }
`
const TitleMotion = styled(motion.div)`
position: relative;
`;
const PositionStyled = styled.div`
position: relative;
overflow: hidden;
z-index:100;
`
const TitleWrapper = styled(motion.div)`
h1{
    font-size:6vw;
    font-family: 'Lobster', cursive;
    @media screen and (max-width:500px){
    font-size:8vw;
    }
}
p{
    font-family: 'Lobster', cursive;
}
`;
const Division = styled(motion.div)`
position:relative;
width:200px;
height:40px;
overflow: hidden;
img{
    width:100%;
    height:300%;
    position:absolute;
    top:-120%;
}
`;


const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const transition2 = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const variants = {
    enter: {
        x: '-100%',
    },
    center: {
        x: '0%',
        transition: { duration: 1.4, ...transition2 }
    },
};

const firstName = {
    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: -1,
        }
    }
}

function Title({ orden, titulo1, p1, p2 }) {
    return (
        <TituloStyled
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <TitleMotion
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={transition}>
                <AnimatePresence initial={false}>
                    <PositionStyled>
                        <TitleWrapper
                            key={orden}
                            variants={firstName}
                            initial="enter"
                            animate="center"
                        >
                            <motion.h1 variants={variants} >{titulo1}</motion.h1>
                            <Division variants={variants}>
                                <img src='division.png' alt=''/>
                            </Division>
                            <motion.p variants={variants}>{p1}</motion.p>
                            <motion.p variants={variants}>{p2}</motion.p>
                        </TitleWrapper>
                    </PositionStyled>
                </AnimatePresence>
            </TitleMotion>
        </TituloStyled>
    );
}


export default Title;