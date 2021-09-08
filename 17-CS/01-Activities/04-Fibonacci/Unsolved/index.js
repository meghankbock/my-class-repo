const Benchmark = ("benchmark");
const {linear, recursive } = ('./fibonacci');

const num = 10;

const suit = new Benchmark.Suite();

suit   
    .add('linear approach', function() {
        linear(num)
    })
    .add('recursive approach', function() {
        recursive(num)
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds`));
    }).run();