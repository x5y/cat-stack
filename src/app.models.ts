export const prices: { [key: string]: number } = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66,
  E: 69,
  F: 71.25
}

export interface UserData {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  cats: [
    {
      name: string,
      subscriptionActive: boolean,
      breed: string,
      pouchSize: string // changeme
    }
  ]
}

export class User {
  data: UserData;
  catsString: string;
  title: string;
  message: string;
  price: number;
  freeGift: boolean;

  constructor(data: UserData) {
    this.data = data;
    this.catsString = this.getCatsString();
    this.title = this.getTitle();
    this.message = this.getMessage();
    this.price = this.getPrice();
    this.freeGift = this.getFreeGift();
  }

  getCatsString(): string {
    const catNames = this.data.cats.filter((cat) => cat.subscriptionActive).map((cat) => cat.name);
    if (catNames.length > 1) {
      return `${catNames.slice(0, -1).join(', ')} and ${catNames.slice(-1)}`;
    }
    return catNames[0];
  }

  getTitle(): string {
    return `Your next delivery for ${this.catsString}`;
  }

  getMessage(): string {
    return `Hey ${this.data.firstName}! In two days' time, we'll be charging you for your next order for ${this.getCatsString()}'s fresh food.`;
  }

  getPrice(): number {
    const activeCats = this.data.cats.filter((cat) => cat.subscriptionActive);

    let total = 0;

    activeCats.forEach((cat) => {
      total += prices[cat.pouchSize]
    })

    return total;
  }

  getFreeGift(): boolean {
    return this.price > 120;
  }
}

export interface Delivery {
  title: string,
  message: string,
  totalPrice: number,
  freeGift: boolean,
}