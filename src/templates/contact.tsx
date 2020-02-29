import React, { FunctionComponent } from 'react';
import { ContactSection } from '../components/sections';
import SEO from '../components/SEO';
import Common from '../components/common';

const Contact: FunctionComponent<{ pageContext: { lang } }> = ({ pageContext: { lang } }) => {
  return (
    <>
      <SEO title="contact" />
      <ContactSection lang={lang} />
      <Common lang={lang} />
    </>
  );
};

export default Contact;
