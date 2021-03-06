import { Specification } from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }
}
