import { Service } from 'typedi';
import { ICRUD } from '../model/infrastructure/crud';
import {IGeneratorExampleSvcDataModel} from '../model/data/generator-example-svc-data.model';
import { createLogic } from './create.logic';
import { updateLogic } from './update.logic';
import { deleteLogic } from './delete.logic';
import { readLogic } from './read.logic';
import { readOneLogic } from './read-one.logic';

@Service('generator-example-svc.logic')
export class GeneratorExampleSvcLogic implements ICRUD<IGeneratorExampleSvcDataModel> {

    public create(model: IGeneratorExampleSvcDataModel): Promise<{ result: IGeneratorExampleSvcDataModel }> {

        return createLogic(model);
    }

    public read(size: number, prev?: string, next?: string): Promise<{ result: IGeneratorExampleSvcDataModel[] }> {

        return readLogic(size, prev, next);
    }

    public readOne(id: string): Promise<{ result: IGeneratorExampleSvcDataModel }> {

        return readOneLogic(id);
    }

    public update(
        id: string,
        model: IGeneratorExampleSvcDataModel,
    ): Promise<{ result: IGeneratorExampleSvcDataModel }> {

        return updateLogic(id, model);
    }

    public delete(modelId: string): Promise<{ result: IGeneratorExampleSvcDataModel }> {

        return deleteLogic(modelId);
    }
}
