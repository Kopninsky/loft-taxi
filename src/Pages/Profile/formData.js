export const configure = {
  form: {
    onSubmit: function(e){
      console.log(e.target)
    }
  },
  inputs: [
    {
      id : 1,
      type: 'text',
      label: 'test1',
      required: true,
    },
    {
      id : 2,
      type: 'password',
      label: 'test2',
      required: false,
    }
  ],
  buttons: [
    {
      id : 1,
      type: 'submit',
      text: 'Войти'
    }
  ]
}