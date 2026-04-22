import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import { ComponentProps, ComponentType, JSX } from 'react';

import styles from './styles.module.css';

import Carousel from '../../../_components/Carousel';
import useScreenSize from '../../../_components/hooks/use-screen-size';

type PipelineItem = {
  title: string;
  icon: string;
  code: string;
};

const PIPELINES: PipelineItem[] = [
  {
    title: 'Text Generation API',
    icon: '📝',
    code: `ov_pipe = ov_genai.LLMPipeline("TinyLlama")
print(ov_pipe.generate("The Sun is yellow because"))`,
  },
  {
    title: 'Image Generation API',
    icon: '🖼️',
    code: `ov_pipe = ov_genai.Text2ImagePipeline("Flux")
image = ov_pipe.generate("Create beautiful Sun")`,
  },
  {
    title: 'Image Processing API',
    icon: '🖼️',
    code: `ov_pipe = ov_genai.VLMPipeline("LLaVA")
print(ov_pipe.generate("Describe images", images))`,
  },
  {
    title: 'Speech Recognition API',
    icon: '🔊',
    code: `ov_pipe = ov_genai.WhisperPipeline("whisper-base")
print(ov_pipe.generate(read_wav("sample.wav")))`,
  },
  {
    title: 'Speech Generation API',
    icon: '🔊',
    code: `ov_pipe = ov_genai.Text2SpeechPipeline("speecht5_tts")
result = ov_pipe.generate("Hello OpenVINO GenAI")`,
  },
];

function PipelineExample({ title, icon, code }: PipelineItem): JSX.Element {
  return (
    <div className={styles.pipelineExample}>
      <div className={styles.pipelineHeader}>
        <span>{icon}</span>
        <Heading as="h3" className={styles.pipelineTitle}>
          {title}
        </Heading>
      </div>
      <div>
        <CodeBlock language="python" className={styles.pipelineCode}>
          {code}
        </CodeBlock>
      </div>
    </div>
  );
}

export default function PipelinesCarousel({ className }: { className?: string }): JSX.Element {
  const { width } = useScreenSize();
  const slidesToShow = width < 780 ? 1 : width < 1160 ? 2 : 3;

  return (
    <div className={clsx('container', className)}>
      <Carousel
        slidesToShow={slidesToShow}
        slides={PIPELINES.map((props, idx) => (
          <PipelineExample key={`pipeline-${idx}`} {...props} />
        ))}
      />
    </div>
  );
}
