var chai = require('chai');
var should = chai.should();

var spinner = require('../index');



describe('Spins', function() {

  it('should spin when needed', function(done){
    spinner('{um}').should.be.equal('um');
    done();
  });

  it('should spin single element', function(done){
    spinner('{um|dois}').should.be.oneOf(['um', 'dois']);
    done();
  });

  it('should handle special chars', function(done){
    spinner('{!"#$%&/(|*?=)OPª`^ÇL`}').should.be.oneOf(['!"#$%&/(', '*?=)OPª`^ÇL`']);
    done();
  });

  it('should spin multiple elements', function(done){
    spinner('{um|dois} {tres|quatro}').should.be.oneOf(['um tres', 'dois tres', 'um quatro', 'dois quatro']);
    done();
  });

  it('should spin multiple elements inside a random text', function(done){
    spinner('qa {um|dois} do {tres|quatro} li').should.be.oneOf(['qa um do tres li', 'qa dois do tres li', 'qa um do quatro li', 'qa dois do quatro li']);
    done();
  });

   it('should spin recursively', function(done){
    spinner('{{1|2}|{3|4}}').should.be.oneOf(['1', '2', '3', '4']);
    done();
  });


});
