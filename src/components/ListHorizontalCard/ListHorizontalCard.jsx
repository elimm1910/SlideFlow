import React from 'react';
import { motion } from 'framer-motion';

// Style
import './ListHorizontalCard.css'

//componentes
import Card from '../Card/Card';

const firstName = {
    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: -1,
        }
    }
}


function ListHorizontalCard({ lista, id }) {
    return (
        <div className='LisHorizontalCard_Styled'>
            <motion.div className='container'>
                <div className='ListHorizontalCard_flex'>
                    {lista[id] ? lista[id].subtema.map((tema) =>
                        <div className='ListCard' variants={firstName} key={tema.id} >
                            <Card
                                title={tema.title}
                                img={tema.imagen}
                                texto={tema.texto}
                            />
                        </div>
                    ) : null}
                </div>
            </motion.div>
        </div>
    );
}


export default ListHorizontalCard;