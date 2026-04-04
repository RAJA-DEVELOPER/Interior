const fs = require('fs');

const IDs = [
    'trends-2024', 'tricks-small-spaces', 'laurent-bts', 'natural-stone', 'color-year', 'lighting-handbook'
];

let html = fs.readFileSync('c:/Users/russe/Desktop/Interior design/blog.html', 'utf8');

IDs.forEach(id => {
    // Replace the specific blog-detail.html link for each card.
    // Each card is defined within <div class="card ...">...</div>
    // This script will do a simple successive replacement for simplicity since each post is unique in order.
    html = html.replace(/href="blog-detail.html"/, `href="post-${id}.html"`); // Title link
    html = html.replace(/href="blog-detail.html"/, `href="post-${id}.html"`); // Read link
    
    // Now wrap the image in a link as well.
    // Find the next <div class="card-img-wrap"> and replace it with <a href="..." class="card-img-wrap">
    // Using a non-global replace to only do the first occurrence each loop.
    html = html.replace(/<div class="card-img-wrap">/, `<a href="post-${id}.html" class="card-img-wrap" style="display:block">`);
    html = html.replace(/<\/div>(\s*<div class="card-body">)/, `</a>$1`);
});

fs.writeFileSync('c:/Users/russe/Desktop/Interior design/blog.html', html);
console.log("Journal updated.");
