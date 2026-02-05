import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Joyonto Kumar Das',
  description: 'Get in touch with me',
};

export default function ContactPage() {
  return (
    <ClientLayout>
      <Header />
      <Contact />
      <Footer />
    </ClientLayout>
  );
}
