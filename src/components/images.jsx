// images.jsx - Restructured with dynamic imports

const imageCategories = {
  IndustrialVisit: { start: 1, end: 15, name: "IndustrialVisit" },
  Invictus: { start: 16, end: 28, name: "Invictus" },
  Pantheon24: { start: 29, end: 53, name: "Pantheon24" },
  PhirHeraPheri: { start: 54, end: 57, name: "PhirHeraPheri" },
  SpinTheWheel: { start: 58, end: 71, name: "SpinTheWheel" },
  WebinarSession: { start: 72, end: 89, name: "WebinarSession" },
  WikiWars: { start: 90, end: 99, name: "WikiWars" },
  Luminaire25: { start: 100, end: 131, name: "Luminaire25" },
  HeraPheriPhirse: { start: 132, end: 142, name: "HeraPheriPhirse" }
};

// Function to dynamically import images
const loadImage = (imageId) => {
  return import(`../assets/gallery/${imageId}.jpg`);
};

// Generate image data with lazy loading
const generateImageData = (category) => {
  const { start, end } = imageCategories[category];
  const images = [];
  
  for (let i = start; i <= end; i++) {
    images.push({
      id: i,
      loader: () => loadImage(i),
      category: category
    });
  }
  
  return images;
};

export const IndustrialVisitImages = generateImageData('IndustrialVisit');
export const InvictusImages = generateImageData('Invictus');
export const Pantheon24Images = generateImageData('Pantheon24');
export const PhirHeraPheriImages = generateImageData('PhirHeraPheri');
export const SpinTheWheelImages = generateImageData('SpinTheWheel');
export const WebinarSession = generateImageData('WebinarSession');
export const WikiWars = generateImageData('WikiWars');
export const Luminaire25 = generateImageData('Luminaire25');
export const HeraPheriPhirse = generateImageData('HeraPheriPhirse');

export const getImagesByCategory = (category) => {
  return generateImageData(category);
};

export const getAllImages = () => {
  return Object.keys(imageCategories).reduce((acc, category) => {
    acc[category] = generateImageData(category);
    return acc;
  }, {});
};
