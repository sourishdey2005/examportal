/**
 * GOOGLE APPS SCRIPT FOR EXAM PORTAL
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1C3rOUcHw72dXFt30ykXNXDI_jqwVl07L8OR_G4qCwYA/edit
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any code in the editor and paste this code.
 * 4. Click "Deploy" > "New Deployment".
 * 5. Select type "Web App".
 * 6. Description: "Exam Portal Backend".
 * 7. Execute as: "Me".
 * 8. Who has access: "Anyone".
 * 9. Click "Deploy" and authorize permissions.
 * 10. Copy the "Web App URL" and add it to your environment variables as VITE_GOOGLE_SCRIPT_URL.
 */

function doPost(e) {
  var sheetId = "1C3rOUcHw72dXFt30ykXNXDI_jqwVl07L8OR_G4qCwYA";
  var ss = SpreadsheetApp.openById(sheetId);
  var sheet = ss.getSheets()[0]; // Use the first sheet
  
  try {
    var data = JSON.parse(e.postData.contents);
    
    // If sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Name", "Email", "Exam Title", "Score", "Total", "Percentage", "Timestamp", "Status"]);
    }
    
    // Append data to sheet
    sheet.appendRow([
      data.name,
      data.email,
      data.examTitle,
      data.score,
      data.total,
      data.percentage,
      data.timestamp,
      data.status
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
