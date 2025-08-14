import html2canvas from "html2canvas";
import replaceOklch from "./replaceOklch.ts";


export const downloadTable = async (element: HTMLElement, filename = "table.png") => {
    if (!element) return;


    try {
        replaceOklch(element);
        const canvas = await html2canvas(element, { scale: 2 ,backgroundColor: "#ffffff" },);
        const image = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
        link.href = image;
        link.download = filename;
        link.click();
    } catch (error) {
        console.error("Error capturing table:", error);
    }
}

