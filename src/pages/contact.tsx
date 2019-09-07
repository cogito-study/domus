import React, { FunctionComponent } from 'react';
import { Layout } from '../components/layout';
import SEO from '../components/SEO';
import { ContactSection } from '../components/sections';

const Contact: FunctionComponent = () => {
  return (
    <Layout>
      <SEO />
      <ContactSection />
    </Layout>
  );
};

export default Contact;
