import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Troubleshooting & Fixes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Solve the most common feed errors instantly. Fix GTINs, images, and price mismatch issues.
      </>
    ),
    href: '/docs/troubleshooting',
  },
  {
    title: 'Tracking & Signals',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Secure your data with Server-Side accuracy. Setup CAPI, verify pixel quality, and debug conversions.
      </>
    ),
    href: '/docs/tracking-signals',
  },
  {
    title: 'Profit & Strategy',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Stop bidding on revenue. Bid on profit. Calculate COGS and set up profit-based bidding.
      </>
    ),
    href: '/docs/profit-strategy',
  },
  {
    title: 'Agency & Partners',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Scale your client operations. White label the dashboard and manage multiple client accounts.
      </>
    ),
    href: '/docs/agency-partners',
  },
];

function Feature({ title, Svg, description, href }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={href}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={href}>{title}</Link>
        </Heading>
        <p>{description}</p>
        <Link className="button button--secondary button--sm" to={href}>
          Explore →
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
