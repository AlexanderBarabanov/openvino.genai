import Button from '../../../_components/Button';
import { LanguageTabs, TabItemCpp, TabItemPython, TabItemJS } from '../../../_components/LanguageTabs';
import CodeBlock from '@theme/CodeBlock';
import UseCaseCard from './UseCaseCard';

export const TextEmbedding = () => (
  <UseCaseCard>
    <UseCaseCard.Title>Semantic Search using Text Embedding</UseCaseCard.Title>
    <UseCaseCard.Description>
      Generate vector representations for text using embedding models. Useful for
      semantic search, retrieval augmented generation (RAG).
    </UseCaseCard.Description>
    <UseCaseCard.Features>
      <li>Select pooling strategies (CLS, MEAN)</li>
      <li>Improve retrieval performance with L2 normalization</li>
      <li>Provide embed and query instructions</li>
      <li>Batch embedding for multiple documents</li>
    </UseCaseCard.Features>
    <UseCaseCard.Code>
      <LanguageTabs>
        <TabItemPython>
          <CodeBlock language="python">{`import openvino_genai as ov_genai

pipeline = ov_genai.TextEmbeddingPipeline(
  models_path, "CPU",
  pooling_type=ov_genai.TextEmbeddingPipeline.PoolingType.MEAN,
  normalize=True)

docs_embeddings = pipeline.embed_documents(documents)
query_embeddings = pipeline.embed_query("What is the capital?")`}</CodeBlock>
        </TabItemPython>
        <TabItemCpp>
          <CodeBlock language="cpp">{`#include "openvino/genai/text_embedding_pipeline.hpp"

ov::genai::TextEmbeddingPipeline pipe(model_path, "CPU");
auto embeddings = pipe.embed_documents(documents);`}</CodeBlock>
        </TabItemCpp>
        <TabItemJS>
          <CodeBlock language="javascript">{`const { TextEmbeddingPipeline } = require('openvino-genai-node');

const pipe = new TextEmbeddingPipeline(modelPath, 'CPU');
const embeddings = await pipe.embedDocuments(documents);`}</CodeBlock>
        </TabItemJS>
      </LanguageTabs>
    </UseCaseCard.Code>
    <UseCaseCard.Actions>
      <Button label="Explore Use Case" link="use-cases/text-embedding" variant="primary" />
      <Button label="View Code Samples" link="samples" variant="primary" outline />
    </UseCaseCard.Actions>
  </UseCaseCard>
);
