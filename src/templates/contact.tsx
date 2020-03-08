import { Location } from '@reach/router';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React, { FC } from 'react';
import i18n from '../../config/i18n.js';
import Common from '../components/common';
import { ContactSection } from '../components/sections';

const Contact: FC<{ pageContext: { lang } }> = ({ pageContext: { lang } }) => {
  const seoTitle = i18n[lang].pages.contact;

  return (
    <Location>
      {({ location }) => (
        <>
          <GatsbySeo
            title={seoTitle}
            description="Contact us for any further information regarding the future of education!"
            openGraph={{
              url: location.href,
              title: `${seoTitle} | cogito - Collaborative e-learning platform`,
              description:
                'Contact us for any further information regarding the future of education!',
            }}
          />
          <ContactSection lang={lang} />
          <Common lang={lang} />
        </>
      )}
    </Location>
  );
};

export default Contact;
