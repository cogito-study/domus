import React from 'react';
import { TryOutSection, PartnerSection, FooterSection } from './sections';

const Common = ({ partner, lang }) => (
  <>
    <TryOutSection lang={lang} />
    <PartnerSection data={partner} />
    <FooterSection />
  </>
);

export default Common;
