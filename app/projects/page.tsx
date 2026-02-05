import Projects from '@/components/Projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Joyonto Kumar Das',
  description: 'My academic and personal projects',
};

export default function ProjectsPage() {
  return (
    <ClientLayout>
      <Header />
      <Projects />
      <Footer />
    </ClientLayout>
  );
}
