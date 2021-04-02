import Fuse from 'fuse.js';

const search = (streets, searchTerm) => {
    const options = {
        // Search in all tags of the array
        keys: ['postcode', 'streetName', 'lastVisited']
      }
      
      const fuse = new Fuse(streets, options)
    return fuse.search(searchTerm).map(element => element.item);
}

export default search;