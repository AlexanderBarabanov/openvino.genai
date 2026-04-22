import styles from './styles.module.css';

import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import { TextGeneration } from './components/text-generation';
import { ImageProcessing } from './components/image-processing';
import { ImageGeneration } from './components/image-generation';
import { VideoGeneration } from './components/video-generation';
import { SpeechRecognition } from './components/speech-recognition';
import { SpeechGeneration } from './components/speech-generation';
import { TextEmbedding } from './components/text-embedding';
import { TextRerank } from './components/text-rerank';

export const UseCasesSection = () => (
  <section className={styles.useCasesSection}>
    <Heading as="h2" className={styles.sectionTitle}>
      Use Cases
    </Heading>
    <div className={styles.sectionContent}>
      <TextGeneration />
      <ImageProcessing />
      <ImageGeneration />
      <VideoGeneration />
      <SpeechRecognition />
      <SpeechGeneration />
      <TextEmbedding />
      <TextRerank />
    </div>
    <div className={styles.useCasesFooter}>
      <strong>Looking for more?</strong>&nbsp;See all{' '}
      <Link to="use-cases">supported use cases</Link>.
    </div>
  </section>
);
