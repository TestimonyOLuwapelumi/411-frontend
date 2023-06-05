import DOMPurify from 'dompurify';

// Check if `process` is defined before using it
const isBrowser = typeof process !== 'undefined' && process?.browser;

/**
 * Sanitize markup or text when used inside dangerouslySetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
  return isBrowser ? DOMPurify.sanitize(content) : content;
};

/**
 * Get Singular or plural text.
 *
 * @param {Int} count Count.
 * @param {String} text Text.
 *
 * @returns {string} Singular or plural form of text.
 */
export const getSingularOrPluralText = (count, text) => {
  return count > 1 ? `${text}s` : text;
};
