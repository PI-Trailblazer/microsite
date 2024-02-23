import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Predictive Analytics",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Trailblazer empowers DMOs with advanced predictive analytics, allowing
        them to foresee tourism trends and make informed decisions in
        infrastructure, marketing, and sustainability practices.
      </>
    ),
  },
  {
    title: "Personalized Travel Experiences",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The system analyzes tourists' feedback to enhance service quality and
        personalize travel experiences. A recommendation engine curates
        activities tailored to individual interests, fostering seamless
        exploration of new experiences.
      </>
    ),
  },
  {
    title: "Sustainable Tourism Development",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        DMOs are equipped with sophisticated analytical tools for sustainable
        tourism development, ensuring a balance between tourism growth and
        environmental conservation.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
