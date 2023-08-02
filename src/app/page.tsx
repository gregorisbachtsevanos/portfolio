'use client';
import React from 'react';
import Home from '@/features/Home/Home';
import { Sidebar } from '@/components/Sidebar';
import Projects from '@/features/Projects/Projects';

const Page = () => {
  return (
    <>
      <Sidebar />
      <Home />
      <Projects />
      {/* <About /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Page;
