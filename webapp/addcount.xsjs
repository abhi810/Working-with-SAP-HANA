$.response.contentType = "text/plain";
var output;

var conn = $.db.getConnection();
var pstmt = conn.prepareStatement( "SELECT COUNT(FULL_NAME) FROM \"CONTACTS\"" );
var rs = pstmt.executeQuery();

while (rs.next()) {
    output = rs.getString(1);
    $.response.setBody(output);
}



rs.close();
pstmt.close();
conn.close();





