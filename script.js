const data = [
    { url: "https://www.floridamemory.com/items/show/97946", img: "./files/DM0597.JPG" },
    { url: "https://www.floridamemory.com/items/show/97182", img: "./files/DL0893.JPG" },
    { url: "https://www.floridamemory.com/items/show/328322", img: "./files/K011169.JPG" },
    { url: "https://www.floridamemory.com/items/show/95022", img: "./files/DC678652.jpg" },
]

const makeQArt = (link, img, id, filter_ = "color", version_ = 10, size_ = 350, fill_ = "scale_to_fit") => {
    new QArt({
        value: link,
        imagePath: img,
        filter: filter_,
        version: version_,
        size: size_,
        fillType: fill_,
    }).make(document.getElementById(id));
}




// makeQR();
// makeQArt("https://www.floridamemory.com/items/show/97946", "./files/DM0597.JPG", "photo-1");
// makeQArt("https://www.floridamemory.com/items/show/97946", "./files/DM0597.JPG", "photo-2");



const mainContainer = document.getElementById('main-container')

for (let i = 0; i <= data.length; i++) {
    const newPhotoItem = document.createElement('div')
    newPhotoItem.classList.add('photo-item')
    newPhotoItem.innerHTML = `
    <div class="original-photo"><img src=${data[i].img}></div>
    <div class="qr-photo" id=photo-${i + 1}></div>
    `
    mainContainer.append(newPhotoItem)
    makeQArt(data[i].url, data[i].img, `photo-${i + 1}`);

}


