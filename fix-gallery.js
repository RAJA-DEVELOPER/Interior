const fs = require('fs');

const IDs = [
    'laurent', 'serene', 'atelier', 'riviere', 'dupont', 'lumiere', 'bureau', 'bistro', 'azure', 'nova', 'resort', 'bellagio'
];

let html = fs.readFileSync('c:/Users/russe/Desktop/Interior design/gallery.html', 'utf8');

IDs.forEach(id => {
    // Correctly replace the masonry item with an A tag.
    // Example: <div class="masonry-item" ...> </div>
    const regex = new RegExp('<div class="masonry-item"(.*?)>((\r\n|\n|.)*?)</div>', 'i');
    html = html.replace(regex, `<a href="project-${id}.html" class="masonry-item"$1>$2</a>`);
});

// Remove data-lightbox and data-src from the newly created A tags
html = html.replace(/ data-lightbox/g, '');
html = html.replace(/ data-src=".*?"/g, '');
html = html.replace(/ data-caption=".*?"/g, '');

fs.writeFileSync('c:/Users/russe/Desktop/Interior design/gallery.html', html);
console.log("Gallery updated.");
