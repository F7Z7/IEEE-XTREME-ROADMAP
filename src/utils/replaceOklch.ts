function replaceOklch(element: HTMLElement) {
    const elements = element.querySelectorAll<HTMLElement>("*");
    elements.forEach(el => {
        const styles = window.getComputedStyle(el);

        ["color", "backgroundColor", "borderColor"].forEach(prop => {
            const val = styles[prop as keyof CSSStyleDeclaration] as string;
            if (val.includes("oklch")) {
                // Replace with an approximate safe color
                el.style[prop as any] = "#000"; // or "#fff" depending on prop
            }
        });
    });
}
export default replaceOklch