const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const util = require('util');

// Configure AWS
AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_KEY'
});

const polly = new AWS.Polly();

// Map language codes to Polly voices
const voiceMap = {
    'es': 'Lucia',
    'fr': 'Lea',
    'de': 'Vicki',
    'it': 'Bianca',
    'ja': 'Mizuki',
    'zh': 'Zhiyu',
    'ko': 'Seoyeon',
    'ru': 'Tatyana',
    'me': 'Nada' // Using Serbian voice for Montenegrin
};

// Read the language service file
const content = fs.readFileSync('../src/app/services/language.service.ts', 'utf8');

// Extract the content object using regex
const contentMatch = content.match(/private content: {([^}]*)} = {([\s\S]*?)};/);
const languageData = eval('({' + contentMatch[2] + '})');

async function generateAudio(text, language, category, key) {
    const voice = voiceMap[language];
    if (!voice) {
        console.log(`No voice mapping for language: ${language}`);
        return;
    }

    const params = {
        Text: text.split('(')[0].trim(), // Remove pronunciation guides
        OutputFormat: 'mp3',
        VoiceId: voice
    };

    try {
        const data = await polly.synthesizeSpeech(params).promise();
        const outputDir = path.join(__dirname, '..', 'src', 'assets', language, category);
        fs.mkdirSync(outputDir, { recursive: true });
        
        const outputPath = path.join(outputDir, `${key}.mp3`);
        fs.writeFileSync(outputPath, data.AudioStream);
        console.log(`Generated: ${outputPath}`);
    } catch (err) {
        console.error(`Error generating audio for ${language}/${category}/${key}:`, err);
    }
}

async function main() {
    for (const [langCode, langData] of Object.entries(languageData)) {
        // Generate words
        for (const [key, value] of Object.entries(langData.words)) {
            await generateAudio(value, langCode, 'words', key);
        }

        // Generate numbers
        for (const [key, value] of Object.entries(langData.numbers)) {
            await generateAudio(value, langCode, 'numbers', key);
        }

        // Generate sentences
        for (const [key, value] of Object.entries(langData.sentences)) {
            await generateAudio(value, langCode, 'sentences', key);
        }
    }
}

// Add small delay between requests to avoid rate limiting
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

main().then(() => {
    console.log('Audio generation complete!');
}).catch(err => {
    console.error('Error:', err);
});
