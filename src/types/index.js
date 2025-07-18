// This file is for documentation or runtime validation (optional, using JS)

/**
 * @typedef {Object} AnalysisFactor
 * @property {string} name
 * @property {number} score
 * @property {'positive' | 'negative' | 'neutral'} impact
 */

/**
 * @typedef {Object} AnalysisResult
 * @property {number} credibilityScore
 * @property {'real' | 'fake'} classification
 * @property {number} confidence
 * @property {AnalysisFactor[]} factors
 * @property {string} summary
 * @property {string} timestamp
 */

/**
 * @typedef {Object} NewsArticle
 * @property {string} [title]
 * @property {string} content
 * @property {string} [url]
 * @property {string} [source]
 */
