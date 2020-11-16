import * as d3 from 'd3'

export default class VaccineDetails{
    constructor(element){

        const svg = d3.select(element)
        
        let text = `
            <h4>Name : Inactivated Virus</h4>
            <p>
            Current Stage: RR
            <br>
            Description: These consist of viruses grown in culture and then killed as a means to 
            reduce virulence (ability to infect and cause harm) and thus prevent infection from the vaccine. 
            One benefit is they can be given to people with weakened immune systems. Examples include polio and influenza vaccines.
            <br>
            Starting Date: Jun 2020
            <br>
            Ending Date: Feb 2021
            </p>
        `

        svg.html(text)
    }

}