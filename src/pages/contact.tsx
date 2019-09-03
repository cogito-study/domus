import React, { FunctionComponent } from 'react';
import { Layout } from '../components/layout';
import SEO from '../components/SEO';
import { PartnerSection, TryOutSection, ContactSection } from '../components/sections';

const Contact: FunctionComponent = () => {
  return (
    <Layout>
      <SEO />
      <ContactSection />
      <PartnerSection />
      <TryOutSection />
    </Layout>
  );
};

export default Contact;
