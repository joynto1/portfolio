'use client';

import { useReveal } from '@/hooks/useReveal';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  useReveal();

  return <>{children}</>;
}
