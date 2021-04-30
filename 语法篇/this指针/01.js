var person={
  name:"David",
  age:12,
  getInfo:function(){
    return this.name+" is "+this.age;   //1.this 在方法中，表示的是方法所属的对象  这里this就是实例对象person;
  }
};

console.log(person.getInfo());
