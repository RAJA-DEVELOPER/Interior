const fs = require('fs');

const projects = [
    { id: 'laurent', title: 'The Laurent Residence', cat: 'Residential', loc: 'Paris', desc: 'A luxury Parisian penthouse transformed with timeless elegance.', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80', area: '280 m²', duration: '5 months' },
    { id: 'serene', title: 'Villa Serene', cat: 'Villa', loc: 'Monaco', desc: 'A tranquil sanctuary perched above the Mediterranean.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80', area: '450 m²', duration: '8 months' },
    { id: 'atelier', title: 'Atelier HQ', cat: 'Commercial', loc: 'Lyon', desc: 'A modern, industrial-inspired office space for leading creatives.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80', area: '1200 m²', duration: '12 months' },
    { id: 'riviere', title: 'Hôtel Rivière', cat: 'Hospitality', loc: 'Cannes', desc: 'Boutique luxury hotel design on the French Riviera.', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80', area: '3400 m²', duration: '24 months' },
    { id: 'dupont', title: 'Maison Dupont', cat: 'Residential', loc: 'Bordeaux', desc: 'A family estate blending traditional stone with modern glass.', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80', area: '320 m²', duration: '6 months' },
    { id: 'lumiere', title: 'Villa Lumière', cat: 'Villa', loc: 'St. Tropez', desc: 'Light-filled summer residence focusing on indoor-outdoor living.', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80', area: '580 m²', duration: '10 months' },
    { id: 'bureau', title: 'Bureau Moderne', cat: 'Commercial', loc: 'Paris', desc: 'High-end legal firm offices with refined materials and acoustics.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80', area: '400 m²', duration: '4 months' },
    { id: 'bistro', title: 'Le Petit Bistro', cat: 'Hospitality', loc: 'Nice', desc: 'An intimate dining experience with rich woods and warm lighting.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80', area: '180 m²', duration: '3 months' },
    { id: 'azure', title: 'Penthouse Azure', cat: 'Residential', loc: 'Monte Carlo', desc: 'Stunning cliffside penthouse with panoramic sea views.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80', area: '210 m²', duration: '4 months' },
    { id: 'nova', title: 'Nova Agency', cat: 'Commercial', loc: 'Berlin', desc: 'Playful and dynamic workspace for a tech marketing agency.', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&q=80', area: '850 m²', duration: '7 months' },
    { id: 'resort', title: 'The Grand Resort', cat: 'Hospitality', loc: 'Maldives', desc: 'Ultra-luxury overwater villa concept for a private island.', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80', area: '15,000 m²', duration: '36 months' },
    { id: 'bellagio', title: 'Villa Bellagio', cat: 'Villa', loc: 'Lake Como', desc: 'Restoration of a historic 19th-century villa on the lakefront.', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80', area: '720 m²', duration: '18 months' }
];

const template = fs.readFileSync('c:/Users/russe/Desktop/Interior design/project-detail.html', 'utf8');

projects.forEach(p => {
    let html = template
        .replace(/The Laurent Residence/g, p.title)
        .replace(/Laurent Residence/g, p.title)
        .replace(/Paris, 7th Arr./g, p.loc)
        .replace(/280 m²/g, p.area)
        .replace(/5 months/g, p.duration)
        .replace(/The Laurent family/g, `The ${p.id} project`)
        .replace(/Residential · Paris/g, `${p.cat} · ${p.loc}`)
        .replace(/haussmann heritage/g, 'unique character')
        .replace(/7th arrondissement/g, p.loc)
        .replace(/A 280 m² Parisian penthouse/g, p.desc)
        .replace(/Explore the Laurent Residence/g, `Explore ${p.title}`)
        .replace(/https:\/\/images.unsplash.com\/photo-1600210492486-724fe5c67fb0/g, p.img);
        
    fs.writeFileSync(`c:/Users/russe/Desktop/Interior design/project-${p.id}.html`, html);
});
console.log("Projects generated.");
