import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images }from '../../constants'
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
    
  }, []);

  return (
    <>
      <h2 className="head-text"> I know that <span>Great Dev</span> <br/> means <span>Great Business</span> </h2>  
      <div className="app__profiles">
          {abouts.map((about, index) =>(
            <motion.div
              whileInView={{y: [100, 0], opacity:[0,1]}}
              whileHover={{scale:1.1, }}
              transition={{duration: 0.2, type: 'tween'}}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={About.title}/>
              <h2 className="bold-text-custom" style={{marginTop: 2}}>{about.title}</h2>
              <h2 className="p-text-custom" style={{marginTop: 5}}>{about.description}</h2>
            </motion.div>
          ))}
      </div>
    </>
  )
}

export default About