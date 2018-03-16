import { Container } from 'typedi/Container';
import {IGeneratorExampleSvcDataModel} from '../model/data/generator-example-svc-data.model';
import { IAbstractDbFactory } from '../model/infrastructure/db';

export function readLogic(
    size: number,
    prev?: string,
    next?: string,
): Promise<{ result: IGeneratorExampleSvcDataModel[] }> {

    const mongo: IAbstractDbFactory<IGeneratorExampleSvcDataModel> = Container.get('mongo.concreate.factory');

    const result = mongo.find('example', {}, size, prev, next);

    return result;
}
