let events=require('events')
let eventemitter=new events.EventEmitter()

//create-event
eventemitter.addListener('test',()=>{
    console.log('hello I am test event')
})
eventemitter.addListener('test1',()=>{
    console.log('hello I am test1 event')
})
eventemitter.addListener('test3',()=>{
    console.log('hello I am test3 event')
})

//fire (emmit)

eventemitter.emit('test')
console.log(eventemitter.eventNames())
eventemitter.removeAllListeners()
console.log(eventemitter.eventNames())
