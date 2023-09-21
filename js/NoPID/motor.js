class Motor {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.w = 30
    this.h = 10
    this.p = 0
    this.counter = 15313
  }

  analogWrite(value) {
    if (value <= -200) this.p = -200
    else if (value >= 200) this.p = 200
    else this.p = value
  }

  state() {
    const { x, y, w, h, counter, p } = this
    const v = this.#vel()
    return { x, y, w, h, counter, v, p }
  }

  setCounter(v) {
    this.counter = v
  }

  getCounter() {
    return this.counter
  }

  #vel() {
    const dir = this.p > 0 ? 1 : -1
    const v = (this.p * this.p) / 10000
    return dir * v
  }

  update() {
    const v = this.#vel()
    this.counter += v * 16
    this.x += v
  }
}
