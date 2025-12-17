import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Book a Ride Easily',
    imgSrc: '/img/img1.png', // ✅ PNG path
    description: (
      <>
        Learn step-by-step how to book a bike, auto, or cab using the Rapido app.
        This guide helps first-time users book rides without confusion.
      </>
    ),
  },
  {
    title: 'Common Issues & Fixes',
    imgSrc: '/img/undraw_docusaurus_tree.svg', // ✅ SVG can still be used as <img>
    description: (
      <>
        Facing issues like location not detected, no riders available,
        or booking failure? Find quick solutions in our troubleshooting guide.
      </>
    ),
  },
  {
    title: 'Payments & Support',
    imgSrc: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Understand payment options, refund process, and how to contact
        Rapido customer support when you need help.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
