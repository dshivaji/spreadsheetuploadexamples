function onOpen() {
  
  var ui = SpreadsheetApp.getUi();
  
  ui.createMenu('GenerateReports').addItem('upload csv files', 'upload').addSeparator().addItem("Process", "test").addToUi();
  
}

function upload()
{
   var html = HtmlService.createHtmlOutputFromFile('Index');
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Upload CSV files dialog');
}





function parseData(filename,contents) {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var yourNewSheet = ss.getSheetByName(filename);

    if (yourNewSheet != null) {
        ss.deleteSheet(yourNewSheet);
    }
  
  ss.insertSheet(filename);
  
  // parse the data to fill values, a two dimensional array of rows
  // Assuming newlines separate rows and commas separate columns, then:
  var values = [];
  var rows = contents.split('\n');
  for(var r=0, max_r=rows.length-1; r<max_r; ++r){
    values.push( rows[r].split('\t') );  // rows must have the same number of columns
   }
  
  var sheet = ss.getSheetByName(filename);
 
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
  
}

function test()
{
  
}