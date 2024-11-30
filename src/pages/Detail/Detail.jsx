import { useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';

//componentes
import ListHorizontalCard from '../../components/ListHorizontalCard/ListHorizontalCard';


const DetailStyled = styled.div`
span{
  display:inline-block;
}
`
const MarginListTema = styled.div`
position:relative;
overflow: hidden;
margin-top: 20vh;
`;
const MarginDetailStyled = styled.div`
position:relative;
overflow: hidden;
margin-top: 20vh;
background: rgb(216, 46, 46);
color: white;
z-index:10;
border-top-left-radius: 100px;
border-top-right-radius: 100px;
-webkit-border-top-right-radius:100;
-moz-border-top-right-radius:100;
width:100%;
heigth:100%;
h1{
  text-align:center;
  padding-top:5%;
  margin-left:10%;
  margin-right:10%;
}
p{
  margin-top:5%;
  margin-left:10%;
  margin-right:10%;
  padding-bottom:5%;
  margin-bottom:0 !important;
}
`;
const DetailWrapper = styled(motion.div)`
margin: 0 !important;
height: 100%;
width: 100%;
`;
const ImageWrapper = styled(motion.div)`
position: fixed;
overflow: hidden;
width: 100vw;
height: 100vh;
opacity: 0.3;
top: 0;
z-index:-1;
`;
const ImageFondo = styled(motion.img)`
position:relative;
width:100%;
height:100%;
`;


const transition = { duration: 10, ease: [0.6, 0.01, -0.05, 0.9] };

function Detail() {
  const lista = useSelector((state) => state.lista)

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const { id } = useParams();

  return (
    <DetailStyled>
      <DetailWrapper
        initial='initial'
        animate='animate'
        exit='exit'
      >
          <ImageWrapper
          layoutId={`shared-element${id}`}
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0.3,
            transition: { transition },
          }}
          >
            <ImageFondo
              style={{ scale: scale }}
              initial={{
                width: '100%',
                scale: 1
              }}
              animate={{
                transition: { transition },
              }}
              src={lista[id] ? lista[id].url : ""} />
          </ImageWrapper>
        <MarginListTema>
          <ListHorizontalCard
            lista={lista}
            id={id}
          />
        </MarginListTema>

        <MarginDetailStyled>
          <h1>{lista[id] ? lista[id].titleInformacion : ""}</h1>
          <p>{lista[id] ? lista[id].informacion : ""}</p>
        </MarginDetailStyled>
      </DetailWrapper>
    </DetailStyled>
  );
}

export default Detail;