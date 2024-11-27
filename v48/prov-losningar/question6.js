// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

const photos = document.querySelector(".photos");

async function getPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  const dataFirst10 = data.slice(0, 10);

  //const dataFirst10 = data.filter((photo, index) => { return index < 10 })

  dataFirst10.forEach((photo) => {
    const img = document.createElement("img");
    img.setAttribute("src", photo.thumbnailUrl);
    img.addEventListener("click", () => {
      alert(photo.title);
    });

    photos.appendChild(img);
  });
}

getPhotos();
