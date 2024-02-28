import React, { useState } from 'react';
import { NlpManager } from 'node-nlp';

// Load the pre-trained spaCy model with word vectors
const nlpModel = new NlpManager({ languages: ['en'] });

// Define the functional component
function SemanticSimilarityCalculator() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [similarityScore, setSimilarityScore] = useState(null);

    // Function to calculate semantic similarity
    function calculateSemanticSimilarity() {
        // Process the texts to get nlp.js Document objects
        const doc1 = nlpModel.createDocument(text1);
        const doc2 = nlpModel.createDocument(text2);
        
        // Compute the similarity between the documents
        const similarity = doc1.assessSimilarity(doc2);
        
        setSimilarityScore(similarity);
    }

    return (
        <div>
            <div>
                <label>Text 1:</label>
                <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} />
            </div>
            <div>
                <label>Text 2:</label>
                <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} />
            </div>
            <button onClick={calculateSemanticSimilarity}>Calculate Similarity</button>
            {similarityScore !== null && (
                <p>Semantic similarity score: {similarityScore}</p>
            )}
        </div>
    );
}

export default SemanticSimilarityCalculator;