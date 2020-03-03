import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import Cookies from 'js-cookie';
import React, { FunctionComponent } from 'react';
import Common from '../components/common';
import { Container } from '../components/container';
import { CookieBanner } from '../components/cookie-banner';
import {
  CustomerSection,
  FeatureSection,
  HeroSection,
  UseCaseSection,
} from '../components/sections';

const Index: FunctionComponent<{ data: any; pageContext: { lang } }> = ({
  data,
  pageContext: { lang },
}) => {
  const { motto, description, customers_heading, popup_text, popup_title } = data.prismicHome.data;
  const slices = data.prismicHome.data.body;
  const useCaseSection = slices.filter((slice) => slice.slice_type === 'use_case');
  const featureSection = slices.filter((slice) => slice.slice_type === 'feature');
  const customerSection = slices.filter((slice) => slice.slice_type === 'customer');

  const cookie = slices.filter((slice) => slice.slice_type === 'cookie');
  console.log(lang);
  return (
    <>
      <GatsbySeo title="home" />
      <Container>
        <HeroSection
          lang={lang}
          motto={motto.text}
          description={description.text}
          popupTitle={popup_title.text}
          popupText={popup_text.text}
        />
      </Container>
      <UseCaseSection data={useCaseSection} lang={lang} />

      <Container>
        <FeatureSection data={featureSection} lang={lang} />
        <CustomerSection title={customers_heading.text} data={customerSection} />
      </Container>
      <Common lang={lang} />
      {Cookies.get('CogitoCookie') ? (
        undefined
      ) : (
        <CookieBanner
          descriptionText={cookie[0].primary.description_text.text}
          buttonText={cookie[0].primary.button_title.text}
        />
      )}
    </>
  );
};

export const query = graphql`
  query Index($lang: String!) {
    prismicHome(lang: { eq: $lang }) {
      data {
        subtitle {
          text
        }
        call_to_action {
          text
        }
        customers_heading {
          text
        }
        description {
          text
        }
        motto {
          text
        }
        popup_text {
          text
        }
        popup_title {
          text
        }
        body {
          ... on PrismicHomeBodyCustomer {
            slice_type
            primary {
              name {
                text
              }
              icon {
                alt
                localFile {
                  childImageSharp {
                    fixed(width: 110, height: 110) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              url {
                text
              }
            }
          }
          ... on PrismicHomeBodyFeature {
            slice_type
            primary {
              image {
                url
                alt
              }
              title {
                text
              }
              description {
                text
              }
              feature_description {
                slug
              }
            }
          }

          ... on PrismicHomeBodyUseCase {
            slice_type
            primary {
              description {
                text
              }
              title {
                text
              }
              icon {
                url
                alt
              }
              feature_description {
                slug
              }
            }
          }

          ... on PrismicHomeBodyCookie {
            slice_type
            primary {
              button_title {
                text
              }
              description_text {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;
