import Heading from '@theme/Heading';
import Button from '../../_components/Button';
import PipelinesCarousel from './PipelinesCarousel';
import styles from './styles.module.css';

export const HeroSection = () => (
  <section className={styles.heroSection}>
    <Heading as="h1" className={styles.sectionTitle}>
      <span className={styles.genAITitle}>OpenVINO GenAI</span>
    </Heading>
    <div className={styles.sectionContent}>
      <p className={styles.subtitle}>Run Generative AI with ease</p>
      <p className={styles.description}>
        OpenVINO™ GenAI provides optimized pipelines for running generative AI models with maximum
        performance and minimal dependencies
      </p>
      <Button
        label="Get Started"
        link="getting-started/introduction"
        size="lg"
        variant="secondary"
        className={styles.getStartedButton}
      />
      <PipelinesCarousel className={styles.pipelinesCarousel} />
    </div>
  </section>
);
