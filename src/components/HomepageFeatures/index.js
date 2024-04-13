import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comprehensive Fund Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Venture360 offers a comprehensive solution for fund managers, providing robust tools and features to streamline fund management processes from fundraising to reporting.
      </>
    ),
  },
  {
    title: 'Transparency and Efficiency',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With Venture360, investors and LPs gain complete transparency into their portfolios, empowering informed decision-making and fostering trust and confidence in investment strategies.
      </>
    ),
  },
  {
    title: 'Tailored Solutions for Companies',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Venture360 offers tailored solutions for companies backed by venture capital, providing specialized investor accounting and reporting packages to streamline investor relations and optimize business operations.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
