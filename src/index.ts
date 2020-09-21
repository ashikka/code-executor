import * as dotenv from 'dotenv';
import Docker from 'dockerode';
import Builder from './Builder';
import Runner from './Runner';

dotenv.config();

const docker = new Docker();
const builder = new Builder(docker);
const runner = new Runner(docker);
async function main() {
    await builder.build('python-runner');
    await runner.run('python-runner', 'print("hello")');
}

main();
