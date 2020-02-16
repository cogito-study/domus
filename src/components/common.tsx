import React from 'react';
import { TryOutSection, PartnerSection, FooterSection } from './sections';

const Common = ({ tryout, partner }) => (
  <>
    <TryOutSection data={tryout} />
    <PartnerSection data={partner} />
    <FooterSection />
  </>
);

export default Common;
