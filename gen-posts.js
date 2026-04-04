const fs = require('fs');

const posts = [
    { id: 'trends-2024', title: 'The Top 10 Interior Design Trends for 2024', cat: 'Trends', date: 'March 15, 2024', read: '6 min read', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80', desc: 'From warm minimalism to sustainable luxury, discover the trends shaping how we live, work and entertain this year.' },
    { id: 'tricks-small-spaces', title: '7 Designer Tricks for Small Spaces', cat: 'Tips', date: 'March 8, 2024', read: '5 min read', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80', desc: 'Limited square footage doesn’t mean limited style. Learn how top designers make compact rooms feel luxurious.' },
    { id: 'laurent-bts', title: 'Behind the Scenes: The Laurent Residence', cat: 'Projects', date: 'Feb 22, 2024', read: '8 min read', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80', desc: 'An inside look at how we transformed a classic Parisian apartment into a modern masterpiece.' },
    { id: 'natural-stone', title: 'A Guide to Natural Stone in Interior Design', cat: 'Materials', date: 'Feb 10, 2024', read: '7 min read', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80', desc: 'From marble to travertine — everything you need to know about using natural stone in your home.' },
    { id: 'color-year', title: 'Colour of the Year: How to Use It', cat: 'Trends', date: 'Jan 28, 2024', read: '4 min read', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80', desc: 'Practical ways to incorporate the trending colour into your interiors without overwhelming your space.' },
    { id: 'lighting-handbook', title: 'The Complete Lighting Design Handbook', cat: 'Tips', date: 'Jan 15, 2024', read: '9 min read', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80', desc: 'Ambient, task, and accent — master the three layers of lighting to transform any room instantly.' }
];

const template = fs.readFileSync('c:/Users/russe/Desktop/Interior design/blog-detail.html', 'utf8');

posts.forEach(p => {
    let html = template
        .replace(/The Top 10 Interior Design Trends for 2024/g, p.title)
        .replace(/Design Trends 2024/g, p.title.substring(0, 20))
        .replace(/Trends/g, p.cat)
        .replace(/March 15, 2024/g, p.date)
        .replace(/6 min read/g, p.read)
        .replace(/Discover the interior design trendsdefining 2024/g, p.desc)
        .replace(/The world of interior design never stands still./g, p.desc)
        .replace(/https:\/\/images.unsplash.com\/photo-1618221195710-dd6b41faaea6/g, p.img);
        
    fs.writeFileSync(`c:/Users/russe/Desktop/Interior design/post-${p.id}.html`, html);
});
console.log("Blog posts generated.");
