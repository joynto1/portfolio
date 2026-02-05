import Skills from '@/components/Skills';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills - Joyonto Kumar Das',
  description: 'My technical skills and expertise',
};

export default function SkillsPage() {
  return (
    <ClientLayout>
      <Header />
      <Skills />
      <Footer />
    </ClientLayout>
  );
}
