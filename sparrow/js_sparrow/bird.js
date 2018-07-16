// COMPONENTS
class Bird{
  // create object
  constructor(){
  this.top = Math.round(500*Math.random());
  this.left = Math.round(500*Math.random());
  this.color = 'red';
  }
  // renders to html
  render(){
            this.div =  document.createElement('div');
            this.div.setAttribute('class', `bird ${this.color}`);
            document.body.firstElementChild.appendChild(this.div);
  }
}
var b = new Bird();
b.render();
при помоши position left top right добиться того чтобы птица двигалась
