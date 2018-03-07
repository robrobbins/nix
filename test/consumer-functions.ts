import { Consumer } from '../src/functions'

describe('Unary and Typed Variadic Consumers', () => {
  // some external factoid that's available to the consumer
  const secret = 'this-is-some-secret-stuff'
  // maybe you defined a payload of some sort
  interface Payload {
    uid: string;
    [key: string]: any
  }
  // some external thingie that a consumer function may interact with, maybe it expects a Payload
  const externalApi = {
    callMe: function(p: Payload): any {},
  }

  it('consumes 1, interacts with thingie', () => {
    const addSecret:Consumer<Payload> = data => {
      externalApi.callMe({ ...data, secretKey: secret })
    }

    const callSpy = spyOn(externalApi, 'callMe')

    addSecret({ uid: '123-45', foo: 'bar' })

    expect(callSpy).toHaveBeenCalled()
    const args = callSpy.calls.mostRecent().args
    expect(args[0].uid).toBe('123-45')
    expect(args[0].secretKey).toBe(secret)
  })
})
