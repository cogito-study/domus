import React, { FunctionComponent } from 'react';
import { Layout } from '../components/layout';
import SEO from '../components/SEO';
import { ContactSection } from '../components/sections';

const Contact: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Contact | Cogito" />
      <ContactSection />
    </Layout>
  );
};

export default Contact;
