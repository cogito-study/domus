import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React, { FunctionComponent } from 'react';
import Common from '../components/common';
import { ContactSection } from '../components/sections';

const Contact: FunctionComponent<{ pageContext: { lang } }> = ({ pageContext: { lang } }) => {
  return (
    <>
      <GatsbySeo title="contact" />
      <ContactSection lang={lang} />
      <Common lang={lang} />
    </>
  );
};

export default Contact;
