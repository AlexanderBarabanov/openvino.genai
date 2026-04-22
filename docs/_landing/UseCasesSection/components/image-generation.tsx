import Button from '../../../_components/Button';
import { LanguageTabs, TabItemCpp, TabItemPython } from '../../../_components/LanguageTabs';
import CodeBlock from '@theme/CodeBlock';
import UseCaseCard from './UseCaseCard';

export const ImageGeneration = () => (
  <UseCaseCard>
    <UseCaseCard.Title>Image Generation Using Diffusers</UseCaseCard.Title>
    <UseCaseCard.Description>
      Create and modify images with diffusion models for art generation, product design,
      and creative applications using Stable Diffusion and similar architectures.
    </UseCaseCard.Description>
    <UseCaseCard.Features>
      <li>Support for text-to-image, image-to-image, and inpainting pipelines</li>
      <li>Control image generation by adjusting parameters (dimensions, iterations, etc.)</li>
      <li>Apply LoRA adapters and dynamically switch between them for artistic styles</li>
      <li>Generate multiple images per one request</li>
    </UseCaseCard.Features>
    <UseCaseCard.Code>
      <LanguageTabs>
        <TabItemPython>
          <CodeBlock language="python">{`import openvino_genai as ov_genai
from PIL import Image

pipe = ov_genai.Text2ImagePipeline(model_path, "CPU")
image_tensor = pipe.generate(prompt)

image = Image.fromarray(image_tensor.data[0])
image.save("image.bmp")`}</CodeBlock>
        </TabItemPython>
        <TabItemCpp>
          <CodeBlock language="cpp">{`#include "openvino/genai/image_generation/text2image_pipeline.hpp"

ov::genai::Text2ImagePipeline pipe(model_path, "CPU");
auto image = pipe.generate(prompt);`}</CodeBlock>
        </TabItemCpp>
      </LanguageTabs>
    </UseCaseCard.Code>
    <UseCaseCard.Actions>
      <Button label="Explore Use Case" link="use-cases/image-generation" variant="primary" />
      <Button label="View Code Samples" link="samples" variant="primary" outline />
    </UseCaseCard.Actions>
  </UseCaseCard>
);
