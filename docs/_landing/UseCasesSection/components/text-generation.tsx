import Button from '../../../_components/Button';
import { LanguageTabs, TabItemCpp, TabItemPython, TabItemJS } from '../../../_components/LanguageTabs';
import CodeBlock from '@theme/CodeBlock';
import UseCaseCard from './UseCaseCard';

export const TextGeneration = () => (
  <UseCaseCard>
    <UseCaseCard.Title>Text Generation Using LLMs</UseCaseCard.Title>
    <UseCaseCard.Description>
      Create chatbots, text summarization, content generation, and question-answering applications
      with state-of-the-art Large Language Models (LLMs).
    </UseCaseCard.Description>
    <UseCaseCard.Features>
      <li>Control output with different generation parameters (sampling, temperature, etc.)</li>
      <li>Optimize for conversational scenarios by using chat mode</li>
      <li>Apply LoRA adapters and dynamically switch between them without recompilation</li>
      <li>Accelerate generation using draft models via Speculative Decoding</li>
    </UseCaseCard.Features>
    <UseCaseCard.Code>
      <LanguageTabs>
        <TabItemPython>
          <CodeBlock language="python">{`import openvino_genai as ov_genai

pipe = ov_genai.LLMPipeline(model_path, "CPU")
print(pipe.generate("What is OpenVINO?", max_new_tokens=100))`}</CodeBlock>
        </TabItemPython>
        <TabItemCpp>
          <CodeBlock language="cpp">{`#include "openvino/genai/llm_pipeline.hpp"

int main() {
    ov::genai::LLMPipeline pipe(model_path, "CPU");
    std::cout << pipe.generate("What is OpenVINO?",
        ov::genai::max_new_tokens(100));
}`}</CodeBlock>
        </TabItemCpp>
        <TabItemJS>
          <CodeBlock language="javascript">{`const { LLMPipeline } = require('openvino-genai-node');

const pipe = new LLMPipeline(modelPath, 'CPU');
const result = await pipe.generate(
  'What is OpenVINO?', { max_new_tokens: 100 });
console.log(result);`}</CodeBlock>
        </TabItemJS>
      </LanguageTabs>
    </UseCaseCard.Code>
    <UseCaseCard.Actions>
      <Button label="Explore Use Case" link="use-cases/text-generation" variant="primary" />
      <Button label="View Code Samples" link="samples" variant="primary" outline />
    </UseCaseCard.Actions>
  </UseCaseCard>
);
