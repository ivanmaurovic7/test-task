export const getColors = async () => {
    try {
        const colors = await fetch('http://localhost:5000/colors');
        const colorsData = await colors.json();
        return colorsData;
    } catch (error) {
        return error;
    }
};