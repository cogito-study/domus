import React from 'react';
import Layout from './src/components/layout';

export default ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
