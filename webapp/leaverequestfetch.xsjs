$.response.contentType = "text/plain";
var output = [];

var conn = $.db.getConnection();
var pstmt = conn.prepareStatement( "SELECT * FROM \"LEAVE1\" ORDER BY DATE_TIME DESC" );
var rs = pstmt.executeQuery();

while (rs.next()) {
    output += rs.getString(1)+" "+rs.getString(2)+" \n ";
    $.response.setBody(output);
}

rs.close();
pstmt.close();
conn.close();






