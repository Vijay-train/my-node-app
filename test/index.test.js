const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);

describe('Index', () => {
  it('should return a 200 response', (done) => {
    chai.request('http://localhost:3000')
//chai.request(app)
      .get('/')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });

});

