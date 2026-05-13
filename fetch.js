async function searchCharacter() {

    try {
         const input = document
            .getElementById("search")
            .value
            .toLowerCase();
        const res = await fetch(
            "https://hp-api.onrender.com/api/characters"
        );

        const data = await res.json();

        const character = data.find(c =>
            c.name.toLowerCase().includes(input)
        );

        const result = document.getElementById("result");

        if (character) {

            result.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" width="200">
            `;

        } else {

            result.innerHTML = `
                <p>Character not found</p>
            `;

        }

    } catch (error) {

        console.log(error);

    }

}

