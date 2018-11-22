import { action, extendObservable } from 'mobx';
// import Uuid from 'uuid';
// import Axios from 'axios';

class Project {
    constructor(payload){
        this.store = payload.store;
        this.id = payload.id;
        this.uid = payload.uid;
        this.createdAt = payload.createdAt;
        extendObservable(this, {
            title: payload.title,
            loading: false
        });
        if( payload.persist === true ) {
             this.persist();
        }
    }
    
    persist = async () => {
        // this.loading = true;
        // try {
        //   await Axios.put(`${API_BASE}${this.id}.json`, this.toJSON());
        // }
        // catch(e) {
        //   console.error(e.message);
        // }
        this.loading = false;
      }
    
      destroy = async () => {
        // this.loading = true;
        // try {
        //   await Axios.delete(`${API_BASE}${this.id}.json`);
        //   this.store.todos.remove(this)
        // }
        // catch(e) {
        //   console.error(e.message);
        // }
        this.loading = false;
      }
    
      toJSON = ()=>{
        return {
            id: this.id
        }
      }
}


export default class ProjectStore {

    constructor(initialState) {
        extendObservable(this, {
            projects: []
        })
        if(initialState) {
            initialState.forEach( project => this.addProject( Object.assign({}, project, {store: this}), false))
        }

    }

    fetch = async () => {
        // try {
        //     const { data } = await Axios.get(`${API_BASE}.json?sortVyValue=createdAt`);
        //     this.todos = [];
        //     for (let id in data) {
        //       const todo = data[id];
        //       this.todos.push(new Todo(todo));
        //     }
        //   }
        //   catch(e) {
        //     console.error(e.message);
        //   }
    }

    addProject = action( (project,persist) => {
        const payload = Object.assign({}, project, {
            store: this,
            id: project.id ,
            completed: false,
            persist,
            createdAt: project.createdAt || Date.now() * -1 //Allows DESC sorting when fetching the todos from Firebase
          });
        this.projects.push(new Project(payload))
    })


}