import React, { useEffect, useState } from 'react';

//MUI
import { Grid } from '@mui/material';

//components
import ZoneCard from './ZoneCard';

//styles
import './zone.css'

//image
import zoneIcon1 from '../assets/icn_chest_1.png'
import zoneIcon2 from '../assets/icn_chest_2.png'
import zoneIcon3 from '../assets/icn_chest_3.png'
import zoneIcon4 from '../assets/icn_chest_4.png'
import zoneIcon5 from '../assets/icn_chest_5.png'
import zoneIcon6 from '../assets/icn_chest_6.png'
import zoneToken from '../assets/zone-token-middle-image.png'

const zoneCardData = [
    [
        {
            image: zoneIcon1,
            title: 'برگذاری اولین بازی های متاگیمی ایران',
            date: '1401/05',
            id: 1,
            className: 'fristLeft'
        },
        {
            image: zoneIcon2,
            title: 'راه اندازی نسخه بتا وب سایت بارا و وبسایت خبری متاورس',
            date: '1401/07',
            id: 2,
            className: 'secondLeft'
        },
        {
            image: zoneIcon3,
            title: 'اجاره اکانت به اسکالر و ساخت اکانت متاگیمی توسط سرمایه گذار',
            date: '1401/09',
            id: 3,
            className: 'thirdLeft'
        }
    ],
    [
        {
            image: zoneIcon4,
            title: 'پذیرش در سیکل شتابدهی شتاب دهنده آی فینک',
            date:'1400/10',
            id: 4,
            className: 'fristRight'
        },
        {
            image: zoneIcon5,
            title: 'برگذاری اولین کنسرت ایرانی در متاورس',
            date: '1401/01',
            id: 5,
            className: 'secondRight'
        },
        {
            image: zoneIcon6,
            title: 'ساخت اکانت های متاگیمی',
            date: '1401/02',
            id: 6,
            className: 'thirdRight'
        }
    ]
]



const Zone = () => {

    const [breakPoint, setBreakPoint] = useState(false)
    const [deviceSize, setDeviceSize] = useState(window.innerWidth)

    useEffect(() => {
        const resizeW = () => setDeviceSize(window.innerWidth);
    
        window.addEventListener("resize", resizeW)
        if(deviceSize <= 1064) {
            setBreakPoint(true)
        }
        deviceSize <= 1064 ? setBreakPoint(true) : setBreakPoint(false)
        return () => window.removeEventListener("resize", resizeW);
      });


    return (
        <div className='zoneContainer'>  
            <Grid 
                container 
                justifyContent='space-evenly' 
                alignItems='center' 
                direction={{md: 'row', xs: 'column'}}
                rowSpacing={4}
            >    
                <Grid container item md={4} xs={12} rowSpacing={7} direction={{xs: 'column', sm: 'row', md: 'column'}} justifyContent='center'>
                    {
                        zoneCardData[1].map((card, index) => (
                            <Grid item md={4} xs={5} key={index}>
                                <div className={!breakPoint ? `${card.className}` : ''}>
                                    <ZoneCard 
                                        image={card.image}
                                        title={card.title}
                                        date={card.date}
                                    />
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid item md={4} xs={6}>
                    <div className='imageContainer'>
                        <img className='image' src={zoneToken} alt="zone token"/>
                    </div>
                </Grid>
                <Grid container item md={4} xs={12} rowSpacing={7} direction={{xs: 'column', sm: 'row', md: 'column'}} justifyContent='center'>
                    {
                        zoneCardData[0].map((card, index) => (
                            <Grid item md={4} xs={5} key={index}>
                                <div className={!breakPoint ? `${card.className}` : ''}>
                                    <ZoneCard 
                                        image={card.image}
                                        title={card.title}
                                        date={card.date}
                                    />
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default Zone;