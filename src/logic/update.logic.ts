import { Container } from 'typedi';
import {IGeneratorExampleSvcDataModel} from '../model/data/generator-example-svc-data.model';
import { IAbstractDbFactory } from '../model/infrastructure/db';

export function updateLogic(
    id: string,
    model: IGeneratorExampleSvcDataModel,
): Promise<{ result: IGeneratorExampleSvcDataModel }> {

    const mongo: IAbstractDbFactory<IGeneratorExampleSvcDataModel> = Container.get('mongo.concreate.factory');

    const result = mongo.update('example', id, model);

    return result;
}
