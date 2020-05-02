const person = {
  name: null,
  setName: function (newName) {
    this.name = newName
  }
}

describe('person', () => {
  beforeEach(()=>{
    person.setName('Alex')
  })
  it('should have name', () => {
    expect(person.name).toBeTruthy()
  })
  it('the name is Alex', () => {
    expect(person.name).toBe('Alex')
  })
})