import Button from '../../../_components/Button';
import { LanguageTabs, TabItemCpp, TabItemPython, TabItemJS } from '../../../_components/LanguageTabs';
import CodeBlock from '@theme/CodeBlock';
import UseCaseCard from './UseCaseCard';

export const TextRerank = () => (
  <UseCaseCard>
    <UseCaseCard.Title>Text Rerank for RAG</UseCaseCard.Title>
    <UseCaseCard.Description>
      Boost the relevance and accuracy of Retrieval-Augmented Generation (RAG) workflows
      by reranking retrieved documents with the TextRerankPipeline.
    </UseCaseCard.Description>
    <UseCaseCard.Features>
      <li>Reorder search results by semantic relevance to the query</li>
    </UseCaseCard.Features>
    <UseCaseCard.Code>
      <LanguageTabs>
        <TabItemPython>
          <CodeBlock language="python">{`import openvino_genai

pipeline = openvino_genai.TextRerankPipeline(model_path, "CPU", top_n=3)

rerank_result = pipeline.rerank(query, documents)

print("Reranked documents:")
for index, score in rerank_result:
  print(f"Document {index} (score: {score:.4f}): {documents[index]}")`}</CodeBlock>
        </TabItemPython>
        <TabItemCpp>
          <CodeBlock language="cpp">{`#include "openvino/genai/text_rerank_pipeline.hpp"

ov::genai::TextRerankPipeline pipe(model_path, "CPU");
auto result = pipe.rerank(query, documents, 3);`}</CodeBlock>
        </TabItemCpp>
        <TabItemJS>
          <CodeBlock language="javascript">{`const { TextRerankPipeline } = require('openvino-genai-node');

const pipe = new TextRerankPipeline(modelPath, 'CPU', { topN: 3 });
const result = await pipe.rerank(query, documents);`}</CodeBlock>
        </TabItemJS>
      </LanguageTabs>
    </UseCaseCard.Code>
    <UseCaseCard.Actions>
      <Button label="Explore Use Case" link="use-cases/text-rerank" variant="primary" />
      <Button label="View Code Samples" link="samples" variant="primary" outline />
    </UseCaseCard.Actions>
  </UseCaseCard>
);
