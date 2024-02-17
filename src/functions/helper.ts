
export function generateIndonesianDate(date: string): string {
    return new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function generateToHTML(text: string): string {
    return text.replace(/\n/g, "<br/>");
}