import Button from '../../../_components/Button';
import { LanguageTabs, TabItemCpp, TabItemPython, TabItemJS } from '../../../_components/LanguageTabs';
import CodeBlock from '@theme/CodeBlock';
import UseCaseCard from './UseCaseCard';

export const ImageProcessing = () => (
  <UseCaseCard>
    <UseCaseCard.Title>Image Processing Using VLMs</UseCaseCard.Title>
    <UseCaseCard.Description>
      Analyze and describe images with Vision Language Models (VLMs) to build AI assistants
      and tools for document review, medical analysis, and visual content understanding.
    </UseCaseCard.Description>
    <UseCaseCard.Features>
      <li>Process single or multiple images in a single prompt with detailed text descriptions</li>
      <li>Optimize for conversational scenarios by using chat mode</li>
      <li>Control output with different generation parameters (sampling, temperature, etc.)</li>
    </UseCaseCard.Features>
    <UseCaseCard.Code>
      <LanguageTabs>
        <TabItemPython>
          <CodeBlock language="python">{`import openvino_genai as ov_genai

pipe = ov_genai.VLMPipeline(model_path, "CPU")
result = pipe.generate(prompt, images=images, max_new_tokens=100)
print(result.texts[0])`}</CodeBlock>
        </TabItemPython>
        <TabItemCpp>
          <CodeBlock language="cpp">{`#include "openvino/genai/visual_language/pipeline.hpp"

ov::genai::VLMPipeline pipe(model_path, "CPU");
auto result = pipe.generate(prompt,
    ov::genai::images(images),
    ov::genai::max_new_tokens(100));
std::cout << result.texts[0];`}</CodeBlock>
        </TabItemCpp>
        <TabItemJS>
          <CodeBlock language="javascript">{`const { VLMPipeline } = require('openvino-genai-node');

const pipe = new VLMPipeline(modelPath, 'CPU');
const result = await pipe.generate(prompt,
  { images, max_new_tokens: 100 });
console.log(result.texts[0]);`}</CodeBlock>
        </TabItemJS>
      </LanguageTabs>
    </UseCaseCard.Code>
    <UseCaseCard.Actions>
      <Button label="Explore Use Case" link="use-cases/image-processing" variant="primary" />
      <Button label="View Code Samples" link="samples" variant="primary" outline />
    </UseCaseCard.Actions>
  </UseCaseCard>
);
