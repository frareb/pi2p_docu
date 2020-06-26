import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>For entomologists</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        The PI2P project is a first step towards setting up an insect pests and climate observatory in the intertropical zone. Whether you are a farmer, technician or scientist, if you are monitoring insect pest populations, you can help strengthen the network. In addition we can provide you with sensors or show you how to build them.
      </>
    ),
  },
  {
    title: <>For data scientists</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        We collect real-time data on insects and climate variables. If you have skills in data visualization, you can help us with new representations. If you have skills in data analysis, browse the website, all the raw data is available, so taht you can contribute to a better understanding of the insect response to climate change in the intertropical zone.
      </>
    ),
  },
  {
    title: <>For makers and developers</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Our data is acquired via sensors connected to an Arduino type microcontroller (PI2Puino) which transmits its information by radio to a Raspberry Pi type gateway relaying the information to a Node.js server. Whether you are a maker or a developer, your help is welcome to design new tools or improve information transfer techniques.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Predicting Insect Pest Phenology">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
