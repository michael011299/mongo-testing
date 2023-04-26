/* eslint-disable no-undef */
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// If there isn't a filepath on the require then it is a node module
const { connectToDb, disconnect } = require('../db');
const { catModel } = require('../models');

const server = require('../server');

// eslint-disable-next-line no-undef
describe('API tests', function () {
  //   let server;
  this.timeout(3_000);

  beforeEach(async () => {
    await catModel.deleteMany({});
    testCat = await catModel.create({
      name: 'pablo',
      colour: 'black',
      evil: true,
    });
    testCat = JSON.parse(JSON.stringify(testCat));
  });

  before(async () => {
    try {
      await connectToDb();
      //   server = require('../server');
    } catch (err) {
      console.error(err);
    }
  });
  it('should create a cat', (done) => {
    chai
      .request(server)
      .post('/cats/create')
      .send({
        name: 'Manny',
        colour: 'black',
        evil: true,
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
          name: 'Manny',
          colour: 'black',
          evil: true,
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it('should return all cats', (done) => {
    chai
      .request(server)
      .get('/cats/getAll')
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testCat);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it('should remove cat by id', (done) => {
    chai
      .request(server)
      .delete(`/cats/remove/${testCat._id}`)
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testCat);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it('should update cat by id', (done) => {
    chai
      .request(server)
      .patch(`/cats/update/${testCat._id}`)
      .query({ name: 'ska' })
      .end((err, res) => {
        expect(err).to.be.null;
        const { name, ...rest } = testCat;
        expect(res.body).to.include(rest);
        expect(res.body.name).to.equal('ska');
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  after(async () => {
    await disconnect();
  });
});
