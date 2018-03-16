import { IGeneratorExampleSvcDataModel } from '../data/generator-example-svc-data.model';

export interface IGeneratorExampleSvcRepository {
    serviceMethod(id: string): Promise<{ result: IGeneratorExampleSvcDataModel }>;
}
