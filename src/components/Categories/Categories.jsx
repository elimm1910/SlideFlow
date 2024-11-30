import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

//components
import Title from '../Title/Title';
import ImageAnimation from '../ImageAnimation/ImageAnimation';

const PortafolioStyled = styled.div`
color:black;
`;
const HeightStyled = styled.div`
height:100vh;
overflow:hidden;
position:relative;
`;
const WrapperPortafolio = styled.div`
margin-right: 0px !important;
height:100%;
`;
const CentrarColumna = styled.div.withConfig({
    shouldForwardProp: (prop) => !['marginLeft', 'left', 'marginTop'].includes(prop),
})`
@media (min-aspect-ratio: 1/1) {
    /* Pantallas en orientación horizontal */
    height: 100%;
    float: ${props => props.left ? "left" : null};
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin-left: ${props => props.marginLeft || 0};
  }

@media (max-aspect-ratio: 1/1) {
    /* Pantallas en orientación vertical */
    margin-left: 12vw;
    margin-top: ${props => props.marginTop ? props.marginTop : 0};
  }
`;


function Categories({ lista, orden, clase}) {
    const dispatch = useDispatch();

    const scrollAbajo = (orden) => {
        dispatch({
            type: "SCROLL_ABAJO",
            orden
        })
    }
    const scrollArriba = (orden) => {
        dispatch({
            type: "SCROLL_ARRIBA",
            orden
        })
    }

    const nextIndex = () => {
        if (orden === lista.length - 1) {
            let neworden = 0;
            return scrollAbajo(neworden);
        }
        let neworden = orden + 1;
        return scrollAbajo(neworden);
    };
    const prevIndex = () => {
        if (orden === 0) {
            let neworden = lista.length - 1;
            return scrollArriba(neworden);
        }
        let neworden = orden - 1;
        return scrollArriba(neworden);
    };

    return (
        <PortafolioStyled>
            <ReactScrollWheelHandler
                upHandler={prevIndex}
                downHandler={nextIndex}
            >
                <HeightStyled>
                    <WrapperPortafolio>
                        <CentrarColumna left="true" marginLeft="2vw" marginTop="15vh">
                            <Title
                                orden={orden}
                                titulo1={lista[orden].title1}
                                titulo2={lista[orden].title2}
                                p1={lista[orden].p1}
                                p2={lista[orden].p2}
                                boton={lista[orden].boton}
                            />
                        </CentrarColumna>
                        <CentrarColumna marginLeft="35vw" >
                            <ImageAnimation
                                lista={lista}
                                orden={orden}
                                clase={clase}
                            />
                        </CentrarColumna>
                    </WrapperPortafolio>
                </HeightStyled>
            </ReactScrollWheelHandler>
        </PortafolioStyled>
    );
}

export default Categories;