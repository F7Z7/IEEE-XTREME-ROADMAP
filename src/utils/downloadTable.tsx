import html2canvas from "html2canvas";


export const downloadTableAsImage = async (element: HTMLElement, filename = "table.png") => {
    if (!element) return;


    try {
        const canvas = await html2canvas(element, { scale: 2 });
        const image = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
        link.href = image;
        link.download = filename;
        link.click();
    } catch (error) {
        console.error("Error capturing table:", error);
    }
}

