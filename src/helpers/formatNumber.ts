export const formatNumber = (number: number, decimals: number) => {
    return number.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}