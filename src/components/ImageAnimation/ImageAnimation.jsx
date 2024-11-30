import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ImagePortafolioWrapeer = styled(motion.div)`
position: absolute;
text-align: center;
@media (min-aspect-ratio: 1/1) {
    /* Pantallas en orientación horizontal */
    width: 50vw;
    height: 70vh;
  }

@media (max-aspect-ratio: 1/1) {
    /* Pantallas en orientación vertical */
    width: 70vw;
    height: 50vh;
    max-height: 380px;
  }
`;
const ImageMotionPortaolio = styled(motion.div)`
background: rgb(216, 46, 46);
position: relative;
overflow: hidden;
@media (min-aspect-ratio: 1/1) {
    /* Pantallas en orientación horizontal */
    width: 50vw;
    height: 70vh;
  }

@media (max-aspect-ratio: 1/1) {
    /* Pantallas en orientación vertical */
    width: 70vw;
    height: 50vh;
    max-height: 380px;
  }
`;
const ImgMotion = styled(motion.img)`
scale: ${props => props.scale ? props.scale : null};
height: 100%;
@media (min-aspect-ratio: 1/1) {
    /* Pantallas en orientación horizontal */
    width: 50vw;
  }

@media (max-aspect-ratio: 1/1) {
    /* Pantallas en orientación vertical */
    width: 70vw;
    max-height: 380px;
  }
`;

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const transition2 = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const ImageAnimation = ({ lista, orden, clase }) => {

    let direction = null;

    if (clase === 'Arriba') {
        direction = -1;
    } else {
        direction = 1;
    }

    const variants = {
        enter: (direction) => {
            return {
                y: direction > 0 ? 1000 : -1000,
                scale: 1.5,
            };
        },
        center: {
            y: 0,
            scale: 1,
        },
        exit: (direction) => {
            return {
                y: direction < 0 ? 1000 : -1000,
                scale: 0.5,
            };
        }
    };
        return (
            <AnimatePresence initial={false} custom={direction}>
                {lista[orden].id === 0 ?
                    <ImagePortafolioWrapeer
                        key={orden}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={transition}
                    >
                        <ImgMotion src='fondo1.png' scale='1.25' />
                    </ImagePortafolioWrapeer>
                    :
                    <ImagePortafolioWrapeer
                        key={orden}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={transition}
                        layoutId={`shared-element${lista[orden].id}`}
                    >
                        <ImageMotionPortaolio>
                            <Link to={`/${lista[orden].id}`}>
                                <ImgMotion
                                    src={lista[orden].url}
                                    key={lista[orden].url}
                                    initial={{
                                        x: '-100%',
                                        y: '0%',
                                    }}
                                    animate={{
                                        x: '0',
                                        y: '0',
                                    }}
                                    alt='imagen'
                                    whileHover={{ scale: 1.1 }}
                                    transition={transition2}
                                />
                            </Link>
                        </ImageMotionPortaolio>
                    </ImagePortafolioWrapeer>
                }
            </AnimatePresence>
        );
};


export default ImageAnimation;