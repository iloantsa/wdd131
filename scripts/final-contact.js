const destinations = [
    {
        name: "Andasibe",
        region: "Alaotra-Mangoro"
    },
    {
        name: "Isalo National Park",
        region: "Ihorombe"
    },
    {
        name: "Nosy Iranja",
        region: "Nosy Be"
    },
    {
        name: "Lake Tritriva",
        region: "Antsirabe"
    }
];

const container = document.querySelector("#destination-options");

destinations.forEach((destination, index) => {
    container.innerHTML += `
        <div>
            <input
                type="radio"
                id="destination${index}"
                name="trip"
                value="${destination.name}"
            >
            <label for="destination${index}">
                ${destination.name} (${destination.region})
            </label>
        </div>
    `;
});