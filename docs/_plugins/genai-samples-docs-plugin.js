/**
 * Docusaurus plugin that discovers samples and generates per-sample doc pages.
 *
 * Copied from site/src/plugins/genai-samples-docs-plugin.ts with one change:
 * paths are resolved relative to a configurable `spokeRoot` option so the
 * plugin works both in the standalone site/ layout and when loaded by the hub.
 *
 * Options:
 *   spokeRoot — repo root relative to the Docusaurus working directory.
 *               Hub passes e.g. "spokes/openvino-genai".
 *               Defaults to ".." (original site/ layout).
 */
const { access, mkdir, opendir, writeFile } = require('fs/promises');
const path = require('path');

const LANGUAGE_TITLES = {
  c: 'C',
  cpp: 'C++',
  js: 'JavaScript',
  python: 'Python',
};

async function findSamples(samplesPath) {
  const samplesMap = {};

  for await (const dir of await opendir(samplesPath)) {
    const dirPath = path.join(samplesPath, dir.name);
    if (!dir.isDirectory()) {
      continue;
    }
    const language = dir.name;

    for await (const subdir of await opendir(dirPath)) {
      if (!subdir.isDirectory()) {
        continue;
      }
      if (!samplesMap[language]) {
        samplesMap[language] = [];
      }
      const hasReadme = await access(path.join(dirPath, subdir.name, 'README.md'))
        .then(() => true)
        .catch(() => false);

      const githubLink =
        `https://github.com/openvinotoolkit/openvino.genai/tree/master/samples/${language}/${subdir.name}`;

      samplesMap[language].push({
        language,
        languageTitle: LANGUAGE_TITLES[language] || language,
        name: subdir.name,
        hasReadme,
        githubLink,
      });
    }
  }
  return samplesMap;
}

async function generateSamplesDocs(samplesMap, docsSamplesPath, spokeRoot) {
  for (const [language, samples] of Object.entries(samplesMap)) {
    const languageDirPath = path.join(docsSamplesPath, language);
    const languageTitle = samples[0]?.languageTitle;
    await mkdir(languageDirPath, { recursive: true });
    await generateCategory(languageTitle, languageDirPath);
    for (const sample of samples) {
      await generateSampleDocFile(sample, languageDirPath, spokeRoot);
    }
  }
}

async function generateCategory(language, dirPath) {
  const content = {
    label: language,
    link: {
      type: 'generated-index',
      description: `OpenVINO GenAI ${language} samples`,
    },
  };

  await writeFile(path.join(dirPath, '_category_.json'), JSON.stringify(content, null, 2));
}

async function generateSampleDocFile(sample, dirPath, spokeRoot) {
  const sampleDocPath = path.join(dirPath, `${sample.name}.mdx`);

  const readmeImportContent = `
import SampleReadme from '@site/${spokeRoot}/samples/${sample.language}/${sample.name}/README.md';

<SampleReadme />`;

  const fallbackContent = `
# OpenVINO GenAI ${sample.languageTitle} Samples

Refer to the [${sample.languageTitle} ${sample.name} sample](${sample.githubLink}) in GitHub for more information about OpenVINO GenAI ${sample.languageTitle} API.
`;

  const content = `---
hide_title: true
sidebar_label: ${sample.name}
---
${sample.hasReadme ? readmeImportContent : fallbackContent}`;

  await writeFile(sampleDocPath, content);
}

module.exports = async function GenAISamplesDocsPlugin(_context, options) {
  const spokeRoot = options?.spokeRoot ?? '..';
  const samplesPath = path.join(spokeRoot, 'samples');
  const docsSamplesPath = path.join(spokeRoot, 'docs', 'samples');

  return {
    name: 'genai-samples-docs-plugin',
    async loadContent() {
      return findSamples(samplesPath);
    },
    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
    async extendCli(cli) {
      cli
        .command('generate-samples-docs')
        .description('Generate documentation pages for samples')
        .action(async () => {
          console.info('Generating samples documentation...');
          const samplesMap = await findSamples(samplesPath);
          await generateSamplesDocs(samplesMap, docsSamplesPath, spokeRoot);
          console.info('Done.');
        });
    },
  };
};
