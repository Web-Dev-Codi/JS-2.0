class App {
  constructor() {
    this.serverName = 'localhost';
    // Place eventListeners in the constructer since ít fires off on page load
    //                                                                            binding this since it this pertains to this class
    document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    // clg here so we can use outside of class
    console.log(this.serverName);
  }
}

const app = new App();

// No need to clg sinmce we do this in the class
app.getServerName();
