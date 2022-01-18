import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transport } from './entities/transport.entity';

@Injectable()
export class TransportService {
  constructor(
    @InjectRepository(Transport)
    private transportRepository: Repository<Transport>,
  ) {}

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
}
