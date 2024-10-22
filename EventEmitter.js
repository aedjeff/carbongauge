class EventEmitter {
    eventListeners = {}

    addListener(event, act) {
        this.eventListeners[event] = this.eventListeners[event] || [];
        this.eventListeners[event].push(act);
        return this;
    }
    removeListener(event, act) {
        if(!this.eventListeners[event]) return this;
        for(let i = 1; i <= this.eventListeners[event].length; i++) {
            if(this.eventListeners[event][i] === act) {
                this.eventListeners[event].splice(i, 1);
                break;
            }
        }
        return this;
    }
    emit(event, ...args) {
        if (!this.eventListeners[event]) return false;
        this.eventListeners[event].forEach((f) => {
          f(...args);
        });
        return true;
    }
    
    
}