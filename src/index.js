export const numberFormat = (num) => {
    return Math.abs(num) > 999999999
        ? Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + "B"
        : Math.abs(num) > 999999
            ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M"
            : Math.abs(num) > 999
                ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
                : Math.sign(num) * Math.abs(num);
}