import React from 'react';
import { TryOutSection, PartnerSection, FooterSection } from './sections';

const Common = ({ lang }) => (
  <>
    <TryOutSection lang={lang} />
    <PartnerSection lang={lang} />
    <FooterSection lang={lang} />
  </>
);

export default Common;
