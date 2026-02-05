import About from '@/components/About';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Joyonto Kumar Das',
  description: 'Learn more about Joyonto Kumar Das',
};

export default function AboutPage() {
  return (
    <ClientLayout>
      <Header />
      <About />
      <Footer />
    </ClientLayout>
  );
}
