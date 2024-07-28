export const cleanInputFields = async (selector: string) => {
    const inputs = document.querySelectorAll(selector) as NodeListOf<HTMLInputElement>;
    if (inputs.length > 0) {
        inputs.forEach(input => input.value = '');
    }
}