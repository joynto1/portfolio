import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Joyonto Kumar Das',
  description: 'My work experience and education',
};

export default function ExperiencePage() {
  return (
    <ClientLayout>
      <Header />
      <Experience />
      <Footer />
    </ClientLayout>
  );
}
