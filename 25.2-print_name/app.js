let obj = {
  name: "Shira",
  printName: function () {
    console.log(this.name);
  },
  printAfterDelay: function () {
    setTimeout(this.printName.bind(this), 1000);
  },
};

obj.printName();
obj.printAfterDelay();
