import { NeuralNetwork } from "./ai.js"

let network = new NeuralNetwork({
    inputs: [1, 5],
    layers: 3,
})

setInterval(function() {

    network.run()
}, 100)

setInterval(function() {

    network.learn()
}, 1000)