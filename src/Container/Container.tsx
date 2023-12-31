'use client';

import React, { use, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';

import { Menu } from '@/components/Menu';
import { Preloader } from '@/components/Preloader/Preloader';
import { Sidebar } from '@/components/Sidebar';
import { mobileView } from '@/constants/data';
import usePageVisibility from '@/hooks/usePageVisibility';
import useWindowSize from '@/hooks/useWindowSize';
import PageLayout from '@/layouts/PageLayout';
// import Projects from '@/features/Projects/Projects';
// import About from '@/features/About/About';
// import Contact from '@/features/Contact/Contact';
import PreloaderLayout from '@/layouts/PreloaderLayout';
import { setUserData } from '@/store/state/userInfoSlice';

const Home = dynamic(() => import('@/features/Home/'), { ssr: false });
const Projects = dynamic(() => import('@/features/Projects/'), { ssr: false });
const About = dynamic(() => import('@/features/About/'), { ssr: false });
const Contact = dynamic(() => import('@/features/Contact/'), { ssr: false });

const Container = ({ data }: { data: any }) => {
  const dispatch = useDispatch();
  dispatch(setUserData(data));
  console.log(data);
  const isVisible = usePageVisibility();
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width <= mobileView, [width]);
  return (
    <>
      {true && (
        <>
          <PreloaderLayout withAnimation noScroll>
            <Preloader />
          </PreloaderLayout>
          <PageLayout>
            {!isMobile && <Sidebar />}
            {isMobile && <Menu />}
            <Home />
            <Projects />
            {!isMobile && <About />}
            {!isMobile && <Contact />}
          </PageLayout>
        </>
      )}
    </>
  );
};

export default Container;
