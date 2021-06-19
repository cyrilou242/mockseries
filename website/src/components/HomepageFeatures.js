import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Intuitive',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build synthetic timeseries at the speed of thought.
          Add trend, noise and seasonality. Generate and iterate quickly.
      </>
    ),
  },
  {
    title: 'Here to help',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          <b>mockseries</b> provides opiniated helpers so that you don't waste your time on dates and plots.
        Go fast with high-level components. Go deep by extending the low-level interfaces.
      </>
    ),
  },
  {
    title: 'Light and fast',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Numpy is the only dependency. All embarassingly parallel computations are fast thanks to array operations.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
