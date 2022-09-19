import './styles/style.scss';
import 'bootstrap';

const getImage = 'https://dog.ceo/api/breeds/image/random/15';

async function getBreedImage() {
    await fetch(getImage).then(function (response) {
        return response.json();
    }).then(function(data){
        for (const breed in data.message) {
            displayImage(data.message[breed], breed)
        }
    }).catch(function(error) {
        console.log(error)
    });
}

getBreedImage();

function displayImage(url, id) {
     const img = new Image();
     img.src = url;
     img.setAttribute('id', id);
     img.classList.add("img-fluid")
     img.classList.add("rounded")
     let image_div = document.getElementById("image_div");
     image_div.appendChild(img)
     img.addEventListener("click", checkClickEvents)
}

// var favouriteImagesArray = []; 

function checkClickEvents() {
    let favouriteImagesArray;
    let confirmAction = confirm("Are you sure to add this breed to your Favourites?");
    if (confirmAction) {
        if (localStorage.getItem('favouriteImages') === null) {
            favouriteImagesArray = [];
        } else {
            favouriteImagesArray = JSON.parse(localStorage.getItem('favouriteImages'));
        }
        favouriteImagesArray.push(this.src)
        localStorage.setItem("favouriteImages", JSON.stringify(favouriteImagesArray))
        this.remove();
        alert("You can view this breed in your Favourites now!");
        let imgs = document.getElementsByClassName("img-fluid")
        console.log(imgs.length)
        if (imgs.length === 0) {
            getBreedImage();
        }
    } else {
        alert("Action canceled");
    }
}
