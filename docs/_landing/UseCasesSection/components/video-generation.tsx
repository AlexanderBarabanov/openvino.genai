import Button from '../../../_components/Button';
import { LanguageTabs, TabItemCpp, TabItemPython } from '../../../_components/LanguageTabs';
import CodeBlock from '@theme/CodeBlock';
import UseCaseCard from './UseCaseCard';

export const VideoGeneration = () => (
  <UseCaseCard>
    <UseCaseCard.Title>Video Generation Using Diffusers</UseCaseCard.Title>
    <UseCaseCard.Description>
      Create videos with LTX-Video model using a diffusion-based generation pipeline
      to produce high-quality clips for creative storytelling and rapid visual prototyping.
    </UseCaseCard.Description>
    <UseCaseCard.Features>
      <li>Support for text-to-video pipeline</li>
      <li>Control video generation by adjusting parameters (dimensions, iterations, etc.)</li>
      <li>Generate multiple videos per one request</li>
    </UseCaseCard.Features>
    <UseCaseCard.Code>
      <LanguageTabs>
        <TabItemPython>
          <CodeBlock language="python">{`import openvino_genai as ov_genai

pipe = ov_genai.Text2VideoPipeline(model_path, "CPU")
video = pipe.generate(prompt).video`}</CodeBlock>
        </TabItemPython>
        <TabItemCpp>
          <CodeBlock language="cpp">{`#include "openvino/genai/image_generation/text2video_pipeline.hpp"

ov::genai::Text2VideoPipeline pipe(model_path, "CPU");
auto result = pipe.generate(prompt);`}</CodeBlock>
        </TabItemCpp>
      </LanguageTabs>
    </UseCaseCard.Code>
    <UseCaseCard.Actions>
      <Button label="Explore Use Case" link="use-cases/video-generation" variant="primary" />
      <Button label="View Code Samples" link="samples" variant="primary" outline />
    </UseCaseCard.Actions>
  </UseCaseCard>
);
