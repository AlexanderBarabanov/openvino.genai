import Button from '../../../_components/Button';
import { LanguageTabs, TabItemCpp, TabItemPython, TabItemJS } from '../../../_components/LanguageTabs';
import CodeBlock from '@theme/CodeBlock';
import UseCaseCard from './UseCaseCard';

export const SpeechRecognition = () => (
  <UseCaseCard>
    <UseCaseCard.Title>Speech Recognition Using Whisper</UseCaseCard.Title>
    <UseCaseCard.Description>
      Convert speech to text using Whisper models for video transcription, meeting notes,
      multilingual audio content processing, and accessibility applications.
    </UseCaseCard.Description>
    <UseCaseCard.Features>
      <li>Translate foreign language speech directly to English text</li>
      <li>Transcribe audio in multiple languages with automatic language detection</li>
      <li>Process long-form audio content (&gt;30 seconds) efficiently</li>
      <li>Generate precise timestamps for synchronized subtitles and captions</li>
      <li>Generate word-level timestamps for detailed transcription</li>
    </UseCaseCard.Features>
    <UseCaseCard.Code>
      <LanguageTabs>
        <TabItemPython>
          <CodeBlock language="python">{`import openvino_genai as ov_genai
import librosa

raw_speech, _ = librosa.load('sample.wav', sr=16000)

pipe = ov_genai.WhisperPipeline(model_path, "CPU")
result = pipe.generate(raw_speech.tolist(), max_new_tokens=100)
print(result)`}</CodeBlock>
        </TabItemPython>
        <TabItemCpp>
          <CodeBlock language="cpp">{`#include "openvino/genai/whisper_pipeline.hpp"

ov::genai::WhisperPipeline pipe(model_path, "CPU");
auto result = pipe.generate(raw_speech,
    ov::genai::max_new_tokens(100));
std::cout << result;`}</CodeBlock>
        </TabItemCpp>
        <TabItemJS>
          <CodeBlock language="javascript">{`const { WhisperPipeline } = require('openvino-genai-node');

const pipe = new WhisperPipeline(modelPath, 'CPU');
const result = await pipe.generate(
  rawSpeech, { max_new_tokens: 100 });
console.log(result);`}</CodeBlock>
        </TabItemJS>
      </LanguageTabs>
    </UseCaseCard.Code>
    <UseCaseCard.Actions>
      <Button label="Explore Use Case" link="use-cases/speech-recognition" variant="primary" />
      <Button label="View Code Samples" link="samples" variant="primary" outline />
    </UseCaseCard.Actions>
  </UseCaseCard>
);
