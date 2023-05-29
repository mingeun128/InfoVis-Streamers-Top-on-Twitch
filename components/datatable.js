class DataTable {
    constructor(id) {
        this.id = id;
    }

    update(data, columns, rVar) {
        let table = d3.select(this.id);
        this.rVar = rVar;
        const slicedata = data.sort((a,b)=>b[this.rVar]-a[this.rVar]).slice(0,5);

        let rows = table
            .selectAll("tr")
            .data(slicedata)
            .join("tr");

        rows.selectAll("td")
            .data(d => columns.map(c => d[c]))
            .join("td")
            .text(d => d)
    }
}
