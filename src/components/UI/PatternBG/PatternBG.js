import React from 'react'
import classes from './PatterBG.module.css'
import bgImage from '../../../assets/pattern-bg.png'
const PatternBG = () => {
    return (
        <div className={classes.pattern}>
            <img src={bgImage} alt='background with pattern'/>
        </div>
    )
}

export default PatternBG
