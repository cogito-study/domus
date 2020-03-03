import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React, { FC } from 'react';
import i18n from '../../config/i18n.js';
import Common from '../components/common';
import { ContactSection } from '../components/sections';

const Contact: FC<{ pageContext: { lang } }> = ({ pageContext: { lang } }) => {
  return (
    <>
      <GatsbySeo title={i18n[lang].pages.contact} />
      <ContactSection lang={lang} />
      <Common lang={lang} />
    </>
  );
};

export default Contact;
