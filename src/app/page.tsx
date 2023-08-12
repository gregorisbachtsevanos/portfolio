'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { styled } from 'styled-components';

// import Projects from '@/features/Projects/Projects';
// import About from '@/features/About/About';
// import Contact from '@/features/Contact/Contact';

import usePageVisibility from '@/hooks/usePageVisibility';
import PreloaderLayout from '@/layouts/PreloaderLayout';
import PageLayout from '@/layouts/PageLayout';
import { Sidebar } from '@/components/Sidebar';
import { Preloader } from '@/components/Preloader/Preloader';
import config from '@/config';

const Home = dynamic(() => import('@/features/Home/'), { ssr: false });
const Projects = dynamic(() => import('@/features/Projects/'), { ssr: false });
const About = dynamic(() => import('@/features/About/'), { ssr: false });
const Contact = dynamic(() => import('@/features/Contact/'), { ssr: false });

const Page = () => {
  const isVisible = usePageVisibility();
  console.log(config);
  return (
    <>
      {true && (
        <>
          <PreloaderLayout withAnimation withOutScroll>
            <Preloader />
          </PreloaderLayout>
          <PageLayout>
            <Sidebar />
            <Home />
            <Projects />
            <About />
            <Contact />
          </PageLayout>
        </>
      )}
    </>
  );
};

export default Page;
