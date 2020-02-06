import React, { FunctionComponent } from 'react';
import { ContactSection } from '../components/sections';
import SEO from '../components/SEO';

const Contact: FunctionComponent = () => {
  return (
    <>
      <SEO title="contact" />
      <ContactSection />
    </>
  );
};

export default Contact;
