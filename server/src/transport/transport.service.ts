import { Injectable } from '@nestjs/common';
import { CreateTransportInput } from './dto/create-transport.input';
import { UpdateTransportInput } from './dto/update-transport.input';

@Injectable()
export class TransportService {
  create(createTransportInput: CreateTransportInput) {
    return 'This action adds a new transport';
  }

  findAll() {
    return `This action returns all transport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transport`;
  }

  update(id: number, updateTransportInput: UpdateTransportInput) {
    return `This action updates a #${id} transport`;
  }

  remove(id: number) {
    return `This action removes a #${id} transport`;
  }
}
