const fs = require('fs');
const files = fs.readdirSync('c:/Users/russe/Desktop/Interior design/').filter(f => f.startsWith('post-') && f.endsWith('.html'));

const mapping = {
    '7 Designer Tricks for Small Spaces': 'post-tricks-small-spaces.html',
    'A Guide to Natural Stone': 'post-natural-stone.html',
    'Colour of the Year: How to Use It': 'post-color-year.html'
};

files.forEach(file => {
    let html = fs.readFileSync('c:/Users/russe/Desktop/Interior design/' + file, 'utf8');
    
    // Fix sidebar links
    html = html.replace(/<a href="blog-detail.html" style="display:flex;gap:14px;align-items:center">/g, (match, offset, string) => {
        // Try to identify which one based on the next few characters (the title)
        // This is a bit hacky but works for this specific template.
        for (const [title, url] of Object.entries(mapping)) {
            if (string.includes(title, offset)) return `<a href="${url}" style="display:flex;gap:14px;align-items:center">`;
        }
        return match;
    });
    
    fs.writeFileSync('c:/Users/russe/Desktop/Interior design/' + file, html);
});
console.log("Sidebar links fixed.");
