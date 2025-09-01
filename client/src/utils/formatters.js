/**
 * Formats a number as Indian Rupee (INR) currency.
 * @param {number} amount - The numerical amount to format.
 * @returns {string} - The formatted currency string (e.g., "₹1,920").
 */
export const formatCurrency = (amount) => {
  // Added a check to prevent errors with non-numeric values
  if (typeof amount !== 'number') {
    amount = 0;
  }
  
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};