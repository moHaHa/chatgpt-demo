class EventEmitter {
  private events: Record<string, Function[]> = {}

  public on(event: string, listener: Function) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(listener)
  }

  public emit(event: string, ...args: any[]) {
    if (!this.events[event]) {
      return
    }
    this.events[event].forEach((listener) => listener(...args))
  }
}

export  const eventEmitter = new EventEmitter()
