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
    let cont = 1;
    card.forEach((row, fIndex) => {
        row.forEach((value, i) => {
            let imageDiv = cardContainer.getElementsByClassName(`div${i + cont}`)[0];
            if (value !== "FREE" && value !== "X") {
                if (imageDiv) {
                    let img = imageDiv.getElementsByClassName("number")[0]
                    if (img)
                        img.remove();
                    img = document.createElement('img');
                    img.src = `../static/img/nums/${value}.webp`;
                    img.loading = 'lazy';
                    img.classList.add("item");
                    img.classList.add("number");
                    imageDiv.appendChild(img);
                }
            }
            else if (value === "X") {
                if (imageDiv) {
                    let wild = imageDiv.getElementsByClassName('wild')[0];
                    if (!wild.classList.contains("active"))
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