import React from 'react';
import './App.css';
import { Footer } from './Components/Footer';
import { NavBar } from './Components/NavBar';
import { Section1 } from './Components/Section1';
import { Section2 } from './Components/Section2';
import { Section3 } from './Components/Section3';
import { Section4 } from './Components/Section4';
import { Section5 } from './Components/Section5';
import { SliderSection } from './Components/SliderSection';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <SliderSection />
      <Footer />
    </>
  );
};
