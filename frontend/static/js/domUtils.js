export async function loadView(view) {
    try {
        const response = await fetch(`views/${view}.html`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const html = await response.text();
        document.getElementById('contenido').innerHTML = html;
    } catch (error) {
        console.error('Error al cargar la vista:', error);
        document.getElementById('contenido').innerHTML = '<p>Error al cargar la vista.</p>';
    }
}

export async function showCard(cardPromise) {
    const { card } = await cardPromise;
    const cardContainer = document.getElementById('tablaBingo');

    if (!cardContainer) {
        console.error("No se encontró el contenedor de la tabla.");
        return;
    }

    let cont = 1;

    card.forEach((row, fIndex) => {
        row.forEach((value, i) => {
            const imageDiv = cardContainer.querySelector(`.div${i + cont}`);
            if (!imageDiv) return;

            if (value !== "FREE" && value !== "X") {
                let img = imageDiv.querySelector(".number");
                if (img) img.remove();

                img = document.createElement('img');
                img.src = `../static/img/nums/${value}.webp`;
                img.loading = 'lazy';
                img.classList.add("item", "number");
                
                imageDiv.appendChild(img);
            } else if (value === "X") {
                const wild = imageDiv.querySelector('.wild');
                if (wild && !wild.classList.contains("active")) {
                    wild.classList.add("active");
                    console.log("X");
                }
            }
        });
        cont += 5;
    });
}

export async function showNumber(numberPromise) {
    var number = await numberPromise;
    console.log(number);
}

export async function showBinguito(binguitoPromise) {
    var binguito = await binguitoPromise;
    var binguitoDiv = document.querySelector('.binguito');
    if (binguito["minibingo"]) {
        binguitoDiv.classList.add('active');
        setTimeout(() => binguitoDiv.classList.remove('active'), 9000)
    }
}

export async function showBingo(bingoPromise) {
    var bingo = await bingoPromise;
    if (bingo["bingo"]) {
        loadView('resultados');
        document.getElementById('logo').remove();
        document.body.style.backgroundImage = "url('../static/img/bingo.png')";
    }
}