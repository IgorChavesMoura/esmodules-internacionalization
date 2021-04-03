"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai;module.link('chai',{default(v){chai=v}},1);var Person;module.link('../src/person.js',{default(v){Person=v}},2);


const { describe, it } = mocha;
const { expect } = chai;




describe('Person', () => {

    it('Should return a person instance from a string', () => {

        const person = Person.generateInstanceFromString('2 Bike,Aviao,Navio 25000 2000-01-01 2021-04-01');

        const expected = {

            from: '2000-01-01',
            to: '2021-04-01',
            vehicles: ['Bike', 'Aviao', 'Navio'],
            kmTraveled: '25000',
            id: '2'

        };

        expect(person).to.be.deep.equal(expected);

    });

    it('Should format values', () => {

        const person = new Person({
            from: '2000-01-01',
            to: '2021-04-01',
            vehicles: ['Bike', 'Aviao', 'Navio'],
            kmTraveled: '25000',
            id: '2'
        });

        const result = person.formatted("pt-BR");

        const expected = {

            id: 2,
            vehicles: 'Bike, Aviao e Navio',
            kmTraveled: '25.000 km',
            from: '01 de janeiro de 2000',
            to: '01 de abril de 2021'

        };

        expect(result).to.be.deep.equal(expected);

    });

});