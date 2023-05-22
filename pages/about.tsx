import { DarkLayout } from '@/components/layouts/DarkLayout';
import { MainLayout } from '@/components/layouts/MainLayout';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const About = () => {
  return (
    <>
      <h1 className="title">About</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
