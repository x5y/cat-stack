import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { User, UserData, Delivery } from './app.models';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class CommsService {
  getNextDelivery(id: string): string {
    const user: User | undefined = getUser(id);

    if (user) {
      return JSON.stringify(generateDeliveryPayload(user));
    }
    throw new NotFoundException({
      status: HttpStatus.NOT_FOUND,
      error: 'User not found',
    });
  }
}

const getUser = (id: string): User | undefined => {
  const dataArray: [UserData] = JSON.parse(readFileSync(join(process.cwd(), './data.json')).toString());

  const data = dataArray.find((user) => user.id === id);

  if (data) {
    return new User(data);
  }
}

const generateDeliveryPayload = (user: User): Delivery => {
  return {
    title: user.getTitle(),
    message: user.getMessage(),
    totalPrice: user.getPrice(),
    freeGift: user.getFreeGift(),
  }
}
