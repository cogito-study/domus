import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Container } from '../components/container';
import {
  CustomerSection,
  FeatureSection,
  HeroSection,
  UseCaseSection,
} from '../components/sections';
import SEO from '../components/SEO';
import { CookieBanner } from '../components/cookie-banner';
import Cookies from 'js-cookie';

const Index: FunctionComponent<{ data: any; lang: any }> = ({ data, lang }) => {
  const { motto, description, customers_heading, popup_text, popup_title } = data.prismicHome.data;
  const slices = data.prismicHome.data.body;
  const useCaseSection = slices.filter((slice) => slice.slice_type === 'use_case');
  const featureSection = slices.filter((slice) => slice.slice_type === 'feature');
  const customerSection = slices.filter((slice) => slice.slice_type === 'customer');
  // const featureSection = slices.filter((slice) => slice.slice_type === 'feature');

  const cookie = slices.filter((slice) => slice.slice_type === 'cookie');

  console.log(useCaseSection);
  return (
    <>
      <SEO title="home" />
      <Container lang={lang}>
        <HeroSection
          motto={motto.text}
          description={description.text}
          popupTitle={popup_title.text}
          popupText={popup_text.text}
        />
      </Container>
      <UseCaseSection data={useCaseSection} />

      <Container>
        <FeatureSection data={featureSection} />
        <CustomerSection title={customers_heading.text} data={customerSection} />
      </Container>
      {Cookies.get('CogitoCookie') ? (
        undefined
      ) : (
        <CookieBanner
          descriptionText={cookie.primary.description_text.text}
          buttonText={cookie.primary.button_title.text}
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
              blog_post {
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
              blog_post {
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
