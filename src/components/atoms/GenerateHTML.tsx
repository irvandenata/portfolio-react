export const GenerateHTML = ({ item }: { item: string }) => {
    return <div dangerouslySetInnerHTML={{ __html: item }} />;
}

export default GenerateHTML;