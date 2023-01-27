import React from 'react';
import { Main } from '@layout';
import Seo from '../components/SEO/SEO';
import { Banner, Features, Programs, Products, Contact, GetStarted } from '@home';

export default function Home() {
  const menuValues = [{name:'Our Features',link:'features'}, {name:'Our Programs',link:'programs'}, {name:'Our Products',link:'products'}];
  return (
    <Main values={menuValues}>
      <Seo title="Erudex: India's Most Teacher-Friendly Ed-tech Platform" description="We are India's most teacher-friendly ed-tech platform offering digital teaching & learning solutions for schools and colleges for grades 1-12." />
      <Banner/>
      <Features />
      <Programs />
      <Products />
      <Contact />
      <GetStarted />
    </Main>
  );
}
