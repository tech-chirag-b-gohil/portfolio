function parseMonthYear(str) {
  const [monthStr, yearStr] = str.split(' ');
  return new Date(`${monthStr} 1, ${yearStr}`);
};

export default function durationCalculator(startDate, endDate) {
    const start = parseMonthYear(startDate);
    const end = endDate ? parseMonthYear(endDate) : new Date(); // if endDate is null, use today

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth() + 1;

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} mon${months > 1 ? 's' : ''}` : '';

    return [yearStr, monthStr].filter(Boolean).join(' ').trim();
};