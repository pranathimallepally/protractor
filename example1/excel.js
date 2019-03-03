var excelData = require('exceljs');

var excelRead = function () {

    this.testdata = function () {
        var workbook = new excelData.Workbook();
        var converted;
        var data = [];
        workbook.xlsx.readFile('testData.xlsx').then(function () {
            var worksheet = workbook.getWorksheet('Sheet3');
            var rowno = worksheet.rowCount;
            var colno = worksheet.columnCount;
            console.log(rowno, colno);
            for (i = 1; i <= rowno; i++) {
                for (j = 1; j <= colno; j++) {
                    var cellvalue = worksheet.getRow(i).getCell(2).value;
                    var converted = JSON.stringify(cellvalue);
                    data.push(converted);
                }
                console.log(data.length);
                console.log(data);
            }
            data.push(converted);
            // console.log(data.length);
            // console.log(data);
            return data;
        });

        // });
    }
}
module.exports = new excelRead();
