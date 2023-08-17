import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

interface Props {
    product: any;
}

const Product: React.FC<Props> = ({ product }) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='w-full flex my-2 flex-col items-center justify-center'>
            <Accordion className='w-full sm:w-10/12' expanded={expanded === `panel${product.id}`} onChange={handleChange(`panel${product.id}`)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${product.id}bh-content`}
                    id={`panel${product.id}bh-header`}
                >
                    <Typography variant='h5' sx={{ flex: 1 }}>
                        <span className='text-lg font-medium'
                        
                        style={{
                         fontFamily: 'Times new roman sans serif',
                         color: '#495d69'

                        }}>Melo™ {product.name}</span>
                    </Typography>
                    <Typography className='hidden sm:flex' style={{fontFamily: 'Times new roman sans serif'}} variant='body2' sx={{ color: 'text.secondary' }}>
                        Click to see features
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='flex w-full h-fit items-center'>
                        <div className='w-1/2 flex flex-col'>
                            <h3 className='px-12 text-xl font-medium mb-6'>Features</h3>
                            <ul className='w-full list-disc px-16'>
                                {product.features.map((feature: { featureName: string }) => (
                                    <li className='text-lg my-1' key={Math.random()}>
                                        {feature.featureName}
                                    </li>
                                ))}
                            </ul>
                            <div className='w-full mt-8 px-12 flex items-start justify-start'>
                                <Link target={'_blank'} to={'/auth/signup'}>
                                    <button className='w-32 hover:bg-blue-700 h-12 mx-4 cursor-pointer text-lg rounded bg-cblink text-white flex items-center justify-center'>
                                        Get It
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* <div className='w-1/2 h-full bg-cblink flex flex-col items-center justify-center p-4 rounded'>
                            <video
                                poster='https://res.cloudinary.com/precieux/image/upload/v1672045949/inventory-28582804_g2kbmq.jpg'
                                src='videos/inventory.mp4'
                                controls
                                className='rounded w-full object-cover'
                            ></video>
                        </div> */}


         <div className='w-1/2 h-full bg-cblink flex flex-col items-center justify-center p-4 rounded'>
           <img
           src='https://res.cloudinary.com/precieux/image/upload/v1672045949/inventory-28582804_g2kbmq.jpg'
            alt='Inventory'
           className='rounded w-full object-cover'
         />
     </div>




                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Product;