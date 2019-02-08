$.response.contentType = "text/plain";
var output = [];

var conn = $.db.getConnection();
var pstmt1 = conn.prepareStatement( "SELECT * FROM \"CONTACTS\" ORDER BY FULL_NAME DESC" );
var rs1 = pstmt1.executeQuery();
var pstmt = conn.prepareStatement( "SELECT BINTOSTR(HEXTOBIN('0D0A')) FROM \"TEST\"" );
var rs = pstmt.executeQuery();

while (rs1.next()) {
    output += rs1.getString(1)+ "   " +rs1.getString(2)+ "   " + rs1.getString(3)+ "   " + rs1.getString(4) + "   " + rs1.getString(5) +" \n ";
    $.response.setBody(output);
}

// else {
    
  //  $.response.setBody( "Failed to retrieve data" );
   // $.response.status =  $.net.http.INTERNAL_SERVER_ERROR;
//}

rs.close();
pstmt.close();
conn.close();





