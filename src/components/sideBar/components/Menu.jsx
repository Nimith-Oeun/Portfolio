import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faServer, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Events, scrollSpy } from 'react-scroll';

function Menu() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionIds = ['home', 'about', 'resume', 'portfolio', 'contact'];

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      setActiveSection(to);
    });

    Events.scrollEvent.register('end', function (to, element) {
      setActiveSection(to);
    });

    scrollSpy.update();

    const handleScroll = () => {
      determineActiveSection();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getIconClass = (section) => {
    return activeSection === section ? 'text-teal-600' : 'text-white';
  };

  const determineActiveSection = () => {
    for (let i = 0; i < sectionIds.length; i++) {
      const section = sectionIds[i];
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  return (
    <nav className="w-full h-52 pl-10 flex items-center">
      <ul>
        <li className='mb-3'>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className='text-white font-poppins cursor-pointer'
            onSetActive={() => setActiveSection('home')}
          >
            <FontAwesomeIcon icon={faHouse} className={`${getIconClass('home')} mr-3`} size='lg' />Home
          </Link>
        </li>
        <li className='mb-3'>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className='text-white font-poppins cursor-pointer'
            onSetActive={() => setActiveSection('about')}
          >
            <FontAwesomeIcon icon={faUser} className={`${getIconClass('about')} mr-3`} size='lg' />About Me
          </Link>
        </li>
        <li className='mb-3'>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            className='text-white font-poppins cursor-pointer'
            onSetActive={() => setActiveSection('resume')}
          >
            <FontAwesomeIcon icon={faServer} className={`${getIconClass('resume')} mr-3`} size='lg' />Resume
          </Link>
        </li>
        <li className='mb-3'>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className='text-white font-poppins cursor-pointer'
            onSetActive={() => setActiveSection('portfolio')}
          >
            <FontAwesomeIcon icon={faBriefcase} className={`${getIconClass('portfolio')} mr-3`} size='lg' />Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className='text-white font-poppins cursor-pointer'
            onSetActive={() => setActiveSection('contact')}
          >
            <FontAwesomeIcon icon={faEnvelope} className={`${getIconClass('contact')} mr-3`} size='lg' />Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;