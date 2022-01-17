import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransportInput } from './dto/create-transport.input';
import { UpdateTransportInput } from './dto/update-transport.input';
import { Transport } from './entities/transport.entity';

@Injectable()
export class TransportService {
  constructor(
    @InjectRepository(Transport)
    private transportRepository: Repository<Transport>,
  ) {}
  create(createTransportInput: CreateTransportInput) {
    return 'This action adds a new transport';
  }

  findAll(): Promise<Transport[]> {
    return this.transportRepository.find({
      relations: ['reservation', 'fixedReservation'],
    });
  }

  findOne(id: number) {
    return this.transportRepository.findOne({
      relations: ['reservation', 'fixedReservation'],
      where: { id: id },
    });
  }

  update(id: number, updateTransportInput: UpdateTransportInput) {
    return `This action updates a #${id} transport`;
  }

  remove(id: number) {
    return `This action removes a #${id} transport`;
  }
}
