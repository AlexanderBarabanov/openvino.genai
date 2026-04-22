import Button from '../../../_components/Button';
import { LanguageTabs, TabItemCpp, TabItemPython, TabItemJS } from '../../../_components/LanguageTabs';
import CodeBlock from '@theme/CodeBlock';
import UseCaseCard from './UseCaseCard';

export const SpeechGeneration = () => (
  <UseCaseCard>
    <UseCaseCard.Title>Speech Generation Using SpeechT5</UseCaseCard.Title>
    <UseCaseCard.Description>
      Convert text to speech using SpeechT5 TTS models.
    </UseCaseCard.Description>
    <UseCaseCard.Features>
      <li>Generate natural and expressive speech from text prompts</li>
      <li>Use speaker embeddings for personalized voice synthesis</li>
    </UseCaseCard.Features>
    <UseCaseCard.Code>
      <LanguageTabs>
        <TabItemPython>
          <CodeBlock language="python">{`import openvino_genai
import soundfile as sf

pipeline = openvino_genai.Text2SpeechPipeline(model_path, "CPU")

result = pipeline.generate("Hello OpenVINO GenAI")
speech = result.speeches[0]
sf.write("output_audio.wav", speech.data[0], samplerate=16000)`}</CodeBlock>
        </TabItemPython>
        <TabItemCpp>
          <CodeBlock language="cpp">{`#include "openvino/genai/text2speech_pipeline.hpp"

ov::genai::Text2SpeechPipeline pipe(model_path, "CPU");
auto result = pipe.generate("Hello OpenVINO GenAI");`}</CodeBlock>
        </TabItemCpp>
        <TabItemJS>
          <CodeBlock language="javascript">{`const { Text2SpeechPipeline } = require('openvino-genai-node');

const pipe = new Text2SpeechPipeline(modelPath, 'CPU');
const result = await pipe.generate("Hello OpenVINO GenAI");`}</CodeBlock>
        </TabItemJS>
      </LanguageTabs>
    </UseCaseCard.Code>
    <UseCaseCard.Actions>
      <Button label="Explore Use Case" link="use-cases/speech-generation" variant="primary" />
      <Button label="View Code Samples" link="samples" variant="primary" outline />
    </UseCaseCard.Actions>
  </UseCaseCard>
);
