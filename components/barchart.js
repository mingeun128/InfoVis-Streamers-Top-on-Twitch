class BarChart {
    margin = {
        top: 50, right: 50, bottom: 10, left: 150
    }

    constructor(svg, data, width = 800, height = 300) {
        this.svg = svg;
        this.data = data;
        this.width = width;
        this.height = height;
    }

    initialize() {
        
        this.svg = d3.select(this.svg);
        this.container = this.svg.append("g");
        this.rAxis = this.svg.append("g");
        this.rScale = d3.scaleLinear();
        this.color = d3.scaleOrdinal().range(d3.schemeCategory10);

        this.xScale = d3.scaleLinear();
        this.yScale = d3.scaleLinear();

        this.svg
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom);

        this.container.attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
    }

    update(rVar) {
        this.rVar = rVar;
        const slicedata = this.data.sort((a,b)=>b[this.rVar]-a[this.rVar]).slice(0,5);

        // console.log(this.rVar);
        // console.log(typeof(this.rVar));
        // console.log(slicedata);
        // console.log(typeof(slicedata));
        //const categories = [...new Set(data.map(d => d[xVar]))]
        const counts = {};

        slicedata.forEach(c => {
            //counts[c] = data.filter(d => d[rVar] === c);
            counts[c["Channel"]] = c[this.rVar];
        })
        console.log(counts);
        
        //this.rScale.domain(d3.extent(this.slicedata, d => d[rVar])).range([0, this.width]);
        this.rScale.domain([0, d3.max(Object.values(counts))]).range([0,this.width]);
        
        Object.values(counts).forEach(c => {
            console.log(this.rScale(c));
        })

        this.container
            .selectAll('rect').data(Object.values(counts))
            .join('rect')
            .transition().duration(1500)
            .attr('rx',10)
            .attr('width',10)
            .attr('id', (d,i) => Object.keys(counts)[i])
            .attr('class', d => 'ranking')
            .attr('height',40)
            .attr('y', (d,i)=>i*50)
            .attr("fill", (d,i) => this.color(i))
            .attr('width',d => this.rScale(d));
        this.container
            .selectAll('text').data(Object.values(counts))
            .join("text")
            .transition().duration(1500)
            .attr('x', (d,i) => this.rScale(d) + 20)
            .attr('y', (d,i) => i*50+20)
            .text((d,i) => Object.keys(counts)[i] + ', ' + Object.values(counts)[i].toLocaleString());
    }
    on(eventType, handler) {
        this.handlers[eventType] = handler;
    }
}