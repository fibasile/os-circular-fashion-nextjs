import Project from './project'


const stores= {
    __projectStore__: initialState => new Project(initialState)
}


export default (store, initialState) => {
    const storeConstruct = stores[store];
    if (typeof window !== 'undefined') {
      if (!window[store]) {
        window[store] = storeConstruct(initialState);
      }
      return window[store];
    } else {
      return storeConstruct(initialState);
    }
  };