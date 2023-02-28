(() => {

  interface Client {
    name: string,
    age?: number,
    adress: Adress,
    getFullAddress(id:string):void;
  }

  interface Adress {
    id: number,
    zip: string,
    city: string
  }

  const client:Client = {
    name: "Hugo",
    age: 37,
    adress: {
      id: 125,
      zip: "KY2SUD",
      city: "Ottawa"
    },
    getFullAddress(id:string) {
      return this.adress.city
    }
  }

  const client2:Client = {
    name: "Melissa",
    age: 30,
    adress: {
      id: 1235,
      zip: "K22996",
      city: "Toronto"
    },
    getFullAddress(id:string) {
      return this.adress.city
    }
  }

})()