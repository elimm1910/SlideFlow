import styled from 'styled-components';

const CardStyled = styled.div`
  text-align: center;
  background: red;
  border-radius: 20px;
  overflow: hidden;
  .efecto{
    position: relative;
    overflow: hidden;
  }
  .detalles{
    padding-top:5px;
    position: absolute;
    bottom: -50%;
    transition: 0.5s;
    width:100%;
    z-index:20;
    color:white;
    background: rgb(216, 46, 46);
  }
`
const ImgStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !['image'].includes(prop),
})`
  z-index:10;
  position: relative;
  width:100%;
  transition: 3s;
  background-image: url(${props => props.image});
  background-position: center;
  background-size:cover;

  @media (min-aspect-ratio: 1/1) {
    /* Pantallas en orientación horizontal */
    height: 60vh;
  }

  @media (max-aspect-ratio: 1/1) {
    /* Pantallas en orientación vertical */
    height: 40vh;
  }

  &:hover{
    transform: scale(1.3);
  }
  &:hover ~ .detalles{
    bottom: 0px;
  }
`


function Card({ title, img, texto }) {
  return (
    <CardStyled>
      <div className="efecto">
        <ImgStyled image={img} />
        <div className='detalles'>
          <div className="social-meta">
            <p>{title}</p>
            <p>{texto}</p>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}


export default Card;