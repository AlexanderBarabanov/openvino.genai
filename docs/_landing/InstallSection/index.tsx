import Button from '../../_components/Button';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

export const InstallSection = () => (
  <section className={styles.installSection}>
    <Heading as="h2" className={styles.sectionTitle}>
      Install OpenVINO™ GenAI
    </Heading>
    <div className={styles.sectionContent}>
      <p className={styles.sectionDescription}>
        Unlock the power of OpenVINO GenAI™ for your projects.
        <br />
        Get started with seamless installation now!
      </p>

      <Button
        label="Install"
        link="getting-started/installation"
        size="large"
        variant="primary"
      />

      <div className={styles.quickInstall}>
        <Heading as="h3">Quick Installation from PyPi</Heading>
        <CodeBlock language="bash" className={styles.quickInstallCommand}>
          python -m pip install openvino-genai
        </CodeBlock>
      </div>

      <div className={styles.os}>
        <Heading as="h3">Operating Systems</Heading>
        <div className={styles.osList}>
          <div className={styles.osItem}>
            <span className={styles.osItemIcon}>🐧</span>
            <span className={styles.osItemTitle}>Linux</span>
          </div>
          <div className={styles.osItem}>
            <span className={styles.osItemIcon}>🪟</span>
            <span className={styles.osItemTitle}>Windows</span>
          </div>
          <div className={styles.osItem}>
            <span className={styles.osItemIcon}>🍎</span>
            <span className={styles.osItemTitle}>macOS</span>
          </div>
        </div>
      </div>

      <Admonition type="info" title="Need more details?">
        Refer to the <Link to="getting-started/introduction">Getting Started Guide</Link> to
        learn more about OpenVINO GenAI.
      </Admonition>
    </div>
  </section>
);
