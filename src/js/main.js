import '../css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const API_KEY = "54877624-db5c35cc993578690bbd7a10b";


const btn = document.querySelector("button");
const input = document.querySelector("input");
const loader = document.querySelector('.loader');
const gallery = document.querySelector(".gallery")

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});



btn.addEventListener("click", (e) => {
    e.preventDefault();
    loader.hidden = false;
    gallery.innerHTML = "";
    const q = input.value.trim();
    getImage(q)
        .then((data) => {
            if (data.totalHits === 0) {
                throw new Error("No images found");
            }
            
            const markup = data.hits
                .map((image) => {
                    return `
                    <li class="card">
                    <a href="${image.largeImageURL}">
                      <div class="image-wrapper">
                        <img src="${image.webformatURL}" alt="${image.tags}" width="360" heigth="200" />
                      </div>
                    </a>
                        <ul class="info">
                            <li><span>Likes</span> <br> ${image.likes}</li>
                            <li><span>Views</span> <br> ${image.views}</li>
                            <li><span>Comments</span> <br> ${image.comments}</li>
                            <li><span>Downloads</span> <br> ${image.downloads}</li>
                        </ul>
                    </li>
                    `
                }).join("");
            document.querySelector(".gallery").innerHTML = markup;
            lightbox.refresh();
        })
        .catch((error) => {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
        })
        .finally(() => {
            loader.hidden = true;
        })
    input.value = "";
})

function getImage(query) {
  const url =
    `https://pixabay.com/api/?key=${API_KEY}` +
    `&q=${query}` +
    `&image_type=photo` +
    `&orientation=horizontal` +
    `&safesearch=true`;

  return fetch(url).then(res => res.json());
}


