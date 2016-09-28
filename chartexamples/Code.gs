function doGet() {
  return HtmlService
      .createTemplateFromFile('Index')
      .evaluate()
      .setTitle("Automation Metrics")
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}





function sample() {
  var obj = {};
  var tmp = [];
  var sheet  = SpreadsheetApp.openById('id need to be entered').getSheetByName("Summary-Automation");
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("B25:E"+lastRow);
  var rows = range.getNumRows();
  var cols = range.getNumColumns();
  
  for(i=2;i<=rows;i++)
  { 
     tmp.push(range.getCell(i, 1).getValue());
  }
   obj['x']=tmp; 
  var tmp = [];
  for(j=2;j<=cols;j++){
  for(i=2;i<=rows;i++)
  { 
     tmp.push(range.getCell(i, j).getValue());
  }
   obj['y'+j]=tmp; 
   var tmp = [];
  }
  
  
  var retobj ={};
  var retarray =[];
  retobj['x'] =  obj['x'];
  retobj['type']='scatter';
  var k = Object.keys(obj).length;
   var kl = Object.keys(obj);
   for (l=1;l<k;l++)
   {
      retobj['y'] = obj[kl[l]];
      retobj['name'] = range.getCell(1, l+1).getValue()
      
      Array.prototype.push.call(retarray, clone(retobj));
     
   }
  
  Logger.log(retarray);
  
  
 
  return retarray;
  
}
function sample2() {
  var obj = {};
  var tmp = [];
  var sheet  = SpreadsheetApp.openById('id').getSheetByName("Summary-Automation");
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange("B25:F"+lastRow);
  var rows = range.getNumRows();
  var cols = range.getNumColumns();
  
  for(i=2;i<=rows;i++)
  { 
     tmp.push(range.getCell(i, 1).getValue());
  }
   obj['x']=tmp; 
  var tmp = [];
  for(j=5;j<=cols;j++){
  for(i=2;i<=rows;i++)
  { 
     tmp.push(range.getCell(i, j).getValue());
  }
   obj['y']=tmp; 
   var tmp = [];
  }
  
  
  var retobj ={};
  var retarray =[];
  retobj['x'] =  obj['x'];
  retobj['y'] =  obj['y'];
  retobj['name'] =  range.getCell(1, 5).getValue();
  retobj['type']='scatter';
  
      
  Array.prototype.push.call(retarray, clone(retobj));
  
  Logger.log(retarray);
  
 
  return retarray;
  
}

function clone(obj){
  if(obj == null || typeof(obj) != 'object')
    return obj;

  var temp = new obj.constructor(); 
  for(var key in obj)
    temp[key] = clone(obj[key]);

  return temp;
} 
