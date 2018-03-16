import * as Fastify from 'fastify';
import { Container } from 'typedi';
import * as validator from '../validator';
import { ICRUD } from '../model/infrastructure/crud';
import {IGeneratorExampleSvcDataModel} from '../model/data/generator-example-svc-data.model';
import * as error from 'http-errors';

export interface IRouterInterface {

    registerRoutes(server: Fastify.FastifyInstance<{}, {}, {}>): void;

}

export class RouterRoute implements IRouterInterface {

    public registerRoutes(server: Fastify.FastifyInstance<{}, {}, {}>) {
        this.read(server);
        this.craete(server);
        this.update(server);
        this.delete(server);
        this.readOne(server);
    }

    private craete(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.post('/create', validator.GENERATOR_EXAMPLE_SVC_CREATE_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<IGeneratorExampleSvcDataModel>>('generator-example-svc.logic');

            logic.create(request.body)
                .then((result) => {
                    reply.send(result);
                })
                .catch((err: any) => {
                    reply.send(new error.InternalServerError());
                });
        });
    }

    private read(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.get('/read/:size', validator.GENERATOR_EXAMPLE_SVC_READ_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<IGeneratorExampleSvcDataModel>>('generator-example-svc.logic');

            logic.read(parseInt(request.params.size, 10), request.query.next, request.query.previous)
                .then((result) => {
                    reply.send(result);
                })
                .catch((err: any) => {
                    reply.send(new error.InternalServerError());
                });
        });
    }

    private readOne(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.get('/entity/:id', validator.GENERATOR_EXAMPLE_SVC_ID_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<IGeneratorExampleSvcDataModel>>('generator-example-svc.logic');

            logic.readOne(request.params.id)
                .then((result) => {
                    reply.send(result);
                })
                .catch((err: any) => {
                    reply.send(new error.InternalServerError());
                });
        });
    }

    private update(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.put('/update', validator.GENERATOR_EXAMPLE_SVC_UPDATE_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<IGeneratorExampleSvcDataModel>>('generator-example-svc.logic');

            logic.update(request.body.id, { example: request.body.example })
                .then((result) => {
                    reply.send(result);
                })
                .catch((err: any) => {
                    reply.send(new error.InternalServerError());
                });
        });
    }

    private delete(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.delete('/delete/:id', validator.GENERATOR_EXAMPLE_SVC_ID_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<IGeneratorExampleSvcDataModel>>('generator-example-svc.logic');

            logic.delete(request.params.id)
                .then((result) => {
                    reply.send(result);
                })
                .catch((err: any) => {
                    reply.send(new error.InternalServerError());
                });
        });
    }
}
