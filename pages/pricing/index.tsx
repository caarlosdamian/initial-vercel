import React, { FC } from 'react';
import { MainLayout } from '@/components/layouts/MainLayout';
import Link from 'next/link';

const Pricing: FC = () => {
  return (
    <MainLayout>
      <h1>Pricing</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
};

export default Pricing;
