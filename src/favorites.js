import './styles/style.scss';
import 'bootstrap';

displayFavouriteImages();

function displayFavouriteImages() { 
    var favouriteImagesArray = JSON.parse(localStorage.getItem("favouriteImages"));
    for (var i in favouriteImagesArray) {
        const img = new Image();
        img.src = favouriteImagesArray[i];
        img.classList.add("img-fluid")
        img.classList.add("rounded")
        img.setAttribute("id", i)
        let image_div = document.getElementById("image_div");
        image_div.appendChild(img)
        img.addEventListener("click", checkClickEvents)
    }
 }

function checkClickEvents() {
    var favouriteImagesArray = JSON.parse(localStorage.getItem("favouriteImages"));
    let confirmAction = confirm("Are you sure to remove this breed from your Favourites?");
    if (confirmAction) {
        var index = favouriteImagesArray.indexOf(this.src);
        if (index > -1) {
            favouriteImagesArray.splice(index, 1);
        }
        localStorage.setItem("favouriteImages", JSON.stringify(favouriteImagesArray))
        location.reload();
    } else {
        alert("Action canceled");
    }
}

countFavourites()

function countFavourites() {
    let imgs = document.getElementsByClassName("img-fluid");
    let imgs_length = imgs.length;
    let removeAll_btn = document.getElementById("removeAll");
    let info_text = document.getElementById("info_text");
    if (imgs_length === 0) {
        document.getElementById("image_div").innerHTML = "You have not selected any favourite Images yet."
        removeAll_btn.style.display = "none";
        info_text.style.display = "none";
    } else {
        document.getElementById("card-subtitle").innerHTML = "You currently have " + imgs_length + " favourite Images"
        removeAll_btn.style.display = "inline-block";
        info_text.style.display = "inline-block";
    }
}

removeAllFavouriteImages();

function removeAllFavouriteImages() {
    let removeAll_btn = document.getElementById("removeAll");
    removeAll_btn.addEventListener("click", function() {
        let confirmAction = confirm("Are you sure to remove all of your images from your Favourites?");
        if (confirmAction) {
            localStorage.removeItem("favouriteImages");
            location.reload();
        } else {
            alert("Action canceled");
        }
    });
}
