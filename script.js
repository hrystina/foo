const jquery = {
  get: function(url) {
    // get cats from url
    this.data = 'dkfjdkfdjfkdfj'
    return this
  }
  done: function(callback) {
    callback(this.data)
  }
  data: null
}

let $ = jquery

$.get('').done()


let data = {
  file: 'lkdjfkdjf dkfj'
}
