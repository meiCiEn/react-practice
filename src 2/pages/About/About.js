import React, { useState } from 'react';
import Typewriter from '../../components/Typewriter/Typewriter';
import H2 from '../../components/Common/H2';
import './About.css'; // Import your CSS file

function About ()
{
  const [ step, setStep ] = useState( 0 );

  const steps = [
    {
      text: `G'day!`,
      delay: 80,
    }
  ];

  const handleTypingComplete = () =>
  {
    if ( step < steps.length - 1 )
    {
      setStep( step + 1 );
    }
  };

  return (
    <div className="pt-32">

      <h1 className={ `fade-in typewriter-text mb-7 text-red-900 text-8xl ${ step >= 0 ? 'show' : '' }` }>
        { step === 0 && (
          <Typewriter text={ steps[ 0 ].text } delay={ steps[ 0 ].delay } onTypingComplete={ handleTypingComplete } />
        ) }
        { step > 0 && steps[ 0 ].text }
      </h1>
      <section className={`fade-in-section`} id="section-1">
        <p className="pb-2">My name's Ellie Mears. I'm a front-end web developer based in Brussels.</p>
        </section>
        <section className={`fade-in-section`} id="section-2">
        <h2 className="typewriter-text text-3xl py-3 text-slate-800">Becoming a dev</h2>
        <p className="pb-2">The geekery started when I embarked on a year-long webmaster course at <span className="font-semibold text-slate-800 hover:text-red-900 "><a href="https://interface3.be/fr" target="_blank" rel="noopener noreferrer">Interface3</a></span>. It was there I learnt the difference between HTML elements and attributes, for and while loops, Git and GitHub and what the heck an API request is.</p>
        <p className="pb-2">I also dipped my toes in React and loved and hated it in equal measure. Now I understand it better, React has become my go-to framework because of its efficiency, flexibility, and the fantastic community of developers that use it.</p>
      </section>
      <section className={`fade-in-section`} id="section-3">
        <h2 className="typewriter-text text-3xl py-3 text-slate-800">Reactology</h2>
        <p className="pb-2">I've called this site Reactology because it's my personal laboratory where I experiment and create projects using React. The number of apps will keep growing as I learn new stuff.</p>
      </section>
      <section className={`fade-in-section`} id="section-4">
        <h2 className="typewriter-text text-3xl py-3 text-slate-800">Connect with me</h2>
        <p className="pb-2">I'm always eager to connect with fellow developers, learners, and enthusiasts. Whether you have feedback, questions, or just want to say hello, don't hesitate to reach out via <span className="font-semibold text-slate-800 hover:text-red-900 "><a href="mailto:eleanor.mears@gmail.com" target="_blank" rel="noopener noreferrer">email</a></span>, <span className="font-semibold text-slate-800 hover:text-red-900 "><a href="https://www.linkedin.com/in/elliemears/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>, or through <span className="font-semibold text-slate-800 hover:text-red-900 "><a href="https://github.com/meiCiEn?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></span>.</p>
        <p className="pb-2">You can find more projects (not just React) on my <span className="font-semibold text-slate-800 hover:text-red-900 "><a href="https://eleanor-mears.com/" target="_blank" rel="noopener noreferrer">portfolio website</a></span>.</p>
      </section>
    </div>
  );
}

export default About;
