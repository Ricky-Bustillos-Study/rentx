import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ description, name }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.specificationsRepository.create({
      description,
      name,
    });
  }
}
