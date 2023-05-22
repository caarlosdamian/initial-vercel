import { MainLayout } from '@/components/layouts/MainLayout';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
};

export default Contact;
