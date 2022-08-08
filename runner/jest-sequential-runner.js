// jest設定のproject下で "runInBand": true か "maxWorkers": 1 が設定できるまでの応急処置的な方法
const TestRunner = require('jest-runner').default

class SerialRunner extends TestRunner {
  constructor(...attr) {
    super(...attr)
    this.isSerial = true
  }
}

module.exports = SerialRunner