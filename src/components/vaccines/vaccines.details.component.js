import * as d3 from 'd3'

export default class VaccineDetails{
    constructor(element, item){

        d3.select(element).select('div').remove()
        const svg = d3.select(element).append('div')
        let text = `
        <p>
        <b>Name</b> : ${item.name} <br>
        <b>Stage </b>: ${item.stage} <br>
        <b>Description</b> : ${item.description}<br>
        <b>On Trial</b> : From ${item.trial} to ${item.testing} <br>
        <b>On Testing </b>: From ${item.testing} to ${item.production} <br>
        <b>On Production</b>: From ${item.production} tp ${item.ending} </p>
         `
        svg.html(text)
    }

}
